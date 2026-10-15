"use client";

import React from "react";
import Link from "next/link";
import DraggableMarquee from "@/components/ui/draggable-marquee";
import SectionHeading from "@/components/ui/section-heading";
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
    <section className="section-padding-standard bg-secondary-background">
      <div className="layout-standard section-padding-standard !pb-0">
        <SectionHeading title="Industries we serve.">
          We&apos;ve worked across 20+ industries. If you don&apos;t see
          yours below, chances are we have relevant experience, just ask.
        </SectionHeading>

        {/* Industry grid */}
        <div>
          <DraggableMarquee loop={false}>
            {industries.map(({ Icon, name, desc, href, external }) => {
              const cardClasses =
                "group relative mr-5 flex w-[270px] flex-shrink-0 cursor-[inherit] flex-col items-center gap-5 overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#26262b_0%,#141417_55%,#0c0c0e_100%)] p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-[linear-gradient(160deg,#3a2f10_0%,#1c1608_55%,#0c0c0e_100%)] sm:w-[300px]";

              const cardContent = (
                <>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffe56a,#ffb300)] text-primary-foreground transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="font-poppins text-base font-semibold text-heading">{name}</p>
                    <p className="mt-1.5 text-sm leading-snug text-paragraph">{desc}</p>
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
