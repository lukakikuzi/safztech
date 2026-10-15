import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

// The admin signs in once with their Supabase Auth email and password. After that a signed cookie
// (HMAC with the service role key, so no extra secret to manage) keeps them signed in for a week.

const COOKIE = "safz_admin";
const WEEK = 60 * 60 * 24 * 7;

const secret = () => process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const sign = (payload: string) => createHmac("sha256", secret()).update(payload).digest("base64url");

/** Emails allowed into the admin panel (ADMIN_EMAILS, comma separated). */
export const adminEmails = () =>
  (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

export async function startSession(email: string) {
  const payload = Buffer.from(JSON.stringify({ email, exp: Date.now() + WEEK * 1000 })).toString("base64url");
  (await cookies()).set(COOKIE, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: WEEK,
  });
}

export async function endSession() {
  (await cookies()).delete(COOKIE);
}

/** The signed-in admin's email, or null. */
export async function getAdmin(): Promise<string | null> {
  if (!secret()) return null;
  const raw = (await cookies()).get(COOKIE)?.value;
  const [payload, sig] = raw?.split(".") ?? [];
  if (!payload || !sig) return null;
  const expected = sign(payload);
  if (sig.length !== expected.length || !timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  try {
    const { email, exp } = JSON.parse(Buffer.from(payload, "base64url").toString()) as { email: string; exp: number };
    if (exp < Date.now() || !adminEmails().includes(email)) return null;
    return email;
  } catch {
    return null;
  }
}
