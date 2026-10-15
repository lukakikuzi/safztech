import React from "react";

import AboutMotion from "./about-motion";

function AboutSection() {
  return (
    <section id="about" className="section-padding-standard">
      <div className="layout-standard section-padding-standard xl:relative">
        <h2 className="max-w-5xl xl:max-w-[58%] 2xl:max-w-5xl font-poppins font-extrabold tracking-tight leading-[1.08] text-heading text-[1.6rem] sm:text-3xl md:text-5xl lg:text-6xl">
          SAFZTECH is a hybrid software house and digital growth agency.
        </h2>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-8 lg:gap-16 max-w-5xl xl:max-w-[58%] 2xl:max-w-5xl text-base sm:text-lg leading-relaxed text-foreground">
          <p>
            We solve two problems most businesses face: they need world-class
            software that actually works, and they need systems that attract
            customers and generate leads. Instead of juggling two separate
            agencies, SAFZTECH does both, under one roof, with one accountable
            team.
          </p>
          <p>
            Over 15 years and 150+ clients, we&apos;ve helped businesses
            generate 500K+ leads, create $2.5B+ in revenue, and scale to
            enterprise status. From startups to global brands, we&apos;re the
            agency that builds <span className="text-primary font-semibold">and</span> grows.
          </p>
        </div>

        {/* Fills the empty right side on wide screens, sits under the text on smaller ones */}
        <div className="mt-14 xl:absolute xl:right-0 xl:top-24 xl:mt-0 xl:w-[36%] 2xl:w-[32%]">
          <AboutMotion />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
