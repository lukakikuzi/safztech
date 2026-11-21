import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import SectionHeading from "@/components/ui/section-heading";

function ContactCtaSection() {
  return (
    <section id="contact" className="section-padding-standard bg-background scroll-mt-20">
      <div className="layout-standard section-padding-standard">
        <SectionHeading title="Build your vision.">
          Reach out to our expert team for personalized solutions and top-notch web and app development services tailored to your brand.
        </SectionHeading>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Tell us about your project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+14252170763"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            <Phone className="h-4 w-4 text-primary" />
            +1 425-217-0763
          </a>
          <a
            href="https://wa.me/14196012734"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            <FaWhatsapp className="h-5 w-5 text-[#25D366]" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCtaSection;
