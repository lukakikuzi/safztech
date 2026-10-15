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
    <section className="on-bright bg-[linear-gradient(135deg,#FFD84A_0%,#F4A900_40%,#F4A900_100%)] text-primary-foreground py-20 lg:py-28">
      <div className="layout-standard">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">

          <div>
            <h2 className="font-poppins font-extrabold tracking-tight leading-[1.02] text-[1.9rem] sm:text-4xl md:text-6xl lg:text-7xl">
              Get your free digital growth audit.
            </h2>
            <p className="mt-5 text-base sm:mt-7 sm:text-lg lg:text-xl leading-relaxed max-w-2xl text-primary-foreground/80">
              Not sure where to start? We&apos;ll audit your digital presence
              in 20 minutes and show you exactly what&apos;s holding your
              business back, and the biggest opportunity in front of you.
              No cost. No obligation.
            </p>

            <ul className="mt-9 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {auditIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 font-medium">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground text-[#F4A900]">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-[linear-gradient(150deg,#1a1405_0%,#2b1f06_55%,#3a2400_100%)] shadow-[0_30px_60px_-30px_rgba(60,30,0,0.8)] text-heading p-8 lg:p-10 flex flex-col gap-6">
            <p className="font-poppins font-extrabold text-5xl sm:text-6xl bg-[linear-gradient(135deg,#FFD84A,#F4A900)] bg-clip-text text-transparent">Free</p>
            <p className="font-poppins font-semibold text-2xl">
              20-minute strategy session
            </p>
            <p className="text-paragraph leading-relaxed">
              Our clients typically see 40–70% improvements in lead quality
              and 2–3× ROI within the first 90 days.
            </p>
            <button
              onClick={scrollToContact}
              className="group flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#FFD84A,#F4A900)] text-primary-foreground font-semibold px-8 py-4 text-lg hover:brightness-110 transition"
            >
              Claim your free audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-paragraph text-sm">
              Usually responds within 2 hours · No credit card required
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LeadMagnetSection;
