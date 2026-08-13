import React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  ShoppingCart,
  Gauge,
  Mail,
  MousePointerClick,
  Search,
  Repeat,
  Boxes,
  PackageX,
  Snail,
  MailX,
  TrendingDown,
} from "lucide-react";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata = GetPageMetadata({
  title: "E-Commerce Website & Growth Services | SAFZTECH",
  description:
    "Store builds, conversion optimisation, email/SMS retention and paid ads built for e-commerce brands. Turn more visitors into repeat customers.",
});

const stats = [
  { value: "70%", label: "Average cart abandonment rate" },
  { value: "48%", label: "Abandon over unexpected shipping or tax costs" },
  { value: "80%", label: "Mobile cart abandonment rate (69% on desktop)" },
  { value: "$18B", label: "Lost annually to cart abandonment in the US" },
];

const problems = [
  {
    Icon: PackageX,
    title: "High Cart Abandonment",
    desc: "A clunky checkout, surprise shipping costs, or too many steps quietly send most shoppers away before they pay.",
  },
  {
    Icon: Snail,
    title: "Slow Page Speed Killing Sales",
    desc: "Every extra second of load time costs conversions, and most stores never find out how much they're losing.",
  },
  {
    Icon: MailX,
    title: "No Retention System",
    desc: "Without email and SMS flows, most first-time buyers never hear from you again, and repeat revenue never compounds.",
  },
  {
    Icon: TrendingDown,
    title: "Product Pages That Don't Convert",
    desc: "Generic descriptions, weak imagery, and no social proof mean traffic arrives and leaves without buying.",
  },
];

const services = [
  {
    Icon: ShoppingCart,
    title: "Store Build & Platform Migration",
    tagline: "A store built to sell, not just to exist.",
    description:
      "Custom Shopify, WooCommerce, or headless builds designed around your catalog and margins, with clean checkout flows from day one.",
    examples: ["Shopify / WooCommerce builds", "Platform migrations", "Custom theme development", "Multi-currency & international setup"],
    timeline: "4–10 weeks",
  },
  {
    Icon: Gauge,
    title: "Conversion Rate Optimisation",
    tagline: "More revenue from the traffic you already have.",
    description:
      "We test and rebuild your checkout, product pages, and offers based on real behaviour data, not guesswork, so a bigger share of visitors buy.",
    examples: ["Checkout flow optimisation", "A/B & multivariate testing", "Heatmap & session analysis", "Product page rebuilds"],
    timeline: "Ongoing (60-day minimum)",
  },
  {
    Icon: Mail,
    title: "Email & SMS Retention Marketing",
    tagline: "Turn one-time buyers into repeat customers.",
    description:
      "Abandoned cart flows, post-purchase sequences, and winback campaigns that recover lost sales and keep customers coming back.",
    examples: ["Abandoned cart sequences", "Post-purchase flows", "Winback & loyalty campaigns", "Segmented broadcast campaigns"],
    timeline: "2–4 weeks",
  },
  {
    Icon: MousePointerClick,
    title: "Paid Advertising",
    tagline: "Profitable growth, not just traffic.",
    description:
      "Google Shopping, Meta, and retargeting campaigns built around your actual margins, so every ad dollar is measured against real profit.",
    examples: ["Google Shopping campaigns", "Meta & Instagram ads", "Retargeting & dynamic ads", "Creative testing & iteration"],
    timeline: "Live within 1–2 weeks",
  },
  {
    Icon: Search,
    title: "SEO & Content Marketing",
    tagline: "Free, compounding traffic that never stops.",
    description:
      "Category, product, and content SEO that builds organic traffic you don't have to pay for every month, on top of your paid channels.",
    examples: ["Product & category SEO", "Buying guide content", "Technical SEO fixes", "Link building"],
    timeline: "Ongoing (6-month minimum)",
  },
  {
    Icon: Repeat,
    title: "Subscription & Loyalty Programs",
    tagline: "Predictable revenue you can plan around.",
    description:
      "Subscription offers, points-based loyalty, and VIP tiers that give customers a reason to keep buying from you instead of shopping around.",
    examples: ["Subscription/recurring offers", "Points & rewards programs", "VIP & tiered memberships", "Referral programs"],
    timeline: "2–3 weeks",
  },
  {
    Icon: Boxes,
    title: "Inventory & ERP Integration",
    tagline: "Stock levels that are actually accurate.",
    description:
      "We connect your store to inventory, fulfilment, and accounting systems, so you're never overselling or manually reconciling orders.",
    examples: ["Inventory sync", "Fulfilment & shipping integration", "ERP / accounting integration", "Multi-warehouse support"],
    timeline: "2–5 weeks",
  },
];

const platforms = [
  "Shopify", "WooCommerce", "BigCommerce", "Klaviyo", "ShipStation", "Recharge",
];

const process = [
  {
    number: "01",
    title: "Audit & Strategy",
    timeline: "Week 1",
    deliverables: [
      "Review current conversion & abandonment rates",
      "Store speed & checkout audit",
      "Competitor & market gap analysis",
      "Prioritised growth roadmap",
    ],
  },
  {
    number: "02",
    title: "Build",
    timeline: "Weeks 2–7",
    deliverables: [
      "Store build or optimisation",
      "Email/SMS flow setup",
      "Inventory & fulfilment integration",
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
      "First ad campaigns launched",
      "Retention flows turned on",
    ],
  },
  {
    number: "04",
    title: "Grow",
    timeline: "Month 3+",
    deliverables: [
      "Ongoing CRO testing",
      "Ad & SEO optimisation",
      "New offer & loyalty campaigns",
      "Typical outcome: 2–3× revenue growth",
    ],
  },
];

export default function EcommercePage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Industries · E-Commerce
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-4xl">
            Turn More Visitors Into Repeat Customers
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            Store builds, conversion optimisation, and retention marketing
            built for e-commerce brands, so you stop losing sales to a
            checkout nobody finishes.
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
            Sources: Baymard Institute Cart Abandonment Statistics, EmailVendorSelection 2026 Cart Abandonment Report
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Why Revenue Leaks Out
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              It&apos;s Rarely the Product. It&apos;s the Funnel.
            </h2>
            <p className="text-paragraph text-lg max-w-2xl mx-auto mt-4">
              Most stores don&apos;t lose sales because of a bad product.
              They lose them to friction most owners never see happening.
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
              Services for E-Commerce Brands
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
              FROM AUDIT TO COMPOUNDING REVENUE
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              A proven process built around how e-commerce brands actually
              grow, with full transparency at every step.
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
            Ready to Stop Losing Sales at Checkout?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll look at your current funnel, page speed, and
            retention flows, and show you exactly where revenue is
            leaking out before it costs you another month.
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
