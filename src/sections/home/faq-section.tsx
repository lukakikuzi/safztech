"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqSectionContent } from "@/contents/home-page-content";

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding-standard border-t border-border">
      <div className="layout-standard section-padding-standard">

        {/* Header */}
        <div className="lg:mb-16 mb-12 flex flex-col items-center text-center gap-4">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            Got Questions?
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-paragraph text-lg max-w-2xl">
            Everything you need to know about working with SAFZTECH — from
            timelines to pricing to results.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FaqSectionContent.map((faq, index) => (
            <div
              key={index}
              className="border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left gap-4"
              >
                <span className="text-heading font-medium font-poppins">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-paragraph leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FaqSection;
