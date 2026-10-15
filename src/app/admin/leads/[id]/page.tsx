import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, Mail, Phone, Globe } from "lucide-react";

import { deleteLead, updateLead } from "@/app/admin/actions";
import { GLASS, STATUS_COLOR, STATUS_LABEL, TYPE_COLOR, TYPE_LABEL, fmtDate } from "@/app/admin/ui";
import { getAdmin } from "@/lib/admin-session";
import { rest, type AuditDevice, type Lead, type LeadStatus } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const STATUSES = Object.keys(STATUS_LABEL) as LeadStatus[];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-white/10 py-3 sm:grid-cols-[150px_1fr] sm:gap-4">
      <dt className="text-xs uppercase tracking-wider text-paragraph">{label}</dt>
      <dd className="break-words text-foreground">{children}</dd>
    </div>
  );
}

const scoreColor = (n: number | null) => (n === null ? "#a1a1aa" : n >= 90 ? "#0cce6b" : n >= 50 ? "#ffa400" : "#ff4e42");

function Device({ title, d }: { title: string; d?: AuditDevice }) {
  if (!d) return null;
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-poppins font-semibold text-heading">{title}</h3>
        <span className="font-poppins text-2xl font-bold" style={{ color: scoreColor(d.performance) }}>
          {d.performance ?? "—"}
        </span>
      </div>
      {d.metrics.length > 0 && (
        <dl className="space-y-1 text-sm">
          {d.metrics.map((m) => (
            <div key={m.title} className="flex justify-between gap-3">
              <dt className="text-paragraph">{m.title}</dt>
              <dd className="text-foreground">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {d.issues.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-paragraph">
          {d.issues.slice(0, 6).map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default async function LeadPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string }>;
}) {
  if (!(await getAdmin())) redirect("/admin/login");
  const { id } = await params;
  const { saved } = await searchParams;
  if (!UUID.test(id)) notFound();

  const res = await rest<Lead[]>(`leads?id=eq.${id}&select=*`);
  const lead = res.ok ? res.data?.[0] : undefined;
  if (!lead) notFound();

  const wa = lead.phone ? `https://wa.me/${lead.phone.replace(/\D/g, "")}` : null;

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Link href="/admin" className="mb-6 inline-flex items-center gap-2 text-sm text-paragraph transition-colors hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> All leads
      </Link>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <h1 className="font-poppins text-3xl font-bold text-heading">{lead.name}</h1>
        <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: `${TYPE_COLOR[lead.type]}22`, color: TYPE_COLOR[lead.type] }}>
          {TYPE_LABEL[lead.type]}
        </span>
        <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: `${STATUS_COLOR[lead.status]}22`, color: STATUS_COLOR[lead.status] }}>
          {STATUS_LABEL[lead.status]}
        </span>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        <a href={`mailto:${lead.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-heading transition-colors hover:border-primary hover:text-primary">
          <Mail className="h-4 w-4" /> Email
        </a>
        {lead.phone && (
          <a href={`tel:${lead.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-heading transition-colors hover:border-primary hover:text-primary">
            <Phone className="h-4 w-4" /> Call
          </a>
        )}
        {wa && (
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-heading transition-colors hover:border-primary hover:text-primary">
            WhatsApp
          </a>
        )}
        {lead.website && (
          <a href={lead.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-heading transition-colors hover:border-primary hover:text-primary">
            <Globe className="h-4 w-4" /> Open site
          </a>
        )}
      </div>

      <div className={`${GLASS} p-6 sm:p-8`}>
        <dl>
          <Row label="Submitted">{fmtDate(lead.created_at)} (Pakistan time)</Row>
          <Row label="Email">{lead.email}</Row>
          <Row label="Phone">{lead.phone ?? "—"}</Row>
          <Row label="Website">{lead.website ?? "—"}</Row>
          <Row label="Service">{lead.service ?? "—"}</Row>
          <Row label={lead.type === "referral" ? "About their audience" : "Message"}>
            <span className="whitespace-pre-wrap">{lead.message ?? "—"}</span>
          </Row>
        </dl>
      </div>

      {lead.type === "free_audit" && (
        <div className={`${GLASS} mt-6 p-6 sm:p-8`}>
          <h2 className="mb-1 font-poppins text-lg font-semibold text-heading">Website speed report they saw</h2>
          {lead.audit ? (
            <>
              <p className="mb-4 break-all text-xs text-paragraph">{lead.audit.url}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Device title="Mobile" d={lead.audit.mobile} />
                <Device title="Desktop" d={lead.audit.desktop} />
              </div>
            </>
          ) : (
            <p className="text-sm text-paragraph">No report saved. The visitor left before it finished, or the check failed.</p>
          )}
        </div>
      )}

      <div className={`${GLASS} mt-6 p-6 sm:p-8`}>
        <h2 className="mb-4 font-poppins text-lg font-semibold text-heading">Follow-up</h2>
        <form action={updateLead} className="space-y-4">
          <input type="hidden" name="id" value={lead.id} />
          <label className="block space-y-1.5">
            <span className="text-sm text-heading">Status</span>
            <select
              name="status"
              defaultValue={lead.status}
              className="w-full rounded-full border border-white/15 bg-black/40 px-5 py-3 text-sm outline-none focus:border-primary sm:w-60"
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {STATUS_LABEL[s]}
                </option>
              ))}
            </select>
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm text-heading">Notes (only you see these)</span>
            <textarea
              name="notes"
              defaultValue={lead.notes ?? ""}
              rows={4}
              maxLength={5000}
              className="w-full resize-y rounded-2xl border border-white/15 bg-black/30 px-5 py-3 text-sm outline-none focus:border-primary"
            />
          </label>
          <div className="flex items-center gap-4">
            <button className="rounded-full border border-[rgba(255,215,0,0.55)] bg-gradient-to-br from-[rgba(255,200,0,0.5)] to-[rgba(255,140,0,0.2)] px-7 py-3 font-semibold text-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5)] transition-all hover:from-[rgba(255,200,0,0.65)]">
              Save
            </button>
            {saved && <span className="text-sm text-emerald-400">Saved.</span>}
          </div>
        </form>
      </div>

      <form action={deleteLead} className="mt-6 text-right">
        <input type="hidden" name="id" value={lead.id} />
        <button className="text-sm text-paragraph underline underline-offset-2 transition-colors hover:text-destructive">Delete this lead</button>
      </form>
    </main>
  );
}
