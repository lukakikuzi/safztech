"use client";

import React from "react";
import Link from "next/link";
import { Code2, TrendingUp, Check, ArrowRight } from "lucide-react";

const softwareServices = [
  "Custom Web Applications",
  "Mobile Apps (iOS & Android)",
  "Custom Software & SaaS Platforms",
  "E-Commerce Platforms",
  "CMS, CRM & Automation",
];

const growthServices = [
  "Lead Generation & Outreach",
  "SEO & Content Marketing",
  "Paid Advertising (Google & Meta)",
  "Conversion Rate Optimization",
  "Social Media Marketing",
  "YouTube Automation",
];

function OurServicesSection() {
  return (
    <section id="services" className="bg-secondary-background section-padding-standard">
      <div className="layout-standard section-padding-standard">

        {/* Section Header */}
        <div className="lg:mb-16 mb-12 relative flex flex-col text-center items-center w-full gap-4">
          <h1 className="absolute text-[9rem] font-bold tracking-widest text-white/10 select-none -top-[4.2rem] max-lg:hidden">
            SERVICES
          </h1>
          <p className="relative text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            What We Do
          </p>
          <h2 className="relative text-4xl md:text-5xl font-semibold text-heading font-poppins">
            Two Pillars. One Result: Business Growth.
          </h2>
          <p className="text-paragraph text-lg max-w-2xl">
            Most agencies do one or the other. We combine both so your software
            attracts customers and your marketing has a platform that converts them.
          </p>
        </div>

        {/* Two Pillars */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">

          {/* Pillar 1: Software Solutions */}
          <div className="border border-border bg-card p-8 lg:p-10 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs tracking-widest text-paragraph uppercase mb-0.5">
                  Pillar 01
                </p>
                <h3 className="text-xl font-bold text-heading font-poppins">
                  SOFTWARE SOLUTIONS
                </h3>
              </div>
            </div>

            <p className="text-primary text-sm font-medium mb-6 italic">
              "Build once, scale forever"
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {softwareServices.map((service) => (
                <li key={service} className="flex items-center gap-3 text-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>

            <Link
              href="/software-solutions"
              className="flex items-center gap-2 text-primary text-sm font-semibold hover:gap-4 transition-all duration-200 group"
            >
              Explore Software Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Pillar 2: Digital Growth */}
          <div className="border border-primary/30 bg-primary/5 p-8 lg:p-10 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs tracking-widest text-paragraph uppercase mb-0.5">
                  Pillar 02
                </p>
                <h3 className="text-xl font-bold text-heading font-poppins">
                  DIGITAL GROWTH
                </h3>
              </div>
            </div>

            <p className="text-primary text-sm font-medium mb-6 italic">
              "Continuous Growth Engine"
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {growthServices.map((service) => (
                <li key={service} className="flex items-center gap-3 text-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>

            <Link
              href="/digital-marketing"
              className="flex items-center gap-2 text-primary text-sm font-semibold hover:gap-4 transition-all duration-200 group"
            >
              Explore Digital Growth
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Synergy Banner */}
        <div className="border border-border bg-card p-8 text-center">
          <p className="text-heading text-lg md:text-xl font-medium font-poppins mb-2">
            Traffic without great software is wasted.{" "}
            <span className="text-primary">Software without traffic is invisible.</span>
          </p>
          <p className="text-paragraph">
            SAFZTECH is the only partner you need — we build{" "}
            <span className="text-foreground font-medium">AND</span> grow your business.
          </p>
        </div>

      </div>
    </section>
  );
}

export default OurServicesSection;
