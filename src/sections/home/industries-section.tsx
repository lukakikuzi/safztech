"use client";

import React from "react";
import {
  Scissors,
  Wrench,
  Stethoscope,
  Home,
  ShoppingBag,
  Code2,
  Dumbbell,
  Utensils,
  Hammer,
  Briefcase,
  Package,
  Users,
} from "lucide-react";

const industries = [
  {
    Icon: Scissors,
    name: "Salons & Spas",
    desc: "Local lead gen & booking systems",
  },
  {
    Icon: Wrench,
    name: "Plumbing & HVAC",
    desc: "Lead generation & CRM automation",
  },
  {
    Icon: Stethoscope,
    name: "Healthcare",
    desc: "Custom portals & patient apps",
  },
  {
    Icon: Home,
    name: "Real Estate",
    desc: "CRM, listings & lead generation",
  },
  {
    Icon: ShoppingBag,
    name: "E-Commerce",
    desc: "Platform build & paid growth",
  },
  {
    Icon: Code2,
    name: "B2B & SaaS",
    desc: "Custom software & content strategy",
  },
  {
    Icon: Dumbbell,
    name: "Fitness & Wellness",
    desc: "Apps, booking & digital marketing",
  },
  {
    Icon: Utensils,
    name: "Restaurants & Food",
    desc: "Online ordering & local SEO",
  },
  {
    Icon: Hammer,
    name: "Home Services",
    desc: "Lead gen, CRM & paid ads",
  },
  {
    Icon: Briefcase,
    name: "Professional Services",
    desc: "Websites & content marketing",
  },
  {
    Icon: Package,
    name: "Supplements & Wellness",
    desc: "E-commerce stores & paid ads",
  },
  {
    Icon: Users,
    name: "Agencies",
    desc: "White-label software & growth",
  },
];

function IndustriesSection() {
  return (
    <section className="section-padding-standard border-t border-border bg-secondary-background">
      <div className="layout-standard section-padding-standard">

        {/* Header */}
        <div className="lg:mb-16 mb-12 flex flex-col items-center text-center gap-4">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            Industries
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
            INDUSTRIES WE SERVE
          </h2>
          <p className="text-paragraph text-lg max-w-2xl">
            We&apos;ve worked across 20+ industries. If you don&apos;t see
            yours below, chances are we have relevant experience — just ask.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map(({ Icon, name, desc }) => (
            <div
              key={name}
              className="border border-border bg-card p-6 flex flex-col items-center text-center gap-3 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 cursor-default group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-heading font-semibold text-sm font-poppins">
                  {name}
                </p>
                <p className="text-paragraph text-xs mt-1 leading-snug">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default IndustriesSection;
