"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import FullScreenMenu from "./full-screen-menu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/#pricing" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 w-full bg-secondary-background backdrop-blur-sm z-40 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="layout-standard">
          <div className="flex justify-between items-center h-20">
            <Link
              href="/"
              className="font-light font-poppins text-2xl tracking-wider text-primary hover:text-primary-hover transition-colors"
            >
              SAFZTECH
            </Link>

            <nav className="hidden md:flex space-x-8 lg:translate-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-heading hover:text-primary transition-colors tracking-wide uppercase text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="/free-audit"
                className="hidden lg:block border-2 border-primary px-6 py-2 rounded-full text-sm tracking-wide uppercase hover:bg-primary hover:text-primary-foreground text-primary transition-all"
              >
                GET FREE AUDIT
              </Link>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex flex-col justify-center items-center w-8 h-8 space-y-1 hover:opacity-70 transition-opacity"
                aria-label="Open menu"
              >
                <span className="w-6 h-0.5 bg-white" />
                <span className="w-6 h-0.5 bg-white" />
                <span className="w-6 h-0.5 bg-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

export default Header;
