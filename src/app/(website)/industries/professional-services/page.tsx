import React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  LayoutTemplate,
  Search,
  CalendarCheck,
  Workflow,
  BookOpen,
  MousePointerClick,
  Star,
  MapPinOff,
  FileX,
  CalendarX2,
  ShieldQuestion,
} from "lucide-react";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata = GetPageMetadata({
  title: "Professional Services Website & Growth Services | SAFZTECH",
  description:
    "Websites, local SEO, consultation booking and content marketing built for law firms, accountants and consultants. Win clients before the first call.",
});

const stats = [
  { value: "98%", label: "Research online reviews before hiring" },
  { value: "92%", label: "Research their issue online before contacting a firm" },
  { value: "80%", label: "Talk to 3 or more firms before deciding" },
  { value: "4★", label: "Minimum rating most consumers require to consider hiring" },
];

const problems = [
  {
    Icon: ShieldQuestion,
    title: "Weak Online Credibility",
    desc: "A dated or generic website quietly signals \"small operation\" before a prospect ever reads a word of your expertise.",
  },
  {
    Icon: MapPinOff,
    title: "Invisible for Expertise & Local Search",
    desc: "If your site isn't built around your specialty and location, you're not in the running when clients search for exactly what you do.",
  },
  {
    Icon: CalendarX2,
    title: "No Easy Way to Book a Consultation",
    desc: "Prospects expect to book a call or request a consultation online, not send an email and wait days for a reply.",
  },
  {
    Icon: FileX,
    title: "No Content Proving Your Expertise",
    desc: "Without articles, guides, or case studies, prospects have nothing to read before deciding you're the right firm to trust.",
  },
];

const services = [
  {
    Icon: LayoutTemplate,
    title: "Website & Brand Authority Build",
    tagline: "A site that reads as the obvious choice.",
    description:
      "We build websites designed around credibility and trust signals, so prospects decide you're the right firm before they ever call.",
    examples: ["Firm & attorney/advisor bio pages", "Practice area / service pages", "Credentials & case results", "Mobile-first design"],
    timeline: "4–8 weeks",
  },
  {
    Icon: Search,
    title: "Local SEO & Expertise Content",
    tagline: "Rank for what you actually specialise in.",
    description:
      "We build out practice-area and local pages targeting the exact terms clients search when they need your specific expertise nearby.",
    examples: ["Practice-area landing pages", "Local keyword targeting", "Google Business Profile optimisation", "FAQ & expertise content"],
    timeline: "Ongoing (3-month minimum)",
  },
  {
    Icon: CalendarCheck,
    title: "Consultation Booking & Intake Forms",
    tagline: "Make it effortless to take the next step.",
    description:
      "Online consultation booking and secure intake forms that turn a curious visitor into a scheduled call without a single phone tag.",
    examples: ["Online consultation booking", "Secure client intake forms", "Automated confirmations", "Calendar & staff sync"],
    timeline: "2–4 weeks",
  },
  {
    Icon: Workflow,
    title: "CRM & Client Portal Integration",
    tagline: "One system that knows every client and every case.",
    description:
      "We connect your website to the CRM and practice management software you already run, so leads and clients flow into one place.",
    examples: ["CRM integration", "Client portal setup", "Document & e-signature integration", "Billing system sync"],
    timeline: "2–4 weeks",
  },
  {
    Icon: BookOpen,
    title: "Content Marketing & Thought Leadership",
    tagline: "Prove your expertise before the first meeting.",
    description:
      "Articles, guides, and case studies built around client questions, so prospects arrive already trusting you as the expert.",
    examples: ["Educational articles & guides", "Case studies & results", "FAQ content", "Newsletter content"],
    timeline: "Ongoing"
  },
  {
    Icon: MousePointerClick,
    title: "Paid Advertising",
    tagline: "Predictable consultations while organic compounds.",
    description:
      "Google and LinkedIn campaigns targeted to your practice area and service radius, built to fill your calendar with qualified consultations.",
    examples: ["Google Search ads", "LinkedIn Ads", "Geo-targeted local ads", "Retargeting campaigns"],
    timeline: "Live within 1–2 weeks",
  },
  {
    Icon: Star,
    title: "Review & Reputation Management",
    tagline: "Your next client is reading your reviews right now.",
    description:
      "Automated review requests after every engagement, plus monitoring and response support, so your reputation reflects the work you actually do.",
    examples: ["Automated review requests", "Review monitoring & alerts", "Response templates", "Reputation dashboards"],
    timeline: "1–2 weeks",
  },
];

const platforms = [
  "Clio", "QuickBooks", "Calendly", "HubSpot", "DocuSign", "PracticePanther",
];

const process = [
  {
    number: "01",
    title: "Audit & Strategy",
    timeline: "Week 1",
    deliverables: [
      "Review current site & consultation conversion",
      "Local SEO & Google Business Profile audit",
      "Competitor & positioning analysis",
      "Prioritised growth roadmap",
    ],
  },
  {
    number: "02",
    title: "Build",
    timeline: "Weeks 2–6",
    deliverables: [
      "Website & booking build",
      "CRM & client portal integration",
      "First content assets produced",
      "QA tested before going live",
    ],
  },
  {
    number: "03",
    title: "Launch",
    timeline: "Weeks 7–8",
    deliverables: [
      "Go live to prospective clients",
      "Google Business Profile & local SEO live",
      "First ad campaigns launched",
      "Intake automation turned on",
    ],
  },
  {
    number: "04",
    title: "Grow",
    timeline: "Month 3+",
    deliverables: [
      "Ongoing content & SEO production",
      "Ad & funnel optimisation",
      "Expanded practice-area content",
      "Typical outcome: a full, qualified calendar",
    ],
  },
];

export default function ProfessionalServicesPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Industries · Professional Services
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-4xl">
            Win Clients Before the First Call
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            Websites, local SEO, and content marketing built for law
            firms, accountants, and consultants, so prospects trust you
            before they ever pick up the phone.
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
            Sources: iLawyerMarketing 2024 Consumer Study, Juris Digital Legal Research Survey
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Why Prospects Choose Someone Else
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              It&apos;s Rarely Your Expertise. It&apos;s Your First Impression.
            </h2>
            <p className="text-paragraph text-lg max-w-2xl mx-auto mt-4">
              Most firms don&apos;t lose clients on competence. They lose
              them to a website that doesn&apos;t earn trust fast enough.
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
              Services for Firms & Consultants
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
            Practice Management Platforms We Work With
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
              A proven process built around how firms and consultants
              actually win clients, with full transparency at every step.
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
            Ready to Win Clients Before the First Call?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll look at your current website, local search
            presence, and consultation flow, and show you exactly where
            prospects are choosing someone else.
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
