"use client";

import { TrustbarSectionContent } from "@/contents/home-page-content";

export default function TrustbarSection() {
  return (
    <section className="py-14 border-y border-border bg-secondary-background">
      <div className="layout-standard">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-border">
          {TrustbarSectionContent.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center px-6"
            >
              <span className="text-4xl md:text-5xl font-bold text-primary font-poppins leading-none mb-2">
                {stat.number}
              </span>
              <span className="text-xs md:text-sm tracking-widest uppercase text-paragraph">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
