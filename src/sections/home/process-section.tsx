"use client";

import React from "react";
import { Check } from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Discovery & Strategy",
    timeline: "Week 1–2",
    deliverables: [
      "Deep-dive audit of your business & goals",
      "Competitor & market analysis",
      "Identify highest-impact opportunities",
      "Detailed roadmap & project timeline",
    ],
  },
  {
    number: "02",
    title: "Build & Setup",
    timeline: "Week 3–8",
    deliverables: [
      "Software / website development",
      "Marketing foundations configured",
      "Platform & tool integrations",
      "QA testing before anything goes live",
    ],
  },
  {
    number: "03",
    title: "Launch & Optimise",
    timeline: "Week 9–12",
    deliverables: [
      "Go live to market",
      "Initial ad & SEO campaigns launched",
      "Real-time monitoring & quick fixes",
      "First leads & wins start coming in",
    ],
  },
  {
    number: "04",
    title: "Scale & Grow",
    timeline: "Month 4+",
    deliverables: [
      "Continuous A/B testing & optimisation",
      "Expand to additional channels",
      "Conversion rate improvement sprints",
      "Typical outcome: 2–3× revenue growth",
    ],
  },
];

function ProcessSection() {
  return (
    <section className="section-padding-standard border-t border-border">
      <div className="layout-standard section-padding-standard">

        {/* Header */}
        <div className="lg:mb-16 mb-12 flex flex-col items-center text-center gap-4">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
            FROM VISION TO REVENUE IN 4 PHASES
          </h2>
          <p className="text-paragraph text-lg max-w-2xl">
            A proven, repeatable process that takes you from first call to
            measurable growth — with full transparency at every step.
          </p>
        </div>

        {/* Phases grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((phase, idx) => (
            <div
              key={phase.number}
              className={`border bg-card p-8 relative overflow-hidden ${
                idx === 3 ? "border-primary/30 bg-primary/5" : "border-border"
              }`}
            >
              {/* Watermark number */}
              <span className="absolute -right-4 -bottom-6 text-[8rem] font-bold text-white/5 select-none font-poppins leading-none">
                {phase.number}
              </span>

              {/* Phase header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-primary text-xs font-bold tracking-widest block mb-1">
                    PHASE {phase.number}
                  </span>
                  <h3 className="text-xl font-semibold text-heading font-poppins">
                    {phase.title}
                  </h3>
                </div>
                <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-3 py-1 whitespace-nowrap ml-4 flex-shrink-0">
                  {phase.timeline}
                </span>
              </div>

              {/* Deliverables */}
              <ul className="space-y-3 relative z-10">
                {phase.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-paragraph text-sm mt-8">
          Average time from first call to first results:{" "}
          <span className="text-heading font-semibold">30–60 days.</span>
        </p>

      </div>
    </section>
  );
}

export default ProcessSection;
