import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  GraduationCap,
  Smartphone,
  Briefcase,
  Globe,
  Search,
  TrendingUp,
} from "lucide-react";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  alternates: { canonical: "/team" },
  title: "Meet Our Team | SAFZTECH - Premium Software House & Digital Growth Partner",
  description:
    "Meet the SAFZTECH team: experienced developers and marketers who build software that sells and marketing that scales.",
});

const roles = [
  {
    Icon: Smartphone,
    title: "Mobile Application Developers",
    desc: "They turn ideas into fast, polished iOS and Android apps. From first prototype to store launch, they handle everything that shapes how users experience your product.",
  },
  {
    Icon: Globe,
    title: "WordPress Developers",
    desc: "They build secure, conversion-ready WordPress and WooCommerce sites that are easy for you to manage and fast for your customers to use.",
  },
  {
    Icon: Search,
    title: "SEO Specialists",
    desc: "They make sure the right customers find you. Through technical SEO, content and local search, they drive qualified organic traffic.",
  },
  {
    Icon: TrendingUp,
    title: "Performance Marketers",
    desc: "They turn ad spend into measurable results. Through Google and Meta campaigns, they drive qualified leads and improve your return on ad spend.",
  },
];

export default function TeamPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-secondary-background border-b border-border pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="layout-standard text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-3xl mx-auto">
            Our Team Is Our <em className="text-primary">Greatest</em> Asset
          </h1>
          <p className="text-foreground text-lg max-w-xl mx-auto">
            Each member brings a wealth of experience and a commitment to
            excellence
          </p>
        </div>
      </section>

      {/* Meet the team */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins mb-4">
              Meet The SAFZTECH Team
            </h2>
            <p className="text-paragraph text-lg">
              A team of experienced professionals dedicated to growing your
              business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="border border-border bg-card flex items-center justify-center min-h-[22rem]">
              <Image
                src="/favicons/logo-512x512.png"
                alt="SAFZTECH"
                width={220}
                height={220}
                className="opacity-90"
              />
            </div>

            <div className="border border-border bg-card p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-3xl font-semibold text-heading font-poppins">
                Syed Ali Faiez Zaidi
              </h3>
              <p className="text-primary text-sm font-semibold tracking-wide mt-1 mb-5">
                React Native Developer
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Syed Ali Faiez builds fast, polished mobile apps with React
                Native. He has worked with many brands, turning product ideas
                into apps people actually use.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-paragraph">
                  <Smartphone className="w-4 h-4 text-primary flex-shrink-0" />
                  React Native Developer
                </li>
                <li className="flex items-center gap-3 text-sm text-paragraph">
                  <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                  Bachelor&apos;s in Computer Science
                </li>
                <li className="flex items-center gap-3 text-sm text-paragraph">
                  <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                  Master&apos;s degree
                </li>
                <li className="flex items-center gap-3 text-sm text-paragraph">
                  <Briefcase className="w-4 h-4 text-primary flex-shrink-0" />
                  Experience working with many brands
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="border-y border-border bg-secondary-background py-16 lg:py-20">
        <div className="layout-standard">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {roles.map(({ Icon, title, desc }) => (
              <div key={title}>
                <Icon className="w-7 h-7 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-heading font-poppins mb-3">
                  {title}
                </h3>
                <p className="text-paragraph text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 lg:py-20">
        <div className="layout-standard flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 text-center lg:text-left">
          <Image
            src="/favicons/logo-192x192.png"
            alt=""
            width={96}
            height={96}
            className="opacity-90 flex-shrink-0"
          />
          <p className="text-heading text-xl lg:text-2xl leading-relaxed max-w-xl">
            Our vision is to transform websites into high-performing digital
            engines that drive real growth, build lasting customer
            relationships, and fuel business success online.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground font-semibold tracking-wider uppercase px-8 py-4 hover:bg-primary-hover transition-colors flex-shrink-0"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}
