import React from "react";
import { Metadata } from "next";
import { Check, Star } from "lucide-react";

import FreeAuditFlow from "@/components/free-audit/free-audit-flow";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Free Website Audit | SAFZTECH",
  description:
    "Enter your website address and get an instant speed report, then a detailed growth audit from the SAFZTECH team. Free, no obligation.",
});

const auditIncludes = [
  { title: "Instant Website Speed Report", desc: "Mobile and desktop performance, Core Web Vitals and what to fix first" },
  { title: "SEO Opportunity Score", desc: "Quick-win keywords and technical issues holding you back" },
  { title: "Lead Generation Gap Analysis", desc: "What you're missing and what it's costing you monthly" },
  { title: "Custom 30-Day Growth Roadmap", desc: "Specific, prioritised actions for your business" },
  { title: "Revenue Potential Projection", desc: "What realistic improvement looks like in numbers" },
];

const socialProof = [
  { value: "150+", label: "Businesses Audited" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "< 2hrs", label: "Avg Response Time" },
  { value: "Free", label: "No Cost Ever" },
];

export default function FreeAuditPage() {
  return (
    <main className="pt-20">
      {/* Hero + the audit itself */}
      <section className="border-b border-border bg-secondary-background py-16 lg:py-24">
        <div className="layout-standard max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Completely Free</p>
            <h1 className="mb-5 font-poppins text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl">
              Get Your Free Website Audit
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-foreground sm:text-lg">
              Enter your website address and get an instant speed report. We&apos;ll then email you a detailed audit of
              what&apos;s holding your business back, and your single biggest opportunity right now.
            </p>
          </div>

          <FreeAuditFlow />
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border py-10">
        <div className="layout-standard">
          <div className="grid grid-cols-2 gap-6 divide-border lg:grid-cols-4 lg:divide-x">
            {socialProof.map((s) => (
              <div key={s.label} className="flex flex-col items-center px-4 text-center">
                <span className="mb-1 font-poppins text-3xl font-bold leading-none text-primary md:text-4xl">{s.value}</span>
                <span className="text-xs uppercase tracking-widest text-paragraph">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="mb-8 font-poppins text-2xl font-semibold text-heading sm:text-3xl">What&apos;s Included in Your Audit</h2>
              <div className="space-y-5">
                {auditIncludes.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-heading">{item.title}</p>
                      <p className="mt-0.5 text-sm text-paragraph">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <div className="mb-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mb-4 leading-relaxed text-foreground">
                &ldquo;The audit alone was worth more than I expected. They identified three issues I had no idea
                about. We fixed them and saw a 40% increase in leads within 30 days.&rdquo;
              </p>
              <p className="text-sm font-semibold text-heading">James T.</p>
              <p className="text-xs text-paragraph">Owner · Home Services Company · Australia</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
