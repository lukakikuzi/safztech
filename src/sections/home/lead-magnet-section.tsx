"use client";

import React from "react";
import { Check, ArrowRight } from "lucide-react";

const auditIncludes = [
  "Full website & conversion rate audit",
  "SEO opportunity score & quick wins",
  "Lead generation gap analysis",
  "Custom 30-day growth roadmap",
  "Revenue potential projection",
];

function LeadMagnetSection() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-padding-standard border-t border-primary/20 bg-primary/5">
      <div className="layout-standard section-padding-standard">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Copy */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Free For You
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins mb-6">
              GET YOUR FREE DIGITAL GROWTH AUDIT
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-8">
              Not sure where to start? We&apos;ll audit your digital presence
              in 20 minutes and show you exactly what&apos;s holding your
              business back — and the biggest opportunity in front of you.
              No cost. No obligation.
            </p>

            <ul className="space-y-4">
              {auditIncludes.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — CTA card */}
          <div className="border border-primary/30 bg-background p-10 flex flex-col items-center text-center gap-6">
            <div className="text-5xl font-bold text-primary font-poppins">Free</div>
            <p className="text-heading font-semibold text-xl font-poppins">
              20-Minute Strategy Session
            </p>
            <p className="text-paragraph leading-relaxed">
              Our clients typically see 40–70% improvements in lead quality
              and 2–3× ROI within the first 90 days.
            </p>
            <button
              onClick={scrollToContact}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 hover:bg-primary-hover transition-colors duration-200 text-lg"
            >
              Claim Your Free Audit
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-paragraph text-xs">
              Usually responds within 2 hours · No credit card required
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LeadMagnetSection;
