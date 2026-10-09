"use client";

import React from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

import HSlider from "@/components/ui/h-slider";
import ScrollImage from "@/components/ui/scroll-image";
import { caseStudies, typeBadgeStyle } from "@/data/case-studies";

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

        {/* Case Studies: one card in focus, the next one peeks in */}
        <HSlider>
          {caseStudies.map((study, idx) => (
            <article
              key={study.slug}
              className="snap-start flex-shrink-0 w-[80%] border border-border bg-card p-6 lg:p-8 flex flex-col"
            >
              <div className="grid xl:grid-cols-2 gap-8 flex-1">
                <ScrollImage
                  img={study.img}
                  alt={study.imgAlt}
                  className="xl:aspect-auto xl:min-h-[22rem]"
                />

                <div className="flex flex-col">
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
                  <p className="text-paragraph text-sm mb-4">{study.industry}</p>

                  <p className="text-foreground/70 italic text-sm leading-relaxed mb-5 border-l-2 border-border pl-4">
                    Challenge: {study.challenge}
                  </p>

                  <div
                    className={`grid gap-2 mb-5 ${
                      study.results.length === 4 ? "grid-cols-4" : "grid-cols-3"
                    }`}
                  >
                    {study.results.map((r) => (
                      <div
                        key={r.label}
                        className="bg-secondary-background border border-border p-2.5 text-center"
                      >
                        <div className="text-lg font-bold text-primary font-poppins leading-none mb-1">
                          {r.value}
                        </div>
                        <div className="text-paragraph text-[10px] leading-tight">
                          {r.sub}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    {study.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-muted text-foreground px-2.5 py-1 border border-border"
                      >
                        {s}
                      </span>
                    ))}
                    {study.timeline && (
                      <span className="flex items-center gap-1 text-xs text-paragraph ml-auto">
                        <Clock className="w-3 h-3" /> {study.timeline}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="group inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-6 py-3 hover:bg-primary-hover transition-colors"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button
                      type="button"
                      onClick={scrollToContact}
                      className="inline-flex items-center border border-primary text-primary text-sm font-semibold px-6 py-3 hover:bg-primary/10 transition-colors"
                    >
                      Get Similar Results
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </HSlider>

        <div className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 border border-primary text-primary font-semibold px-7 py-3.5 hover:bg-primary/10 transition-colors"
          >
            All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
