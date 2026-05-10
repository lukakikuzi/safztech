"use client";

import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const trustMetrics = [
  { value: "150+", label: "Businesses Trusted SAFZTECH" },
  { value: "500K+", label: "Leads Generated" },
  { value: "$2.5B+", label: "In Revenue Created" },
];

function HomeHeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative lg:min-h-[90vh] min-h-screen flex flex-col justify-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/videos/home-hero-bg-vido.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-5" />

      <div className="layout-standard h-full relative z-10 py-28 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Headline + Subheading + CTAs */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
              Premium Software House &amp; Digital Growth Partner
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-poppins text-heading">
              Software That Sells.{" "}
              <span className="text-primary">Growth</span>{" "}
              That Scales.
            </h1>

            <p className="text-foreground text-lg leading-relaxed mb-10 max-w-xl">
              We build high-converting websites, mobile apps &amp; custom
              software — then market them with SEO, paid ads &amp; conversion
              optimization so you get leads, customers, and revenue growth.
              Not just a website.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 hover:bg-primary-hover transition-colors duration-200"
              >
                Get Free Growth Audit
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("#projects")}
                className="flex items-center gap-2 border border-primary text-primary font-semibold px-7 py-3.5 hover:bg-primary/10 transition-colors duration-200"
              >
                View Our Work
              </button>
            </div>
          </div>

          {/* Right — Trust Metrics */}
          <div className="flex flex-col gap-4 lg:items-end">
            {trustMetrics.map((metric) => (
              <div
                key={metric.value}
                className="border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-5 w-full lg:max-w-[300px]"
              >
                <div className="text-4xl font-bold text-primary font-poppins mb-1">
                  {metric.value}
                </div>
                <div className="text-heading text-sm tracking-widest uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          onClick={() => scrollTo("#about")}
          className="absolute -bottom-[40%] left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 cursor-pointer"
        >
          <div className="w-10 h-16 border-2 border-primary rounded-full flex items-start justify-center relative">
            <div className="w-2 h-2 bg-primary rounded-full animate-scroll" />
          </div>
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default HomeHeroSection;
