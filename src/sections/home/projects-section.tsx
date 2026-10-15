"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type AnimationPlaybackControls,
  type MotionValue,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import SectionHeading from "@/components/ui/section-heading";
import { caseStudies, typeBadgeStyle, type CaseStudy } from "@/data/case-studies";

const N = caseStudies.length;
const STEP = 360 / N;
const RADIUS = 270;
const ACTIVE_ANGLE = 180; // the left-most point of the wheel faces the copy
const AUTO_MS = 7000;
const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EXPO_OUT } },
};

function WheelItem({
  study,
  index,
  rot,
  active,
  progress,
  onSelect,
}: {
  study: CaseStudy;
  index: number;
  rot: MotionValue<number>;
  active: boolean;
  progress: MotionValue<number>;
  onSelect: (i: number) => void;
}) {
  const angle = useTransform(rot, (r) => r + index * STEP);
  const upright = useTransform(angle, (a) => -a);

  return (
    <motion.div style={{ rotate: angle }} className="absolute left-0 top-0 h-0 w-0">
      <motion.div style={{ x: RADIUS }} className="absolute left-0 top-0 h-0 w-0">
        <motion.button
          type="button"
          onClick={() => onSelect(index)}
          aria-label={`Show ${study.client}`}
          aria-current={active}
          style={{ rotate: upright }}
          animate={{ scale: active ? 1.7 : 1 }}
          whileHover={{ scale: active ? 1.7 : 1.22 }}
          transition={{ duration: 0.7, ease: EXPO_OUT }}
          className="absolute -left-9 -top-9 h-[4.5rem] w-[4.5rem]"
        >
          <span
            className={`relative block h-full w-full overflow-hidden rounded-full border-2 bg-card transition-colors duration-500 ${
              active ? "border-primary" : "border-white/20"
            }`}
          >
            <Image
              src={study.img.src}
              alt=""
              fill
              sizes="120px"
              className={`object-cover object-top transition-opacity duration-500 ${
                active ? "opacity-100" : "opacity-60"
              }`}
            />
          </span>
          {active && (
            <svg
              aria-hidden
              viewBox="0 0 100 100"
              className="pointer-events-none absolute -inset-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] -rotate-90"
            >
              <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2.5" />
              <motion.circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#ffd700"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ pathLength: progress }}
              />
            </svg>
          )}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function ProjectsSection() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const rot = useMotionValue(ACTIVE_ANGLE);
  // One 0 to 1 clock drives both the progress ring and the auto-advance, so
  // the two can never drift apart or get stuck out of sync.
  const progress = useMotionValue(0);
  const clock = useRef<AnimationPlaybackControls | null>(null);
  const pausedRef = useRef(false);
  const selectRef = useRef<(i: number) => void>(() => {});

  const select = useCallback(
    (i: number) => {
      setPrev(active);
      setActive(i);
      // A click should restart the countdown even if the pointer is still over the panel.
      setPaused(false);
      const current = rot.get();
      const target = ACTIVE_ANGLE - i * STEP;
      const delta = ((target - current + 540) % 360) - 180;
      animate(rot, current + delta, { duration: reduced ? 0.01 : 1.1, ease: EXPO_OUT });
    },
    [active, reduced, rot],
  );

  const go = (dir: 1 | -1) => select((active + dir + N) % N);

  useEffect(() => {
    selectRef.current = select;
  }, [select]);

  useEffect(() => {
    pausedRef.current = paused;
    if (paused) clock.current?.pause();
    else clock.current?.play();
  }, [paused]);

  useEffect(() => {
    progress.set(0);
    if (reduced) return;
    const controls = animate(progress, 1, {
      duration: AUTO_MS / 1000,
      ease: "linear",
      onComplete: () => selectRef.current((active + 1) % N),
    });
    if (pausedRef.current) controls.pause();
    clock.current = controls;
    return () => controls.stop();
  }, [active, reduced, progress]);

  const renderCopy = (st: CaseStudy) => (
    <>
              <motion.span
                variants={item}
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${typeBadgeStyle[st.type]}`}
              >
                {st.type}
              </motion.span>

              <motion.h3
                variants={item}
                className="mt-4 font-poppins text-3xl font-extrabold leading-[1.02] tracking-tight text-heading sm:text-5xl lg:text-6xl"
              >
                {st.client}
              </motion.h3>
              <motion.p variants={item} className="mt-2 text-paragraph">
                {st.industry}
              </motion.p>

              <motion.p
                variants={item}
                className="mt-5 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-lg text-foreground line-clamp-3"
              >
                {st.challenge}
              </motion.p>

              <motion.ul variants={item} className="mt-7 grid max-w-xl grid-cols-2 gap-3">
                {st.results.slice(0, 4).map((r) => (
                  <li
                    key={r.label}
                    className="rounded-2xl border border-white/15 bg-black/50 px-3 py-3 sm:px-4 backdrop-blur-sm"
                  >
                    <span className="block bg-gradient-to-br from-[#FFD84A] to-[#F4A900] bg-clip-text font-poppins text-2xl font-extrabold text-transparent">
                      {r.value}
                    </span>
                    <span className="block text-sm font-semibold text-heading">{r.label}</span>
                    <span className="block text-xs text-paragraph">{r.sub}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={`/case-studies/${st.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                >
                  View case study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                {st.liveUrl && (
                  <a
                    href={st.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-heading transition-colors hover:border-primary hover:text-primary"
                  >
                    Visit {st.domain}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </motion.div>
    </>
  );

  return (
    <section id="projects" className="bg-background section-padding-standard">
      <div className="layout-standard section-padding-standard">
        <SectionHeading title="Real work for real clients.">
          Pick a project on the wheel. Here is what we built and how we got it
          selling, across software and growth.
        </SectionHeading>

        <div
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          className="relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-black lg:min-h-[720px]"
        >
          {/* Background: the focused project, crossfading with a slow zoom */}
          <div aria-hidden className="absolute inset-0 -z-10 max-md:bottom-auto max-md:h-[300px] max-md:overflow-hidden">
            {[prev, active].map(
              (idx) =>
                idx !== null && (
                  <div
                    key={`${caseStudies[idx].slug}-${idx === active ? "in" : "out"}`}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      idx === active ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="animate-kenburns absolute inset-0">
                      <Image
                        src={(caseStudies[idx].bgImg ?? caseStudies[idx].img).src}
                        alt=""
                        fill
                        quality={100}
                        sizes="(min-width: 1024px) 1600px, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                ),
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-black/5 max-xl:from-black/85 max-xl:via-black/65 max-xl:to-black/60 max-md:bg-gradient-to-b max-md:from-black/0 max-md:via-black/55 max-md:via-60% max-md:to-black" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 max-md:hidden" />
          </div>

          {/* Copy */}
          <div className="relative z-10 flex flex-1 flex-col justify-center px-5 py-8 max-md:pt-[250px] sm:px-7 sm:py-10 lg:min-h-[720px] lg:px-14 xl:w-[56%]">
            <p className="mb-6 text-sm font-semibold tracking-wide text-paragraph">
              <span className="text-primary">{String(active + 1).padStart(2, "0")}</span>
              {" / "}
              {String(N).padStart(2, "0")}
            </p>

            {/* Every project's copy sits in the same grid cell, so the panel is always as tall as the tallest one and never jumps. */}
            <div className="grid">
              {caseStudies.map((st, i) =>
                i === active ? (
                  <motion.div key={st.slug} variants={container} initial="hidden" animate="show" className="col-start-1 row-start-1">
                    {renderCopy(st)}
                  </motion.div>
                ) : (
                  <div key={st.slug} aria-hidden className="pointer-events-none invisible col-start-1 row-start-1">
                    {renderCopy(st)}
                  </div>
                ),
              )}
            </div>

            <div className="mt-8 flex items-center gap-3 sm:mt-10">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-heading transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-heading transition-colors hover:border-primary hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Wheel (wide desktop) */}
          <div aria-label="Projects" className="pointer-events-none absolute right-[70px] top-1/2 z-10 hidden xl:block">
            <div
              aria-hidden
              className="absolute rounded-full border border-white/10"
              style={{ width: RADIUS * 2, height: RADIUS * 2, left: -RADIUS, top: -RADIUS }}
            />
            <div
              aria-hidden
              className="animate-orbit-spin absolute rounded-full border border-dashed border-primary/25"
              style={{ width: RADIUS * 2 + 150, height: RADIUS * 2 + 150, left: -RADIUS - 75, top: -RADIUS - 75 }}
            />
            <div className="pointer-events-auto">
              {caseStudies.map((s, i) => (
                <WheelItem
                  key={s.slug}
                  study={s}
                  index={i}
                  rot={rot}
                  active={i === active}
                  progress={progress}
                  onSelect={select}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails (mobile and tablet) */}
          <div className="relative z-10 flex gap-3 overflow-x-auto px-5 pb-5 pt-1 [scrollbar-width:none] xl:hidden [&::-webkit-scrollbar]:hidden">
            {caseStudies.map((s, i) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => select(i)}
                aria-label={`Show ${s.client}`}
                aria-current={i === active}
                className={`relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-2 transition-all ${
                  i === active ? "scale-110 border-primary" : "border-white/25 opacity-70"
                }`}
              >
                <Image src={s.img.src} alt="" fill sizes="56px" className="object-cover object-top" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
