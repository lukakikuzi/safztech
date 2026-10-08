import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Handshake } from "lucide-react";

import ReferralForm from "@/components/referral/referral-form";
import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  title: "Multi-Tiered Referral Program | SAFZTECH",
  description:
    "Join the SAFZTECH multi-tiered referral program. Whether you're referring one client or 20+, we'll reward your hustle.",
});

const steps = [
  { label: "Step 1", text: "Refer clients to SAFZTECH" },
  { label: "Step 2", text: "They sign, pay, and launch their project" },
  { label: "Step 3", text: "You get paid. Yep, simple as that!" },
];

const clients = [
  "AllFences Canada",
  "Kallcor",
  "Galaxy Peptides",
  "LCA Merchandise",
  "Lost Coast Aminos",
  "Inno Aminos",
];

const tiers = [
  {
    name: "Starter",
    price: "$500/client",
    volume: "1–5 Closed Clients Per Month",
    desc: "Great for casual referrals or those just getting started. Earn reliable cash for every closed lead.",
  },
  {
    name: "Premium",
    price: "$1000/client",
    volume: "16–20+ Closed Clients Per Month",
    desc: "This is where the big bonuses kick in. Drive serious volume and get seriously rewarded.",
    bonus: "Bonus: Earn a $5,000 Performance Bonus after your 21st closed lead.",
    featured: true,
  },
  {
    name: "Standard",
    price: "$750/client",
    volume: "6–15 Closed Clients Per Month",
    desc: "Start stacking bonuses on top of your base payout. Scale your earnings as your referrals grow.",
  },
];

export default function ReferralProgramPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-secondary-background border-b border-border pt-40 pb-28 lg:pt-48 lg:pb-32">
        <div className="layout-standard text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6 max-w-3xl mx-auto">
            SAFZTECH Referral Program
          </h1>
          <p className="text-foreground text-lg max-w-xl mx-auto">
            Join our multi-tiered referral program, whether you&apos;re
            referring one client or 20+, we&apos;ll reward your hustle.
          </p>
        </div>
      </section>

      {/* Earn */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-14 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins mb-6">
                Earn up to $25k every month
              </h2>
              <p className="text-paragraph text-lg leading-relaxed mb-10">
                We focus on one thing: real growth. Not vanity metrics. Not
                empty promises. Every site, app, ad campaign, and automation we
                build is engineered to convert.
              </p>
              <div className="space-y-5 mb-10">
                {steps.map((s) => (
                  <div key={s.label} className="flex items-baseline gap-5">
                    <span className="text-primary font-semibold w-16 flex-shrink-0">
                      {s.label}
                    </span>
                    <span className="text-heading">{s.text}</span>
                  </div>
                ))}
              </div>
              <Link
                href="#apply"
                className="inline-block bg-primary text-primary-foreground font-semibold tracking-wider uppercase px-8 py-4 hover:bg-primary-hover transition-colors"
              >
                Start Earning
              </Link>
            </div>

            <div className="border border-border bg-card aspect-[4/3] lg:aspect-auto lg:min-h-[22rem] flex items-center justify-center">
              <Handshake className="w-24 h-24 text-primary/70" strokeWidth={1.25} />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted */}
      <section className="border-y border-border bg-secondary-background py-14">
        <div className="layout-standard flex flex-col lg:flex-row lg:items-center gap-8">
          <p className="text-primary text-2xl font-poppins font-semibold flex-shrink-0">
            Trusted globally
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {clients.map((c) => (
              <span key={c} className="text-foreground/80 text-lg">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">
            <h2 className="text-4xl md:text-5xl font-semibold text-heading font-poppins max-w-2xl">
              Three Referral Tiers Built to Reward Your Results
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <Link
                href="#apply"
                className="inline-block text-center bg-primary text-primary-foreground font-semibold tracking-wider uppercase px-8 py-4 hover:bg-primary-hover transition-colors flex-shrink-0"
              >
                Become A Referrer
              </Link>
              <p className="text-paragraph text-sm max-w-xs">
                Complete the Referral Program application form and our team
                will be in touch with more information!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`p-8 border ${
                  t.featured
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <h3 className="text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">
                  {t.name}
                </h3>
                <p className="text-3xl font-bold text-heading font-poppins mb-4">
                  {t.price}
                </p>
                <p className="text-heading font-medium mb-3">{t.volume}</p>
                <p className="text-paragraph text-sm leading-relaxed">{t.desc}</p>
                {t.bonus && (
                  <p className="text-primary text-sm font-semibold mt-5">
                    {t.bonus}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section
        id="apply"
        className="border-y border-border bg-secondary-background py-20 scroll-mt-24"
      >
        <div className="layout-standard max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-heading font-poppins mb-3 text-center">
            Referral Program Application
          </h2>
          <p className="text-paragraph text-center mb-10">
            Complete the form and our team will be in touch with more
            information.
          </p>
          <div className="border border-border bg-card p-8 lg:p-10">
            <ReferralForm />
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard max-w-4xl space-y-4 text-sm text-paragraph leading-relaxed">
          <h2 className="text-xl font-semibold text-heading font-poppins">
            Disclaimer &amp; FTC Disclosure
          </h2>
          <p>
            Participation in the SAFZTECH Referral Program does not create any
            employment, agency, or partnership relationship between the
            referrer and SAFZTECH. Referral bonuses are only paid for
            successfully closed, contracted, and paid clients as determined
            solely by SAFZTECH. We reserve the right to reject any referral
            that does not meet our qualification standards. All referral
            payouts are subject to final review and approval. Program terms,
            payouts, and eligibility may be modified, suspended, or terminated
            at any time without notice.
          </p>
          <p className="text-heading font-medium">FTC Disclosure Requirements:</p>
          <p>
            To comply with Federal Trade Commission (FTC) guidelines,
            participants must clearly disclose that they receive a commission
            or bonus for any referrals made through personal websites, social
            media, email, or other marketing channels. These disclosures should
            be clear, conspicuous, and placed near the referral link or
            mention. Acceptable examples include:
          </p>
          <p className="italic">
            &ldquo;I may earn a referral bonus if you sign up through this
            link.&rdquo;
          </p>
          <p className="italic">
            &ldquo;This is a referral link — I get rewarded if you become a
            client.&rdquo;
          </p>
          <p>
            Failure to provide proper disclosure may result in disqualification
            from the program or forfeiture of referral payouts.
          </p>
          <p>
            Referrers are responsible for complying with all applicable laws
            and for reporting any referral earnings to their local tax
            authority.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="border-t border-border bg-secondary-background py-16 lg:py-20">
        <div className="layout-standard flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 text-center lg:text-left">
          <Image
            src="/favicons/logo-192x192.png"
            alt=""
            width={96}
            height={96}
            className="opacity-90 flex-shrink-0"
          />
          <p className="text-heading text-xl lg:text-2xl leading-relaxed max-w-xl">
            Our vision is to transform websites into high-performing digital
            engines that drive real growth, build lasting customer
            relationships, and fuel business success online.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-primary text-primary-foreground font-semibold tracking-wider uppercase px-8 py-4 hover:bg-primary-hover transition-colors flex-shrink-0"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}
