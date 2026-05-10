import React from "react";

import HomeHeroSection from "@/sections/home/home-hero-section";
import TrustbarSection from "@/sections/home/trustbar-section";
import AboutSection from "@/sections/home/about-section";
import OurServicesSection from "@/sections/home/our-services-section";
import SynergySection from "@/sections/home/synergy-section";
import ProcessSection from "@/sections/home/process-section";
import ProjectsSection from "@/sections/home/projects-section";
import TestimonialsSection from "@/sections/home/testimonials-section";
import IndustriesSection from "@/sections/home/industries-section";
import PricingSection from "@/sections/home/pricing-section";
import FaqSection from "@/sections/home/faq-section";
import LeadMagnetSection from "@/sections/home/lead-magnet-section";
import ContactUsSection from "@/sections/home/contact-us-section";

function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <TrustbarSection />
      <AboutSection />
      <OurServicesSection />
      <SynergySection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <IndustriesSection />
      <PricingSection />
      <FaqSection />
      <LeadMagnetSection />
      <ContactUsSection />
    </main>
  );
}

export default HomePage;
