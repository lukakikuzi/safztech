import type { LeadStatus, LeadType } from "@/lib/supabase";

export const TYPE_LABEL: Record<LeadType, string> = {
  contact: "Contact Us",
  free_audit: "Free Audit",
  referral: "Referral",
};

// One colour per form, used for badges and the chart.
export const TYPE_COLOR: Record<LeadType, string> = {
  contact: "#FFD84A",
  free_audit: "#FF7A00",
  referral: "#34D399",
};

export const STATUS_LABEL: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  won: "Won",
  lost: "Lost",
};

export const STATUS_COLOR: Record<LeadStatus, string> = {
  new: "#60A5FA",
  contacted: "#FFD84A",
  won: "#34D399",
  lost: "#F87171",
};

export const GLASS =
  "rounded-3xl border border-white/15 bg-[rgba(0,0,0,0.25)] bg-gradient-to-br from-white/[0.10] to-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_20px_40px_-24px_rgba(0,0,0,0.8)] backdrop-blur-[10px]";

const TZ = "Asia/Karachi";

export const fmtDate = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: TZ, day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true }).format(new Date(iso));

/** YYYY-MM-DD in the admin's time zone, for grouping leads by day. */
export const dayKey = (iso: string | Date) => new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(new Date(iso));

export function ago(iso: string) {
  const s = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}
