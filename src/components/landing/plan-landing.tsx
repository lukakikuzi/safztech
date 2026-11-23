import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ShoppingBag } from "lucide-react";

import { PlanOffer } from "@/components/landing/plan-offer";
import { SHARED_TERMS, TERM_MONTHS, sixMonthTotal, usd, type Plan } from "@/data/plans";

const STEPS = [
  ["Free strategy call", "We learn your goals, audience and current setup, then recommend the right tier."],
  ["Build & launch", "We set up your site or store, tracking and campaigns, with your approval at each stage."],
  ["Grow & report", "Ongoing SEO, content, social and ads with clear reporting on what is working."],
];

export function PlanLanding({ plan }: { plan: Plan }) {
  const from = plan.tiers[0];
  return (
    <main>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="layout-standard grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{plan.eyebrow}</p>
            <h1 className="font-poppins text-4xl font-extrabold leading-[1.05] tracking-tight text-heading sm:text-5xl lg:text-6xl">{plan.headline}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-paragraph sm:text-lg">{plan.positioning}</p>
            <p className="mt-3 text-sm font-medium text-white">{plan.audience}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#plans"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                See plans &amp; pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#apply"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/15"
              >
                Get started
              </Link>
            </div>
            <p className="mt-5 text-sm text-paragraph">
              From <span className="font-semibold text-white">{usd(from.setup)}</span> + {usd(from.monthly)}/mo &middot; {TERM_MONTHS}-month program &middot; Ad budget paid separately
            </p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] border border-white/15">
            <Image src={plan.image} alt={plan.name} fill priority sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-primary/10" />
          </div>
        </div>
      </section>

      <PlanOffer plan={plan} />

      <section className="section-padding-standard">
        <div className="layout-standard">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">How it works</p>
          <h2 className="mb-10 font-poppins text-3xl font-extrabold tracking-tight text-heading sm:text-5xl">Three simple steps.</h2>
          <ol className="grid gap-5 md:grid-cols-3">
            {STEPS.map(([title, text], i) => (
              <li key={title} className="rounded-3xl border border-border bg-card p-6">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD84A] to-[#F4A900] font-poppins text-sm font-bold text-black">{i + 1}</span>
                <h3 className="mb-2 font-poppins text-lg font-semibold text-heading">{title}</h3>
                <p className="text-paragraph">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding-standard">
        <div className="layout-standard max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Terms</p>
          <h2 className="mb-6 font-poppins text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">Clear terms, no surprises.</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {SHARED_TERMS.map((t) => (
              <li key={t} className="rounded-2xl border border-border bg-card px-5 py-4 text-sm text-foreground">{t}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-paragraph">
            Example: {from.name} is {usd(from.setup)} + {TERM_MONTHS} &times; {usd(from.monthly)} = {usd(sixMonthTotal(from))} over {TERM_MONTHS} months, excluding ad budget.
          </p>
        </div>
      </section>

      <section className="section-padding-standard">
        <div className="layout-standard max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mb-8 font-poppins text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">Common questions</h2>
          <div className="space-y-3">
            {plan.faqs.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-border bg-card p-5 open:border-primary/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-poppins text-base font-semibold text-heading sm:text-lg">
                  {q}
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 leading-relaxed text-paragraph">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-standard">
        <div className="layout-standard">
          <div className="rounded-[2rem] border border-primary/30 bg-gradient-to-br from-primary/15 to-transparent p-8 text-center sm:p-12">
            <ShoppingBag className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h2 className="mx-auto max-w-2xl font-poppins text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">Ready to start the {plan.name}?</h2>
            <Link
              href="#apply"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
