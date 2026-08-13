import React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  LayoutTemplate,
  Rocket,
  FileText,
  Workflow,
  MousePointerClick,
  BookOpen,
  Sparkles,
  ClockAlert,
  MousePointerBan,
  FileX,
  Unplug,
} from "lucide-react";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata = GetPageMetadata({
  title: "B2B & SaaS Website & Growth Services | SAFZTECH",
  description:
    "Websites, demo funnels, content marketing and CRM integration built for B2B and SaaS companies. Shorten your sales cycle and grow organic pipeline.",
});

const stats = [
  { value: "80%", label: "Of the buyer journey happens before contacting sales" },
  { value: "71%", label: "Of B2B buyers start research with a Google search" },
  { value: "94%", label: "Of buying groups rank their shortlist before any seller call" },
  { value: "64%", label: "Prefer thought leadership over promotional content" },
];

const problems = [
  {
    Icon: ClockAlert,
    title: "Long, Unqualified Sales Cycles",
    desc: "Without a website that pre-sells and pre-qualifies, sales spends weeks on calls that were never going to close.",
  },
  {
    Icon: MousePointerBan,
    title: "A Site That Doesn't Convert Demos",
    desc: "Traffic arrives, reads the homepage, and leaves. Without a real funnel, most visitors never request a demo or trial.",
  },
  {
    Icon: FileX,
    title: "No Content Driving Organic Pipeline",
    desc: "Without SEO and content built around buyer intent, you're entirely dependent on paid ads and outbound for every lead.",
  },
  {
    Icon: Unplug,
    title: "Disconnected Marketing & CRM Stack",
    desc: "Leads fall through the cracks when your website, CRM, and marketing automation don't actually talk to each other.",
  },
];

const services = [
  {
    Icon: LayoutTemplate,
    title: "Website & Landing Page Build",
    tagline: "A site that pre-sells before the first call.",
    description:
      "We build marketing sites and landing pages structured around your actual buying process, not a generic template every SaaS site uses.",
    examples: ["Marketing website build", "Product & pricing pages", "Comparison & alternative pages", "Landing page systems"],
    timeline: "4–8 weeks",
  },
  {
    Icon: Rocket,
    title: "Demo & Trial Funnel Optimisation",
    tagline: "Turn more visitors into qualified demos.",
    description:
      "We test and rebuild your demo request and trial signup flow based on real behaviour data, so fewer qualified visitors slip away.",
    examples: ["Demo request flow optimisation", "Trial signup & onboarding UX", "A/B testing", "Funnel analytics setup"],
    timeline: "Ongoing (60-day minimum)",
  },
  {
    Icon: FileText,
    title: "Content Marketing & SEO",
    tagline: "Pipeline that doesn't depend on ad spend.",
    description:
      "Bottom-of-funnel and educational content built around what your buyers actually search, so organic traffic turns into real pipeline.",
    examples: ["Buyer-intent SEO content", "Comparison & alternative content", "Technical SEO fixes", "Link building"],
    timeline: "Ongoing (6-month minimum)",
  },
  {
    Icon: Workflow,
    title: "CRM & Marketing Automation Integration",
    tagline: "No lead ever falls through the cracks again.",
    description:
      "We connect your website and forms to the CRM and marketing automation stack you already run, with lead scoring and routing built in.",
    examples: ["CRM integration", "Marketing automation setup", "Lead scoring & routing", "Sales handoff workflows"],
    timeline: "2–4 weeks",
  },
  {
    Icon: MousePointerClick,
    title: "Paid Advertising",
    tagline: "Predictable pipeline while organic compounds.",
    description:
      "LinkedIn and Google campaigns built around your actual ICP and buying committee, not broad targeting that burns budget.",
    examples: ["LinkedIn Ads", "Google Search & retargeting", "ABM campaigns", "Landing page pairing"],
    timeline: "Live within 1–2 weeks",
  },
  {
    Icon: BookOpen,
    title: "Case Studies & Sales Enablement",
    tagline: "Content that closes deals sales can't.",
    description:
      "Customer case studies, comparison sheets, and one-pagers that give your sales team what they need to close, not just talk about the product.",
    examples: ["Customer case studies", "Comparison & battlecards", "Sales one-pagers", "ROI calculators"],
    timeline: "2–4 weeks",
  },
  {
    Icon: Sparkles,
    title: "Product-Led Onboarding Flows",
    tagline: "Get free/trial users to their first win faster.",
    description:
      "Onboarding flows and in-app messaging designed to get new users to activation and value quickly, so more trials convert to paid.",
    examples: ["Onboarding flow design", "In-app messaging", "Activation tracking", "Trial-to-paid conversion optimisation"],
    timeline: "3–6 weeks",
  },
];

const platforms = [
  "HubSpot", "Salesforce", "Intercom", "Segment", "Stripe", "Webflow",
];

const process = [
  {
    number: "01",
    title: "Audit & Strategy",
    timeline: "Week 1",
    deliverables: [
      "Review current funnel & demo conversion rate",
      "Content & SEO gap analysis",
      "Competitor & positioning analysis",
      "Prioritised growth roadmap",
    ],
  },
  {
    number: "02",
    title: "Build",
    timeline: "Weeks 2–7",
    deliverables: [
      "Website & funnel build",
      "CRM & marketing automation integration",
      "First content assets produced",
      "QA tested before going live",
    ],
  },
  {
    number: "03",
    title: "Launch",
    timeline: "Weeks 8–9",
    deliverables: [
      "Go live to the market",
      "SEO foundations live",
      "First paid campaigns launched",
      "Lead scoring & routing turned on",
    ],
  },
  {
    number: "04",
    title: "Grow",
    timeline: "Month 3+",
    deliverables: [
      "Ongoing content & SEO production",
      "Funnel & ad optimisation",
      "Sales enablement content expansion",
      "Typical outcome: a predictable pipeline",
    ],
  },
];

export default function B2bSaasPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Industries · B2B & SaaS
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-4xl">
            Shorten the Sales Cycle. Grow the Pipeline.
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            Websites, demo funnels, and content marketing built for B2B
            and SaaS companies, so qualified pipeline doesn&apos;t depend
            entirely on outbound and ad spend.
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
            Sources: 6sense 2025 B2B Buyer Experience Report, Sopro B2B Buyer Statistics
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Why Pipeline Stalls
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              It&apos;s Rarely the Product. It&apos;s the Funnel.
            </h2>
            <p className="text-paragraph text-lg max-w-2xl mx-auto mt-4">
              Most B2B and SaaS companies don&apos;t lose deals on
              features. They lose them to a site and funnel that never
              earns the demo.
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
              Services for B2B & SaaS Companies
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
              FROM AUDIT TO A PREDICTABLE PIPELINE
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              A proven process built around how B2B and SaaS companies
              actually grow, with full transparency at every step.
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
            Ready to Stop Relying on Outbound Alone?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll look at your current funnel, content, and CRM setup,
            and show you exactly where qualified pipeline is slipping
            away.
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
