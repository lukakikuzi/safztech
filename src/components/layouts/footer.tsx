import Link from "next/link";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";

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
                  className="hover:text-primary transition-colors"
                >
                  +1 (419) 601-2734
                </a>
              </p>
              <p className="text-paragraph/60 text-xs leading-relaxed pt-2">
                23226 24th Ave SE, Bothell, Washington
                <br />
                Offices in Pakistan · Canada · Australia · Ireland
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
