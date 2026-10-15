"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

const inputClass =
  "w-full bg-input border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-paragraph/50";

export default function ReferralForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    audience: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "referral",
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: "Referral Program Application",
          message: form.audience,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
          <Check className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-heading font-poppins mb-2">
          Application Received
        </h3>
        <p className="text-paragraph">
          Thanks for applying. Our team will be in touch with more information.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-heading mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm text-heading mb-1.5">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="john@company.com"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-heading mb-1.5">Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+x (xxx) xxx-xxxx"
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-sm text-heading mb-1.5">
          How do you plan to refer clients? *
        </label>
        <textarea
          name="audience"
          value={form.audience}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Tell us about your network, audience or business."
          className={`${inputClass} resize-none`}
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
        className="w-full bg-primary text-primary-foreground font-semibold tracking-wider uppercase px-6 py-4 hover:bg-primary-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Become A Referrer"}
      </button>
    </form>
  );
}
