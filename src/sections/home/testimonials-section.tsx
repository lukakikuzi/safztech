import React from "react";

import SectionHeading from "@/components/ui/section-heading";
import { TestimonialsSectionContent } from "@/contents/home-page-content";
import TestimonialsCarousel from "./testimonials-carousel";

function TestimonialsSection() {
  return (
    <section className="relative isolate overflow-hidden section-padding-standard">
      {/* Colour behind the glass so the frosting is visible */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-[22%] h-72 w-72 rounded-full bg-[rgba(255,122,0,0.2)] blur-3xl" />
        <div className="absolute -right-24 bottom-[14%] h-72 w-72 rounded-full bg-[rgba(255,215,0,0.16)] blur-3xl" />
      </div>

      <div className="layout-standard section-padding-standard">
        <SectionHeading title="Trusted by 150+ businesses.">
          Across software development, lead generation, e-commerce and
          digital growth, in 20+ industries worldwide.
        </SectionHeading>

        <TestimonialsCarousel items={TestimonialsSectionContent} />
      </div>
    </section>
  );
}

export default TestimonialsSection;
