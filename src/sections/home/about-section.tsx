import React from "react";

import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const buildCapabilities = [
  "Custom Web Applications",
  "Mobile Apps (iOS & Android)",
  "Custom Software & SaaS",
  "E-Commerce Platforms",
  "UI/UX Design & Branding",
];

const growCapabilities = [
  "Lead Generation & Outreach",
  "SEO & Content Marketing",
  "Paid Advertising (Google & Meta)",
  "Conversion Rate Optimization",
  "Email & Marketing Automation",
];

function AboutSection() {
  return (
    <section
      id="about"
      className="layout-standard section-padding-standard border-t border-border"
    >
      <div className="section-padding-standard">
        <div className="grid lg:grid-cols-[2fr_1fr] lg:gap-24 gap-12 items-start">

          {/* Left: Main copy */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins tracking-tight mb-8">
              ABOUT SAFZTECH
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              SAFZTECH is a{" "}
              <span className="text-heading font-medium">
                hybrid software house and digital growth agency.
              </span>{" "}
              We solve two problems most businesses face: they need world-class
              software that actually works, and they need systems that attract
              customers and generate leads.
            </p>

            <p className="leading-relaxed mb-6">
              Instead of juggling two separate agencies, SAFZTECH does both. We
              build premium software{" "}
              <span className="text-primary font-medium">AND</span> the
              marketing systems that drive revenue — under one roof, with one
              accountable team.
            </p>

            <p className="leading-relaxed">
              Over 15 years and 150+ clients, we&apos;ve helped businesses
              generate 500K+ leads, create $2.5B+ in revenue, and scale to
              enterprise status. From startups to global brands — we&apos;re the
              agency that builds <span className="text-primary font-medium">AND</span> grows.
            </p>
          </div>

          {/* Right: Capabilities + Contact */}
          <div className="space-y-12">

            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase mb-5 text-heading font-poppins font-semibold">
                BUILD
              </h3>
              <div className="space-y-2">
                {buildCapabilities.map((cap) => (
                  <div key={cap} className="text-white/70 text-sm">
                    — {cap}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase mb-5 text-heading font-poppins font-semibold">
                GROW
              </h3>
              <div className="space-y-2">
                {growCapabilities.map((cap) => (
                  <div key={cap} className="text-white/70 text-sm">
                    — {cap}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase mb-5 text-heading font-poppins font-semibold">
                CONTACT
              </h3>
              <div className="space-y-2 text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="flex-shrink-0" /> info@safztech.com
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="flex-shrink-0" />
                  <a
                    href="https://wa.me/14196012734"
                    className="hover:text-primary transition-colors"
                  >
                    +1 (419) 601-2734
                  </a>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href="https://www.linkedin.com/company/safztech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="hover:text-blue-400 transition-colors" />
                  </a>
                  <a
                    href="https://www.facebook.com/safztech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="hover:text-blue-400 transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com/safz.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="hover:text-pink-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
