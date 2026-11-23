import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import SectionHeading from "@/components/ui/section-heading";
import { PLANS, TERM_MONTHS, usd } from "@/data/plans";

const HIGHLIGHTS: Record<string, string[]> = {
  "business-growth-program": ["Custom website and lead forms", "SEO and monthly articles", "Social media and short video", "Paid ads with conversion tracking"],
  "ecommerce-growth-program": ["Shopify or WooCommerce store", "Product page and checkout optimization", "Email flows and retargeting", "SEO, social and paid ads"],
  "peptide-growth-program": ["Compliance-conscious store build", "COA and batch library", "Educational SEO, AEO and GEO", "B2B and wholesale funnels"],
};

function PricingSection() {
  return (
    <section id="pricing" className="bg-secondary-background section-padding-standard">
      <div className="layout-standard section-padding-standard">
        <SectionHeading title="Our packages.">
          Three growth programs, each with three tiers. Every package is an initial payment plus {TERM_MONTHS} monthly retainers, and ad budget is paid separately.
        </SectionHeading>

        <div className="grid gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div key={plan.slug} className="flex flex-col rounded-2xl border border-border p-8 transition-colors hover:border-primary">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{plan.eyebrow}</p>
              <h3 className="mb-2 font-poppins text-2xl font-semibold text-heading">{plan.name}</h3>
              <p className="mb-6 text-sm leading-relaxed text-paragraph">{plan.audience}</p>

              <div className="mb-6 divide-y divide-white/10 rounded-xl border border-white/10">
                {plan.tiers.map((t) => (
                  <div key={t.key} className="flex items-center justify-between gap-3 px-4 py-3">
                    <span className="text-sm font-medium text-white">
                      {t.key} · {t.name.split(" ").pop()}
                    </span>
                    <span className="text-right text-sm">
                      <span className="font-semibold text-primary">{usd(t.setup)}</span>
                      <span className="text-paragraph"> + {usd(t.monthly)}/mo</span>
                    </span>
                  </div>
                ))}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {HIGHLIGHTS[plan.slug].map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" strokeWidth={3} />
                    {h}
                  </li>
                ))}
              </ul>

              <Link
                href={`/${plan.slug}`}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold uppercase tracking-wide text-black transition-all hover:bg-primary-hover"
              >
                View plans
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm text-paragraph">
          {TERM_MONTHS}-month minimum commitment. Hosting, domains and third-party subscriptions are excluded. No guaranteed sales, rankings or advertising results.
        </p>
      </div>
    </section>
  );
}

export default PricingSection;
