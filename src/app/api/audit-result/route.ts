import { NextRequest, NextResponse } from "next/server";

import { rest, supabaseReady, type AuditDevice, type AuditSnapshot } from "@/lib/supabase";

// The free-audit report finishes after the visitor has already sent their details, so the page posts
// the result here afterwards and it is attached to that lead. Only a free-audit lead from the last
// two hours can be filled in, once per device.
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const str = (v: unknown, max: number) => (typeof v === "string" ? v.slice(0, max) : "");

function device(raw: unknown): AuditDevice | undefined {
  const d = raw as Partial<AuditDevice> | undefined;
  if (!d || typeof d !== "object") return undefined;
  const perf = typeof d.performance === "number" && d.performance >= 0 && d.performance <= 100 ? Math.round(d.performance) : null;
  return {
    performance: perf,
    metrics: Array.isArray(d.metrics) ? d.metrics.slice(0, 8).map((m) => ({ title: str(m?.title, 80), value: str(m?.value, 40) })) : [],
    issues: Array.isArray(d.issues) ? d.issues.slice(0, 10).map((i) => str(i, 200)) : [],
  };
}

export async function POST(req: NextRequest) {
  if (!supabaseReady()) return NextResponse.json({ ok: false });
  const body = await req.json().catch(() => null);
  if (!body || typeof body.id !== "string" || !UUID.test(body.id)) return NextResponse.json({ ok: false }, { status: 400 });

  const since = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
  const found = await rest<{ audit: AuditSnapshot | null }[]>(
    `leads?id=eq.${body.id}&type=eq.free_audit&created_at=gt.${encodeURIComponent(since)}&select=audit`,
  );
  if (!found.ok || !found.data?.length) return NextResponse.json({ ok: false }, { status: 404 });

  const audit: AuditSnapshot = { ...(found.data[0].audit ?? {}) };
  audit.url = str(body.url, 500) || audit.url;
  for (const mode of ["mobile", "desktop"] as const) {
    if (!audit[mode]) audit[mode] = device(body[mode]);
  }

  const res = await rest(`leads?id=eq.${body.id}`, { method: "PATCH", prefer: "return=minimal", body: { audit } });
  return NextResponse.json({ ok: res.ok });
}
