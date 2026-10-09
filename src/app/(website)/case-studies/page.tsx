import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, ArrowRight } from "lucide-react";

import ScrollImage from "@/components/ui/scroll-image";
import { caseStudies, typeBadgeStyle } from "@/data/case-studies";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Case Studies | SAFZTECH - Premium Software House & Digital Growth Partner",
  description:
    "Real clients, real challenges. See what SAFZTECH built and delivered across e-commerce, merchant payments, custom software and digital growth.",
});

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
            <div key={study.slug}>

              {/* Image + meta */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <ScrollImage
                  img={study.img}
                  alt={study.imgAlt}
                  className={idx % 2 !== 0 ? "lg:col-start-2" : ""}
                />

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

                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {study.stack.map((s) => (
                      <span key={s} className="text-xs bg-muted border border-border text-foreground px-2.5 py-1">
                        {s}
                      </span>
                    ))}
                    {study.timeline && (
                      <span className="flex items-center gap-1 text-xs text-paragraph ml-auto">
                        <Clock className="w-3 h-3" /> {study.timeline}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold group hover:gap-3 transition-all"
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Solution */}
              <div className="border border-border bg-card p-8 mb-8">
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Solution</p>
                <p className="text-foreground leading-relaxed">{study.solution}</p>
              </div>

              {/* Results grid */}
              <div
                className={`grid grid-cols-2 gap-4 mb-8 ${
                  study.results.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
                }`}
              >
                {study.results.map((r) => (
                  <div key={r.label} className="border border-border bg-secondary-background p-6 text-center">
                    <div className="text-3xl font-bold text-primary font-poppins mb-1">{r.value}</div>
                    <div className="text-heading text-sm font-medium mb-1">{r.label}</div>
                    <div className="text-paragraph text-xs">{r.sub}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              {study.quote && (
                <div className="border border-primary/20 bg-primary/5 p-8">
                  <p className="text-foreground text-lg italic leading-relaxed mb-4">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                  <p className="text-primary font-semibold text-sm">&mdash; {study.quoteName}</p>
                </div>
              )}

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
