"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

import Project01Img from "../../../public/images/e-commerce-project-img.png";
import Project02Img from "../../../public/images/ai-chatbot-project-img.png";
import Project03Img from "../../../public/images/admin-dashboard-project-img.png";
import Project04Img from "../../../public/images/allfences.png";

const caseStudies = [
  {
    img: Project01Img,
    imgAlt: "Pulse Peptides e-commerce platform",
    yHover: "-30%",
    type: "Software + Growth",
    client: "Pulse Peptides",
    industry: "E-Commerce · USA",
    challenge:
      "Stagnant at $8K/month with a 0.8% conversion rate, no email list, and zero retargeting in place.",
    results: [
      { value: "3×", label: "Revenue Growth", sub: "$8K → $28K/month" },
      { value: "180+", label: "New Customers", sub: "acquired in 90 days" },
      { value: "2.8×", label: "Ad ROAS", sub: "return on ad spend" },
    ],
    stack: ["Shopify", "Klaviyo", "Google Ads", "React"],
    timeline: "90 days",
    flip: false,
  },
  {
    img: Project02Img,
    imgAlt: "Nexus AI support chatbot",
    yHover: "-20%",
    type: "Custom Software",
    client: "Nexus Support AI",
    industry: "SaaS · United Kingdom",
    challenge:
      "4-hour average support response times and $45K/year in support staff costs with no automation.",
    results: [
      { value: "80%", label: "Queries Automated", sub: "without human input" },
      { value: "<2 min", label: "Response Time", sub: "down from 4 hours" },
      { value: "$45K", label: "Annual Savings", sub: "in staff overhead" },
    ],
    stack: ["OpenAI API", "Supabase", "PyTorch", "Next.js"],
    timeline: "12 weeks",
    flip: true,
  },
  {
    img: Project03Img,
    imgAlt: "FlowMetrics analytics dashboard",
    yHover: "-30%",
    type: "Custom Software",
    client: "FlowMetrics",
    industry: "Analytics SaaS · Canada",
    challenge:
      "Team wasted 8 hours/week manually pulling data from 3 disconnected tools and building spreadsheet reports.",
    results: [
      { value: "−90%", label: "Reporting Time", sub: "8 hrs → 45 minutes" },
      { value: "3 tools", label: "Replaced", sub: "$2.4K/month saved" },
      { value: "4.9 / 5", label: "User Rating", sub: "from 200+ users" },
    ],
    stack: ["Vue.js", "Python", "MongoDB", "AWS"],
    timeline: "14 weeks",
    flip: false,
  },
  {
    img: Project04Img,
    imgAlt: "AllFences Canada website",
    yHover: "-10%",
    type: "Digital Growth",
    client: "AllFences Canada",
    industry: "Home Services · Canada",
    challenge:
      "Zero online presence. Every lead came from word-of-mouth with no way to scale or predict revenue.",
    results: [
      { value: "40+", label: "Monthly Leads", sub: "from Google alone" },
      { value: "#1", label: "Google Ranking", sub: "fence installation Toronto" },
      { value: "+65%", label: "Revenue Increase", sub: "in first 6 months" },
    ],
    stack: ["Next.js", "Tailwind", "Google Ads", "SEO"],
    timeline: "6 weeks",
    flip: true,
  },
];

const typeBadgeStyle: Record<string, string> = {
  "Software + Growth": "bg-primary/15 text-primary border border-primary/30",
  "Custom Software": "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  "Digital Growth": "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
};

function ProjectsSection() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="projects" className="bg-background section-padding-standard">
      <div className="layout-standard section-padding-standard">

        {/* Header */}
        <div className="lg:mb-20 mb-12 relative flex flex-col text-center items-center w-full gap-4">
          <h1 className="absolute text-[9rem] font-bold tracking-widest text-white/10 select-none -top-[4.2rem] max-lg:hidden">
            WORK
          </h1>
          <p className="relative text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            Proven Results
          </p>
          <h2 className="relative text-4xl md:text-5xl font-semibold text-heading font-poppins">
            CASE STUDIES
          </h2>
          <p className="text-paragraph text-lg max-w-2xl">
            Real clients, real challenges, real numbers. Here&apos;s how we
            delivered across software and growth.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-24">
          {caseStudies.map((study, idx) => (
            <div
              key={study.client}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div
                className={`aspect-video rounded-lg overflow-hidden border border-border relative ${
                  study.flip ? "lg:order-2" : ""
                }`}
              >
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: study.yHover }}
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

              {/* Content */}
              <div className={study.flip ? "lg:order-1" : ""}>
                {/* Type + index */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      typeBadgeStyle[study.type]
                    }`}
                  >
                    {study.type}
                  </span>
                  <span className="text-paragraph text-xs tracking-widest">
                    {String(idx + 1).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold text-heading font-poppins mb-1">
                  {study.client}
                </h3>
                <p className="text-paragraph text-sm mb-5">{study.industry}</p>

                <p className="text-foreground/70 italic text-sm leading-relaxed mb-6 border-l-2 border-border pl-4">
                  Challenge: {study.challenge}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {study.results.map((r) => (
                    <div
                      key={r.label}
                      className="bg-secondary-background border border-border p-3 text-center"
                    >
                      <div className="text-xl font-bold text-primary font-poppins leading-none mb-1">
                        {r.value}
                      </div>
                      <div className="text-paragraph text-[10px] leading-tight">
                        {r.sub}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stack + timeline */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {study.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-muted text-foreground px-2.5 py-1 border border-border"
                    >
                      {s}
                    </span>
                  ))}
                  <span className="flex items-center gap-1 text-xs text-paragraph ml-auto">
                    <Clock className="w-3 h-3" /> {study.timeline}
                  </span>
                </div>

                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-2 text-primary text-sm font-semibold group hover:gap-3 transition-all"
                >
                  Get Similar Results
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
