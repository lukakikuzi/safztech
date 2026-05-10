"use client";

import React from "react";
import { Star } from "lucide-react";
import { TestimonialsSectionContent } from "@/contents/home-page-content";

function TestimonialsSection() {
  return (
    <section className="section-padding-standard border-t border-border">
      <div className="layout-standard section-padding-standard">

        {/* Header */}
        <div className="lg:mb-16 mb-12 flex flex-col items-center text-center gap-4">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            Client Results
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
            TRUSTED BY 150+ BUSINESSES
          </h2>
          <p className="text-paragraph text-lg max-w-2xl">
            Across software development, lead generation, e-commerce, and
            digital growth — in 20+ industries worldwide.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TestimonialsSectionContent.map((t) => (
            <div
              key={t.name}
              className="border border-border bg-card p-8 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="border-t border-border pt-5">
                <p className="text-heading font-semibold font-poppins">
                  {t.name}
                </p>
                <p className="text-paragraph text-sm mt-0.5">
                  {t.role} · {t.company}
                </p>
                <p className="text-primary/70 text-xs tracking-wide mt-1">
                  {t.industry}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
