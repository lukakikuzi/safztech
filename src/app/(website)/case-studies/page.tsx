"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

import Project01Img from "../../../../public/images/e-commerce-project-img.png";
import Project02Img from "../../../../public/images/ai-chatbot-project-img.png";
import Project03Img from "../../../../public/images/admin-dashboard-project-img.png";
import Project04Img from "../../../../public/images/allfences.png";

const caseStudies = [
  {
    img: Project01Img,
    imgAlt: "Pulse Peptides e-commerce platform",
    type: "Software + Growth",
    client: "Pulse Peptides",
    industry: "E-Commerce · USA",
    challenge:
      "Stagnant at $8K/month with a 0.8% conversion rate, no email list, and zero retargeting in place.",
    solution:
      "We rebuilt their Shopify store with a conversion-first design, set up Klaviyo email flows (welcome, abandoned cart, post-purchase), launched Google Shopping and Meta retargeting ads, and ran monthly CRO sprints.",
    results: [
      { value: "3×", label: "Revenue Growth", sub: "$8K → $28K/month" },
      { value: "180+", label: "New Customers", sub: "acquired in 90 days" },
      { value: "2.8×", label: "Ad ROAS", sub: "return on ad spend" },
      { value: "6,400+", label: "Email Subscribers", sub: "from 50 at start" },
    ],
    stack: ["Shopify", "Klaviyo", "Google Ads", "Meta Ads", "React"],
    timeline: "90 days",
    quote: "SAFZTECH took our store from a side project to a real business. The systems they put in place keep working even when we're not.",
    quoteName: "Ahmad K., Owner",
  },
  {
    img: Project02Img,
    imgAlt: "Nexus Support AI chatbot interface",
    type: "Custom Software",
    client: "Nexus Support AI",
    industry: "SaaS · United Kingdom",
    challenge:
      "A growing SaaS company spending $45K/year on support staff with 4-hour average response times, losing customers to frustration.",
    solution:
      "We built a custom AI support system trained on their product documentation, integrated it with their existing ticketing workflow, and built a fallback escalation system for complex queries.",
    results: [
      { value: "80%", label: "Queries Automated", sub: "without human input" },
      { value: "<2 min", label: "Response Time", sub: "down from 4 hours" },
      { value: "$45K", label: "Annual Savings", sub: "in staff costs" },
      { value: "4.8/5", label: "Support Rating", sub: "from customers" },
    ],
    stack: ["OpenAI API", "Supabase", "PyTorch", "Next.js", "Node.js"],
    timeline: "12 weeks",
    quote: "The AI handles 80% of support tickets perfectly. Our team now focuses on complex issues and product improvements instead of repetitive questions.",
    quoteName: "David R., Founder",
  },
  {
    img: Project03Img,
    imgAlt: "FlowMetrics analytics dashboard",
    type: "Custom Software",
    client: "FlowMetrics",
    industry: "Analytics SaaS · Canada",
    challenge:
      "A 12-person team wasting 8 hours every week manually exporting data from 3 separate SaaS tools and building spreadsheet reports for clients.",
    solution:
      "We built a unified analytics dashboard that pulls real-time data from all their existing tools via API, generates automated client reports, and includes a white-label portal for their customers.",
    results: [
      { value: "−90%", label: "Reporting Time", sub: "8 hrs → 45 minutes" },
      { value: "3 tools", label: "Replaced", sub: "$2.4K/month saved" },
      { value: "4.9/5", label: "User Rating", sub: "from 200+ users" },
      { value: "30%", label: "Faster Insights", sub: "for client decisions" },
    ],
    stack: ["Vue.js", "Python", "MongoDB", "AWS", "REST APIs"],
    timeline: "14 weeks",
    quote: "We went from dreading Monday reporting to actually enjoying it. The dashboard pays for itself every single month.",
    quoteName: "Sarah M., Director",
  },
  {
    img: Project04Img,
    imgAlt: "AllFences Canada website",
    type: "Digital Growth",
    client: "AllFences Canada",
    industry: "Home Services · Canada",
    challenge:
      "Zero online presence after 8 years in business. Every lead came from word-of-mouth — no website, no Google presence, no way to scale or predict revenue.",
    solution:
      "We built a fast, conversion-focused Next.js website, optimised every page for local SEO, set up Google Business Profile, launched targeted Google Ads for high-intent searches, and built a simple CRM to track and follow up on every lead.",
    results: [
      { value: "40+", label: "Monthly Leads", sub: "from Google alone" },
      { value: "#1", label: "Google Ranking", sub: "fence installation Toronto" },
      { value: "+65%", label: "Revenue Increase", sub: "in first 6 months" },
      { value: "6 wks", label: "Time to Results", sub: "from first call" },
    ],
    stack: ["Next.js", "Tailwind CSS", "Google Ads", "Local SEO", "CRM"],
    timeline: "6 weeks",
    quote: "I had no idea what I was missing. In 6 weeks we went from no online presence to ringing phones every day. Booked out 3 weeks in advance.",
    quoteName: "Mike T., Owner",
  },
];

