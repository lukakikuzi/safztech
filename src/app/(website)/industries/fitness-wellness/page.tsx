import React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  CalendarCheck,
  Search,
  Palette,
  Smartphone,
  Heart,
  MousePointerClick,
  Star,
  PhoneMissed,
  MapPinOff,
  UserMinus,
  CalendarX2,
} from "lucide-react";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata = GetPageMetadata({
  title: "Fitness & Wellness Website & Growth Services | SAFZTECH",
  description:
    "Class booking systems, member apps, local SEO and retention marketing built for gyms, studios and wellness businesses. Fill every class, keep every member.",
});

const stats = [
  { value: "33.6%", label: "Average annual gym membership churn" },
  { value: "50%", label: "Of new members quit before month six" },
  { value: "80%", label: "Cancel odds if a member attends fewer than 4x in month one" },
  { value: "3–5%", label: "Typical monthly churn rate" },
];

const problems = [
  {
    Icon: UserMinus,
    title: "High Membership Churn",
    desc: "Without a retention system, most gyms and studios quietly lose a large share of members every single year.",
  },
  {
    Icon: MapPinOff,
    title: "Invisible on Local Search",
    desc: "If your Google Business Profile isn't optimised, you're not even in the running when someone searches nearby.",
  },
  {
    Icon: CalendarX2,
    title: "No Online Class Booking",
    desc: "Members expect to book and manage classes from their phone, not call the front desk during business hours.",
  },
  {
    Icon: PhoneMissed,
    title: "Trial Leads Who Never Convert",
    desc: "Without automated follow-up, most free trial and drop-in leads simply never come back to sign up.",
  },
];

const services = [
  {
    Icon: CalendarCheck,
    title: "Class Booking & Membership Management",
    tagline: "Booking that works at 6am and midnight.",
    description:
      "Online class booking, membership management, and waitlists that let members book anytime, without calling the front desk.",
    examples: ["24/7 class booking", "Membership & package management", "Waitlist automation", "Instructor & schedule management"],
    timeline: "2–5 weeks",
  },
  {
    Icon: Search,
    title: "Local SEO & Google Business Profile",
    tagline: "Show up when someone searches \"gym near me.\"",
    description:
      "We optimise your Google Business Profile, local listings, and website so you rank in the map pack for the classes and services you offer.",
    examples: ["Google Business Profile optimisation", "Local keyword targeting", "Citation building", "Review-driven ranking signals"],
    timeline: "Ongoing (3-month minimum)",
  },
  {
    Icon: Palette,
    title: "Website & Brand Design",
    tagline: "A site that matches the energy of your studio.",
    description:
      "Class schedules, trainer bios, and membership pricing built into a design that reflects your brand, not a generic gym template.",
    examples: ["Class schedule & pricing pages", "Trainer & instructor profiles", "Membership comparison pages", "Mobile-first design"],
    timeline: "3–6 weeks",
  },
  {
    Icon: Smartphone,
    title: "Member App & Portal Integration",
    tagline: "Give members a reason to check in daily.",
    description:
      "We integrate member-facing apps and portals for booking, progress tracking, and community, so your gym stays top of mind between visits.",
    examples: ["Member app integration", "Progress & workout tracking", "In-app messaging", "Community & challenge features"],
    timeline: "2–4 weeks",
  },
  {
    Icon: Heart,
    title: "Loyalty & Referral Programs",
    tagline: "Turn members into your best marketing channel.",
    description:
      "Referral rewards, streak challenges, and loyalty perks that give members a reason to stay and bring friends along.",
    examples: ["Referral reward programs", "Streak & challenge campaigns", "Loyalty point systems", "Automated rebooking prompts"],
    timeline: "2–3 weeks",
  },
  {
    Icon: MousePointerClick,
    title: "Local Paid Advertising",
    tagline: "Fill open class slots this week.",
    description:
      "Google and Meta ads geo-targeted to your area, promoting free trials and class passes to people actively searching or scrolling nearby.",
    examples: ["Google Search & Maps ads", "Instagram & Facebook ads", "Geo-targeted radius targeting", "Trial & promo campaigns"],
    timeline: "Live within 1–2 weeks",
  },
  {
    Icon: Star,
    title: "Review & Reputation Management",
    tagline: "Your next member is reading your reviews right now.",
    description:
      "Automated review requests after every class or session, plus monitoring and response support, so your rating becomes a growth channel.",
    examples: ["Automated review requests", "Review monitoring & alerts", "Response templates", "Reputation dashboards"],
    timeline: "1–2 weeks",
  },
];

const platforms = [
  "Mindbody", "Glofox", "Zen Planner", "Trainerize", "Vagaro", "WellnessLiving",
];

