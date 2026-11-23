"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sixMonthTotal, usd, TERM_MONTHS, type Plan } from "@/data/plans";
import { emailError, fieldError, nameError, phoneError } from "@/lib/form-validation";
import { diffAgainst } from "@/lib/tier-diff";
import { toast } from "@/lib/toast";

const gold = "bg-gradient-to-br from-[#FFD84A] to-[#F4A900]";
const field = (bad?: string) => `bg-input border-2 text-white text-base transition-colors ${bad ? "border-destructive" : "border-border"}`;

export function PlanOffer({ plan }: { plan: Plan }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [tier, setTier] = useState(plan.tiers[1].key);
  const [values, setValues] = useState({ name: "", email: "", phone: "", website: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const setError = (name: string, msg?: string) =>
    setErrors((prev) => {
      if (msg) return { ...prev, [name]: msg };
      const { [name]: _removed, ...rest } = prev;
      return rest;
    });

  const bind = (name: keyof typeof values) => ({
    name,
    value: values[name],
    "aria-invalid": errors[name] ? true : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues({ ...values, [name]: e.target.value });
      if (errors[name]) setError(name);
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => setError(name, fieldError(name, e.target.value)),
  });

  const err = (name: string) =>
    errors[name] ? (
      <p role="alert" className="text-sm text-destructive">
        {errors[name]}
      </p>
    ) : null;

  const choose = (key: typeof tier) => {
    setTier(key);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found: Record<string, string> = {};
    const checks: [string, string | undefined][] = [
      ["name", nameError(values.name.trim())],
      ["email", emailError(values.email.trim().toLowerCase())],
      ["phone", phoneError(values.phone.trim())],
    ];
    for (const [k, m] of checks) if (m) found[k] = m;
    setErrors(found);
    if (Object.keys(found).length) {
      formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    const picked = plan.tiers.find((t) => t.key === tier)!;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: values.name,
          email: values.email,
          phone: values.phone,
          website: values.website,
          service: `${plan.name}: ${tier} ${picked.name} (${usd(picked.setup)} + ${usd(picked.monthly)}/mo)`,
          message: values.message,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again or email info@safztech.com.");
      }
      router.push("/thank-you?type=contact");
    } catch (error) {
      setLoading(false);
      toast.error("Couldn't send your request", error instanceof Error ? error.message : "Please try again.");
    }
  };

  return (
    <>
      <section id="plans" className="section-padding-standard scroll-mt-24">
        <div className="layout-standard">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Plans &amp; pricing</p>
          <h2 className="mb-3 max-w-3xl font-poppins text-3xl font-extrabold tracking-tight text-heading sm:text-5xl">Pick the plan that fits your stage.</h2>
          <p className="mb-10 max-w-2xl text-paragraph sm:text-lg">
            Every package is an initial payment plus {TERM_MONTHS} monthly retainers. Ad budget is paid separately.
          </p>
          <div className="grid gap-5 lg:grid-cols-3">
            {plan.tiers.map((t, ti) => {
              const on = t.key === tier;
              const lower = plan.tiers[ti - 1];
              const rows = diffAgainst(lower, t);
              return (
                <div
                  key={t.key}
                  className={`relative flex flex-col rounded-[1.75rem] border p-6 sm:p-7 ${on ? "border-primary/70 shadow-[0_0_50px_-12px_rgba(252,196,40,0.5)]" : "border-border"} bg-card`}
                >
                  {t.badge && <span className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-bold text-black ${gold}`}>{t.badge}</span>}
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {t.key} · {t.name}
                  </p>
                  <p className="mt-4 font-poppins text-4xl font-extrabold text-heading">{usd(t.setup)}</p>
                  <p className="text-sm text-paragraph">initial payment</p>
                  <p className="mt-2 font-poppins text-xl font-semibold text-white">+ {usd(t.monthly)}/mo</p>
                  <p className="mt-1 text-sm text-paragraph">
                    {TERM_MONTHS}-month total: <span className="font-semibold text-white">{usd(sixMonthTotal(t))}</span>
                  </p>
                  {lower && (
                    <p className="mt-5 rounded-xl border border-primary/30 bg-primary/10 px-3 py-2 text-xs text-white">
                      vs {lower.key} · {lower.name.split(" ").pop()}: <span className="font-semibold text-primary">{rows.filter((r) => r.status !== "same").length} new or increased</span>
                    </p>
                  )}
                  <ul className={`flex-1 space-y-2.5 ${lower ? "mt-4" : "mt-6"}`}>
                    {rows.map((r) => (
                      <li key={r.text} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${r.status === "same" ? "text-white/40" : "text-primary"}`} strokeWidth={3} />
                        <span className={r.status === "same" ? "" : "font-medium text-white"}>
                          {r.text}
                          {r.status === "new" && <span className="ml-2 inline-block whitespace-nowrap rounded-full bg-primary px-2 py-0.5 align-middle text-[10px] font-bold uppercase text-black">New</span>}
                          {r.status === "up" && <span className="ml-2 inline-block whitespace-nowrap rounded-full border border-primary/60 px-2 py-0.5 align-middle text-[10px] font-semibold text-primary">↑ was {r.was}</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => choose(t.key)}
                    className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                      on ? "bg-primary text-primary-foreground hover:bg-primary-hover" : "border border-white/25 bg-white/[0.06] text-white hover:bg-white/15"
                    }`}
                  >
                    Choose {t.name}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
          {plan.note && <p className="mt-6 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-relaxed text-paragraph">{plan.note}</p>}
        </div>
      </section>

      <section id="apply" className="section-padding-standard scroll-mt-24">
        <div className="layout-standard max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Get started</p>
          <h2 className="mb-3 font-poppins text-3xl font-extrabold tracking-tight text-heading sm:text-5xl">Tell us about your business.</h2>
          <p className="mb-8 text-paragraph sm:text-lg">Share a few details and we will reply within 24 hours with next steps.</p>
          <form ref={formRef} onSubmit={submit} noValidate className="space-y-6 rounded-[1.75rem] border border-border bg-card p-6 sm:p-8">
            <div className="space-y-3">
              <label htmlFor="tier" className="text-sm font-medium uppercase tracking-wider text-heading">Selected plan</label>
              <div id="tier" className="grid gap-2 sm:grid-cols-3">
                {plan.tiers.map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setTier(t.key)}
                    aria-pressed={t.key === tier}
                    className={`rounded-2xl border-2 px-4 py-3 text-left text-sm transition-colors ${t.key === tier ? "border-primary bg-primary/10 text-white" : "border-border text-paragraph hover:border-white/30"}`}
                  >
                    <span className="block font-semibold">{t.key} · {t.name}</span>
                    <span className="text-xs">{usd(t.setup)} + {usd(t.monthly)}/mo</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wider text-heading">Your name</label>
                <Input type="text" autoComplete="name" maxLength={80} placeholder="Enter your name" {...bind("name")} className={`h-14 ${field(errors.name)}`} />
                {err("name")}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wider text-heading">Your email</label>
                <Input type="email" autoComplete="email" maxLength={254} placeholder="Enter your email" {...bind("email")} className={`h-14 ${field(errors.email)}`} />
                {err("email")}
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wider text-heading">Phone / WhatsApp</label>
                <Input type="tel" autoComplete="tel" maxLength={30} placeholder="+1 555 123 4567" {...bind("phone")} className={`h-14 ${field(errors.phone)}`} />
                {err("phone")}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wider text-heading">Website <span className="normal-case tracking-normal text-paragraph">(optional)</span></label>
                <Input type="text" autoComplete="url" maxLength={200} placeholder="yourbrand.com" {...bind("website")} className={`h-14 ${field()}`} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium uppercase tracking-wider text-heading">Anything we should know <span className="normal-case tracking-normal text-paragraph">(optional)</span></label>
              <Textarea maxLength={1500} placeholder="Your goals, timeline or questions..." {...bind("message")} className={`min-h-28 resize-none ${field()}`} />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-hover disabled:opacity-60"
            >
              {loading ? "Sending..." : "Request my plan"}
              {!loading && <ArrowRight className="h-4 w-4" />}
            </button>
            <p className="text-center text-xs text-paragraph">No payment is taken here. We will confirm scope and terms with you first.</p>
          </form>
        </div>
      </section>
    </>
  );
}
