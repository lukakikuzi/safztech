import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Code2, Hammer, Rocket, TrendingUp, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  watermark: string;
  eyebrow?: string;
  tagline: string;
  points: string[];
  href: string;
  cta: string;
  highlight?: boolean;
}

function ServiceCard({
  Icon,
  title,
  watermark,
  eyebrow,
  tagline,
  points,
  href,
  cta,
  highlight = false,
}: ServiceCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-8 lg:p-10 flex flex-col border ${
        highlight
          ? "border-primary/40 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent"
          : "border-border bg-gradient-to-br from-white/[0.06] to-transparent"
      }`}
    >
      <span
        aria-hidden
        className="absolute -right-3 -top-6 text-[7rem] lg:text-[8rem] font-bold font-poppins leading-none text-white/[0.025] select-none"
      >
        {watermark}
      </span>

      <div className="relative flex items-center gap-4 mb-5">
        <div className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          {eyebrow && (
            <p className="text-xs tracking-widest text-paragraph uppercase mb-0.5">
              {eyebrow}
            </p>
          )}
          <h3 className="text-3xl font-bold text-heading font-poppins">{title}</h3>
        </div>
      </div>

      <p className="relative text-primary text-sm font-medium mb-6">{tagline}</p>

      <ul className="relative space-y-3 mb-8 flex-1">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-3 text-heading font-medium">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 border border-primary/40">
              <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
            </span>
            {point}
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="relative group flex items-center gap-2 text-primary text-sm font-semibold hover:gap-4 transition-all duration-200"
      >
        {cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

export function ServiceIntroCards() {
  return (
    <div className="grid lg:grid-cols-2 gap-6 mb-6">
      <ServiceCard
        Icon={Hammer}
        title="Build"
        watermark="Build"
        tagline="Software that works as hard as you do."
        points={[
          "Websites & web apps built to convert",
          "Mobile apps for iOS and Android",
          "E-commerce stores & custom platforms",
          "Integrations, CRM & automation",
        ]}
        href="/software-solutions"
        cta="See what we build"
      />
      <ServiceCard
        Icon={Rocket}
        title="Growth"
        watermark="Growth"
        tagline="Marketing that keeps your pipeline full."
        points={[
          "SEO & content that gets you found",
          "Google & Meta ad campaigns",
          "Lead generation & outreach",
          "Conversion optimisation & email",
        ]}
        href="/digital-marketing"
        cta="See how we grow you"
        highlight
      />
    </div>
  );
}

export function ServicePillarCards({
  softwareServices,
  growthServices,
}: {
  softwareServices: string[];
  growthServices: string[];
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 mb-8">
      <ServiceCard
        Icon={Code2}
        eyebrow="Pillar 01"
        title="Software Solutions"
        watermark="Software"
        tagline="“Build once, scale forever”"
        points={softwareServices}
        href="/software-solutions"
        cta="Explore Software Solutions"
      />
      <ServiceCard
        Icon={TrendingUp}
        eyebrow="Pillar 02"
        title="Digital Growth"
        watermark="Digital"
        tagline="“Continuous Growth Engine”"
        points={growthServices}
        href="/digital-marketing"
        cta="Explore Digital Growth"
        highlight
      />
    </div>
  );
}

export default ServiceIntroCards;
