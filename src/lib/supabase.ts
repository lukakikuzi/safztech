// Tiny Supabase client over its REST API, so the project needs no extra package.
// Server only: it uses the service role key, which must never reach the browser.

export type LeadType = "contact" | "free_audit" | "referral";
export type LeadStatus = "new" | "contacted" | "won" | "lost";

export interface Lead {
  id: string;
  created_at: string;
  type: LeadType;
  name: string;
  email: string;
  phone: string | null;
  website: string | null;
  service: string | null;
  message: string | null;
  audit: AuditSnapshot | null;
  status: LeadStatus;
  notes: string | null;
}

export interface AuditSnapshot {
  url?: string;
  mobile?: AuditDevice;
  desktop?: AuditDevice;
}
export interface AuditDevice {
  performance: number | null;
  metrics: { title: string; value: string }[];
  issues: string[];
}

const base = () => process.env.SUPABASE_URL?.replace(/\/+$/, "");
const key = () => process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseReady = () => !!(base() && key());

interface Options {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: unknown;
  /** PostgREST `Prefer` header, e.g. "return=minimal" or "count=exact". */
  prefer?: string;
}

/** Calls PostgREST, e.g. `rest("leads?select=*&order=created_at.desc")`. */
export async function rest<T = unknown>(path: string, { method = "GET", body, prefer }: Options = {}) {
  const res = await fetch(`${base()}/rest/v1/${path}`, {
    method,
    headers: {
      apikey: key()!,
      Authorization: `Bearer ${key()}`,
      "Content-Type": "application/json",
      ...(prefer ? { Prefer: prefer } : {}),
    },
    body: body === undefined ? undefined : JSON.stringify(body),
    cache: "no-store",
  });
  const text = await res.text();
  let data: unknown = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  return { ok: res.ok, status: res.status, data: data as T };
}

/** Checks an email and password against Supabase Auth. Returns the verified email, or null. */
export async function verifyPassword(email: string, password: string): Promise<string | null> {
  const res = await fetch(`${base()}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: { apikey: key()!, "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = (await res.json().catch(() => null)) as { user?: { email?: string } } | null;
  return data?.user?.email?.toLowerCase() ?? null;
}
