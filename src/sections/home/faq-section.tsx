"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import SectionHeading from "@/components/ui/section-heading";
import { FaqSectionContent } from "@/contents/home-page-content";

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding-standard">
      <div className="layout-standard section-padding-standard grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-20 items-start">

        <div className="lg:sticky lg:top-32">
          <SectionHeading title="Questions, answered." className="mb-0 lg:mb-0">
            Everything you need to know about working with SAFZTECH, from
            timelines to pricing to results.
          </SectionHeading>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FaqSectionContent.map((faq, index) => (
            <div
              key={index}
              data-open={openIndex === index}
              className="faq-item rounded-xl border border-border bg-card overflow-hidden"
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") setOpenIndex(index);
              }}
              onPointerLeave={(e) => {
                if (e.pointerType === "mouse") setOpenIndex(null);
              }}
            >
              <button
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
                onClick={(e) => {
                  if ((e.nativeEvent as PointerEvent).pointerType === "mouse") return;
                  toggle(index);
                }}
                className="faq-q w-full flex justify-between items-center px-6 py-5 text-left gap-4 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span className="faq-text text-heading font-medium font-poppins transition-colors duration-300">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                aria-hidden={openIndex !== index}
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
