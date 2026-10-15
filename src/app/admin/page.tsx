import Link from "next/link";
import { redirect } from "next/navigation";
import { Search } from "lucide-react";

import { logout } from "@/app/admin/actions";
import { GLASS, STATUS_COLOR, STATUS_LABEL, TYPE_COLOR, TYPE_LABEL, ago, dayKey, fmtDate } from "@/app/admin/ui";
import { getAdmin } from "@/lib/admin-session";
import { rest, supabaseReady, type Lead, type LeadStatus, type LeadType } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const TYPES = Object.keys(TYPE_LABEL) as LeadType[];
const STATUSES = Object.keys(STATUS_LABEL) as LeadStatus[];
const DAYS = 14;

type Params = { type?: string; status?: string; q?: string };

function href(p: Params) {
  const q = new URLSearchParams();
  if (p.type) q.set("type", p.type);
  if (p.status) q.set("status", p.status);
  if (p.q) q.set("q", p.q);
  const s = q.toString();
  return s ? `/admin?${s}` : "/admin";
}

function Badge({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold"
      style={{ background: `${color}22`, color }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {children}
    </span>
  );
}

export default async function AdminDashboard({ searchParams }: { searchParams: Promise<Params> }) {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/login");

  const params = await searchParams;
  const type = TYPES.includes(params.type as LeadType) ? (params.type as LeadType) : undefined;
  const status = STATUSES.includes(params.status as LeadStatus) ? (params.status as LeadStatus) : undefined;
  const q = (params.q ?? "").trim().slice(0, 80);

  const res = supabaseReady() ? await rest<Lead[]>("leads?select=*&order=created_at.desc&limit=2000") : null;
  const all = res?.ok && Array.isArray(res.data) ? res.data : [];

  // ---- numbers for the cards and the chart (always over everything) ----
  const weekAgo = Date.now() - 7 * 86400_000;
  const todayKey = dayKey(new Date());
  const count = (t: LeadType) => all.filter((l) => l.type === t).length;
  const days = Array.from({ length: DAYS }, (_, i) => {
    const d = new Date(Date.now() - (DAYS - 1 - i) * 86400_000);
    return { key: dayKey(d), label: new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Karachi", day: "numeric", month: "short" }).format(d) };
  });
  const perDay = days.map((d) => {
    const row = Object.fromEntries(TYPES.map((t) => [t, 0])) as Record<LeadType, number>;
    for (const l of all) if (dayKey(l.created_at) === d.key) row[l.type]++;
    return { ...d, row, total: TYPES.reduce((n, t) => n + row[t], 0) };
  });
  const max = Math.max(1, ...perDay.map((d) => d.total));

  // ---- the filtered list ----
  const needle = q.toLowerCase();
  const rows = all.filter(
    (l) =>
      (!type || l.type === type) &&
      (!status || l.status === status) &&
      (!needle || [l.name, l.email, l.phone, l.website, l.service, l.message].some((v) => v?.toLowerCase().includes(needle))),
  );

  const cards = [
    { label: "Total leads", value: all.length, sub: `${all.filter((l) => dayKey(l.created_at) === todayKey).length} today` },
    { label: "New (not contacted)", value: all.filter((l) => l.status === "new").length, sub: "waiting for a reply", color: STATUS_COLOR.new },
    { label: "Last 7 days", value: all.filter((l) => new Date(l.created_at).getTime() > weekAgo).length, sub: "all forms" },
    { label: "Won", value: all.filter((l) => l.status === "won").length, sub: "became clients", color: STATUS_COLOR.won },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-poppins text-2xl font-extrabold text-heading">
            SAFZ<span className="text-primary">TECH</span> <span className="font-medium text-paragraph">Leads</span>
          </p>
          <p className="text-sm text-paragraph">Signed in as {admin}. Times are in Pakistan time.</p>
        </div>
        <form action={logout}>
          <button className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-heading transition-colors hover:border-primary hover:text-primary">
            Sign out
          </button>
        </form>
      </header>

      {!supabaseReady() && (
        <p className={`${GLASS} mb-6 p-5 text-sm text-destructive`}>
          Supabase is not connected. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.
        </p>
      )}
      {res && !res.ok && (
        <p className={`${GLASS} mb-6 p-5 text-sm text-destructive`}>
          Could not load leads (HTTP {res.status}). Did you run supabase/schema.sql in the SQL editor?
        </p>
      )}

      {/* Numbers */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {cards.map((c) => (
          <div key={c.label} className={`${GLASS} p-5`}>
            <p className="text-xs uppercase tracking-wider text-paragraph">{c.label}</p>
            <p className="mt-2 font-poppins text-4xl font-bold" style={{ color: c.color ?? "#fff" }}>
              {c.value}
            </p>
            <p className="mt-1 text-xs text-paragraph">{c.sub}</p>
          </div>
        ))}
      </div>

      {/* Chart + per form */}
      <div className="mt-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
        <div className={`${GLASS} p-5 sm:p-6`}>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-poppins text-lg font-semibold text-heading">Leads per day (last {DAYS} days)</h2>
            <div className="flex flex-wrap gap-3 text-xs text-paragraph">
              {TYPES.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ background: TYPE_COLOR[t] }} />
                  {TYPE_LABEL[t]}
                </span>
              ))}
            </div>
          </div>
          <div className="flex h-44 items-end gap-1.5 sm:gap-2" role="img" aria-label="Leads per day, stacked by form">
            {perDay.map((d) => (
              <div key={d.key} className="group relative flex h-full flex-1 flex-col justify-end" title={`${d.label}: ${d.total}`}>
                <span className="mb-1 text-center text-[10px] text-paragraph opacity-0 transition-opacity group-hover:opacity-100">{d.total}</span>
                <div className="flex flex-col-reverse overflow-hidden rounded-md" style={{ height: `${(d.total / max) * 85}%` }}>
                  {TYPES.map((t) => (
                    <div key={t} style={{ flexGrow: d.row[t], background: TYPE_COLOR[t] }} />
                  ))}
                </div>
                {d.total === 0 && <div className="h-0.5 rounded bg-white/10" />}
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-1.5 sm:gap-2">
            {perDay.map((d, i) => (
              <span key={d.key} className="flex-1 text-center text-[9px] text-paragraph sm:text-[10px]">
                {i % 2 === 0 || DAYS < 8 ? d.label.replace(" ", " ") : ""}
              </span>
            ))}
          </div>
        </div>

        <div className={`${GLASS} p-5 sm:p-6`}>
          <h2 className="mb-4 font-poppins text-lg font-semibold text-heading">By form</h2>
          <ul className="space-y-4">
            {TYPES.map((t) => (
              <li key={t}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="text-foreground">{TYPE_LABEL[t]}</span>
                  <span className="font-semibold text-heading">{count(t)}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full" style={{ width: `${all.length ? (count(t) / all.length) * 100 : 0}%`, background: TYPE_COLOR[t] }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-8 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {[{ label: "All", value: undefined }, ...TYPES.map((t) => ({ label: TYPE_LABEL[t], value: t }))].map((f) => (
            <Link
              key={f.label}
              href={href({ type: f.value, status, q })}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                type === f.value ? "border-primary bg-primary/15 text-heading" : "border-white/15 text-paragraph hover:text-foreground"
              }`}
            >
              {f.label}
            </Link>
          ))}
          <span className="mx-1 hidden h-5 w-px bg-white/15 sm:block" />
          {[{ label: "Any status", value: undefined }, ...STATUSES.map((s) => ({ label: STATUS_LABEL[s], value: s }))].map((f) => (
            <Link
              key={f.label}
              href={href({ type, status: f.value, q })}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                status === f.value ? "border-primary bg-primary/15 text-heading" : "border-white/15 text-paragraph hover:text-foreground"
              }`}
            >
              {f.label}
            </Link>
          ))}
        </div>

        <form action="/admin" className="relative max-w-md">
          {type && <input type="hidden" name="type" value={type} />}
          {status && <input type="hidden" name="status" value={status} />}
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-paragraph" />
          <input
            name="q"
            defaultValue={q}
            placeholder="Search name, email, website, message…"
            className="w-full rounded-full border border-white/15 bg-black/30 py-2.5 pl-11 pr-4 text-sm outline-none focus:border-primary"
          />
        </form>
      </div>

      {/* Leads */}
      <div className={`${GLASS} mt-4 overflow-hidden`}>
        <p className="border-b border-white/10 px-5 py-3 text-sm text-paragraph">
          {rows.length} {rows.length === 1 ? "lead" : "leads"}
          {(type || status || q) && " (filtered)"}
        </p>
        {rows.length === 0 ? (
          <p className="px-5 py-12 text-center text-sm text-paragraph">No leads here yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="text-xs uppercase tracking-wider text-paragraph">
                <tr>
                  <th className="px-5 py-3 font-medium">When</th>
                  <th className="px-3 py-3 font-medium">Form</th>
                  <th className="px-3 py-3 font-medium">Name</th>
                  <th className="px-3 py-3 font-medium">Contact</th>
                  <th className="px-3 py-3 font-medium">Website / Service</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {rows.map((l) => (
                  <tr key={l.id} className="transition-colors hover:bg-white/[0.05]">
                    <td className="px-5 py-3.5 align-top">
                      <Link href={`/admin/leads/${l.id}`} className="block">
                        <span className="block text-heading">{ago(l.created_at)}</span>
                        <span className="block text-xs text-paragraph">{fmtDate(l.created_at)}</span>
                      </Link>
                    </td>
                    <td className="px-3 py-3.5 align-top">
                      <Badge color={TYPE_COLOR[l.type]}>{TYPE_LABEL[l.type]}</Badge>
                    </td>
                    <td className="px-3 py-3.5 align-top">
                      <Link href={`/admin/leads/${l.id}`} className="font-medium text-heading hover:text-primary">
                        {l.name}
                      </Link>
                    </td>
                    <td className="px-3 py-3.5 align-top text-foreground">
                      <span className="block break-all">{l.email}</span>
                      {l.phone && <span className="block text-xs text-paragraph">{l.phone}</span>}
                    </td>
                    <td className="max-w-[260px] px-3 py-3.5 align-top text-foreground">
                      {l.website && <span className="block truncate">{l.website}</span>}
                      <span className="block truncate text-xs text-paragraph">{l.service ?? ""}</span>
                      {l.type === "free_audit" && l.audit?.mobile?.performance != null && (
                        <span className="mt-0.5 block text-xs text-paragraph">Mobile speed {l.audit.mobile.performance}/100</span>
                      )}
                    </td>
                    <td className="px-3 py-3.5 align-top">
                      <Badge color={STATUS_COLOR[l.status]}>{STATUS_LABEL[l.status]}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
