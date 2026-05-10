"use client";

import React from "react";
import { Check, X, Zap } from "lucide-react";

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
    <section className="section-padding-standard border-t border-border bg-secondary-background">
      <div className="layout-standard section-padding-standard">

        {/* Header */}
        <div className="lg:mb-16 mb-12 flex flex-col items-center text-center gap-4">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            Our Advantage
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
            WHY BOTH BEATS EITHER
          </h2>
          <p className="text-paragraph text-lg max-w-2xl">
            Most agencies do one thing well. We combine both so the whole is
            worth far more than the sum of its parts.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid lg:grid-cols-3 gap-0 border border-border">
          {columns.map((col, i) => (
            <div
              key={col.label}
              className={`p-8 flex flex-col ${
                col.highlight
                  ? "bg-primary/5 border-x border-primary/30"
                  : i === 0
                  ? ""
                  : "border-l border-border"
              }`}
            >
              {/* Column header */}
              <div className="mb-6 min-h-[64px]">
                {col.highlight && (
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-primary text-xs font-bold tracking-widest">
                      {col.sublabel}
                    </span>
                  </div>
                )}
                <h3
                  className={`text-xl font-semibold font-poppins ${
                    col.highlight ? "text-primary" : "text-heading"
                  }`}
                >
                  {col.label}
                </h3>
              </div>

              {/* Pros */}
              <ul className="space-y-3 mb-6 flex-1">
                {col.pros.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        col.highlight ? "text-primary" : "text-emerald-500"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        col.highlight ? "text-foreground" : "text-foreground/70"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}

                {/* Cons */}
                {col.cons.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500/70" />
                    <span className="text-sm text-foreground/40 line-through">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <p
                className={`text-sm font-medium border-t pt-5 ${
                  col.highlight
                    ? "border-primary/20 text-primary"
                    : "border-border text-paragraph"
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
