"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "@/lib/toast";
import { emailError, fieldError, messageError, nameError, phoneError } from "@/lib/form-validation";

const inputClass =
  "w-full bg-input border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-paragraph/50";

export default function ReferralForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    audience: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const setError = (name: string, msg?: string) =>
    setErrors((prev) => {
      if (msg) return { ...prev, [name]: msg };
      if (!prev[name]) return prev;
      const { [name]: _removed, ...rest } = prev;
      return rest;
    });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setError(e.target.name);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setError(name, name === "audience" ? (value.trim() ? messageError(value.trim()) : undefined) : fieldError(name, value));
  };

  const field = (name: string) => ({
    name,
    onChange: handleChange,
    onBlur: handleBlur,
    "aria-invalid": errors[name] ? true : undefined,
  });

  const cls = (name: string, extra = "") => `${inputClass} ${errors[name] ? "!border-destructive" : ""} ${extra}`;

  const errorText = (name: string) =>
    errors[name] ? (
      <p role="alert" className="mt-1.5 text-sm text-destructive">
        {errors[name]}
      </p>
    ) : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found: Record<string, string> = {};
    const checks: [string, string | undefined][] = [
      ["name", nameError(form.name.trim())],
      ["email", emailError(form.email.trim().toLowerCase())],
      ["phone", form.phone.trim() ? phoneError(form.phone.trim()) : undefined],
      ["audience", messageError(form.audience.trim())],
    ];
    for (const [key, msg] of checks) if (msg) found[key] = msg;
    setErrors(found);
    if (Object.keys(found).length) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
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
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again or email info@safztech.com.");
      }
      setForm({ name: "", email: "", phone: "", audience: "" });
      router.push("/thank-you?type=referral");
    } catch (err) {
      setStatus("idle");
      toast.error("Couldn't send your application", err instanceof Error ? err.message : "Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-heading mb-1.5">Full Name *</label>
          <input
            type="text"
            {...field("name")}
            value={form.name}
            autoComplete="name"
            maxLength={80}
            placeholder="John Smith"
            className={cls("name")}
          />
          {errorText("name")}
        </div>
        <div>
          <label className="block text-sm text-heading mb-1.5">Email *</label>
          <input
            type="email"
            {...field("email")}
            value={form.email}
            autoComplete="email"
            maxLength={254}
            placeholder="john@company.com"
            className={cls("email")}
          />
          {errorText("email")}
        </div>
      </div>
      <div>
        <label className="block text-sm text-heading mb-1.5">Phone</label>
        <input
          type="tel"
          {...field("phone")}
          value={form.phone}
          autoComplete="tel"
          maxLength={30}
          placeholder="+1 555 123 4567"
          className={cls("phone")}
        />
        {errorText("phone")}
      </div>
      <div>
        <label className="block text-sm text-heading mb-1.5">
          How do you plan to refer clients? *
        </label>
        <textarea
          {...field("audience")}
          value={form.audience}
          maxLength={2000}
          rows={4}
          placeholder="Tell us about your network, audience or business."
          className={cls("audience", "resize-none")}
        />
        {errorText("audience")}
      </div>

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
