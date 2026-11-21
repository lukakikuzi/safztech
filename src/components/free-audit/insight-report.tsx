"use client";

import Link from "next/link";
import { CheckCircle2, Loader2, Monitor, Smartphone } from "lucide-react";
import type { InsightResult, Strategy } from "@/lib/pagespeed";

export const GLASS =
  "rounded-3xl border border-white/20 bg-[rgba(0,0,0,0.25)] bg-gradient-to-br from-white/[0.12] to-white/[0.03] shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(255,255,255,0.1),0_24px_50px_-24px_rgba(0,0,0,0.8)] backdrop-blur-[10px]";

const GOOD = "#0cce6b";
const OK = "#ffa400";
const BAD = "#ff4e42";
const colourFor = (score: number | null) => (score === null ? "#a1a1aa" : score >= 90 ? GOOD : score >= 50 ? OK : BAD);
const metricColour = (score: number | null) => (score === null ? "#a1a1aa" : score >= 0.9 ? GOOD : score >= 0.5 ? OK : BAD);

function Gauge({ label, score }: { label: string; score: number | null }) {
  const r = 36;
  const c = 2 * Math.PI * r;
  const colour = colourFor(score);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-28 w-28">
        <svg viewBox="0 0 88 88" className="h-full w-full -rotate-90" aria-hidden>
          <circle cx="44" cy="44" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
          <circle
            cx="44"
            cy="44"
            r={r}
            fill="none"
            stroke={colour}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - (score ?? 0) / 100)}
            style={{ transition: "stroke-dashoffset 0.8s ease-out", filter: `drop-shadow(0 0 6px ${colour})` }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-poppins text-3xl font-semibold" style={{ color: colour }}>
          {score ?? "—"}
        </span>
      </div>
      <span className="text-heading text-sm font-medium text-center">{label}</span>
    </div>
  );
}

/** The report itself (score, speed metrics, what to fix). Pure display: the parent owns fetching and the device. */
export default function InsightReport({
  result,
  strategy,
  loading,
  onStrategy,
  note,
}: {
  result: InsightResult | undefined;
  strategy: Strategy;
  /** A report for the selected device is still being fetched. */
  loading: boolean;
  onStrategy: (s: Strategy) => void;
  /** Shown under the report, e.g. "we'll email you the detailed audit". */
  note?: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-center gap-2" role="tablist" aria-label="Device">
        {(
          [
            ["mobile", "Mobile", Smartphone],
            ["desktop", "Desktop", Monitor],
          ] as const
        ).map(([mode, label, Icon]) => (
          <button
            key={mode}
            type="button"
            role="tab"
            aria-selected={strategy === mode}
            onClick={() => onStrategy(mode)}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
              strategy === mode
                ? "border-primary bg-primary/15 text-heading"
                : "border-white/15 text-paragraph hover:text-foreground"
            }`}
          >
            <Icon className="h-4 w-4" /> {label}
          </button>
        ))}
      </div>

      {!result && loading && (
        <div className={`${GLASS} p-10 text-center`} role="status">
          <Loader2 className="mx-auto mb-4 h-8 w-8 animate-spin text-primary" />
          <p className="font-medium text-heading">Analyzing the {strategy} version…</p>
          <p className="mt-1 text-sm text-paragraph">This usually takes 20–40 seconds.</p>
        </div>
      )}

      {result && (
        <div className="space-y-6">
          <div className={`${GLASS} p-6 sm:p-8`}>
            <p className="mb-6 break-all text-center text-xs text-paragraph">
              Report for <span className="text-foreground">{result.finalUrl}</span>
            </p>
            <div className="flex justify-center">
              <Gauge label="Performance" score={result.scores.performance} />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-paragraph">
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ background: BAD }} />0–49</span>
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ background: OK }} />50–89</span>
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full" style={{ background: GOOD }} />90–100</span>
            </div>
          </div>

          {result.metrics.length > 0 && (
            <div className={`${GLASS} p-6 sm:p-8`}>
              <h2 className="mb-5 font-poppins text-lg font-semibold text-heading">Speed metrics</h2>
              <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {result.metrics.map((m) => (
                  <div key={m.id} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                    <dt className="text-sm text-foreground">{m.title}</dt>
                    <dd className="flex items-center gap-2 text-sm font-semibold" style={{ color: metricColour(m.score) }}>
                      <span className="h-2 w-2 rounded-full" style={{ background: metricColour(m.score) }} />
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className={`${GLASS} p-6 sm:p-8`}>
            <h2 className="mb-1 font-poppins text-lg font-semibold text-heading">What to fix first</h2>
            <p className="mb-5 flex items-center gap-1.5 text-xs text-paragraph">
              <CheckCircle2 className="h-3.5 w-3.5" style={{ color: GOOD }} /> {result.passedCount} checks passed
            </p>
            {result.issues.length === 0 ? (
              <p className="text-sm text-foreground">Nothing major to fix. Nice work.</p>
            ) : (
              <ul className="space-y-4">
                {result.issues.map((issue) => (
                  <li key={issue.id} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ background: issue.score < 0.5 ? BAD : OK }} />
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-snug text-heading">
                        {issue.title}
                        {issue.displayValue && <span className="font-normal text-paragraph"> — {issue.displayValue}</span>}
                      </p>
                      {issue.description && <p className="mt-0.5 text-xs leading-relaxed text-paragraph">{issue.description}</p>}
                      <span className="mt-1.5 inline-block text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">{issue.category}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {note}

          <div className={`${GLASS} flex flex-col items-center justify-between gap-4 p-6 sm:flex-row sm:p-8`}>
            <div className="text-center sm:text-left">
              <h2 className="mb-1 font-poppins text-lg font-semibold text-heading">Want these fixed and your site growing?</h2>
              <p className="text-sm text-paragraph">This report covers how fast your site loads. We also review SEO, conversion and lead capture.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex whitespace-nowrap rounded-full border border-[rgba(255,215,0,0.55)] bg-gradient-to-br from-[rgba(255,200,0,0.45)] to-[rgba(255,140,0,0.18)] px-7 py-3.5 font-semibold text-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5)] backdrop-blur-[10px] transition-all hover:from-[rgba(255,200,0,0.6)]"
            >
              Talk to us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
