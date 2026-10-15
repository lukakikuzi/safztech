"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
};

const AUTO_MS = 6000;
const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const initials = (name: string) =>
  name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("");

// Shortest signed distance around the loop, so the deck wraps seamlessly.
const offsetOf = (i: number, active: number, n: number) => {
  let d = (i - active) % n;
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
};

export default function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const n = items.length;
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: 1 | -1) => setActive((a) => (a + dir + n) % n), [n]);

  useEffect(() => {
    if (paused || reduced) return;
    const id = setTimeout(() => go(1), AUTO_MS);
    return () => clearTimeout(id);
  }, [active, paused, reduced, go]);

  return (
    <div
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client reviews"
    >
      <div className="relative h-[27rem] sm:h-[25rem]">
        {items.map((t, i) => {
          const off = offsetOf(i, active, n);
          const far = Math.abs(off) > 2;
          const isActive = off === 0;
          return (
            <motion.figure
              key={t.name}
              aria-hidden={!isActive}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) go(1);
                else if (info.offset.x > 70) go(-1);
              }}
              onClick={() => !isActive && !far && setActive(i)}
              initial={false}
              animate={{
                x: `${off * 108}%`,
                scale: 1 - Math.min(Math.abs(off), 2) * 0.12,
                opacity: far ? 0 : isActive ? 1 : 0.45,
                rotateY: off * -10,
              }}
              transition={{ duration: far || reduced ? 0 : 0.8, ease: EXPO_OUT }}
              style={{ zIndex: 10 - Math.abs(off), transformPerspective: 1200 }}
              className={`glass-clay absolute left-1/2 top-4 -ml-[min(15rem,42vw)] flex h-[23rem] w-[min(30rem,84vw)] flex-col p-8 sm:h-[21rem] ${
                isActive ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
              } ${far ? "pointer-events-none" : ""}`}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary font-poppins text-sm font-bold text-primary-foreground">
                  {initials(t.name)}
                </span>
                <figcaption className="min-w-0 flex-1">
                  <span className="block font-poppins font-semibold text-heading">{t.name}</span>
                  <span className="block text-sm text-paragraph">
                    {t.role}, {t.company}
                  </span>
                </figcaption>
              </div>

              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-5 flex items-center justify-between gap-3 pt-1">
                <span className="whitespace-nowrap rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {t.industry}
                </span>
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.figure>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous review"
          className="glass-clay flex h-11 w-11 items-center justify-center !rounded-full text-heading"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show review ${i + 1}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === active ? "w-8 bg-primary" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next review"
          className="glass-clay flex h-11 w-11 items-center justify-center !rounded-full text-heading"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
