"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

import SectionHeading from "@/components/ui/section-heading";
import { Check, Compass, Rocket, TrendingUp, Wrench, type LucideIcon } from "lucide-react";

interface Phase {
  number: string;
  title: string;
  timeline: string;
  Icon: LucideIcon;
  deliverables: string[];
}

const phases: Phase[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    timeline: "Week 1–2",
    Icon: Compass,
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
    Icon: Wrench,
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
    Icon: Rocket,
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
    Icon: TrendingUp,
    deliverables: [
      "Continuous A/B testing & optimisation",
      "Expand to additional channels",
      "Conversion rate improvement sprints",
      "Typical outcome: 2–3× revenue growth",
    ],
  },
];

// Road waypoints in the SVG's 100 x 400 viewBox; each phase gets 100 units of height.
const ROAD_PATH =
  "M43 0 L43 50 C43 100 57 100 57 150 C57 200 43 200 43 250 C43 300 57 300 57 350 L57 400";

// Each node lights up once the scroll-driven road highlight reaches it.
const NODE_THRESHOLDS = [0, 1, 2, 3].map((i) => 0.125 + i * 0.25);

function useRoadProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const clipPath = useTransform(
    scrollYProgress,
    (v) => `inset(0 0 ${(1 - Math.min(Math.max(v, 0), 1)) * 100}% 0)`,
  );
  const barHeight = useTransform(
    scrollYProgress,
    (v) => `${Math.min(Math.max(v, 0), 1) * 100}%`,
  );
  const [active, setActive] = useState(0);

  const update = (v: number) =>
    setActive(NODE_THRESHOLDS.filter((t) => v >= t - 0.03).length);

  useMotionValueEvent(scrollYProgress, "change", update);

  return { ref, clipPath, barHeight, active };
}

function PhaseNode({
  phase,
  active,
  className = "",
}: {
  phase: Phase;
  active: boolean;
  className?: string;
}) {
  const { Icon } = phase;
  return (
    <div className={`flex-shrink-0 ${className}`}>
      <div
        className={`relative w-20 h-20 rounded-full p-1.5 transition-all duration-500 ${
          active
            ? "bg-gradient-to-br from-primary/50 to-primary/10 shadow-[0_0_34px_rgba(255,215,0,0.55)] scale-100"
            : "bg-white/5 shadow-none scale-90"
        }`}
      >
        <div
          className={`w-full h-full rounded-full bg-background border flex items-center justify-center transition-colors duration-500 ${
            active ? "border-primary/70" : "border-border"
          }`}
        >
          <Icon
            className={`w-8 h-8 transition-colors duration-500 ${
              active ? "text-primary" : "text-paragraph/60"
            }`}
          />
        </div>
        <span
          className={`absolute -top-1 -right-1 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center font-poppins transition-colors duration-500 ${
            active
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-paragraph"
          }`}
        >
          {phase.number}
        </span>
      </div>
    </div>
  );
}

