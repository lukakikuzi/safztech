"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";

import { SERVICES } from "@/data/services";

import FullScreenMenu from "./full-screen-menu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services", mega: "services" as const },
  { label: "Software & Apps", href: "/software-solutions", mega: "software" as const },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/#pricing" },
];

// Only pages that exist in src/app/(website).
const services = [
  { label: "Software Solutions", href: "/software-solutions" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "All Services", href: "/services" },
];
const explore = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Free Growth Audit", href: "/free-audit" },
  { label: "Referral Program", href: "/referral-program" },
  { label: "Our Team", href: "/team" },
];
const industries = [
  { label: "E-Commerce", href: "/industries/ecommerce" },
  { label: "Supplements & Wellness", href: "/industries/supplements-wellness" },
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "B2B & SaaS", href: "/industries/b2b-saas" },
  { label: "Agencies", href: "/industries/agencies" },
  { label: "Home Services", href: "/industries/home-services" },
  { label: "Plumbing & HVAC", href: "/industries/plumbing-hvac" },
  { label: "Salons & Spas", href: "/industries/salons-spas" },
  { label: "Fitness & Wellness", href: "/industries/fitness-wellness" },
  { label: "Restaurants & Food", href: "/industries/restaurants-food" },
  { label: "Professional Services", href: "/industries/professional-services" },
];

const softwareServices = SERVICES.filter((s) => s.group === 0);

function MegaLink({ label, href, onNavigate }: { label: string; href: string; onNavigate: () => void }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group flex items-center justify-between gap-3 rounded-2xl px-4 py-2.5 font-poppins text-[0.95rem] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
    >
      {label}
      <ArrowRight className="h-4 w-4 flex-shrink-0 text-primary opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
    </Link>
  );
}

