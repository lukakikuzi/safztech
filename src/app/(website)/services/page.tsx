import React from "react";
import Link from "next/link";
import {
  Code2,
  TrendingUp,
  Check,
  ArrowRight,
  FlaskConical,
  ShieldCheck,
  CreditCard,
  Search,
  Smartphone,
  Globe,
  Palette,
  MessageSquare,
  Gem,
  Puzzle,
  ShoppingCart,
  HeartPulse,
  UtensilsCrossed,
  Building2,
  Clock,
  Layers,
  Lock,
  Workflow,
  Gauge,
  KeyRound,
  Users2,
  FileText,
  Bell,
  Share2,
  BarChart3,
  SearchCode,
  Compass,
  RefreshCw,
  Boxes,
  PenTool,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import { GetPageMetadata } from "@/utils/meta-data";
import IndustriesSection from "@/sections/home/industries-section";
import TechStackTabs from "@/components/services/tech-stack-tabs";

export const metadata = GetPageMetadata({
  title: "Services | SAFZTECH Software, Digital Growth & Peptides E-Commerce",
  description:
    "Custom software, digital growth marketing, and specialised peptides / research-chemical e-commerce builds. See everything SAFZTECH can build and grow for your business.",
});

const softwareServices = [
  "Custom Web Applications",
  "Mobile Apps (iOS & Android)",
  "Custom Software & SaaS Platforms",
  "E-Commerce Platforms",
  "CMS, CRM & Automation",
];

const growthServices = [
  "Lead Generation & Outreach",
  "SEO & Content Marketing",
  "Paid Advertising (Google & Meta)",
  "Conversion Rate Optimization",
  "Social Media Marketing",
  "YouTube Automation",
];

const specializedServices = [
  {
    number: "01",
    Icon: FlaskConical,
    title: "Peptides & Research-Chemical Development",
    tagline: "A niche most agencies won't touch. We build it right.",
    description:
      "Custom e-commerce stores for peptide, SARMs & research-chemical brands, with compliance pages, age-verification, high-risk payment integration and niche SEO built in from day one.",
    examples: ["Peptide & research-chemical storefronts", "Compliance & age-verification pages", "High-risk payment gateway setup", "Niche SEO & content marketing"],
    timeline: "4–12 weeks",
  },
  {
    number: "02",
    Icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Apps your customers will actually keep on their phone.",
    description:
      "We design and build native & cross-platform iOS and Android apps that are fast, intuitive, and built to keep users coming back, from first install to daily habit.",
    examples: ["Native iOS & Android apps", "Cross-platform (React Native)", "App Store & Play Store launch", "Push notifications & analytics"],
    timeline: "8–16 weeks",
  },
  {
    number: "03",
    Icon: Globe,
    title: "Web App Development",
    tagline: "Scalable web platforms built for your exact workflow.",
    description:
      "From internal tools to full customer-facing platforms, we build web applications that are secure, fast, and structured to grow with your business instead of holding it back.",
    examples: ["Client & admin portals", "SaaS dashboards", "Internal workflow tools", "Third-party integrations"],
    timeline: "6–14 weeks",
  },
  {
    number: "04",
    Icon: Palette,
    title: "UI/UX Design and Development",
    tagline: "Interfaces people find easy, and enjoyable, to use.",
    description:
      "Good design isn't decoration, it's conversion. We design user-centric interfaces that reduce friction, guide users to the right action, and look great on every device.",
    examples: ["Wireframes & prototypes", "Design systems", "Responsive UI", "Usability testing"],
    timeline: "2–6 weeks",
  },
  {
    number: "05",
    Icon: MessageSquare,
    title: "Chatbot Development Services",
    tagline: "Support and sales that never clock out.",
    description:
      "We build AI-powered chatbots that answer questions, qualify leads, and resolve support tickets instantly, reducing response time and freeing up your team.",
    examples: ["AI/LLM-powered chat", "Lead qualification bots", "Support automation", "Website & WhatsApp integration"],
    timeline: "2–5 weeks",
  },
  {
    number: "06",
    Icon: Gem,
    title: "NFT Marketplace Development",
    tagline: "Custom marketplaces built for secure on-chain trading.",
    description:
      "We build NFT marketplaces with wallet connections, minting flows, and smart-contract integrations, designed to be secure, fast, and easy for your users to trust.",
    examples: ["Wallet integration", "Minting & listing flows", "Smart contract integration", "Marketplace admin panel"],
    timeline: "10–18 weeks",
  },
  {
    number: "07",
    Icon: Puzzle,
    title: "Chrome Extension Development",
    tagline: "Small tool, real impact on your product or workflow.",
    description:
      "We build lightweight, reliable Chrome extensions, from productivity tools to product add-ons, that install cleanly and do exactly what they're supposed to.",
    examples: ["Browser automation tools", "Product companion extensions", "Chrome Web Store publishing", "Cross-browser support"],
    timeline: "2–4 weeks",
  },
  {
    number: "08",
    Icon: ShoppingCart,
    title: "Ecommerce App Development",
    tagline: "Stores built to convert, not just to look good.",
    description:
      "We build online stores and marketplaces, B2B or B2C, with smooth checkout flows, clean product pages, and the backend to handle real order volume.",
    examples: ["Shopify / custom storefronts", "Checkout & payment integration", "Inventory & order management", "Multi-vendor marketplaces"],
    timeline: "4–12 weeks",
  },
  {
    number: "09",
    Icon: HeartPulse,
    title: "Healthcare App Development",
    tagline: "Patient-facing software built with compliance in mind.",
    description:
      "We build patient portals, telemedicine platforms, and booking systems designed around real clinical workflows, secure, reliable, and easy for patients to use.",
    examples: ["Patient portals", "Telemedicine platforms", "Appointment booking", "Records & billing systems"],
    timeline: "10–20 weeks",
  },
  {
    number: "10",
    Icon: UtensilsCrossed,
    title: "Food Delivery App Development",
    tagline: "Ordering, dispatch, and tracking, all in sync.",
    description:
      "We build ordering apps that connect customers, riders, and restaurants in real time, with live tracking, dispatch logic, and a checkout that doesn't lose orders.",
    examples: ["Customer ordering app", "Rider/dispatch app", "Restaurant dashboard", "Real-time order tracking"],
    timeline: "10–18 weeks",
  },
  {
    number: "11",
    Icon: Building2,
    title: "Real Estate App Development",
    tagline: "From listing to closed deal, without the friction.",
    description:
      "We build listings platforms and CRM tools that make it easy for buyers to browse and enquire, and easy for your agents to manage leads and close deals faster.",
    examples: ["Property listing platforms", "CRM & lead management", "Virtual tours & maps", "Agent & client dashboards"],
    timeline: "8–16 weeks",
  },
];

const foundations = [
  {
    Icon: Palette,
    title: "User-Centric UI/UX Design",
    desc: "Intuitive designs that keep users engaged from the first screen.",
  },
  {
    Icon: Layers,
    title: "Scalable Architecture",
    desc: "Flexible systems built to grow with your business, not against it.",
  },
  {
    Icon: Puzzle,
    title: "Custom Functionality",
    desc: "Features built around your exact workflow, not a generic template.",
  },
  {
    Icon: Workflow,
    title: "Seamless Integration",
    desc: "Smooth, reliable connections with the tools you already use.",
  },
  {
    Icon: Lock,
    title: "Advanced Security",
    desc: "Encryption, secure auth, and best practices that protect your data.",
  },
  {
    Icon: Gauge,
    title: "Exceptional Performance",
    desc: "Fast load times and reliable uptime, even under real traffic.",
  },
];

const platformFeatures = [
  { Icon: KeyRound, title: "User Authentication", desc: "Secure sign-up, login and role-based access control." },
  { Icon: Users2, title: "User Management", desc: "Profile management with a full admin oversight dashboard." },
  { Icon: ShieldCheck, title: "Security Features", desc: "Encryption, HTTPS and regular security audits built in." },
  { Icon: FileText, title: "Content Management", desc: "Easy content creation, editing and organisation tools." },
  { Icon: Bell, title: "Notifications & Alerts", desc: "Real-time in-app and email alerts that keep users informed." },
  { Icon: Share2, title: "Social Features", desc: "Social logins, sharing and interactive user profiles." },
  { Icon: CreditCard, title: "Payment Processing", desc: "Secure, reliable checkout with trusted payment gateways." },
  { Icon: BarChart3, title: "Data Visualization", desc: "Interactive dashboards and reporting for real-time decisions." },
  { Icon: SearchCode, title: "Search & Filtering", desc: "Fast full-text search, sorting and filters that just work." },
];

const whyChooseUs = [
  { Icon: Compass, title: "Architecture & Prototyping", desc: "We plan scalable architecture and prototypes before writing production code." },
  { Icon: RefreshCw, title: "CI/CD Workflows", desc: "Automated testing and deployment for faster, more reliable releases." },
  { Icon: Check, title: "Rigorous QA", desc: "Every build goes through performance, security and usability testing." },
  { Icon: Boxes, title: "Cloud Integration", desc: "Cloud infrastructure that scales with your traffic and usage." },
  { Icon: Rocket, title: "Smooth Deployment", desc: "A clean, tested transition from staging to production." },
  { Icon: LifeBuoy, title: "Ongoing Support", desc: "Continuous monitoring, fixes and updates after launch." },
];

const processSteps = [
  { Icon: Compass, title: "Discovery & Planning", desc: "We understand your goals, users and technical requirements." },
  { Icon: PenTool, title: "UI/UX Design", desc: "Wireframes and prototypes that map out the full experience." },
  { Icon: Code2, title: "Development", desc: "Agile, sprint-based development with regular progress updates." },
  { Icon: ShieldCheck, title: "QA & Testing", desc: "Full-cycle testing to catch issues before your users do." },
  { Icon: Rocket, title: "Launch & Deployment", desc: "A smooth, monitored transition from staging to production." },
  { Icon: LifeBuoy, title: "Post-Launch Support", desc: "Ongoing maintenance, updates and new feature support." },
];

const peptidesServices = [
  {
    Icon: FlaskConical,
    title: "Peptides & Research Chemical Stores",
    desc: "Custom e-commerce builds for peptide, SARMs & research-chemical brands, product catalogs, batch/COA pages, and clean, trustworthy storefronts.",
  },
  {
    Icon: ShieldCheck,
    title: "Compliance & Age-Verification",
    desc: "Research-use-only disclaimers, age-gating, terms of sale and policy pages built the way these niches actually need them.",
  },
  {
    Icon: CreditCard,
    title: "High-Risk Payment Integration",
    desc: "We help you get set up with payment processors and gateways that actually work for restricted / high-risk niches like peptides.",
  },
  {
    Icon: Search,
    title: "Niche SEO & Content Marketing",
    desc: "Rank for peptide & research-chemical search terms with SEO and content strategies built for a heavily restricted ad landscape.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-24 lg:py-32">
        <div className="layout-standard">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Our Services
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-4xl">
            Everything You Need to Build & Grow
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-10 max-w-2xl">
            From custom software to full-funnel digital growth, including
            specialised experience building for peptides and research-chemical
            brands. One partner, every service your business needs.
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

      {/* Two Pillars */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="lg:mb-16 mb-12 flex flex-col text-center items-center w-full gap-4">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              Two Pillars. One Result: Business Growth.
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              Most agencies do one or the other. We combine both so your
              software attracts customers and your marketing has a platform
              that converts them.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">

            {/* Pillar 1: Software Solutions */}
            <div className="border border-border bg-card p-8 lg:p-10 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs tracking-widest text-paragraph uppercase mb-0.5">
                    Pillar 01
                  </p>
                  <h3 className="text-xl font-bold text-heading font-poppins">
                    SOFTWARE SOLUTIONS
                  </h3>
                </div>
              </div>

              <p className="text-primary text-sm font-medium mb-6 italic">
                &quot;Build once, scale forever&quot;
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {softwareServices.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>

              <Link
                href="/software-solutions"
                className="flex items-center gap-2 text-primary text-sm font-semibold hover:gap-4 transition-all duration-200 group"
              >
                Explore Software Solutions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Pillar 2: Digital Growth */}
            <div className="border border-primary/30 bg-primary/5 p-8 lg:p-10 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs tracking-widest text-paragraph uppercase mb-0.5">
                    Pillar 02
                  </p>
                  <h3 className="text-xl font-bold text-heading font-poppins">
                    DIGITAL GROWTH
                  </h3>
                </div>
              </div>

              <p className="text-primary text-sm font-medium mb-6 italic">
                &quot;Continuous Growth Engine&quot;
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {growthServices.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>

              <Link
                href="/digital-marketing"
                className="flex items-center gap-2 text-primary text-sm font-semibold hover:gap-4 transition-all duration-200 group"
              >
                Explore Digital Growth
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Synergy Banner */}
          <div className="border border-border bg-card p-8 text-center">
            <p className="text-heading text-lg md:text-xl font-medium font-poppins mb-2">
              Traffic without great software is wasted.{" "}
              <span className="text-primary">Software without traffic is invisible.</span>
            </p>
            <p className="text-paragraph">
              SAFZTECH is the only partner you need, we build{" "}
              <span className="text-foreground font-medium">AND</span> grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Specialized Development Services */}
      <section className="section-padding-standard border-t border-border">
        <div className="layout-standard section-padding-standard">
          <div className="lg:mb-16 mb-12 flex flex-col items-center text-center gap-4">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Full Service Menu
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              Specialized Development Services
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              Beyond the core pillars, our team delivers focused development
              services across mobile, web, AI and emerging tech.
            </p>
          </div>

          <div className="space-y-6">
            {specializedServices.map((service) => (
              <div
                key={service.title}
                className="border border-border bg-card p-8 lg:p-10 grid lg:grid-cols-[1fr_2fr] gap-10"
              >
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <service.Icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-heading font-poppins">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-primary text-sm italic mb-6">
                    {service.tagline}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-paragraph">
                    <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {service.timeline}
                  </div>
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

      {/* Foundations */}
      <section className="section-padding-standard border-t border-border bg-secondary-background">
        <div className="layout-standard section-padding-standard">
          <div className="lg:mb-16 mb-12 flex flex-col items-center text-center gap-4">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              How We Build
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              Built on Strong Foundations
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              Every project, no matter the service, starts from the same
              foundation, so what we build actually holds up long-term.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundations.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="border border-border bg-card p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors"
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

      {/* Platform Features */}
      <section className="section-padding-standard border-t border-border">
        <div className="layout-standard section-padding-standard">
          <div className="lg:mb-16 mb-12 flex flex-col items-center text-center gap-4">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Built In, Not Bolted On
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              Platform Features We Build In
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              Whichever service you need, these are the features we bring to
              the table as standard, not as expensive add-ons.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platformFeatures.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="border border-border bg-card p-5 flex items-start gap-3 hover:border-primary/50 transition-colors"
              >
                <div className="w-9 h-9 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-heading font-semibold text-sm font-poppins mb-1">
                    {title}
                  </p>
                  <p className="text-paragraph text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SAFZTECH */}
      <section className="section-padding-standard border-t border-border bg-secondary-background">
        <div className="layout-standard section-padding-standard">
          <div className="lg:mb-16 mb-12 flex flex-col items-center text-center gap-4">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Why SAFZTECH
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              Why Choose Us for Development Services
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              Delivery is where most agencies fall short. Here&apos;s how we
              keep every project on track, secure, and actually shippable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="border border-border bg-card p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors"
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

      {/* Development Process */}
      <section className="section-padding-standard border-t border-border">
        <div className="layout-standard section-padding-standard">
          <div className="lg:mb-16 mb-12 flex flex-col items-center text-center gap-4">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Our Process
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              Streamlined Development Process
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              A proven, agile-driven process that turns your idea into a
              shipped product, on time, and aligned with your goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map(({ Icon, title, desc }, index) => (
              <div
                key={title}
                className="border border-border bg-card p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors relative"
              >
                <span className="text-4xl font-bold text-white/10 font-poppins absolute top-4 right-5">
                  {String(index + 1).padStart(2, "0")}
                </span>
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

      {/* Tech Stack */}
      <section className="section-padding-standard border-y border-border bg-secondary-background">
        <div className="layout-standard section-padding-standard">
          <div className="lg:mb-16 mb-12 flex flex-col items-center text-center gap-4">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Our Toolkit
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              Technologies We Work With
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              We pick the right tool for each project, here&apos;s the stack
              we rely on across frontend, backend, database, cloud, design
              and CMS.
            </p>
          </div>

          <TechStackTabs />
        </div>
      </section>

      {/* Peptides Niche Expertise */}
      <section className="section-padding-standard border-t border-border bg-secondary-background">
        <div className="layout-standard section-padding-standard">
          <div className="lg:mb-16 mb-12 flex flex-col items-center text-center gap-4">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Niche Specialisation
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins">
              We Build Peptides & Research-Chemical Websites
            </h2>
            <p className="text-paragraph text-lg max-w-2xl">
              This is a niche most agencies won&apos;t touch. We do, with
              stores, compliance pages, payments and marketing built
              specifically for how the peptides & research-chemical industry
              actually operates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {peptidesServices.map(({ Icon, title, desc }) => (
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

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 hover:bg-primary-hover transition-colors"
            >
              Talk to Us About Your Peptides Store <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.peptideingenious.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary text-primary font-semibold px-8 py-4 hover:bg-primary/10 transition-colors"
            >
              See Peptide Ingenious <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* All Industries */}
      <IndustriesSection />

      {/* CTA */}
      <section className="section-padding-standard border-t border-primary/20 bg-primary/5">
        <div className="layout-standard section-padding-standard text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-paragraph text-lg mb-10 max-w-xl mx-auto">
            Tell us about your business and goals, we&apos;ll recommend the
            right mix of software and growth services, no matter your niche.
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
