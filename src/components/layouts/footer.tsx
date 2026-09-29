import Link from "next/link";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Software Solutions", href: "/software-solutions" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Free Audit", href: "/free-audit" },
  { label: "Contact", href: "/#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
  { label: "Delivery & Timelines", href: "/delivery-timelines" },
];

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary-background">

      {/* Main footer */}
      <div className="layout-standard py-14">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <p className="font-poppins text-2xl font-light tracking-wider text-primary">
              SAFZTECH
            </p>
            <p className="text-paragraph text-sm leading-relaxed max-w-xs">
              Premium Software House &amp; Digital Growth Partner. We build
              software that sells and marketing that scales.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/company/safztech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-paragraph hover:text-primary transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/safztech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-paragraph hover:text-primary transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/safz.tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-paragraph hover:text-primary transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-heading text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-paragraph text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-heading text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Get In Touch
            </p>
            <div className="space-y-3 text-sm text-paragraph">
              <p>
                <a
                  href="mailto:info@safztech.com"
                  className="hover:text-primary transition-colors"
                >
                  info@safztech.com
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/14196012734"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp at +1 (419) 601-2734"
                  className="inline-flex items-center gap-2.5 hover:text-primary transition-colors"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#25D366] text-white flex-shrink-0">
                    <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden>
                      <path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.23.6 4.32 1.65 6.12L4 29l8.06-1.61a11.94 11.94 0 0 0 3.95.67h.01c6.63 0 12-5.38 12-12.01C28.02 8.38 22.64 3 16.01 3Zm0 21.96h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.79.76.8-3.7-.24-.38a9.9 9.9 0 0 1-1.52-5.25c0-5.5 4.48-9.98 9.99-9.98 2.67 0 5.17 1.04 7.06 2.93a9.92 9.92 0 0 1 2.92 7.06c0 5.51-4.48 9.98-9.8 9.98v.18Zm5.47-7.48c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                    </svg>
                  </span>
                  +1 (419) 601-2734
                </a>
              </p>
              <p>
                <a
                  href="tel:+14252170763"
                  aria-label="Call +1 425-217-0763"
                  className="inline-flex items-center gap-2.5 hover:text-primary transition-colors"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 border border-primary/25 text-primary flex-shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  +1 425-217-0763
                </a>
              </p>
              <p className="text-paragraph/60 text-xs leading-relaxed pt-2">
                Serving in USA · Canada · Australia · Ireland · Pakistan
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="layout-standard py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-paragraph text-xs">
            © 2026 SAFZTECH. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-paragraph text-xs hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
