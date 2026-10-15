"use client";

import React from "react";
import { Check, X, Zap } from "lucide-react";

import SectionHeading from "@/components/ui/section-heading";

const columns = [
  {
    label: "Just Software",
    highlight: false,
    pros: ["Beautiful design", "Fast performance", "Fully functional"],
    cons: ["No traffic coming in", "No lead capture", "No growth system"],
    footer: "A great product nobody finds.",
  },
  {
    label: "Software + Growth",
    sublabel: "SAFZTECH",
    highlight: true,
    pros: [
      "Premium software built to convert",
      "Attracts your ideal customers",
      "Generates leads on autopilot",
      "Optimised for sales at every step",
      "Scales revenue month over month",
    ],
    cons: [],
    footer: "The complete growth machine.",
  },
  {
    label: "Just Growth",
    highlight: false,
    pros: ["Traffic & visibility", "Social awareness", "Ad campaigns running"],
    cons: ["Poor software to send traffic to", "Wasted ad spend", "Low conversion rates"],
    footer: "Traffic with nowhere good to go.",
  },
];

function SynergySection() {
  return (
    <section className="section-padding-standard bg-secondary-background">
      <div className="layout-standard section-padding-standard">
        <SectionHeading title="Why both beats either.">
          Most agencies do one thing well. We combine both so the whole is
          worth far more than the sum of its parts.
        </SectionHeading>

        {/* Comparison: the middle column is the gold slab */}
        <div className="grid lg:grid-cols-3 gap-5 items-stretch">
          {columns.map((col) => (
            <div
              key={col.label}
              className={`p-8 lg:p-10 flex flex-col rounded-3xl ${
                col.highlight
                  ? "bg-[linear-gradient(150deg,#FFE259_0%,#FFC107_42%,#F59E0B_75%,#E8710A_100%)] text-primary-foreground lg:-my-6 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8)]"
                  : "border border-white/10 bg-card"
              }`}
            >
              {/* Column header */}
              <div className="mb-6 min-h-[64px]">
                {col.highlight && (
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold tracking-wide">
                      {col.sublabel}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-extrabold font-poppins tracking-tight">
                  {col.label}
                </h3>
              </div>

              {/* Pros */}
              <ul className="space-y-3.5 mb-8 flex-1">
                {col.pros.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        col.highlight ? "text-primary-foreground" : "text-emerald-400"
                      }`}
                      strokeWidth={3}
                    />
                    <span
                      className={`text-base ${
                        col.highlight ? "font-medium" : "text-foreground"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}

                {/* Cons */}
                {col.cons.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400" strokeWidth={3} />
                    <span className="text-base text-paragraph">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <p
                className={`text-base font-semibold border-t pt-5 ${
                  col.highlight
                    ? "border-black/20"
                    : "border-white/10 text-paragraph"
                }`}
              >
                {col.footer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SynergySection;
