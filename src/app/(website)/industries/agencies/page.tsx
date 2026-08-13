import React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Code2,
  Search,
  Gauge,
  Users2,
  Zap,
  Wrench,
  LifeBuoy,
  ClipboardX,
  UserX,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata = GetPageMetadata({
  title: "White-Label Services for Agencies | SAFZTECH",
  description:
    "White-label web, app and SEO delivery for agencies, so you can take on more clients without hiring. Your brand, our delivery.",
});

const stats = [
  { value: "73%", label: "Of agencies already use white-label services" },
  { value: "2.3×", label: "Faster growth outsourcing 40 to 60% of delivery" },
  { value: "42%", label: "Higher client retention with white-label partnerships" },
  { value: "0", label: "Clients who ever hear our name" },
];

const problems = [
  {
    Icon: ClipboardX,
    title: "Overloaded In-House Capacity",
    desc: "Your team is at capacity, but saying no to new work means losing revenue and, sometimes, the client entirely.",
  },
  {
    Icon: UserX,
    title: "Inconsistent Freelancer Quality",
    desc: "Freelancers disappear mid-project, miss deadlines, or deliver work you have to redo, putting your reputation on the line.",
  },
  {
    Icon: TrendingDown,
    title: "Turning Away Revenue",
    desc: "Every dev, app, or SEO request you can't fulfil is revenue and a client relationship handed to someone else.",
  },
  {
    Icon: AlertTriangle,
    title: "No Scalable Delivery System",
    desc: "Without a reliable delivery partner, growth means constant hiring, training, and management overhead.",
  },
];

const services = [
  {
    Icon: Code2,
    title: "White-Label Web & App Development",
    tagline: "Your brand on the proposal, our team on delivery.",
    description:
      "Full website and application builds delivered under your agency's name, with no client-facing contact from our side, ever.",
    examples: ["Website & web app builds", "Mobile app development", "E-commerce builds", "Custom software projects"],
    timeline: "Per project scope",
  },
  {
    Icon: Search,
    title: "White-Label SEO & Content",
    tagline: "Scale your SEO offering without hiring a team.",
    description:
      "SEO strategy, content production, and link building delivered under your brand, with reporting formatted the way your clients expect.",
    examples: ["SEO strategy & execution", "Content production", "Link building", "White-labeled reporting"],
    timeline: "Ongoing engagements",
  },
  {
    Icon: Gauge,
    title: "Reseller Dashboard & Reporting",
    tagline: "Client-ready reporting without the manual work.",
    description:
      "Branded dashboards and reports you can hand straight to clients, so project status and results never require manual compilation.",
    examples: ["White-labeled dashboards", "Automated client reports", "Project status tracking", "Custom branding options"],
    timeline: "Set up within days",
  },
  {
    Icon: Users2,
    title: "Dedicated Account Management",
    tagline: "One point of contact who knows every project.",
    description:
      "A dedicated account manager on our side means you're never chasing updates across a scattered freelancer team.",
    examples: ["Dedicated account manager", "Regular status updates", "Direct Slack/email access", "Escalation handling"],
    timeline: "From day one",
  },
  {
    Icon: Zap,
    title: "Rush & Overflow Capacity",
    tagline: "Say yes to the deadline you'd normally decline.",
    description:
      "When a client needs something delivered faster than your in-house team can manage, we absorb the overflow without dropping quality.",
    examples: ["Rush project delivery", "Overflow capacity on demand", "Flexible scaling up or down", "No long-term commitment required"],
    timeline: "As needed",
  },
  {
    Icon: Wrench,
    title: "Custom Software for Agency Clients",
    tagline: "Take on the projects your team can't build alone.",
    description:
      "Complex custom software and integrations built to your specification, so you can pitch bigger projects with confidence.",
    examples: ["Custom software builds", "Third-party API integrations", "Internal tools & dashboards", "Legacy system modernisation"],
    timeline: "Per project scope",
  },
  {
    Icon: LifeBuoy,
    title: "Ongoing Maintenance & Support",
    tagline: "Keep every client site running, under your brand.",
    description:
      "White-label maintenance, updates, and support plans that let you offer ongoing retainers without staffing a support team.",
    examples: ["White-labeled maintenance plans", "Security & update management", "Uptime monitoring", "Client support handling"],
    timeline: "Ongoing engagements",
  },
];

const platforms = [
  "Slack", "Asana", "ClickUp", "Figma", "GitHub", "Notion",
];

const process = [
  {
    number: "01",
    title: "Discovery & Scope",
    timeline: "Week 1",
    deliverables: [
      "Understand your service offerings & gaps",
      "Define white-label workflow & branding",
      "Agree on pricing & margin structure",
      "Set up communication channels",
    ],
  },
  {
    number: "02",
    title: "First Project",
    timeline: "Per scope",
    deliverables: [
      "Kick off first client project",
      "Dedicated account manager assigned",
      "Regular status updates delivered",
      "QA tested before handoff",
    ],
  },
  {
    number: "03",
    title: "Scale",
    timeline: "Ongoing",
    deliverables: [
      "Take on additional client projects",
      "Reporting dashboards branded & live",
      "Rush/overflow capacity available",
      "Consistent delivery quality maintained",
    ],
  },
  {
    number: "04",
    title: "Grow Together",
    timeline: "Month 3+",
    deliverables: [
      "Expand into new service lines",
      "Volume-based pricing improvements",
      "Priority scheduling for your projects",
      "Typical outcome: capacity to take on 3x the clients",
    ],
  },
];

export default function AgenciesPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Industries · Agencies
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-4xl">
            Your Brand. Our Delivery.
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            White-label web, app, and SEO delivery for agencies, so you
            can take on more clients and bigger projects without hiring
            a single new employee.
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
            Sources: E2M Solutions White-Label Industry Report, industry outsourcing benchmarks
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Why Agencies Turn Away Revenue
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              It&apos;s Rarely Demand. It&apos;s Delivery Capacity.
            </h2>
            <p className="text-paragraph text-lg max-w-2xl mx-auto mt-4">
              Most agencies don&apos;t lose clients over strategy. They
              lose them, or turn them away, when delivery capacity runs
              out.
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
              What We Deliver
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              White-Label Services for Agencies
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

      {/* Tools we work within */}
      <section className="py-14 border-b border-border">
        <div className="layout-standard">
          <p className="text-heading text-xs font-semibold tracking-[0.2em] uppercase text-center mb-8">
            Tools We Collaborate In
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
              FROM FIRST PROJECT TO SCALED DELIVERY
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              A proven process built around how agency partnerships
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
            Ready to Stop Turning Away Clients?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll look at your current capacity and service gaps,
            and show you exactly where a white-label partner unlocks
            more revenue.
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
