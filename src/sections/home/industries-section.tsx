"use client";

import React from "react";
import Link from "next/link";
import DraggableMarquee from "@/components/ui/draggable-marquee";
import {
  FlaskConical,
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
    Icon: FlaskConical,
    name: "Peptides & Research Chemicals",
    desc: "Niche e-commerce, compliance & payment setup",
    href: "https://www.peptideingenious.com/",
    external: true,
  },
  {
    Icon: Scissors,
    name: "Salons & Spas",
    desc: "Local lead gen & booking systems",
    href: "/industries/salons-spas",
  },
  {
    Icon: Wrench,
    name: "Plumbing & HVAC",
    desc: "Lead generation & CRM automation",
    href: "/industries/plumbing-hvac",
  },
  {
    Icon: Stethoscope,
    name: "Healthcare",
    desc: "Custom portals & patient apps",
    href: "/industries/healthcare",
  },
  {
    Icon: Home,
    name: "Real Estate",
    desc: "CRM, listings & lead generation",
    href: "/industries/real-estate",
  },
  {
    Icon: ShoppingBag,
    name: "E-Commerce",
    desc: "Platform build & paid growth",
    href: "/industries/ecommerce",
  },
  {
    Icon: Code2,
    name: "B2B & SaaS",
    desc: "Custom software & content strategy",
    href: "/industries/b2b-saas",
  },
  {
    Icon: Dumbbell,
    name: "Fitness & Wellness",
    desc: "Apps, booking & digital marketing",
    href: "/industries/fitness-wellness",
  },
  {
    Icon: Utensils,
    name: "Restaurants & Food",
    desc: "Online ordering & local SEO",
    href: "/industries/restaurants-food",
  },
  {
    Icon: Hammer,
    name: "Home Services",
    desc: "Lead gen, CRM & paid ads",
    href: "/industries/home-services",
  },
  {
    Icon: Briefcase,
    name: "Professional Services",
    desc: "Websites & content marketing",
    href: "/industries/professional-services",
  },
  {
    Icon: Package,
    name: "Supplements & Wellness",
    desc: "E-commerce stores & paid ads",
    href: "/industries/supplements-wellness",
  },
  {
    Icon: Users,
    name: "Agencies",
    desc: "White-label software & growth",
    href: "/industries/agencies",
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
        <div className="overflow-hidden -mx-[var(--layout-px)] px-[var(--layout-px)] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <DraggableMarquee loop={false}>
            {industries.map(({ Icon, name, desc, href, external }) => {
            const cardClasses =
              "flex-shrink-0 w-[270px] sm:w-[300px] mr-5 cursor-[inherit] border border-border bg-card p-8 flex flex-col items-center text-center gap-4 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group";

            const cardContent = (
              <>
                <div className="w-14 h-14 flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-heading font-semibold text-base font-poppins">
                    {name}
                  </p>
                  <p className="text-paragraph text-sm mt-1.5 leading-snug">
                    {desc}
                  </p>
                </div>
              </>
            );

            if (href) {
              return (
                <Link
                  key={name}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={cardClasses}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div key={name} className={cardClasses}>
                {cardContent}
              </div>
            );
          })}
          </DraggableMarquee>
        </div>

      </div>
    </section>
  );
}

export default IndustriesSection;
