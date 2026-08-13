import React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  ShoppingBag,
  Search,
  UtensilsCrossed,
  Workflow,
  Gift,
  MousePointerClick,
  Star,
  PercentCircle,
  MapPinOff,
  ImageOff,
  MessageSquareWarning,
} from "lucide-react";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata = GetPageMetadata({
  title: "Restaurant & Food Website & Growth Services | SAFZTECH",
  description:
    "Direct online ordering, local SEO, POS integration and loyalty programs built for restaurants. Keep your margin instead of paying it to delivery apps.",
});

const stats = [
  { value: "15–35%", label: "Commission taken by third-party delivery apps" },
  { value: "70%", label: "Consumers prefer ordering direct from the restaurant" },
  { value: "75%", label: "Of restaurant traffic is now off-premises" },
  { value: "67%", label: "Prefer ordering direct from a restaurant's own site" },
];

const problems = [
  {
    Icon: PercentCircle,
    title: "Third-Party Apps Eating Your Margin",
    desc: "Every order through a delivery app hands over 15 to 30 percent, and you never get the customer's contact details.",
  },
  {
    Icon: MapPinOff,
    title: "Invisible for \"Near Me\" Searches",
    desc: "If your Google Business Profile isn't optimised, you're not even in the running when someone's searching for dinner nearby.",
  },
  {
    Icon: ImageOff,
    title: "No Direct Online Ordering",
    desc: "Without your own ordering system, every order goes through a platform that owns the customer relationship, not you.",
  },
  {
    Icon: MessageSquareWarning,
    title: "Reviews Nobody's Managing",
    desc: "A few unanswered bad reviews can quietly cost you more covers than any ad campaign could win back.",
  },
];

const services = [
  {
    Icon: ShoppingBag,
    title: "Direct Online Ordering",
    tagline: "Keep your margin instead of paying it to an app.",
    description:
      "We build direct online ordering systems on your own website, so customers order straight from you without a 15 to 30 percent commission.",
    examples: ["Direct online ordering", "Delivery & pickup scheduling", "Menu & modifier management", "Contactless payment"],
    timeline: "2–5 weeks",
  },
  {
    Icon: Search,
    title: "Local SEO & Google Business Profile",
    tagline: "Show up when someone searches \"restaurant near me.\"",
    description:
      "We optimise your Google Business Profile, menu listings, and website so you rank in the map pack, not buried under delivery app listings.",
    examples: ["Google Business Profile optimisation", "Local keyword targeting", "Menu schema & citations", "Review-driven ranking signals"],
    timeline: "Ongoing (3-month minimum)",
  },
  {
    Icon: UtensilsCrossed,
    title: "Website & Menu Design",
    tagline: "A menu that makes people hungry before they arrive.",
    description:
      "Mobile-first websites with photography-forward menus, hours, and location details that make ordering or booking a table effortless.",
    examples: ["Digital menu design", "Photography-forward layout", "Hours, location & reservation info", "Mobile-first design"],
    timeline: "3–5 weeks",
  },
  {
    Icon: Workflow,
    title: "POS & Delivery Integration",
    tagline: "One system that knows every order.",
    description:
      "We connect your online ordering to your point-of-sale and kitchen display, so online orders flow straight into the kitchen without double entry.",
    examples: ["POS integration", "Kitchen display system sync", "Third-party delivery sync", "Inventory & 86'd item tracking"],
    timeline: "2–3 weeks",
  },
  {
    Icon: Gift,
    title: "Loyalty & Rewards Programs",
    tagline: "Turn occasional guests into weekly regulars.",
    description:
      "Points-based loyalty, punch cards, and repeat-order incentives that give guests a reason to order direct instead of browsing an app.",
    examples: ["Points & rewards programs", "Digital punch cards", "Birthday & anniversary offers", "Referral programs"],
    timeline: "2 weeks",
  },
  {
    Icon: MousePointerClick,
    title: "Local Paid Advertising",
    tagline: "Fill empty tables and slow shifts.",
    description:
      "Google and Meta ads geo-targeted to your area, promoting specials and off-peak offers to people actively searching or scrolling nearby.",
    examples: ["Google Search & Maps ads", "Instagram & Facebook ads", "Geo-targeted radius targeting", "Promo/offer campaigns"],
    timeline: "Live within 1–2 weeks",
  },
  {
    Icon: Star,
    title: "Review & Reputation Management",
    tagline: "Your next table is reading your reviews right now.",
    description:
      "Automated review requests after every visit or order, plus monitoring and response support, so your rating becomes a growth channel.",
    examples: ["Automated review requests", "Review monitoring & alerts", "Response templates", "Reputation dashboards"],
    timeline: "1–2 weeks",
  },
];

const platforms = [
  "Toast", "Square", "ChowNow", "Clover", "OpenTable", "DoorDash Drive",
];

const process = [
  {
    number: "01",
    title: "Audit & Strategy",
    timeline: "Week 1",
    deliverables: [
      "Review current ordering flow & margin loss",
      "Local SEO & Google Business Profile audit",
      "Competitor gap analysis",
      "Prioritised growth roadmap",
    ],
  },
  {
    number: "02",
    title: "Build",
    timeline: "Weeks 2–5",
    deliverables: [
      "Online ordering & website build",
      "POS & delivery integration",
      "Loyalty program setup",
      "QA tested before going live",
    ],
  },
  {
    number: "03",
    title: "Launch",
    timeline: "Weeks 6–7",
    deliverables: [
      "Go live to guests",
      "Google Business Profile & local SEO live",
      "First local ad campaigns launched",
      "Review request automation turned on",
    ],
  },
  {
    number: "04",
    title: "Grow",
    timeline: "Month 2+",
    deliverables: [
      "Ongoing local SEO & ad optimisation",
      "Loyalty program performance tracking",
      "Seasonal & off-peak campaigns",
      "Typical outcome: consistently full tables",
    ],
  },
];

export default function RestaurantsFoodPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Industries · Restaurants & Food
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-4xl">
            Keep Your Margin. Skip the Commission.
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            Direct online ordering, local SEO, and loyalty programs built
            for restaurants, so you stop handing your margin to delivery
            apps.
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
            Sources: Owner.com Food Delivery Statistics, Restaurant Business Online, Toast Food Delivery Trends 2026
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Why Margins Disappear
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              It&apos;s Rarely the Food. It&apos;s Who Owns the Order.
            </h2>
            <p className="text-paragraph text-lg max-w-2xl mx-auto mt-4">
              Most restaurants don&apos;t lose money on quality. They lose
              it to commissions and friction most owners never see
              happening.
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
              Services for Restaurants & Food Brands
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
            POS & Ordering Platforms We Work With
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
              FROM AUDIT TO A FULL DINING ROOM
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              A proven process built around how restaurants actually
              operate, with full transparency at every step.
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
            Ready to Stop Paying Away Your Margin?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll look at your current ordering setup, local search
            presence, and reviews, and show you exactly where revenue is
            leaking out.
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
