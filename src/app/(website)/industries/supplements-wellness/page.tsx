import React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  ShoppingCart,
  ShieldCheck,
  Search,
  Repeat,
  Mail,
  MousePointerClick,
  Star,
  BadgeAlert,
  MapPinOff,
  RefreshCcwDot,
  MessageSquareWarning,
} from "lucide-react";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata = GetPageMetadata({
  title: "Supplements & Wellness Website & Growth Services | SAFZTECH",
  description:
    "Compliant store builds, subscription systems, SEO and retention marketing built for supplement and wellness brands. Grow without risking your ad accounts.",
});

const stats = [
  { value: "$209.5B", label: "Global dietary supplement market size (2025)" },
  { value: "$72B", label: "U.S. supplement market size (2025)" },
  { value: "25%", label: "Of category revenue now sold online" },
  { value: "13%", label: "CAGR for online & subscription supplement sales" },
];

const problems = [
  {
    Icon: BadgeAlert,
    title: "Ad Accounts at Risk",
    desc: "Health claims that push too far can get your ad account flagged or banned, cutting off your biggest growth channel overnight.",
  },
  {
    Icon: MapPinOff,
    title: "Buried in a Crowded Search",
    desc: "Without real SEO, you're competing for visibility against thousands of supplement brands with bigger ad budgets.",
  },
  {
    Icon: RefreshCcwDot,
    title: "No Subscription or Repeat System",
    desc: "Without a subscription flow, most first-time buyers never reorder, and your customer acquisition cost never pays back.",
  },
  {
    Icon: MessageSquareWarning,
    title: "Weak Trust Signals",
    desc: "No third-party testing info, no real reviews, and no transparent labeling quietly costs you conversions in a skeptical category.",
  },
];

const services = [
  {
    Icon: ShoppingCart,
    title: "Compliant Store Build",
    tagline: "A store built to convert and stay compliant.",
    description:
      "Custom Shopify or headless builds with proper disclaimers, labeling, and claims review baked into the product pages from day one.",
    examples: ["Shopify / custom store builds", "Compliant claims & disclaimers", "Ingredient & label transparency pages", "Checkout optimisation"],
    timeline: "4–8 weeks",
  },
  {
    Icon: ShieldCheck,
    title: "Compliant Paid Advertising",
    tagline: "Grow on ads without losing your account.",
    description:
      "We know which platforms, claim structures, and creative approaches keep your ad accounts safe while still driving real growth.",
    examples: ["Compliant ad creative review", "Platform-safe claim structures", "Google & Meta campaign management", "Account risk monitoring"],
    timeline: "Live within 1–2 weeks",
  },
  {
    Icon: Search,
    title: "SEO & Content Marketing",
    tagline: "Visibility that doesn't depend on ad spend.",
    description:
      "Ingredient, benefit, and comparison content built around what buyers actually search, so organic traffic compounds over time.",
    examples: ["Ingredient & benefit content", "Comparison & buying guides", "Technical SEO fixes", "Link building"],
    timeline: "Ongoing (6-month minimum)",
  },
  {
    Icon: Repeat,
    title: "Subscription & Loyalty Programs",
    tagline: "Turn a single sale into recurring revenue.",
    description:
      "Subscription offers, points-based loyalty, and reorder reminders that give customers a reason to stay subscribed instead of shopping around.",
    examples: ["Subscribe & save offers", "Points & rewards programs", "Reorder reminder flows", "VIP & tiered memberships"],
    timeline: "2–3 weeks",
  },
  {
    Icon: Mail,
    title: "Email & SMS Retention Marketing",
    tagline: "Keep customers engaged between orders.",
    description:
      "Abandoned cart flows, education sequences, and winback campaigns that recover lost sales and build long-term customer relationships.",
    examples: ["Abandoned cart sequences", "Educational email flows", "Winback campaigns", "Segmented broadcast campaigns"],
    timeline: "2–4 weeks",
  },
  {
    Icon: MousePointerClick,
    title: "Review & UGC Management",
    tagline: "Let real customers do the convincing.",
    description:
      "Automated review requests, UGC collection, and third-party testing badges that build the trust a skeptical category demands.",
    examples: ["Automated review requests", "UGC & testimonial collection", "Third-party testing display", "Reputation dashboards"],
    timeline: "1–2 weeks",
  },
  {
    Icon: Star,
    title: "Label & Claims Compliance Review",
    tagline: "Grow with confidence, not exposure.",
    description:
      "We review your product pages and marketing claims against platform and advertising guidelines, so growth doesn't come with unnecessary risk.",
    examples: ["Claims & label review", "Platform policy alignment", "Disclaimer & disclosure audit", "Ongoing compliance monitoring"],
    timeline: "1–2 weeks",
  },
];

const platforms = [
  "Shopify", "Recharge", "Klaviyo", "Bold Subscriptions", "Yotpo", "TrustPilot",
];

