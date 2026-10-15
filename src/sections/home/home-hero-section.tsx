import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import HeroScrollButton from "./hero-scroll-button";
import HeroPlanet from "./hero-planet";
import DistantPlanet from "./distant-planet";

// A gold planet rising behind the headline. Pure CSS and SVG: it paints from the first
// frame and needs no JavaScript to reveal the content.

// Fixed positions (no randomness) so server and client markup always match.
const meteors = [
  { left: "6%", top: "10%", dur: "4.2s", delay: "0.4s" },
  { left: "22%", top: "42%", dur: "5s", delay: "2.1s" },
  { left: "38%", top: "6%", dur: "3.8s", delay: "3.6s" },
  { left: "55%", top: "34%", dur: "4.6s", delay: "1.2s" },
  { left: "70%", top: "8%", dur: "5.4s", delay: "4.4s" },
  { left: "86%", top: "30%", dur: "4s", delay: "2.9s" },
  { left: "14%", top: "62%", dur: "4.8s", delay: "5.2s" },
  { left: "64%", top: "58%", dur: "5.2s", delay: "0.9s" },
  { left: "92%", top: "56%", dur: "4.4s", delay: "3.3s" },
];
const stars = [
  [6, 12], [14, 30], [21, 8], [33, 22], [39, 5], [48, 28], [55, 14], [67, 24],
  [73, 7], [82, 20], [89, 31], [95, 12], [12, 44], [29, 40], [58, 38], [86, 42],
  [4, 58], [18, 66], [36, 54], [47, 72], [64, 60], [77, 70], [91, 56], [97, 78], [8, 84], [24, 90], [52, 88], [72, 92], [88, 86],
];

// Small distant planets in the empty sky, kept away from the centre column where the text sits.
const distantPlanets = [
  { left: "9%", top: "26%", size: 52, freq: "0.015 0.2", seed: 3, r: "0.55 0.95 0.7 1 0.6", g: "0.2 0.5 0.28 0.62 0.25", b: "0.02 0.15 0.05 0.2 0.04", glow: "255,150,40", dur: "9s", delay: "0s", hideMobile: true },
  { left: "88%", top: "19%", size: 30, freq: "0.02 0.14", seed: 8, r: "0.85 1 0.9 1", g: "0.65 0.92 0.75 0.95", b: "0.3 0.6 0.4 0.65", glow: "255,225,150", dur: "7s", delay: "1.5s", hideMobile: true },
  { left: "90%", top: "48%", size: 70, freq: "0.012 0.3", seed: 5, r: "0.5 0.9 0.6 0.95 0.55", g: "0.22 0.55 0.3 0.6 0.25", b: "0 0.12 0.03 0.15 0.02", glow: "255,120,30", dur: "11s", delay: "0.8s", ring: true },
  { left: "15%", top: "52%", size: 24, freq: "0.07", seed: 12, r: "0.9 1 0.8 1", g: "0.55 0.85 0.45 0.8", b: "0.05 0.25 0.02 0.2", glow: "255,190,60", dur: "8s", delay: "2.4s" },
  { left: "74%", top: "11%", size: 16, freq: "0.05 0.12", seed: 21, r: "0.8 1 0.7 1", g: "0.35 0.6 0.3 0.55", b: "0.05 0.2 0.03 0.15", glow: "255,140,50", dur: "6s", delay: "3s" },
];
const brightStars = [[24, 18], [68, 34], [40, 46], [82, 62], [10, 72], [56, 26]];

const headlineLines = [
  { words: ["Software", "that", "sells."], keyIndex: 2 },
  { words: ["Growth", "that", "scales."], keyIndex: 2 },
];