const process = [
  {
    number: "01",
    title: "Audit & Strategy",
    timeline: "Week 1",
    deliverables: [
      "Review current booking flow & churn rate",
      "Local SEO & Google Business Profile audit",
      "Competitor gap analysis",
      "Prioritised growth roadmap",
    ],
  },
  {
    number: "02",
    title: "Build",
    timeline: "Weeks 2–5",
    deliverables: [
      "Booking system & website build",
      "Member app / portal integration",
      "Loyalty & referral setup",
      "QA tested before going live",
    ],
  },
  {
    number: "03",
    title: "Launch",
    timeline: "Weeks 6–7",
    deliverables: [
      "Go live to members",
      "Google Business Profile & local SEO live",
      "First local ad campaigns launched",
      "Review request automation turned on",
    ],
  },
  {
    number: "04",
    title: "Grow",
    timeline: "Month 2+",
    deliverables: [
      "Ongoing local SEO & ad optimisation",
      "Retention & churn-reduction campaigns",
      "Seasonal promo campaigns",
      "Typical outcome: consistently full classes",
    ],
  },
];

export default function FitnessWellnessPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Industries · Fitness & Wellness
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-4xl">
            Fill Every Class. Keep Every Member.
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            Class booking systems, local SEO, and retention marketing
            built for gyms, studios, and wellness businesses, so new
            members find you and regulars keep showing up.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/free-audit"
              className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 hover:bg-primary-hover transition-colors"
            >
              Get a Free Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#projects"
              className="flex items-center gap-2 border border-primary text-primary font-semibold px-8 py-4 hover:bg-primary/10 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 border-b border-border">
        <div className="layout-standard">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center px-6">
                <span className="text-4xl md:text-5xl font-bold text-primary font-poppins leading-none mb-2">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm tracking-widest uppercase text-paragraph">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-paragraph/50 text-xs text-center mt-8">
            Source: HFA 2025 Fitness Industry Benchmarking Report
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Why Members Don&apos;t Renew
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              It&apos;s Rarely the Workout. It&apos;s the Experience.
            </h2>
            <p className="text-paragraph text-lg max-w-2xl mx-auto mt-4">
              Most gyms and studios don&apos;t lose members over
              programming. They lose them to friction most owners never
              see happening.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="border border-border bg-card p-6 flex gap-4 hover:border-primary/50 transition-colors"
              >
                <div className="w-11 h-11 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-heading font-semibold font-poppins mb-1">
                    {title}
                  </p>
                  <p className="text-paragraph text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding-standard border-t border-border bg-secondary-background">
        <div className="layout-standard section-padding-standard">
          <div className="mb-16 text-center">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              What We Build
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              Services for Gyms & Wellness Studios
            </h2>
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-border bg-card p-8 lg:p-10 grid lg:grid-cols-[1fr_2fr] gap-10"
              >
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <service.Icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-heading font-poppins mb-2">
                    {service.title}
                  </h3>
                  <p className="text-primary text-sm italic mb-6">
                    {service.tagline}
                  </p>
                  <div className="text-paragraph text-sm">{service.timeline}</div>
                </div>

                {/* Right */}
                <div>
                  <p className="text-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <p className="text-heading text-xs font-semibold tracking-widest uppercase mb-3">
                    What&apos;s Included
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {service.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms we integrate with */}
      <section className="py-14 border-b border-border">
        <div className="layout-standard">
          <p className="text-heading text-xs font-semibold tracking-[0.2em] uppercase text-center mb-8">
            Booking Platforms We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="border border-border text-paragraph text-sm px-4 py-2 hover:border-primary/50 hover:text-heading transition-colors"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding-standard border-b border-border">
        <div className="layout-standard section-padding-standard">
          <div className="lg:mb-16 mb-12 flex flex-col items-center text-center gap-4">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              FROM AUDIT TO A FULL SCHEDULE
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              A proven process built around how gyms and studios actually
              operate, with full transparency at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {process.map((phase, idx) => (
              <div
                key={phase.number}
                className={`border bg-card p-8 relative overflow-hidden ${
                  idx === 3 ? "border-primary/30 bg-primary/5" : "border-border"
                }`}
              >
                <span className="absolute -top-2 right-4 text-7xl font-bold text-white/5 font-poppins select-none">
                  {phase.number}
                </span>
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-2">
                  {phase.timeline}
                </p>
                <h3 className="text-2xl font-semibold text-heading font-poppins mb-4">
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-standard bg-secondary-background">
        <div className="layout-standard section-padding-standard text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins mb-6">
            Ready to Fill Every Class?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            We&apos;ll look at your current booking flow, local search
            presence, and churn rate, and show you exactly where members
            are slipping away.
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-10 py-4 hover:bg-primary-hover transition-colors text-lg"
          >
            Get Your Free Audit <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-paragraph text-sm mt-4">
            Free · No obligation · Response within 2 hours
          </p>
        </div>
      </section>

    </main>
  );
}
