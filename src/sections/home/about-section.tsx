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
                  <a
                    href="https://wa.me/14196012734"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp at +1 (419) 601-2734"
                    className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#25D366] text-white flex-shrink-0">
                      <svg viewBox="0 0 32 32" width="12" height="12" fill="currentColor" aria-hidden>
                        <path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.23.6 4.32 1.65 6.12L4 29l8.06-1.61a11.94 11.94 0 0 0 3.95.67h.01c6.63 0 12-5.38 12-12.01C28.02 8.38 22.64 3 16.01 3Zm0 21.96h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.79.76.8-3.7-.24-.38a9.9 9.9 0 0 1-1.52-5.25c0-5.5 4.48-9.98 9.99-9.98 2.67 0 5.17 1.04 7.06 2.93a9.92 9.92 0 0 1 2.92 7.06c0 5.51-4.48 9.98-9.8 9.98v.18Zm5.47-7.48c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                      </svg>
                    </span>
                    +1 (419) 601-2734
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="flex-shrink-0" />
                  <a
                    href="tel:+14252170763"
                    aria-label="Call +1 425-217-0763"
                    className="hover:text-primary transition-colors"
                  >
                    +1 425-217-0763
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
