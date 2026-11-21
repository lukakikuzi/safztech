import React from "react";

import HomeHeroSection from "@/sections/home/home-hero-section";
import AboutSection from "@/sections/home/about-section";
import SynergySection from "@/sections/home/synergy-section";
import OurServicesSection from "@/sections/home/our-services-section";
import ProcessSection from "@/sections/home/process-section";
import ProjectsSection from "@/sections/home/projects-section";
import TestimonialsSection from "@/sections/home/testimonials-section";
import ClientStoriesSection from "@/sections/home/client-stories-section";
import IndustriesSection from "@/sections/home/industries-section";
import PricingSection from "@/sections/home/pricing-section";
import FaqSection from "@/sections/home/faq-section";
import LeadMagnetSection from "@/sections/home/lead-magnet-section";
import ContactCtaSection from "@/sections/home/contact-cta-section";

function HomePage() {
  return (
    <main>
      <HomeHeroSection />
      <AboutSection />
      <ProjectsSection />
      <ClientStoriesSection />
      <SynergySection />
      <OurServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <IndustriesSection />
      <PricingSection />
      <FaqSection />
      <LeadMagnetSection />
      <ContactCtaSection />
    </main>
  );
}

export default HomePage;
