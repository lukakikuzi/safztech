"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { FullScreenMenuProps } from "@/interfaces/components.layouts-interfaces";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/services", sub: [
    { name: "Software Solutions", href: "/software-solutions" },
    { name: "Digital Marketing", href: "/digital-marketing" },
    { name: "All Services", href: "/services" },
  ] },
  { name: "Industries", href: "/services", sub: [
    { name: "E-Commerce", href: "/industries/ecommerce" },
    { name: "Supplements & Wellness", href: "/industries/supplements-wellness" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "B2B & SaaS", href: "/industries/b2b-saas" },
    { name: "Agencies", href: "/industries/agencies" },
    { name: "Home Services", href: "/industries/home-services" },
    { name: "Plumbing & HVAC", href: "/industries/plumbing-hvac" },
    { name: "Salons & Spas", href: "/industries/salons-spas" },
    { name: "Fitness & Wellness", href: "/industries/fitness-wellness" },
    { name: "Restaurants & Food", href: "/industries/restaurants-food" },
    { name: "Professional Services", href: "/industries/professional-services" },
  ] },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Free Audit", href: "/free-audit" },
  { name: "Referral Program", href: "/referral-program" },
  { name: "Our Team", href: "/team" },
  { name: "Contact", href: "/#contact" },
];

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  const [openKey, setOpenKey] = useState<string | null>("Services");
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Mobile only: a glass sheet dropping from the header, with the page still visible (blurred) behind it.
  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-30 bg-black/30 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ease-out md:hidden ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute left-1/2 top-[5.25rem] w-[94%] -translate-x-1/2 rounded-[2rem] border border-white/25 bg-[rgba(0,0,0,0.28)] bg-gradient-to-br from-white/[0.14] to-white/[0.03] p-2 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.55),inset_0_-1.5px_1px_rgba(255,255,255,0.18),inset_0_0_22px_rgba(255,255,255,0.07),0_18px_40px_-14px_rgba(0,0,0,0.55)] backdrop-blur-[10px] backdrop-saturate-[1.6] backdrop-brightness-110 transition-all duration-300 ease-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex max-h-[calc(100svh-8rem)] flex-col gap-0.5 overflow-y-auto">
          {menuItems.map((item, index) => {
            const row = "group flex w-full items-center justify-between rounded-full border border-transparent px-5 py-3 font-poppins text-base font-medium text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.55)] transition-all duration-300 hover:border-white/15 hover:bg-white/10";
            const anim = { animationDelay: `${index * 40}ms`, animation: isOpen ? "menuOpen 0.4s ease-out both" : "none" };
            const label = (
              <span className="flex items-center gap-3">
                <span className="w-5 text-xs text-primary/80">{String(index + 1).padStart(2, "0")}</span>
                {item.name}
              </span>
            );
            if (!item.sub) {
              return (
                <Link key={item.name} href={item.href} onClick={onClose} className={row} style={anim}>
                  {label}
                  <span className="text-primary opacity-60 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              );
            }
            return (
              <div key={item.name} style={anim}>
                <button type="button" onClick={() => setOpenKey((k) => (k === item.name ? null : item.name))} aria-expanded={openKey === item.name} className={row}>
                  {label}
                  <ChevronDown className={`h-4 w-4 text-primary transition-transform duration-300 ${openKey === item.name ? "rotate-180" : ""}`} />
                </button>
                {openKey === item.name && (
                  <div className="ml-10 mt-0.5 flex flex-col gap-0.5 border-l border-white/15 pl-3">
                    {item.sub.map((s) => (
                      <Link key={s.name} href={s.href} onClick={onClose} className="rounded-full px-4 py-2 text-sm text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.55)] transition-colors hover:bg-white/10 hover:text-white">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
