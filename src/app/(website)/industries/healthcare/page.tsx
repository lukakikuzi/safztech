import React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  CalendarClock,
  Search,
  ShieldCheck,
  Database,
  Video,
  Star,
  BellRing,
  PhoneMissed,
  MapPinOff,
  FileWarning,
  UserX,
} from "lucide-react";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata = GetPageMetadata({
  title: "Healthcare Website & Growth Services | SAFZTECH",
  description:
    "Patient portals, HIPAA-conscious websites, EHR integration and local SEO built for clinics and healthcare providers. Fill your schedule, not just your waiting room.",
});

const stats = [
  { value: "27%", label: "Average patient no-show rate" },
  { value: "38%", label: "No-show reduction with online self-scheduling" },
  { value: "$200", label: "Average revenue lost per missed appointment" },
  { value: "$150B", label: "Annual cost of no-shows to U.S. healthcare" },
];

const problems = [
  {
    Icon: PhoneMissed,
    title: "Missed Calls, Missed Appointments",
    desc: "Patients calling after hours or during peak times who can't get through often book with the next provider on the list instead.",
  },
  {
    Icon: MapPinOff,
    title: "Invisible for Specialty & Local Search",
    desc: "If your Google Business Profile and specialty pages aren't optimised, you're not even in the running when patients search nearby.",
  },
  {
    Icon: FileWarning,
    title: "Unsecured Forms & Intake",
    desc: "Generic contact forms and email intake create compliance risk. Patient data needs to be handled with real care, not an afterthought.",
  },
  {
    Icon: UserX,
    title: "No-Shows Nobody's Following Up On",
    desc: "Without automated reminders and recall systems, a meaningful share of booked appointments simply never show up.",
  },
];

const services = [
  {
    Icon: CalendarClock,
    title: "Patient Portal & Online Scheduling",
    tagline: "Let patients book without picking up the phone.",
    description:
      "We build patient-facing scheduling systems with provider availability, appointment types, and automated confirmations, so booking doesn't depend on front-desk hours.",
    examples: ["24/7 online scheduling", "Provider & appointment-type calendars", "Automated confirmations", "New patient intake flow"],
    timeline: "3–6 weeks",
  },
  {
    Icon: Search,
    title: "Local SEO & Google Business Profile",
    tagline: "Show up when patients search for your specialty nearby.",
    description:
      "We optimise your Google Business Profile, build out specialty and location pages, and target the exact terms patients search when choosing a provider.",
    examples: ["Google Business Profile optimisation", "Specialty & location landing pages", "Local keyword targeting", "Citation & directory building"],
    timeline: "Ongoing (3-month minimum)",
  },
  {
    Icon: ShieldCheck,
    title: "HIPAA-Conscious Website & Intake",
    tagline: "A site built with patient data handled properly.",
    description:
      "Secure intake forms, encrypted data handling practices, and a website architecture designed around patient privacy, not a template with a contact form bolted on.",
    examples: ["Secure patient intake forms", "Encrypted data handling", "Privacy-conscious architecture", "Consent & disclosure pages"],
    timeline: "4–8 weeks",
  },
  {
    Icon: Database,
    title: "EHR / EMR & Practice Management Integration",
    tagline: "One system that knows every patient's history.",
    description:
      "We connect your website and scheduling to the EHR and practice management software you already run, so bookings flow straight into patient records.",
    examples: ["EHR / EMR integration", "Practice management sync", "Patient history access", "Staff scheduling dashboards"],
    timeline: "3–6 weeks",
  },
  {
    Icon: Video,
    title: "Telehealth Platform Integration",
    tagline: "See patients wherever they are.",
    description:
      "We integrate secure telehealth video visits directly into your booking flow, so virtual appointments feel as simple as in-person ones.",
    examples: ["Secure video visit integration", "Virtual waiting rooms", "Telehealth-specific booking flow", "Follow-up automation"],
    timeline: "2–4 weeks",
  },
  {
    Icon: Star,
    title: "Review & Reputation Management",
    tagline: "Your next patient is reading your reviews right now.",
    description:
      "Automated review requests after every visit, plus monitoring and response support, so your online reputation reflects the care you actually provide.",
    examples: ["Automated review requests", "Review monitoring & alerts", "Response templates", "Reputation dashboards"],
    timeline: "1–2 weeks",
  },
  {
    Icon: BellRing,
    title: "Patient Recall & Appointment Reminders",
    tagline: "Cut no-shows before they happen.",
    description:
      "SMS and email reminders, recall campaigns for overdue checkups, and automated follow-ups that keep patients on schedule and coming back.",
    examples: ["SMS & email reminders", "Recall & checkup campaigns", "No-show follow-up automation", "Patient re-engagement sequences"],
    timeline: "1–2 weeks",
  },
];

const platforms = [
  "Epic", "athenahealth", "Cerner", "DrChrono", "Kareo", "SimplePractice",
];

const process = [
  {
    number: "01",
    title: "Audit & Strategy",
    timeline: "Week 1",
    deliverables: [
      "Review current booking flow & no-show rate",
      "Local SEO & Google Business Profile audit",
      "Competitor & specialty gap analysis",
      "Prioritised growth roadmap",
    ],
  },
  {
    number: "02",
    title: "Build",
    timeline: "Weeks 2–6",
    deliverables: [
      "Patient portal & website build",
      "EHR / practice management integration",
      "Intake forms & telehealth setup",
      "QA tested before going live",
    ],
  },
  {
    number: "03",
    title: "Launch",
    timeline: "Weeks 7–8",
    deliverables: [
      "Go live to patients",
      "Google Business Profile & local SEO live",
      "Reminder & recall automation turned on",
      "Review request automation turned on",
    ],
  },
  {
    number: "04",
    title: "Grow",
    timeline: "Month 2+",
    deliverables: [
      "Ongoing local SEO & content optimisation",
      "Recall campaign performance tracking",
      "Patient acquisition reporting",
      "Typical outcome: consistently full schedule",
    ],
  },
];

export default function HealthcarePage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Industries · Healthcare
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-4xl">
            Fill Your Schedule, Not Just Your Waiting Room
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            Patient portals, local SEO, and HIPAA-conscious websites built
            for clinics and healthcare providers, so new patients find you
            and existing ones keep showing up.
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
            Sources: DialogHealth Patient No-Show Statistics, DexCare Patient No-Show Rates report
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Why Schedules Stay Empty
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              It&apos;s Rarely the Care. It&apos;s the Access.
            </h2>
            <p className="text-paragraph text-lg max-w-2xl mx-auto mt-4">
              Most practices don&apos;t lose patients over quality of care.
              They lose them to friction most staff never see happening.
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
              Services for Healthcare Providers
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
            We build with HIPAA-conscious security practices throughout. We
            are not a law firm and this is not legal or compliance advice;
            confirm your specific regulatory requirements with qualified
            counsel.
          </p>
        </div>
      </section>

      {/* Platforms we integrate with */}
      <section className="py-14 border-b border-border">
        <div className="layout-standard">
          <p className="text-heading text-xs font-semibold tracking-[0.2em] uppercase text-center mb-8">
            EHR & Practice Management Platforms We Work With
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
              A proven process built around how clinics and practices
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
            Ready to Fill Your Schedule?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll look at your current booking flow, local search
            presence, and no-show rate, and show you exactly where patients
            are slipping away before they ever call.
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