function PhaseCard({
  phase,
  highlight,
  active,
}: {
  phase: Phase;
  highlight: boolean;
  active: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 relative overflow-hidden backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-700 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:pointer-events-none ${
        active ? "opacity-100 translate-y-0" : "opacity-40 translate-y-4"
      } ${
        highlight
          ? "border-primary/40 bg-primary/10"
          : "border-white/15 bg-white/[0.06]"
      }`}
    >
      <div className="relative flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="text-primary text-[11px] font-bold tracking-widest block mb-0.5">
            PHASE {phase.number}
          </span>
          <h3 className="text-lg font-semibold text-heading font-poppins leading-snug">
            {phase.title}
          </h3>
        </div>
        <span className="text-[11px] bg-primary/10 text-primary border border-primary/20 rounded-full px-2.5 py-0.5 whitespace-nowrap flex-shrink-0">
          {phase.timeline}
        </span>
      </div>

      <ul className="relative space-y-2">
        {phase.deliverables.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground text-[13px] leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessSection() {
  const desktop = useRoadProgress();
  const mobile = useRoadProgress();

  return (
    <section className="relative overflow-hidden section-padding-standard border-t border-border">
      {/* Side glows: they sit out in the page padding, not behind the cards */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute -right-40 top-[38%] w-96 h-96 rounded-full bg-contrast/20 blur-3xl" />
        <div className="absolute -left-40 top-[22%] w-96 h-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -left-40 top-[68%] w-96 h-96 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="relative z-10 layout-standard section-padding-standard">

        <SectionHeading title="From vision to revenue in 4 phases.">
          A proven, repeatable process that takes you from first call to
          measurable growth, with full transparency at every step.
        </SectionHeading>

        {/* Desktop: winding road */}
        <div
          ref={desktop.ref}
          className="hidden lg:grid relative"
          style={{ gridTemplateRows: "repeat(4, minmax(17rem, 1fr))" }}
        >
          <svg
            aria-hidden
            className="absolute inset-0 w-full h-full [mask-image:linear-gradient(to_bottom,transparent,black_6%,black_94%,transparent)]"
            viewBox="0 0 100 400"
            preserveAspectRatio="none"
          >
            <path
              d={ROAD_PATH}
              fill="none"
              stroke="#2b2b30"
              strokeWidth="64"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={ROAD_PATH}
              fill="none"
              stroke="#111113"
              strokeWidth="54"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={ROAD_PATH}
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.22"
              strokeWidth="3"
              strokeDasharray="14 14"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Gold highlight that follows the scroll, revealed top to bottom */}
          <motion.svg
            aria-hidden
            className="absolute inset-0 w-full h-full [filter:drop-shadow(0_0_6px_rgba(255,215,0,0.85))]"
            style={{ clipPath: desktop.clipPath }}
            viewBox="0 0 100 400"
            preserveAspectRatio="none"
          >
            <path
              d={ROAD_PATH}
              fill="none"
              stroke="#ffd700"
              strokeWidth="4"
              strokeDasharray="14 14"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </motion.svg>

          {phases.map((phase, idx) => {
            const nodeOnLeft = idx % 2 === 0;
            const active = desktop.active > idx;
            return (
              <div
                key={phase.number}
                className={`relative flex items-center ${
                  nodeOnLeft ? "justify-end" : "justify-start"
                }`}
              >
                <PhaseNode
                  phase={phase}
                  active={active}
                  className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 ${
                    nodeOnLeft ? "left-[43%]" : "left-[57%]"
                  }`}
                />
                <div className="w-[40%]">
                  <PhaseCard phase={phase} highlight={idx === 3} active={active} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / tablet: straight road down the left */}
        <div ref={mobile.ref} className="lg:hidden relative">
          <div
            aria-hidden
            className="absolute left-10 top-0 bottom-0 w-3 -translate-x-1/2 bg-[#111113] border-x-2 border-[#2b2b30] [mask-image:linear-gradient(to_bottom,transparent,black_4%,black_96%,transparent)]"
          >
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l-2 border-dashed border-white/25" />
            <motion.div
              className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-primary shadow-[0_0_8px_rgba(255,215,0,0.9)]"
              style={{ height: mobile.barHeight }}
            />
          </div>

          <div className="space-y-8">
            {phases.map((phase, idx) => {
              const active = mobile.active > idx;
              return (
                <div key={phase.number} className="relative flex items-start gap-5">
                  <PhaseNode
                    phase={phase}
                    active={active}
                    className="scale-75 origin-top-left -mr-3"
                  />
                  <div className="flex-1 min-w-0">
                    <PhaseCard phase={phase} highlight={idx === 3} active={active} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-paragraph text-sm mt-10">
          Average time from first call to first results:{" "}
          <span className="text-heading font-semibold">30–60 days.</span>
        </p>

      </div>
    </section>
  );
}

export default ProcessSection;
