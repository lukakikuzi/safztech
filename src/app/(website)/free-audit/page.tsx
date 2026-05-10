"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";

const auditIncludes = [
  { title: "Website & Conversion Audit", desc: "Speed, UX, mobile experience, and CRO gaps" },
  { title: "SEO Opportunity Score", desc: "Quick-win keywords and technical issues holding you back" },
  { title: "Lead Generation Gap Analysis", desc: "What you're missing and what it's costing you monthly" },
  { title: "Custom 30-Day Growth Roadmap", desc: "Specific, prioritised actions for your business" },
  { title: "Revenue Potential Projection", desc: "What realistic improvement looks like in numbers" },
];

const socialProof = [
  { value: "150+", label: "Businesses Audited" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "< 2hrs", label: "Avg Response Time" },
  { value: "Free", label: "No Cost Ever" },
];

export default function FreeAuditPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          service: "Free Digital Growth Audit",
          message: form.message || "I'd like to request a free digital growth audit.",
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="bg-secondary-background border-b border-border py-20 lg:py-28">
        <div className="layout-standard text-center">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Completely Free
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading font-poppins leading-tight mb-6">
            Get Your Free Digital Growth Audit
          </h1>
          <p className="text-foreground text-xl leading-relaxed max-w-2xl mx-auto">
            We&apos;ll analyse your digital presence in 20 minutes and show you
            exactly what&apos;s holding your business back — and your single
            biggest opportunity right now.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-10 border-b border-border">
        <div className="layout-standard">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:divide-x divide-border">
            {socialProof.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center px-4">
                <span className="text-3xl md:text-4xl font-bold text-primary font-poppins leading-none mb-1">
                  {s.value}
                </span>
                <span className="text-xs tracking-widest uppercase text-paragraph">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding-standard">
        <div className="layout-standard section-padding-standard">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — what's included */}
            <div>
              <h2 className="text-3xl font-semibold text-heading font-poppins mb-8">
                What&apos;s Included in Your Audit
              </h2>
              <div className="space-y-5 mb-12">
                {auditIncludes.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-heading font-semibold">{item.title}</p>
                      <p className="text-paragraph text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="border border-border bg-card p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4">
                  &ldquo;The audit alone was worth more than I expected. They
                  identified three issues I had no idea about. We fixed them and
                  saw a 40% increase in leads within 30 days.&rdquo;
                </p>
                <div>
                  <p className="text-heading font-semibold text-sm">James T.</p>
                  <p className="text-paragraph text-xs">Owner · Home Services Company · Australia</p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="border border-border bg-card p-8 lg:p-10">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-heading font-poppins mb-3">
                    Request Received!
                  </h3>
                  <p className="text-paragraph mb-6">
                    We&apos;ll review your details and get back to you within 2 hours
                    with your personalised growth audit.
                  </p>
                  <Link
                    href="/"
                    className="text-primary font-semibold hover:underline"
                  >
                    ← Back to Home
                  </Link>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold text-heading font-poppins mb-2">
                    Request Your Free Audit
                  </h3>
                  <p className="text-paragraph text-sm mb-8">
                    Takes 30 seconds. We&apos;ll respond within 2 hours during
                    business hours (Mon–Fri, 9am–6pm EST).
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm text-heading mb-1.5">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full bg-input border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-paragraph/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-heading mb-1.5">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full bg-input border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-paragraph/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-heading mb-1.5">
                        Company / Website
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="My Company or mywebsite.com"
                        className="w-full bg-input border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-paragraph/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-heading mb-1.5">
                        What&apos;s your biggest challenge right now?
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="e.g. Not enough leads, poor website conversions, want to scale..."
                        className="w-full bg-input border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-paragraph/50"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-400 text-sm">
                        Something went wrong. Please email us at info@safztech.com directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-4 hover:bg-primary-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? "Sending..." : (
                        <>Claim My Free Audit <ArrowRight className="w-4 h-4" /></>
                      )}
                    </button>

                    <p className="text-paragraph text-xs text-center">
                      Free · No credit card · No obligation
                    </p>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
