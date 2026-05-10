import React from "react";
import Link from "next/link";
import { Check, ArrowRight, Clock, DollarSign } from "lucide-react";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata = GetPageMetadata({
  title: "Software Solutions — SAFZTECH | Custom Web, Mobile & SaaS Development",
  description:
    "Custom web applications, mobile apps, SaaS platforms, e-commerce & CMS solutions. Built to convert visitors into customers. Starting from $499.",
});

const services = [
  {
    number: "01",
    title: "Custom Web Applications",
    tagline: "Tailor-made web platforms built for your specific business needs.",
    description:
      "Off-the-shelf tools force your business into their mould. We build platforms that work exactly the way you need — client portals, SaaS dashboards, booking systems, and internal tools that save time and scale with you.",
    examples: [
      "Client management portals",
      "SaaS dashboards & admin panels",
      "Internal tools & workflow automation",
      "Booking & scheduling systems",
    ],
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    timeline: "8–16 weeks",
    from: "$5,000",
  },
  {
    number: "02",
    title: "Mobile Applications",
    tagline: "Native iOS & Android apps that your customers will actually use.",
    description:
      "80% of internet usage is mobile. A mobile-optimised website isn't enough — your customers expect a real app. We build fast, intuitive native apps that drive engagement, loyalty, and revenue.",
    examples: [
      "On-demand service apps",
      "Customer loyalty & rewards apps",
      "Real-time tracking & dashboards",
      "Appointment & booking apps",
    ],
    stack: ["React Native", "Swift", "Kotlin", "Firebase"],
    timeline: "10–20 weeks",
    from: "$10,000",
  },
  {
    number: "03",
    title: "Custom Software & SaaS",
    tagline: "Enterprise-grade software built to run and scale your business.",
    description:
      "Replace the stack of SaaS subscriptions eating your margin with one custom platform built exactly for you. Or launch your own SaaS product. We handle architecture, development, and deployment.",
    examples: [
      "Billing & invoicing systems",
      "Inventory & order management",
      "Custom CRM platforms",
      "SaaS product builds",
    ],
    stack: ["Full-Stack", "Microservices", "AWS / GCP", "Docker"],
    timeline: "12–26 weeks",
    from: "$25,000",
  },
  {
    number: "04",
    title: "E-Commerce Platforms",
    tagline: "Conversion-first e-commerce that generates revenue, not just traffic.",
    description:
      "We build and optimise e-commerce stores — from custom Shopify themes to fully custom platforms — with checkout flows, email integrations, and marketing foundations baked in from day one.",
    examples: [
      "Custom Shopify stores & themes",
      "WooCommerce builds & optimisations",
      "Multi-vendor marketplaces",
      "Subscription & membership platforms",
    ],
    stack: ["Shopify", "WooCommerce", "React", "Stripe"],
    timeline: "4–12 weeks",
    from: "$2,000",
  },
  {
    number: "05",
    title: "CMS & Content Platforms",
    tagline: "Update your own website without needing a developer every time.",
    description:
      "Your site shouldn't be a black box. We build CMS-powered platforms that give your team full control over content, pages, and media — with the flexibility to scale as you grow.",
    examples: [
      "WordPress development & optimisation",
      "Headless CMS setup (Contentful, Sanity)",
      "Blog & content platforms",
      "Multi-language & multi-region sites",
    ],
    stack: ["WordPress", "Webflow", "Contentful", "Sanity"],
    timeline: "2–8 weeks",
    from: "$1,000",
  },
];

const techStack = [
  "React", "Next.js", "Node.js", "TypeScript", "Python",
  "PostgreSQL", "MongoDB", "AWS", "Shopify", "React Native",
  "Tailwind CSS", "GraphQL", "Docker", "Firebase", "Stripe",
];

export default function SoftwareSolutionsPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Software Solutions
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-4xl">
            Software That Drives Real Business Results
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            We don&apos;t just build websites and apps. We build software systems
            designed to attract customers, convert visitors, and automate your
            business — from day one.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/free-audit"
              className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 hover:bg-primary-hover transition-colors"
            >
              Discuss Your Project <ArrowRight className="w-4 h-4" />
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

      {/* Services */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              What We Build
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              5 Software Services
            </h2>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.number}
                className="border border-border bg-card p-8 lg:p-10 grid lg:grid-cols-[1fr_2fr] gap-10"
              >
                {/* Left */}
                <div>
                  <span className="text-5xl font-bold text-white/10 font-poppins block mb-4">
                    {service.number}
                  </span>
                  <h3 className="text-2xl font-semibold text-heading font-poppins mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary text-sm italic mb-6">
                    {service.tagline}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-paragraph mb-2">
                    <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {service.timeline}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-paragraph">
                    <DollarSign className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    From {service.from}
                  </div>
                </div>

                {/* Right */}
                <div>
                  <p className="text-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-heading text-xs font-semibold tracking-widest uppercase mb-3">
                        Examples
                      </p>
                      <ul className="space-y-2">
                        {service.examples.map((ex) => (
                          <li key={ex} className="flex items-start gap-2 text-sm text-foreground">
                            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-heading text-xs font-semibold tracking-widest uppercase mb-3">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-muted border border-border text-foreground px-2.5 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack strip */}
      <section className="py-14 border-y border-border bg-secondary-background">
        <div className="layout-standard">
          <p className="text-heading text-xs font-semibold tracking-[0.2em] uppercase text-center mb-8">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="border border-border text-paragraph text-sm px-4 py-2 hover:border-primary/50 hover:text-heading transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-standard border-b border-border">
        <div className="layout-standard section-padding-standard text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins mb-6">
            Ready to Build Something?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll scope it, timeline it,
            and send you a transparent quote — usually within 24 hours.
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-10 py-4 hover:bg-primary-hover transition-colors text-lg"
          >
            Get a Free Project Quote <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-paragraph text-sm mt-4">
            No commitment required · Response within 24 hours
          </p>
        </div>
      </section>

    </main>
  );
}