function HomeHeroSection() {
  return (
    <section data-hero className="relative isolate flex min-h-[100svh] flex-col items-center overflow-hidden bg-background px-5 pb-64 pt-20 lg:h-[100svh]">
      <HeroPlanet />

      {/* Intro: blueprint grid plus the planet's outline drawn across the top */}
      <div aria-hidden className="bp-grid pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(rgba(255,215,0,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.14)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_55%,black,transparent_75%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2"
        style={{ width: "min(1700px, 140vw)", aspectRatio: "1", bottom: "calc(280px - min(1700px, 140vw))" }}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
          <path className="bp-arc" pathLength={1} d="M0.4 50 A49.6 49.6 0 0 1 99.6 50" fill="none" stroke="#ffd700" strokeWidth="0.12" />
        </svg>
      </div>

      {/* Blueprint markers where the stars and small planets will appear */}
      <div aria-hidden className="bp-marks pointer-events-none absolute inset-0 -z-10 overflow-hidden text-[rgba(255,215,0,0.7)]">
        {[...stars, ...brightStars].map(([l, t], i) => (
          <span
            key={`m${i}`}
            className="absolute h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 [background:linear-gradient(currentColor,currentColor)_center/1px_100%_no-repeat,linear-gradient(currentColor,currentColor)_center/100%_1px_no-repeat]"
            style={{ left: `${l}%`, top: `${t}%` }}
          />
        ))}
        {distantPlanets.map(({ left, top, size, hideMobile }, i) => (
          <span
            key={`mp${i}`}
            className={`absolute rounded-full border border-dashed border-[rgba(255,215,0,0.7)] ${hideMobile ? "max-md:hidden" : ""}`}
            style={{ left, top, width: size, height: size }}
          />
        ))}
      </div>

      {/* Fade the planet into the section below instead of cutting it off */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-b from-transparent to-background" />

      {/* Night sky: stars everywhere behind the content, meteors only in the strip above the headline */}
      <div aria-hidden className="intro-sky pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {stars.map(([l, t], i) => (
          <span
            key={i}
            className="animate-twinkle absolute h-[2px] w-[2px] rounded-full bg-white"
            style={{ left: `${l}%`, top: `${t}%`, ["--dur" as string]: `${2.4 + (i % 4)}s`, ["--delay" as string]: `${(i % 7) * 0.6}s` }}
          />
        ))}
        {brightStars.map(([l, t], i) => (
          <span
            key={`b${i}`}
            className="animate-twinkle absolute h-[3px] w-[3px] rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.55)]"
            style={{ left: `${l}%`, top: `${t}%`, ["--dur" as string]: `${3 + (i % 3)}s`, ["--delay" as string]: `${i * 0.8}s` }}
          />
        ))}
        {distantPlanets.map(({ left, top, dur, delay, hideMobile, ...pl }, i) => (
          <span
            key={`p${i}`}
            className={`animate-float-y absolute ${hideMobile ? "max-md:hidden" : ""}`}
            style={{ left, top, animationDuration: dur, animationDelay: delay }}
          >
            <DistantPlanet id={i} {...pl} />
          </span>
        ))}
      </div>

      {/* Meteors fall all over the sky, always behind the content */}
      <div aria-hidden className="intro-sky pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {meteors.map((m, i) => (
          <span
            key={i}
            className="animate-meteor absolute h-px w-28 bg-gradient-to-r from-transparent via-white/50 to-white"
            style={{ left: m.left, top: m.top, ["--dur" as string]: m.dur, ["--delay" as string]: m.delay }}
          />
        ))}
      </div>

      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <p
            className="hero-rise mb-4 font-montserrat text-[clamp(0.85rem,1.2vw,1.1rem)] font-semibold text-[#9A958B]"
            style={{ ["--d" as string]: "0.1s" }}
          >
            Software house &amp; digital growth partner
          </p>

          <h1 className="font-montserrat font-extrabold tracking-[-0.035em] leading-[1.02] text-heading text-[clamp(1.8rem,min(6.2vw,9.5svh),5.5rem)]">
            {headlineLines.map((line, li) => (
              <span key={li} className="block">
                {line.words.map((word, wi) => {
                  const isKey = wi === line.keyIndex;
                  return (
                    <React.Fragment key={word}>
                      {isKey ? (
                        <span className="inline-block [filter:drop-shadow(0_0_18px_rgba(252,196,40,0.7))]">
                          <span className="inline-block bg-gradient-to-br from-[#FFD84A] to-[#F4A900] bg-clip-text text-transparent">
                            {word}
                          </span>
                        </span>
                      ) : (
                        <span className="inline-block">{word}</span>
                      )}
                      {wi < line.words.length - 1 ? " " : null}
                    </React.Fragment>
                  );
                })}
              </span>
            ))}
          </h1>

          <p
            className="hero-rise mt-4 max-w-2xl text-base leading-relaxed md:mt-5 md:text-lg text-foreground"
            style={{ ["--d" as string]: "0.7s" }}
          >
            We build high-converting websites, mobile apps and custom software,
            then market them with SEO, paid ads and conversion optimization.
            Leads, customers and revenue, not just a website.
          </p>

          <div
            className="hero-rise mt-6 flex flex-wrap justify-center gap-3"
            style={{ ["--d" as string]: "0.9s" }}
          >
            <HeroScrollButton
              target="#contact"
              className="group flex items-center gap-2 rounded-full border border-[rgba(255,215,0,0.55)] bg-gradient-to-br from-[rgba(255,200,0,0.45)] to-[rgba(255,140,0,0.18)] px-7 py-3 text-base font-semibold text-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.55),inset_0_-1.5px_1px_rgba(255,255,255,0.18),0_12px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-[10px] backdrop-saturate-[1.6] [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] transition-all hover:from-[rgba(255,200,0,0.6)] hover:to-[rgba(255,140,0,0.3)]"
            >
              Get Free Growth Audit
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </HeroScrollButton>
            <Link
              href="/case-studies"
              className="rounded-full border border-white/25 bg-gradient-to-br from-white/[0.16] to-white/[0.04] px-7 py-3 text-base font-semibold text-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.55),inset_0_-1.5px_1px_rgba(255,255,255,0.18),0_12px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-[10px] backdrop-saturate-[1.6] [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] transition-all hover:from-white/25 hover:to-white/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HomeHeroSection;