function Header() {
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number>(0);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const [mega, setMega] = useState<"services" | "software" | null>(null);
  const megaOpen = mega !== null;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  // 0 at the top of the home page to 1 once 10% of the hero has scrolled past.
  const [shrink, setShrink] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (isHome) {
        // Home: the bar shrinks over the first 10% of the hero, then hides on scroll down and returns on scroll up.
        const hero = document.querySelector("[data-hero]")?.getBoundingClientRect().height ?? window.innerHeight;
        const p = Math.min(y / (hero * 0.1), 1);
        setShrink(p);
        // Past that point the bar tucks away on the way down and returns as soon as you scroll up.
        if (p < 1 || y < lastScrollY.current) setIsVisible(true);
        else {
          setIsVisible(false);
          setMega(null);
        }
        lastScrollY.current = y;
      } else {
        setShrink(0);
        if (y > lastScrollY.current && y > 100) {
          setIsVisible(false);
          setMega(null);
        } else {
          setIsVisible(true);
        }
        lastScrollY.current = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMega(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMega = (key: "services" | "software") => {
    window.clearTimeout(closeTimer.current);
    setMega(key);
  };
  // A short delay so the pointer can cross the gap between the pill and the panel.
  const closeMega = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMega(null), 150);
  };
  const shut = () => setMega(null);

  return (
    <>
      {/* Desktop: the whole page frosts over while the Services panel is open */}
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-0 z-30 hidden bg-black/30 backdrop-blur-xl backdrop-saturate-150 transition-opacity duration-300 md:block ${
          megaOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <header
        onMouseLeave={closeMega}
        style={{ transform: `${isVisible ? "translateY(0)" : "translateY(-150%)"} scale(${1 - 0.08 * shrink})`, transformOrigin: "top center" }}
        className="fixed inset-x-0 top-3 z-40 mx-auto w-[94%] transition-transform duration-300 md:w-[94%] lg:w-[92%] xl:w-[86%] 2xl:w-[76%]"
      >
        <div className="rounded-full border border-white/25 bg-gradient-to-br from-white/[0.16] to-white/[0.04] px-5 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.55),inset_0_-1.5px_1px_rgba(255,255,255,0.18),inset_0_0_22px_rgba(255,255,255,0.07),0_18px_40px_-14px_rgba(0,0,0,0.55)] backdrop-blur-[10px] backdrop-saturate-[1.6] backdrop-brightness-110 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 font-extrabold font-poppins text-xl tracking-tight lg:gap-2.5 lg:text-2xl text-heading [text-shadow:0_0_18px_rgba(255,255,255,0.35)] transition-opacity hover:opacity-90"
            >
              <Image src="/images/icon.png" alt="" width={36} height={36} priority className="h-8 w-8 rounded-lg lg:h-9 lg:w-9 lg:rounded-xl" />
              <span>
              SAFZ<span className="bg-gradient-to-br from-[#FFD84A] to-[#F4A900] bg-clip-text text-transparent [filter:drop-shadow(0_0_12px_rgba(252,196,40,0.7))]">TECH</span>
              </span>
            </Link>

            <nav
              ref={navRef}
              onMouseLeave={() => setPill(null)}
              className="relative hidden items-center gap-1 rounded-full p-1 md:flex"
            >
              {/* One pill that slides to whichever link is hovered or focused */}
              <span
                aria-hidden
                className={`pointer-events-none absolute bottom-1 top-1 rounded-full border border-white/15 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-300 ease-out ${
                  pill ? "opacity-100" : "opacity-0"
                }`}
                style={{ left: pill?.left ?? 0, width: pill?.width ?? 0 }}
              />
              {navLinks.map((link) => {
                const target = (e: { currentTarget: HTMLElement }) =>
                  setPill({ left: e.currentTarget.offsetLeft, width: e.currentTarget.offsetWidth });
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onMouseEnter={(e) => {
                      target(e);
                      if (link.mega) openMega(link.mega);
                      else closeMega();
                    }}
                    onFocus={(e) => {
                      target(e);
                      if (link.mega) openMega(link.mega);
                    }}
                    onBlur={() => setPill(null)}
                    aria-haspopup={link.mega ? "true" : undefined}
                    aria-expanded={link.mega ? mega === link.mega : undefined}
                    className="relative z-10 flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm font-medium text-white xl:px-3 transition-colors duration-300 hover:text-white focus-visible:text-white"
                  >
                    {link.label}
                    {link.mega && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${mega === link.mega ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center space-x-3">
              <Link
                href="/free-audit"
                className="hidden whitespace-nowrap lg:block rounded-full border border-[rgba(255,215,0,0.55)] bg-gradient-to-br from-[rgba(255,200,0,0.45)] to-[rgba(255,140,0,0.18)] px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.55),inset_0_-1.5px_1px_rgba(255,255,255,0.18)] backdrop-blur-[10px] [text-shadow:0_1px_8px_rgba(0,0,0,0.5)] transition-all hover:from-[rgba(255,200,0,0.6)] hover:to-[rgba(255,140,0,0.3)]"
              >
                Get free audit
              </Link>
              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                className="flex h-8 w-8 flex-col items-center justify-center space-y-1 transition-opacity hover:opacity-70 md:hidden"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${isMenuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
                <span className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Services mega panel (desktop). The padding on top bridges the gap so hover is not lost. */}
        <div
          onMouseEnter={() => mega && openMega(mega)}
          className={`absolute -inset-x-4 top-full hidden pt-3 lg:-inset-x-12 transition-all duration-300 ease-out md:block ${
            megaOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="rounded-[2rem] border border-white/25 bg-[rgba(0,0,0,0.28)] bg-gradient-to-br from-white/[0.14] to-white/[0.03] p-7 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.55),inset_0_-1.5px_1px_rgba(255,255,255,0.18),inset_0_0_22px_rgba(255,255,255,0.07),0_18px_40px_-14px_rgba(0,0,0,0.55)] backdrop-blur-[10px] backdrop-saturate-[1.6] backdrop-brightness-110 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            {mega === "software" ? (
              <div className="grid grid-cols-[1fr_1.2fr_1.2fr] gap-6">
                <div className="pr-2">
                  <p className="font-montserrat text-3xl font-extrabold tracking-tight text-white">Software &amp; Apps</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    Websites, WordPress, mobile apps and custom software, each with its own detailed page.
                  </p>
                  <Link
                    href="/software-solutions"
                    onClick={shut}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                  >
                    All software solutions
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                {[softwareServices.slice(0, 6), softwareServices.slice(6)].map((col, i) => (
                  <div key={i}>
                    {col.map((s) => (
                      <MegaLink key={s.slug} label={s.title} href={`/services/${s.slug}`} onNavigate={shut} />
                    ))}
                  </div>
                ))}
              </div>
            ) : (
            <div className="grid grid-cols-[1fr_1fr_1.1fr_1.1fr] gap-6">
              <div className="pr-2">
                <p className="font-montserrat text-3xl font-extrabold tracking-tight text-white">Our Services</p>
                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  Software that works and growth that sells, built by one team and aimed at leads and revenue.
                </p>
                <Link
                  href="/free-audit"
                  onClick={shut}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                >
                  Get a free growth audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div>
                <p className="mb-1 px-4 text-xs font-semibold uppercase tracking-wider text-white/70">What we do</p>
                {services.map((l) => (
                  <MegaLink key={l.label} {...l} onNavigate={shut} />
                ))}
                <p className="mb-1 mt-4 px-4 text-xs font-semibold uppercase tracking-wider text-white/70">Explore</p>
                {explore.map((l) => (
                  <MegaLink key={l.label} {...l} onNavigate={shut} />
                ))}
              </div>

              <div>
                <p className="mb-1 px-4 text-xs font-semibold uppercase tracking-wider text-white/70">Industries we serve</p>
                {industries.slice(0, 6).map((l) => (
                  <MegaLink key={l.label} {...l} onNavigate={shut} />
                ))}
              </div>

              <div>
                <p className="mb-1 px-4 text-xs font-semibold uppercase tracking-wider text-transparent select-none" aria-hidden>
                  .
                </p>
                {industries.slice(6).map((l) => (
                  <MegaLink key={l.label} {...l} onNavigate={shut} />
                ))}
              </div>
            </div>
            )}
          </div>
        </div>
      </header>

      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

export default Header;
