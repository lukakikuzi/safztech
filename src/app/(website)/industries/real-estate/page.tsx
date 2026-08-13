import React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Building2,
  Search,
  Zap,
  Workflow,
  Camera,
  MousePointerClick,
  Star,
  PhoneMissed,
  MapPinOff,
  ListX,
  UserX,
} from "lucide-react";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata = GetPageMetadata({
  title: "Real Estate Website & Growth Services | SAFZTECH",
  description:
    "IDX/MLS websites, lead capture, CRM automation and local SEO built for real estate agents and brokerages. Respond first, close more deals.",
});

const stats = [
  { value: "78%", label: "Buyers work with the first agent who responds" },
  { value: "47 min", label: "Median agent response time (top 10%: under 3 min)" },
  { value: "21×", label: "More likely to qualify a lead responding in 5 min" },
  { value: "80%", label: "Of sales need 5+ follow-up touches" },
];

const problems = [
  {
    Icon: PhoneMissed,
    title: "Slow Lead Response",
    desc: "A lead that doesn't hear back within minutes is already talking to another agent by the time you call.",
  },
  {
    Icon: MapPinOff,
    title: "Invisible for Neighborhood Search",
    desc: "If your site isn't built around local, neighborhood-level search, you're not in the running when buyers search nearby.",
  },
  {
    Icon: ListX,
    title: "Outdated or Missing Listings",
    desc: "A website without live IDX/MLS integration shows stale listings, and buyers bounce straight back to Zillow.",
  },
  {
    Icon: UserX,
    title: "No Follow-Up System",
    desc: "Without CRM-driven nurture sequences, most leads go quiet for months and quietly close with someone else.",
  },
];

const services = [
  {
    Icon: Building2,
    title: "IDX / MLS Website Integration",
    tagline: "Live listings that update themselves, not you.",
    description:
      "We build websites with real-time IDX/MLS feeds, so buyers browse current listings on your site instead of bouncing to Zillow or Realtor.com.",
    examples: ["Real-time IDX/MLS sync", "Advanced search & filters", "Saved search & alerts", "Map-based listing search"],
    timeline: "3–6 weeks",
  },
  {
    Icon: Search,
    title: "Local SEO & Neighborhood Pages",
    tagline: "Rank for the neighborhoods you actually sell in.",
    description:
      "We build out neighborhood and community pages targeting the exact local searches buyers and sellers use, not generic city-wide keywords.",
    examples: ["Neighborhood landing pages", "Local keyword targeting", "Google Business Profile optimisation", "Market report content"],
    timeline: "Ongoing (3-month minimum)",
  },
  {
    Icon: Zap,
    title: "Lead Capture & Instant Response",
    tagline: "Respond before the lead even closes the tab.",
    description:
      "Instant-response forms, chat widgets, and automated texts fire the moment a lead comes in, so you're the first agent they hear from.",
    examples: ["Instant lead notifications", "Automated text & email response", "Property inquiry forms", "Home valuation lead magnets"],
    timeline: "1–2 weeks",
  },
  {
    Icon: Workflow,
    title: "CRM & Lead Nurture Automation",
    tagline: "Every lead followed up with, automatically.",
    description:
      "We connect your website to the CRM you already run and build nurture sequences that keep leads warm for months, not days.",
    examples: ["CRM integration", "Drip email & SMS sequences", "Lead scoring & segmentation", "Agent task automation"],
    timeline: "2–4 weeks",
  },
  {
    Icon: Camera,
    title: "Virtual Tours & Property Media",
    tagline: "Let buyers walk through before they ever visit.",
    description:
      "We integrate 3D virtual tours, video walkthroughs, and high-quality photo galleries directly into your listing pages.",
    examples: ["3D virtual tour integration", "Video walkthrough embeds", "Photo gallery optimisation", "Drone & aerial media support"],
    timeline: "1–2 weeks",
  },
  {
    Icon: MousePointerClick,
    title: "Paid Advertising for Listings",
    tagline: "Put your best listings in front of active buyers.",
    description:
      "Google and Meta ad campaigns built around specific listings and buyer/seller intent, geo-targeted to the markets you actually work.",
    examples: ["Listing-specific ad campaigns", "Buyer & seller lead ads", "Geo-targeted local ads", "Retargeting campaigns"],
    timeline: "Live within 1–2 weeks",
  },
  {
    Icon: Star,
    title: "Review & Reputation Management",
    tagline: "Your next client is checking your reviews right now.",
    description:
      "Automated review requests after every closing, plus monitoring and response support, so your reputation becomes a lead source.",
    examples: ["Automated review requests", "Review monitoring & alerts", "Response templates", "Reputation dashboards"],
    timeline: "1–2 weeks",
  },
];

const platforms = [
  "Zillow Premier Agent", "Follow Up Boss", "kvCORE", "BoomTown", "Chime", "Realtor.com",
];

const process = [
  {
    number: "01",
    title: "Audit & Strategy",
    timeline: "Week 1",
    deliverables: [
      "Review current lead flow & response time",
      "Local SEO & Google Business Profile audit",
      "Competitor & market gap analysis",
      "Prioritised growth roadmap",
    ],
  },
  {
    number: "02",
    title: "Build",
    timeline: "Weeks 2–5",
    deliverables: [
      "IDX/MLS website build",
      "CRM & lead capture integration",
      "Neighborhood page build-out",
      "QA tested before going live",
    ],
  },
  {
    number: "03",
    title: "Launch",
    timeline: "Weeks 6–7",
    deliverables: [
      "Go live to buyers & sellers",
      "Google Business Profile & local SEO live",
      "First listing ad campaigns launched",
      "Nurture automation turned on",
    ],
  },
  {
    number: "04",
    title: "Grow",
    timeline: "Month 2+",
    deliverables: [
      "Ongoing local SEO & content optimisation",
      "Lead source & conversion reporting",
      "Seasonal market campaigns",
      "Typical outcome: a consistent, warm pipeline",
    ],
  },
];

export default function RealEstatePage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Industries · Real Estate
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-4xl">
            Respond First. Close More Deals.
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            IDX-integrated websites, lead capture, and CRM automation built
            for agents and brokerages, so leads hear from you first and
            never go cold.
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
            Sources: NAR 2025 Home Buyers and Sellers Generational Trends Report, Tom Ferry 2025 Agent Productivity Report
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Why Deals Slip Away
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              It&apos;s Rarely the Pitch. It&apos;s the Follow-Up.
            </h2>
            <p className="text-paragraph text-lg max-w-2xl mx-auto mt-4">
              Most agents don&apos;t lose deals on negotiation skills. They
              lose them to slow response times and leads that go cold.
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
              Services for Agents & Brokerages
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
        </div>
      </section>

      {/* Platforms we integrate with */}
      <section className="py-14 border-b border-border">
        <div className="layout-standard">
          <p className="text-heading text-xs font-semibold tracking-[0.2em] uppercase text-center mb-8">
            CRM & Listing Platforms We Work With
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
              FROM AUDIT TO A FULL PIPELINE
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              A proven process built around how agents and brokerages
              actually work, with full transparency at every step.
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
            Ready to Stop Losing Leads to Slow Follow-Up?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll look at your current lead flow, response time, and
            local search presence, and show you exactly where deals are
            slipping away before they ever call.
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
