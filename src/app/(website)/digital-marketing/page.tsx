import React from "react";
import Link from "next/link";
import { Check, ArrowRight, TrendingUp } from "lucide-react";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata = GetPageMetadata({
  title: "Digital Growth Services — SAFZTECH | SEO, Lead Gen & Paid Ads",
  description:
    "Lead generation, SEO, paid advertising, conversion optimisation, email marketing & YouTube automation. Real results: 500K+ leads generated across 150+ clients.",
});

const services = [
  {
    number: "01",
    title: "Lead Generation & Outreach",
    tagline: "Fill your pipeline with qualified prospects on autopilot.",
    description:
      "We build multi-channel lead generation systems that bring you consistent, qualified enquiries every month — without you spending hours cold calling or relying on referrals alone.",
    channels: ["Google Ads campaigns", "Facebook & Instagram ads", "LinkedIn B2B outreach", "Email sequences & follow-ups"],
    results: "15–40 qualified leads/month",
    timeline: "2–4 weeks to first leads",
    from: "$1,500/month",
  },
  {
    number: "02",
    title: "SEO & Organic Growth",
    tagline: "Rank on Google, get free traffic, attract your ideal customers.",
    description:
      "Paid ads stop the moment you stop paying. SEO compounds over time — building an asset that sends you free, high-intent traffic for years. We handle strategy, technical SEO, content, and link building.",
    channels: ["Keyword research & strategy", "On-page & technical SEO", "Content creation (blogs, guides)", "High-authority link building"],
    results: "Page 1 rankings in 4–6 months",
    timeline: "Ongoing (6-month minimum)",
    from: "$1,500/month",
  },
  {
    number: "03",
    title: "Conversion Rate Optimisation",
    tagline: "Turn more of your existing traffic into paying customers.",
    description:
      "You're already paying for traffic. CRO makes that traffic work harder — small improvements to your landing pages, checkout flow, and CTAs compound into dramatically more revenue from the same visitors.",
    channels: ["Landing page redesign & copywriting", "A/B testing & multivariate tests", "Checkout & form optimisation", "Heatmap & session recording analysis"],
    results: "50–200% conversion rate increase",
    timeline: "30–60 days",
    from: "$2,000/project",
  },
  {
    number: "04",
    title: "Paid Advertising",
    tagline: "The fastest way to get results — when done right.",
    description:
      "Most businesses waste 40–60% of their ad spend on poor targeting and weak creatives. We build campaigns that are tight, tested, and constantly optimised — so every dollar works harder.",
    channels: ["Google Search & Shopping ads", "Facebook & Instagram ads", "Remarketing & retargeting", "Video & YouTube ads"],
    results: "2:1 to 5:1 ROAS average",
    timeline: "Live within 1–2 weeks",
    from: "15–20% management fee",
  },
  {
    number: "05",
    title: "Content & Email Marketing",
    tagline: "Build authority, nurture leads, and drive repeat revenue.",
    description:
      "Your email list is your most valuable asset — it's the only audience you actually own. We build email sequences and content strategies that turn cold leads into warm prospects and one-time buyers into loyal customers.",
    channels: ["Blog & article creation (SEO-optimised)", "Email welcome & nurture sequences", "Re-engagement campaigns", "Social media content"],
    results: "30–50% email open rates",
    timeline: "Ongoing",
    from: "$1,000/month",
  },
  {
    number: "06",
    title: "YouTube & Video Automation",
    tagline: "The second-largest search engine is still massively underused.",
    description:
      "YouTube provides compound, long-term organic traffic — videos rank in Google search AND YouTube search. We create, optimise, and help automate your channel to build a scalable audience and lead source.",
    channels: ["Channel setup & brand identity", "Video scripting & production guidance", "SEO optimisation for every video", "Monetisation & growth strategy"],
    results: "1,000–10,000 subscribers in 6 months",
    timeline: "8–12 weeks to first videos",
    from: "$2,000/month",
  },
];

const stats = [
  { value: "500K+", label: "Leads Generated" },
  { value: "$2.5B+", label: "Revenue Created" },
  { value: "150+", label: "Businesses Grown" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function DigitalMarketingPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Digital Growth
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-4xl">
            Growth Systems That Generate Leads & Revenue
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            Building beautiful software means nothing if nobody knows about it.
            We handle the growth side — attracting customers, converting
            visitors, and scaling revenue month over month.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/free-audit"
              className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 hover:bg-primary-hover transition-colors"
            >
              Get a Growth Strategy <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#projects"
              className="flex items-center gap-2 border border-primary text-primary font-semibold px-8 py-4 hover:bg-primary/10 transition-colors"
            >
              View Results
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

      {/* Services */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Growth Services
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              6 Ways We Grow Your Business
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
                  <div className="space-y-2 text-sm text-paragraph">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      {service.results}
                    </div>
                    <div className="text-paragraph/70">{service.timeline}</div>
                    <div className="text-primary font-semibold">{service.from}</div>
                  </div>
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
                    {service.channels.map((ch) => (
                      <li key={ch} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        {ch}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-standard border-t border-primary/20 bg-primary/5">
        <div className="layout-standard section-padding-standard text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins mb-6">
            Ready to Start Growing?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll audit your current digital presence, identify the
            biggest growth opportunity, and show you a clear path to 2–3×
            revenue in 90 days.
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-10 py-4 hover:bg-primary-hover transition-colors text-lg"
          >
            Get Your Free Growth Audit <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-paragraph text-sm mt-4">
            Free · No obligation · Response within 2 hours
          </p>
        </div>
      </section>

    </main>
  );
}
