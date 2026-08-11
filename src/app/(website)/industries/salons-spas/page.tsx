import React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Calendar,
  Search,
  Palette,
  Heart,
  MousePointerClick,
  Star,
  Database,
  PhoneMissed,
  MapPinOff,
  UserX,
  MessageSquareWarning,
} from "lucide-react";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata = GetPageMetadata({
  title: "Salons & Spas Website & Growth Services | SAFZTECH",
  description:
    "Online booking systems, local SEO, branded websites, loyalty programs and paid ads built specifically for salons and spas. Fill your chairs, not just your calendar.",
});

const stats = [
  { value: "67%", label: "Bookings made outside business hours" },
  { value: "$200+", label: "Average revenue lost per no-show" },
  { value: "88%", label: "Clients check reviews before booking" },
  { value: "3×", label: "More bookings with online scheduling" },
];

const problems = [
  {
    Icon: PhoneMissed,
    title: "Missed Calls, Missed Bookings",
    desc: "Every unanswered call while you're mid-service is a client who just booked somewhere else instead.",
  },
  {
    Icon: MapPinOff,
    title: "Invisible on Local Search",
    desc: "If your Google Business Profile isn't optimised, you're not even in the running when someone searches nearby.",
  },
  {
    Icon: UserX,
    title: "One-Time Clients Who Never Return",
    desc: "Without a loyalty system or rebooking prompts, most first-time clients simply never come back.",
  },
  {
    Icon: MessageSquareWarning,
    title: "Reviews Nobody's Managing",
    desc: "A few unanswered bad reviews can quietly cost you more bookings than any ad campaign could win back.",
  },
];

const services = [
  {
    Icon: Calendar,
    title: "Online Booking & Scheduling",
    tagline: "Stop losing clients to a phone that goes to voicemail.",
    description:
      "We build booking systems clients can use at 11pm on their phone, with synced calendars, staff availability, deposits, and automated reminders that cut no-shows.",
    examples: ["24/7 online booking", "Staff & service calendars", "Deposit & cancellation policies", "SMS/email reminders"],
    timeline: "2–4 weeks",
  },
  {
    Icon: Search,
    title: "Local SEO & Google Business Profile",
    tagline: "Show up when someone searches \"salon near me.\"",
    description:
      "Most salon bookings start with a local search. We optimise your Google Business Profile, local listings, and website so you rank in the map pack, not page 3.",
    examples: ["Google Business Profile optimisation", "Local keyword targeting", "Citation building", "Review-driven ranking signals"],
    timeline: "Ongoing (3-month minimum)",
  },
  {
    Icon: Palette,
    title: "Website & Brand Design",
    tagline: "A site that makes your work look as good as it is.",
    description:
      "Portfolio-style galleries, service menus with pricing, staff bios, and a design that matches your salon's actual vibe, not a generic template every salon uses.",
    examples: ["Service menu & pricing pages", "Before/after galleries", "Staff & stylist profiles", "Mobile-first design"],
    timeline: "3–6 weeks",
  },
  {
    Icon: Heart,
    title: "Loyalty & Membership Programs",
    tagline: "Turn one-time visitors into monthly regulars.",
    description:
      "We set up membership tiers, package deals, and points-based loyalty programs that give clients a reason to rebook instead of trying a new place.",
    examples: ["Membership tiers & packages", "Points & rewards systems", "Referral programs", "Automated rebooking prompts"],
    timeline: "2–3 weeks",
  },
  {
    Icon: MousePointerClick,
    title: "Local Paid Advertising",
    tagline: "Fill empty chair-time this week, not next quarter.",
    description:
      "Google and Meta ads geo-targeted to your service radius, promoting your highest-margin services to people actively searching or scrolling nearby.",
    examples: ["Google Search & Maps ads", "Instagram & Facebook ads", "Geo-targeted radius targeting", "Promo/offer campaigns"],
    timeline: "Live within 1–2 weeks",
  },
  {
    Icon: Star,
    title: "Review & Reputation Management",
    tagline: "Your next client is reading your reviews right now.",
    description:
      "We set up automated review requests after every visit, monitor new reviews, and help you respond, so your rating becomes a growth channel, not an afterthought.",
    examples: ["Automated review requests", "Review monitoring & alerts", "Response templates", "Reputation dashboards"],
    timeline: "1–2 weeks",
  },
  {
    Icon: Database,
    title: "POS & CRM Integration",
    tagline: "One system that knows every client's history.",
    description:
      "We connect your booking site to your point-of-sale and client records, so staff see visit history, preferences, and purchase patterns at a glance.",
    examples: ["POS integration", "Client history & notes", "Purchase & visit tracking", "Staff dashboards"],
    timeline: "2–4 weeks",
  },
];

const platforms = [
  "Vagaro", "Fresha", "Square Appointments", "Mindbody",
  "GlossGenius", "Booksy", "Schedulicity", "Zenoti",
];

const process = [
  {
    number: "01",
    title: "Audit & Strategy",
    timeline: "Week 1",
    deliverables: [
      "Review current booking flow & drop-off points",
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
      "Booking system & website build",
      "POS / CRM integration",
      "Loyalty & membership setup",
      "QA tested before going live",
    ],
  },
  {
    number: "03",
    title: "Launch",
    timeline: "Weeks 6–7",
    deliverables: [
      "Go live to clients",
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
      "Seasonal promo campaigns",
      "Typical outcome: consistently full calendar",
    ],
  },
];

export default function SalonsSpasPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Industries · Salons & Spas
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-4xl">
            Fill Every Chair, Not Just Your Calendar
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            Booking systems, local SEO, and branded websites built for
            salons and spas, so new clients find you, and regulars keep
            coming back.
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
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Why Salons Lose Business
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              It&apos;s Rarely the Service. It&apos;s the Systems.
            </h2>
            <p className="text-paragraph text-lg max-w-2xl mx-auto mt-4">
              Most salons and spas don&apos;t lose clients because of bad
              work. They lose them to friction most owners never see
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
              Services for Salons & Spas
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
            Booking & POS Platforms We Work With
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
              FROM AUDIT TO A FULL CALENDAR
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              A proven process built around how salons and spas actually
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
            Ready to Fill Your Chairs?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll look at your current booking flow, local search
            presence, and website, and show you exactly where you&apos;re
            losing clients before they ever call.
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
