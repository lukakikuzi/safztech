"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { PLANS, TERM_MONTHS, sixMonthTotal, usd } from "@/data/plans";
import { diffAgainst } from "@/lib/tier-diff";

const TAB_LABELS: Record<string, string> = {
  "business-growth-program": "Business Growth",
  "ecommerce-growth-program": "Ecommerce Growth",
  "peptide-growth-program": "Peptide Growth",
};

export function ProgramPricing() {
  const [slug, setSlug] = useState(PLANS[0].slug);
  const plan = PLANS.find((p) => p.slug === slug)!;

  return (
    <div>
      <div role="tablist" aria-label="Growth programs" className="mb-8 flex flex-wrap gap-2 sm:gap-3">
        {PLANS.map((p) => {
          const on = p.slug === slug;
          return (
            <button
              key={p.slug}
              role="tab"
              type="button"
              aria-selected={on}
              onClick={() => setSlug(p.slug)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors sm:px-7 sm:py-3 sm:text-base ${
                on ? "border-primary bg-primary text-primary-foreground" : "border-white/25 bg-white/[0.06] text-white hover:bg-white/15"
              }`}
            >
              {TAB_LABELS[p.slug]}
            </button>
          );
        })}
      </div>

      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-poppins text-2xl font-semibold text-heading sm:text-3xl">{plan.name}</h3>
          <p className="mt-1 max-w-2xl text-paragraph">{plan.audience}</p>
        </div>
        <Link href={`/${plan.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          See the full program <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plan.tiers.map((t, i) => {
          const lower = plan.tiers[i - 1];
          const rows = diffAgainst(lower, t);
          const changed = rows.filter((r) => r.status !== "same").length;
          return (
          <div
            key={t.key}
            className={`relative flex flex-col rounded-[1.75rem] border bg-card p-6 sm:p-8 ${t.badge ? "border-primary/60 shadow-[0_0_50px_-14px_rgba(252,196,40,0.45)]" : "border-border"}`}
          >
            {t.badge && (
              <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-br from-[#FFD84A] to-[#F4A900] px-3 py-1 text-xs font-bold text-black">{t.badge}</span>
            )}
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.key} · {t.name}
            </p>
            <p className="mt-4 font-poppins text-4xl font-extrabold text-heading sm:text-5xl">{usd(t.setup)}</p>
            <p className="text-sm text-paragraph">initial payment</p>
            <p className="mt-3 font-poppins text-xl font-semibold text-white">+ {usd(t.monthly)}/mo</p>
            <p className="mt-1 text-sm text-paragraph">
              {TERM_MONTHS}-month total <span className="font-semibold text-white">{usd(sixMonthTotal(t))}</span>
            </p>

            {lower && (
              <p className="mt-6 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2.5 text-sm text-white">
                vs {lower.key} · {lower.name.split(" ").pop()}: <span className="font-semibold text-primary">{changed} new or increased</span>
              </p>
            )}

            <ul className={`flex-1 space-y-3 border-t border-white/10 pt-6 ${lower ? "mt-4" : "mt-6"}`}>
              {rows.map((r) => (
                <li key={r.text} className="flex items-start gap-3 text-[0.95rem] leading-snug text-foreground">
                  <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${r.status === "same" ? "text-white/40" : "text-primary"}`} strokeWidth={3} />
                  <span className={r.status === "same" ? "" : "font-medium text-white"}>
                    {r.text}
                    {r.status === "new" && <span className="ml-2 inline-block whitespace-nowrap rounded-full bg-primary px-2 py-0.5 align-middle text-[10px] font-bold uppercase text-black">New</span>}
                    {r.status === "up" && <span className="ml-2 inline-block whitespace-nowrap rounded-full border border-primary/60 px-2 py-0.5 align-middle text-[10px] font-semibold text-primary">↑ was {r.was}</span>}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={`/${plan.slug}#plans`}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          );
        })}
      </div>
    </div>
  );
}
