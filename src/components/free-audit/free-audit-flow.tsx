"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, Loader2, MailCheck } from "lucide-react";

import InsightReport, { GLASS } from "@/components/free-audit/insight-report";
import { clean, emailError, fieldError, nameError, phoneError, websiteError } from "@/lib/form-validation";
import type { InsightResult, Strategy } from "@/lib/pagespeed";
import { toast } from "@/lib/toast";

type Step = "url" | "details" | "report";
type Errors = Record<string, string>;
type Results = Partial<Record<Strategy, InsightResult>>;

/** How long we tell people to wait for the detailed audit we email them. */
const FOLLOW_UP = "2 hours (Mon–Fri, 9am–6pm EST)";

const INPUT_CLS =
  "w-full rounded-full border bg-black/30 px-5 py-3.5 text-sm text-foreground outline-none backdrop-blur-sm transition-colors placeholder:text-paragraph/60 focus:border-primary";

const BTN =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[rgba(255,215,0,0.55)] bg-gradient-to-br from-[rgba(255,200,0,0.5)] to-[rgba(255,140,0,0.2)] px-8 py-3.5 font-semibold text-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5),0_12px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-[10px] transition-all hover:from-[rgba(255,200,0,0.65)] disabled:opacity-60 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]";

const withProtocol = (u: string) => (/^https?:\/\//i.test(u) ? u : `https://${u}`);

export default function FreeAuditFlow() {
  const [step, setStep] = useState<Step>("url");
  const [site, setSite] = useState("");
  const [siteErr, setSiteErr] = useState("");
  const [analysed, setAnalysed] = useState("");
  const [strategy, setStrategy] = useState<Strategy>("mobile");
  const [results, setResults] = useState<Results>({});
  const [loading, setLoading] = useState<Partial<Record<Strategy, boolean>>>({});
  const [analysisError, setAnalysisError] = useState("");
  const [lead, setLead] = useState<{ firstName: string; email: string } | null>(null);
  // The saved lead's id, so the finished report can be attached to it.
  const [leadId, setLeadId] = useState<string | null>(null);
  const attached = useRef(new Set<string>());

  // details form
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");
  const shownAt = useRef(0);

  // Ignore answers that belong to an earlier site, and cancel on unmount.
  const runId = useRef(0);
  const aborts = useRef<Partial<Record<Strategy, AbortController>>>({});
  useEffect(() => {
    const a = aborts.current;
    return () => Object.values(a).forEach((c) => c?.abort());
  }, []);

  // Once there is a saved lead and a finished report, store the report with the lead (once per device).
  useEffect(() => {
    if (!leadId) return;
    for (const mode of ["mobile", "desktop"] as const) {
      const r = results[mode];
      const tag = `${leadId}:${mode}`;
      if (!r || attached.current.has(tag)) continue;
      attached.current.add(tag);
      fetch("/api/audit-result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: leadId,
          url: r.finalUrl,
          [mode]: {
            performance: r.scores.performance,
            metrics: r.metrics.map((m) => ({ title: m.title, value: m.value })),
            issues: r.issues.map((i) => i.title),
          },
        }),
      }).catch(() => attached.current.delete(tag));
    }
  }, [leadId, results]);

  async function run(target: string, mode: Strategy) {
    const id = runId.current;
    aborts.current[mode]?.abort();
    const ctrl = new AbortController();
    aborts.current[mode] = ctrl;
    setLoading((p) => ({ ...p, [mode]: true }));
    setAnalysisError("");
    try {
      const res = await fetch(`/api/site-audit?url=${encodeURIComponent(target)}&strategy=${mode}`, { signal: ctrl.signal });
      const data = await res.json().catch(() => null);
      if (!res.ok) throw new Error(data?.error || "We couldn't analyse that site right now. Please try again.");
      if (id === runId.current) setResults((p) => ({ ...p, [mode]: data as InsightResult }));
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      if (id === runId.current) {
        const msg = err instanceof Error ? err.message : "Something went wrong.";
        setAnalysisError(msg);
        toast.error("Website check failed", msg);
      }
    } finally {
      if (id === runId.current) setLoading((p) => ({ ...p, [mode]: false }));
    }
  }

  function onUrlSubmit(e: React.FormEvent) {
    e.preventDefault();
    const target = clean(site);
    const err = websiteError(target);
    setSiteErr(err ?? "");
    if (err) return;

    runId.current++;
    Object.values(aborts.current).forEach((c) => c?.abort());
    setResults({});
    setLoading({});
    setAnalysisError("");
    setStrategy("mobile");
    setAnalysed(target);
    shownAt.current = Date.now();
    run(target, "mobile");
    // Someone who already gave their details isn't asked again.
    setStep(lead ? "report" : "details");
  }

  const clearError = (key: string) =>
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const { [key]: _removed, ...rest } = prev;
      return rest;
    });

  async function onDetailsSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const data = new FormData(form);

    const v = {
      name: clean(data.get("name")),
      email: clean(data.get("email")).toLowerCase(),
      phone: clean(data.get("phone")),
      consent: data.get("consent") === "on",
    };
    const found: Errors = {};
    const nm = nameError(v.name);
    if (nm) found.name = nm;
    const em = emailError(v.email);
    if (em) found.email = em;
    const pm = phoneError(v.phone);
    if (pm) found.phone = pm;
    if (!v.consent) found.consent = "You need to agree to continue.";
    setErrors(found);
    if (Object.keys(found).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    // Valid, but the hidden field was filled or it was sent faster than a
    // person could type: a bot. Let it through without sending anything.
    if (clean(data.get("website")) || Date.now() - shownAt.current < 1500) {
      setLead({ firstName: "there", email: "your email" });
      setStep("report");
      return;
    }

    setSending(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "free_audit",
          name: v.name,
          email: v.email,
          phone: v.phone,
          website: withProtocol(analysed).slice(0, 500),
          service: "Free Website Audit",
          message: `Requested the free website audit for ${withProtocol(analysed).slice(0, 500)}.`,
        }),
      });
      const saved = await res.json().catch(() => null);
      if (!res.ok) throw new Error(saved?.error || "send failed");
      setLeadId(saved?.id ?? null);
      toast.success("Details sent", "We'll email your detailed audit shortly.");
      setLead({ firstName: v.name.split(/\s+/)[0], email: v.email });
      setStep("report");
    } catch {
      const msg = "We couldn't send your details. Please try again, or email us at info@safztech.com.";
      setServerError(msg);
      toast.error("Couldn't send your details", msg);
    } finally {
      setSending(false);
    }
  }

  function switchStrategy(mode: Strategy) {
    if (mode === strategy) return;
    setStrategy(mode);
    if (!results[mode] && !loading[mode]) run(analysed, mode);
  }

  const ready = !!results.mobile;
  const field = (name: string) => ({
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `err-${name}` : undefined,
    onChange: () => clearError(name),
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
      const msg = fieldError(name, e.currentTarget.value);
      setErrors((prev) => {
        if (msg) return { ...prev, [name]: msg };
        if (!prev[name]) return prev;
        const { [name]: _removed, ...rest } = prev;
        return rest;
      });
    },
  });
  const errorText = (name: string) =>
    errors[name] ? (
      <p id={`err-${name}`} role="alert" className="mt-1.5 px-1 text-xs text-destructive">
        {errors[name]}
      </p>
    ) : null;
  const border = (name: string) => (errors[name] ? "border-destructive" : "border-white/15");

  // ---- step 1: the website --------------------------------------------------
  if (step === "url") {
    return (
      <form onSubmit={onUrlSubmit} noValidate className={`${GLASS} space-y-4 p-6 sm:p-9`}>
        <label htmlFor="site" className="block font-poppins text-sm font-semibold text-heading">
          Your website address
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <input
              id="site"
              value={site}
              onChange={(e) => {
                setSite(e.target.value);
                if (siteErr) setSiteErr("");
              }}
              onBlur={(e) => setSiteErr(e.currentTarget.value.trim() ? (websiteError(clean(e.currentTarget.value)) ?? "") : "")}
              inputMode="url"
              autoComplete="url"
              maxLength={300}
              placeholder="yourwebsite.com"
              aria-invalid={siteErr ? true : undefined}
              aria-describedby={siteErr ? "err-site" : undefined}
              className={`${INPUT_CLS} ${siteErr ? "border-destructive" : "border-white/15"}`}
            />
            {siteErr && (
              <p id="err-site" role="alert" className="mt-1.5 px-1 text-xs text-destructive">
                {siteErr}
              </p>
            )}
          </div>
          <button type="submit" className={BTN}>
            Analyze my website
          </button>
        </div>
        <p className="text-xs text-paragraph/90">
          We&apos;ll run the check right away, then ask where to send your detailed audit.
        </p>
      </form>
    );
  }

  // ---- step 2: details, while the report is being built ---------------------
  if (step === "details") {
    return (
      <div className="space-y-6">
        <div
          role="status"
          className={`${GLASS} flex items-center gap-3 !rounded-2xl px-5 py-4 text-sm ${ready ? "!border-primary/60" : ""}`}
        >
          {ready ? (
            <>
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-foreground">
                Your report for <strong className="break-all text-heading">{analysed}</strong> is ready. Enter your details to see it.
              </span>
            </>
          ) : analysisError ? (
            <>
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-destructive" />
              <span className="flex-1 text-foreground">{analysisError}</span>
              <button type="button" onClick={() => run(analysed, "mobile")} className="whitespace-nowrap font-semibold text-primary underline underline-offset-2">
                Try again
              </button>
            </>
          ) : (
            <>
              <Loader2 className="h-5 w-5 flex-shrink-0 animate-spin text-primary" />
              <span className="text-foreground">
                Analyzing <strong className="break-all text-heading">{analysed}</strong>… this takes 20–40 seconds. Fill in your details meanwhile.
              </span>
            </>
          )}
        </div>

        <form onSubmit={onDetailsSubmit} noValidate className={`${GLASS} space-y-5 p-6 sm:p-9`}>
          <div>
            <h2 className="mb-1 font-poppins text-xl font-semibold text-heading">Where should we send your detailed audit?</h2>
            <p className="text-sm text-paragraph">
              After this quick report, we&apos;ll email you a more detailed audit. We reply within {FOLLOW_UP}.
            </p>
          </div>

          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div>
            <input {...field("name")} autoComplete="name" maxLength={160} placeholder="Full Name *" aria-label="Full name" className={`${INPUT_CLS} ${border("name")}`} />
            {errorText("name")}
          </div>
          <div>
            <input {...field("email")} type="email" inputMode="email" autoComplete="email" maxLength={254} placeholder="Email Address *" aria-label="Email address" className={`${INPUT_CLS} ${border("email")}`} />
            {errorText("email")}
          </div>
          <div>
            <input {...field("phone")} type="tel" inputMode="tel" autoComplete="tel" maxLength={30} placeholder="Phone / WhatsApp Number (with country code) *" aria-label="Phone or WhatsApp number" className={`${INPUT_CLS} ${border("phone")}`} />
            {errorText("phone")}
          </div>

          <div>
            <label className="flex cursor-pointer items-start gap-3 text-sm text-paragraph">
              <input {...field("consent")} type="checkbox" className="mt-1 h-4 w-4 flex-shrink-0 accent-[#ffd700]" />
              <span>
                I have read and agree to the{" "}
                <Link href="/terms-conditions" target="_blank" className="text-primary underline underline-offset-2">Terms &amp; Conditions</Link>{" "}
                and{" "}
                <Link href="/privacy-policy" target="_blank" className="text-primary underline underline-offset-2">Privacy Policy</Link>
                . <span className="text-primary">*</span>
              </span>
            </label>
            {errorText("consent")}
          </div>

          {serverError && (
            <p role="alert" className="text-sm text-destructive">
              {serverError}
            </p>
          )}

          <button type="submit" disabled={sending} className={`${BTN} w-full py-4`}>
            {sending && <Loader2 className="h-4 w-4 animate-spin" />}
            {sending ? "Sending…" : "Show my report"}
          </button>
          <p className="text-center text-xs text-paragraph/90">No spam. We only use this to send your audit.</p>
        </form>
      </div>
    );
  }

  // ---- step 3: the report ----------------------------------------------------
  const followUp = (
    <div className={`${GLASS} flex items-start gap-4 p-6 sm:p-8`}>
      <MailCheck className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
      <div>
        <h2 className="mb-1 font-poppins text-lg font-semibold text-heading">What happens next</h2>
        <p className="text-sm leading-relaxed text-paragraph">
          We&apos;ll review <strong className="break-all text-foreground">{analysed}</strong> and send a detailed audit to{" "}
          <strong className="text-foreground">{lead?.email}</strong>. We reply within {FOLLOW_UP}. Questions in the meantime? Just reply to that email.
        </p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className={`${GLASS} flex items-start gap-3 !rounded-2xl px-5 py-4`}>
        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
        <p className="text-sm leading-relaxed text-foreground">
          Thanks{lead?.firstName && lead.firstName !== "there" ? `, ${lead.firstName}` : ""}! Here&apos;s your instant report. We&apos;ll also send a
          detailed audit to your email.
        </p>
      </div>

      {analysisError && !results[strategy] && !loading[strategy] ? (
        <div className={`${GLASS} p-8 text-center`} role="alert">
          <AlertTriangle className="mx-auto mb-3 h-8 w-8 text-destructive" />
          <p className="mb-4 text-sm text-foreground">{analysisError}</p>
          <button type="button" onClick={() => run(analysed, strategy)} className={BTN}>
            Try again
          </button>
          <p className="mt-4 text-xs text-paragraph">Your details are saved, so you&apos;ll still get the detailed audit by email.</p>
        </div>
      ) : (
        <InsightReport
          result={results[strategy]}
          strategy={strategy}
          loading={!!loading[strategy]}
          onStrategy={switchStrategy}
          note={followUp}
        />
      )}

      {!results[strategy] && !loading[strategy] && !analysisError ? null : (
        <div className="text-center">
          <button
            type="button"
            onClick={() => {
              setStep("url");
              setSite("");
            }}
            className="text-sm font-semibold text-primary underline underline-offset-2"
          >
            Analyze a different website
          </button>
        </div>
      )}
    </div>
  );
}
