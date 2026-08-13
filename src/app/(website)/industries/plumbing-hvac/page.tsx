import React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  MousePointerClick,
  Search,
  FileText,
  Workflow,
  Star,
  PhoneMissed,
  Snowflake,
  PhoneCall,
  CalendarX2,
  MapPinOff,
  ClipboardX,
} from "lucide-react";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata = GetPageMetadata({
  title: "Plumbing & HVAC Website & Growth Services | SAFZTECH",
  description:
    "Lead generation, local SEO, dispatch integration and review management built for plumbing and HVAC companies. Answer more calls, book more jobs.",
});

const stats = [
  { value: "88%", label: "Contractors who take longer than 5 minutes to respond" },
  { value: "78%", label: "Jobs won by whichever company responds first" },
  { value: "3.7 hrs", label: "Average home-service lead response time" },
  { value: "391%", label: "More conversions responding within 60 seconds" },
];

const problems = [
  {
    Icon: PhoneMissed,
    title: "Missed Emergency Calls",
    desc: "Every after-hours call that goes to voicemail is a burst pipe or dead AC unit calling your competitor next.",
  },
  {
    Icon: MapPinOff,
    title: "Invisible for \"Near Me\" Searches",
    desc: "If your Google Business Profile and service-area pages aren't optimised, you're not in the running when someone searches nearby.",
  },
  {
    Icon: CalendarX2,
    title: "No Online Booking or Quote Requests",
    desc: "Customers expect to request a quote or book a slot online now, not wait on hold during a plumbing emergency.",
  },
  {
    Icon: ClipboardX,
    title: "Disorganised Dispatch & Scheduling",
    desc: "Double-bookings, wasted drive time, and no real-time job tracking quietly cost you jobs every week.",
  },
];

const services = [
  {
    Icon: MousePointerClick,
    title: "Lead Generation & Local Ads",
    tagline: "Show up the second someone has a plumbing emergency.",
    description:
      "Google Local Services Ads, PPC, and geo-targeted campaigns built around emergency and seasonal search intent, so you're the first call, not the third quote.",
    examples: ["Google Local Services Ads", "Emergency-intent PPC campaigns", "Seasonal HVAC ad campaigns", "Geo-targeted service-area ads"],
    timeline: "Live within 1–2 weeks",
  },
  {
    Icon: Search,
    title: "Local SEO & Google Business Profile",
    tagline: "Rank for \"plumber near me\" and \"AC repair near me.\"",
    description:
      "We optimise your Google Business Profile, build out service-area pages, and target the exact terms homeowners search when something breaks.",
    examples: ["Google Business Profile optimisation", "Service-area landing pages", "Local keyword targeting", "Citation & directory building"],
    timeline: "Ongoing (3-month minimum)",
  },
  {
    Icon: FileText,
    title: "Website & Instant Quote Requests",
    tagline: "A site built for someone who needs help right now.",
    description:
      "Mobile-first websites with instant quote request forms, financing information, and service pages that make booking easy under pressure.",
    examples: ["Instant quote request forms", "Financing & pricing pages", "Service-area pages", "Click-to-call on every page"],
    timeline: "3–6 weeks",
  },
  {
    Icon: Workflow,
    title: "CRM & Dispatch Integration",
    tagline: "One system that knows every job and every truck.",
    description:
      "We connect your website and marketing to the dispatch and CRM software you already run, so leads flow straight into jobs, not lost emails.",
    examples: ["Dispatch software integration", "Job & technician tracking", "Automated job confirmations", "Customer history & notes"],
    timeline: "2–4 weeks",
  },
  {
    Icon: PhoneCall,
    title: "Call Tracking & Missed-Call Text-Back",
    tagline: "Turn a missed call into a booked job automatically.",
    description:
      "Call tracking numbers show you which ads and pages actually generate calls, and missed-call text-back keeps a lead warm even when no one can answer.",
    examples: ["Call tracking numbers", "Missed-call text-back automation", "Call recording & analytics", "Source attribution reporting"],
    timeline: "1–2 weeks",
  },
  {
    Icon: Star,
    title: "Review & Reputation Management",
    tagline: "Your rating decides who gets the call, not just who ranks.",
    description:
      "Automated review requests after every completed job, plus monitoring and response support, so your reputation becomes a lead source, not a liability.",
    examples: ["Automated review requests", "Review monitoring & alerts", "Response templates", "Reputation dashboards"],
    timeline: "1–2 weeks",
  },
  {
    Icon: Snowflake,
    title: "Seasonal & Maintenance Plan Marketing",
    tagline: "Keep the phone ringing between emergencies.",
    description:
      "Email and SMS campaigns for HVAC tune-ups, plumbing inspections, and seasonal maintenance plans that generate revenue outside of breakdown calls.",
    examples: ["Seasonal tune-up campaigns", "Maintenance plan promotion", "Email & SMS automation", "Repeat-customer reminders"],
    timeline: "2–3 weeks",
  },
];

const platforms = [
  "ServiceTitan", "Housecall Pro", "Jobber", "FieldEdge", "ServiceFusion", "Workiz",
];

const process = [
  {
    number: "01",
    title: "Audit & Strategy",
    timeline: "Week 1",
    deliverables: [
      "Review current lead flow & missed-call rate",
      "Local SEO & Google Business Profile audit",
      "Competitor & service-area gap analysis",
      "Prioritised growth roadmap",
    ],
  },
  {
    number: "02",
    title: "Build",
    timeline: "Weeks 2–5",
    deliverables: [
      "Website & quote request build",
      "Dispatch / CRM integration",
      "Call tracking & text-back setup",
      "QA tested before going live",
    ],
  },
  {
    number: "03",
    title: "Launch",
    timeline: "Weeks 6–7",
    deliverables: [
      "Go live to customers",
      "Google Business Profile & local SEO live",
      "First Local Services Ads campaigns launched",
      "Review request automation turned on",
    ],
  },
  {
    number: "04",
    title: "Grow",
    timeline: "Month 2+",
    deliverables: [
      "Ongoing local SEO & ad optimisation",
      "Seasonal maintenance campaigns",
      "Call & lead source reporting",
      "Typical outcome: consistently full schedule",
    ],
  },
];

export default function PlumbingHvacPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Industries · Plumbing & HVAC
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-4xl">
            Answer Every Call. Book Every Job.
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            Lead generation, local SEO, and dispatch-integrated websites
            built for plumbing and HVAC companies, so emergencies find you
            first, not your competitor.
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
            Sources: Ainora HVAC Service Call Statistics 2026, PipelineOn Home Service Marketing Statistics, CaseyResponse Lead Response Time Statistics 2026
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Why Jobs Slip Through the Cracks
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              It&apos;s Rarely the Work. It&apos;s the Response Time.
            </h2>
            <p className="text-paragraph text-lg max-w-2xl mx-auto mt-4">
              Most plumbing and HVAC companies don&apos;t lose jobs on
              quality. They lose them to whoever answers first.
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
              Services for Plumbing & HVAC Companies
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
            Dispatch & CRM Platforms We Work With
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
              FROM AUDIT TO A FULL SCHEDULE
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              A proven process built around how plumbing and HVAC companies
              actually operate, with full transparency at every step.
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
            Ready to Stop Losing Jobs to Voicemail?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll look at your current lead flow, local search
            presence, and dispatch process, and show you exactly where
            jobs are slipping away before they ever call.
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
