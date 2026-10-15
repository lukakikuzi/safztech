import { NextResponse, type NextRequest } from "next/server";
import { normaliseUrl, parsePageSpeed, type Strategy } from "@/lib/pagespeed";

// Proxies Google's PageSpeed Insights API so the API key stays on the server.
// PAGESPEED_API_KEY comes from the environment (Google Cloud console →
// enable "PageSpeed Insights API" → create an API key).
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const PSI = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

// Best-effort limit per visitor (in-memory, per server instance) to protect
// the daily API quota.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 6;
const hits = new Map<string, { count: number; reset: number }>();

function limited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    if (hits.size > 5000) for (const [k, v] of hits) if (v.reset < now) hits.delete(k);
    return false;
  }
  entry.count++;
  return entry.count > MAX_PER_WINDOW;
}

const fail = (error: string, status: number) => NextResponse.json({ error }, { status });

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return fail("You've run a lot of checks. Please try again in a few minutes.", 429);

  const url = normaliseUrl(req.nextUrl.searchParams.get("url") ?? "");
  if (!url) return fail("Please enter a valid website address, like yourstore.com.", 400);
  const strategy: Strategy = req.nextUrl.searchParams.get("strategy") === "desktop" ? "desktop" : "mobile";

  const key = process.env.PAGESPEED_API_KEY;
  if (!key) {
    console.error("PAGESPEED_API_KEY is not set");
    return fail("The website check is temporarily unavailable. Please try again later.", 503);
  }

  const api = new URL(PSI);
  api.searchParams.set("url", url);
  api.searchParams.set("strategy", strategy);
  api.searchParams.set("locale", "en");
  api.searchParams.set("key", key);
  // Speed only: asking for fewer categories also makes the check quicker.
  api.searchParams.append("category", "performance");

  let res: Response;
  try {
    res = await fetch(api, { signal: AbortSignal.timeout(55_000), cache: "no-store" });
  } catch {
    return fail("The check took too long. Please try again.", 504);
  }

  const body = await res.json().catch(() => null);
  if (!res.ok) {
    const message: string = body?.error?.message ?? "";
    console.error("PageSpeed API error", res.status, message.slice(0, 300));
    if (res.status === 429) return fail("The website check is busy right now. Please try again in a few minutes.", 503);
    if (/FAILED_DOCUMENT_REQUEST|ERRORED_DOCUMENT_REQUEST|DNS_FAILURE|NO_FCP|Lighthouse returned error/i.test(message))
      return fail("We couldn't load that page. Check the address and that the site is publicly reachable.", 422);
    return fail("We couldn't analyse that site right now. Please try again.", 502);
  }

  return NextResponse.json(parsePageSpeed(body, url, strategy), {
    // Same site + device is cached at the edge for a while, which also saves API quota.
    headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=600" },
  });
}