const typeBadgeStyle: Record<string, string> = {
  "Software + Growth": "bg-primary/15 text-primary border border-primary/30",
  "Custom Software": "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  "Digital Growth": "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
};

export default function CaseStudiesPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Proven Results
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-3xl">
            Case Studies
          </h1>
          <p className="text-foreground text-xl leading-relaxed max-w-2xl">
            Real clients, real challenges, real numbers. Each case study shows
            the problem we were handed, what we built, and exactly what
            happened next.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard space-y-32">
          {caseStudies.map((study, idx) => (
            <div key={study.client}>

              {/* Image + meta */}
              <div className={`grid lg:grid-cols-2 gap-12 items-center mb-12 ${idx % 2 !== 0 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={`aspect-video rounded-lg overflow-hidden border border-border relative ${idx % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                  <motion.div
                    initial={{ y: 0 }}
                    whileHover={{ y: "-25%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-full w-full"
                  >
                    <Image
                      src={study.img}
                      alt={study.imgAlt}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </div>

                <div className={idx % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${typeBadgeStyle[study.type]}`}>
                      {study.type}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-heading font-poppins mb-1">
                    {study.client}
                  </h2>
                  <p className="text-paragraph text-sm mb-6">{study.industry}</p>

                  <div className="border-l-2 border-primary pl-4 mb-6">
                    <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-1">Challenge</p>
                    <p className="text-foreground/80 italic text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {study.stack.map((s) => (
                      <span key={s} className="text-xs bg-muted border border-border text-foreground px-2.5 py-1">
                        {s}
                      </span>
                    ))}
                    <span className="flex items-center gap-1 text-xs text-paragraph ml-auto">
                      <Clock className="w-3 h-3" /> {study.timeline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="border border-border bg-card p-8 mb-8">
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Solution</p>
                <p className="text-foreground leading-relaxed">{study.solution}</p>
              </div>

              {/* Results grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {study.results.map((r) => (
                  <div key={r.label} className="border border-border bg-secondary-background p-6 text-center">
                    <div className="text-3xl font-bold text-primary font-poppins mb-1">{r.value}</div>
                    <div className="text-heading text-sm font-medium mb-1">{r.label}</div>
                    <div className="text-paragraph text-xs">{r.sub}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="border border-primary/20 bg-primary/5 p-8">
                <p className="text-foreground text-lg italic leading-relaxed mb-4">
                  &ldquo;{study.quote}&rdquo;
                </p>
                <p className="text-primary font-semibold text-sm">&mdash; {study.quoteName}</p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-standard border-t border-border bg-secondary-background">
        <div className="layout-standard section-padding-standard text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins mb-6">
            Want Similar Results?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            Every case study started with a free audit call. Let&apos;s find
            your biggest opportunity and map out your 90-day growth plan.
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-10 py-4 hover:bg-primary-hover transition-colors text-lg"
          >
            Get Your Free Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