const process = [
  {
    number: "01",
    title: "Audit & Strategy",
    timeline: "Week 1",
    deliverables: [
      "Review current claims & compliance risk",
      "SEO & competitor gap analysis",
      "Retention & subscription audit",
      "Prioritised growth roadmap",
    ],
  },
  {
    number: "02",
    title: "Build",
    timeline: "Weeks 2–7",
    deliverables: [
      "Store build or optimisation",
      "Subscription & loyalty setup",
      "Email/SMS flow setup",
      "QA tested before going live",
    ],
  },
  {
    number: "03",
    title: "Launch",
    timeline: "Weeks 8–9",
    deliverables: [
      "Go live to customers",
      "SEO foundations live",
      "First compliant ad campaigns launched",
      "Retention flows turned on",
    ],
  },
  {
    number: "04",
    title: "Grow",
    timeline: "Month 3+",
    deliverables: [
      "Ongoing content & SEO production",
      "Ad & subscription optimisation",
      "Ongoing compliance monitoring",
      "Typical outcome: 2–3× revenue growth",
    ],
  },
];

export default function SupplementsWellnessPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Industries · Supplements & Wellness
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-4xl">
            Grow Without Risking Your Ad Accounts
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            Compliant store builds, subscription systems, and retention
            marketing built for supplement and wellness brands, so growth
            doesn&apos;t come with unnecessary risk.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/free-audit"
              className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 hover:bg-primary-hover transition-colors"
            >
              Get a Free Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#projects"
              className="flex items-center gap-2 border border-primary text-primary font-semibold px-8 py-4 hover:bg-primary/10 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 border-b border-border">
        <div className="layout-standard">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center px-6">
                <span className="text-4xl md:text-5xl font-bold text-primary font-poppins leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm tracking-widest uppercase text-paragraph">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-paragraph/50 text-xs text-center mt-8">
            Sources: Grand View Research U.S. Dietary Supplements Market Report, Polaris Market Research
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Why Growth Stalls in This Category
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              It&apos;s Rarely the Product. It&apos;s the Risk.
            </h2>
            <p className="text-paragraph text-lg max-w-2xl mx-auto mt-4">
              Most supplement brands don&apos;t stall because of quality.
              They stall because of ad restrictions and trust gaps most
              owners never plan for.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="border border-border bg-card p-6 flex gap-4 hover:border-primary/50 transition-colors"
              >
                <div className="w-11 h-11 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-heading font-semibold font-poppins mb-1">
                    {title}
                  </p>
                  <p className="text-paragraph text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding-standard border-t border-border bg-secondary-background">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              What We Build
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              Services for Supplement & Wellness Brands
            </h2>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-border bg-card p-8 lg:p-10 grid lg:grid-cols-[1fr_2fr] gap-10"
              >
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <service.Icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-heading font-poppins mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary text-sm italic mb-6">
                    {service.tagline}
                  </p>
                  <div className="text-paragraph text-sm">{service.timeline}</div>
                </div>

                {/* Right */}
                <div>
                  <p className="text-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <p className="text-heading text-xs font-semibold tracking-widest uppercase mb-3">
                    What&apos;s Included
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {service.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-paragraph/60 text-xs text-center mt-10 max-w-2xl mx-auto">
            We help you build and market with compliance in mind. We are
            not a law firm and this is not legal or regulatory advice;
            confirm your specific claims and labeling requirements with
            qualified counsel.
          </p>
        </div>
      </section>

      {/* Platforms we integrate with */}
      <section className="py-14 border-b border-border">
        <div className="layout-standard">
          <p className="text-heading text-xs font-semibold tracking-[0.2em] uppercase text-center mb-8">
            Platforms We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="border border-border text-paragraph text-sm px-4 py-2 hover:border-primary/50 hover:text-heading transition-colors"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding-standard border-b border-border">
        <div className="layout-standard section-padding-standard">
          <div className="lg:mb-16 mb-12 flex flex-col items-center text-center gap-4">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              FROM AUDIT TO COMPOUNDING REVENUE
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              A proven process built around how supplement and wellness
              brands actually grow, with full transparency at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {process.map((phase, idx) => (
              <div
                key={phase.number}
                className={`border bg-card p-8 relative overflow-hidden ${
                  idx === 3 ? "border-primary/30 bg-primary/5" : "border-border"
                }`}
              >
                <span className="absolute -top-2 right-4 text-7xl font-bold text-white/5 font-poppins select-none">
                  {phase.number}
                </span>
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">
                  {phase.timeline}
                </p>
                <h3 className="text-2xl font-semibold text-heading font-poppins mb-4">
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-standard bg-secondary-background">
        <div className="layout-standard section-padding-standard text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins mb-6">
            Ready to Grow Without the Risk?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll look at your current claims, ad accounts, and
            retention flows, and show you exactly where risk and revenue
            are hiding.
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-10 py-4 hover:bg-primary-hover transition-colors text-lg"
          >
            Get Your Free Audit <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-paragraph text-sm mt-4">
            Free · No obligation · Response within 2 hours
          </p>
        </div>
      </section>

    </main>
  );
}
