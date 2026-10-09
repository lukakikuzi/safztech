"use client";

import React from "react";
import {
  ServiceIntroCards,
  ServicePillarCards,
} from "@/components/services/service-intro-cards";

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
    <section id="services" className="border-t border-border section-padding-standard">
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

        <ServiceIntroCards />

        <ServicePillarCards
          softwareServices={softwareServices}
          growthServices={growthServices}
        />

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
