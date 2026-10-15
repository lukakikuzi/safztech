import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import SectionHeading from "@/components/ui/section-heading";

const softwareServices = [
  "Custom Web Applications",
  "Mobile Apps (iOS & Android)",
  "Custom Software & SaaS Platforms",
  "E-Commerce Platforms",
  "CMS, CRM & Automation",
];

const growthServices = [
  "Lead Generation & Outreach",
  "SEO & Content Marketing",
  "Paid Advertising (Google & Meta)",
  "Conversion Rate Optimization",
  "Social Media Marketing",
  "YouTube Automation",
];

interface PanelProps {
  word: string;
  line: string;
  items: string[];
  href: string;
  cta: string;
  gold?: boolean;
  shot: { src: string; alt: string; url: string };
}

function Panel({ word, line, items, href, cta, gold = false, shot }: PanelProps) {
  return (
    <div
      className={`group/panel flex flex-col rounded-3xl p-8 lg:p-12 ${
        gold
          ? "bg-[linear-gradient(150deg,#FFE259_0%,#FFC107_42%,#F59E0B_75%,#E8710A_100%)] text-primary-foreground"
          : "border border-contrast/40 bg-gradient-to-br from-contrast-deep via-[#2a1300] to-card text-heading"
      }`}
    >
      {/* A real project, framed like a browser window */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-white/20 bg-black/60 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover/panel:-translate-y-1">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/50 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate rounded-full bg-white/10 px-3 py-0.5 text-[10px] text-white/70">{shot.url}</span>
        </div>
        <div className="relative aspect-[16/9]">
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-cover object-top transition-transform duration-700 group-hover/panel:scale-[1.04]"
          />
        </div>
      </div>

      <h3 className="font-poppins font-extrabold tracking-tight leading-none text-5xl sm:text-6xl lg:text-7xl">
        {word}
      </h3>
      <p className={`mt-4 text-base sm:text-lg ${gold ? "text-primary-foreground/75" : "text-paragraph"}`}>
        {line}
      </p>

      <ul className={`mt-10 mb-10 flex-1 divide-y ${gold ? "divide-black/15" : "divide-white/10"}`}>
        {items.map((item) => (
          <li key={item} className="py-3.5 text-base sm:text-lg font-medium">
            {item}
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`group inline-flex items-center gap-3 self-start rounded-full px-7 py-3.5 font-semibold transition-colors ${
          gold
            ? "bg-primary-foreground text-primary hover:bg-black"
            : "bg-primary text-primary-foreground hover:bg-primary-hover"
        }`}
      >
        {cta}
        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
      </Link>
    </div>
  );
}

function OurServicesSection() {
  return (
    <section id="services" className="section-padding-standard">
      <div className="layout-standard section-padding-standard">
        <SectionHeading title="We build it. Then we grow it.">
          Most agencies do one or the other. We do both, so your software
          attracts customers and your marketing has a platform that converts them.
        </SectionHeading>

        <div className="grid lg:grid-cols-2 gap-5">
          <Panel
            word="Build"
            line="Software that works as hard as you do."
            items={softwareServices}
            href="/software-solutions"
            cta="Explore software solutions"
            shot={{ src: "/images/admin-dashboard-project-img.png", alt: "Custom admin dashboard we built", url: "yourapp.com/dashboard" }}
          />
          <Panel
            gold
            word="Grow"
            line="Marketing that keeps your pipeline full."
            items={growthServices}
            href="/digital-marketing"
            cta="Explore digital growth"
            shot={{ src: "/images/case-studies/hero/lost-coast-aminos.webp", alt: "Storefront we grew with SEO and paid ads", url: "lostcoastaminos.com" }}
          />
        </div>

        <p className="mt-12 max-w-3xl font-poppins text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-heading">
          Traffic without great software is wasted.{" "}
          <span className="text-primary">Software without traffic is invisible.</span>
        </p>
      </div>
    </section>
  );
}

export default OurServicesSection;
