"use client";

import { useEffect } from "react";
import Link from "next/link";

import { FullScreenMenuProps } from "@/interfaces/components.layouts-interfaces";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Software Solutions", href: "/software-solutions" },
  { name: "Digital Marketing", href: "/digital-marketing" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Free Audit", href: "/free-audit" },
  { name: "Contact", href: "/#contact" },
];

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-secondary-background z-50 transition-all duration-500 ease-in-out ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-foreground text-2xl hover:rotate-90 transition-transform duration-300"
      >
        ×
      </button>

      <div className="absolute top-1/2 left-16 text-foreground text-2xl font-light">+</div>
      <div className="absolute top-1/2 right-16 text-foreground text-2xl font-light">+</div>

      <div className="flex items-center justify-center h-full">
        <nav className="text-center">
          {menuItems.map((item, index) => (
            <div key={item.name} className="mb-6">
              <Link
                href={item.href}
                onClick={onClose}
                className="text-heading text-3xl md:text-4xl font-medium tracking-wider hover:text-primary transition-colors duration-300 block text-center font-poppins"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isOpen ? "menuOpen 0.6s ease-out forwards" : "none",
                }}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
