"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MultiSelect } from "@/components/ui/multi-select";
import SectionHeading from "@/components/ui/section-heading";
import { SERVICE_GROUPS } from "@/data/service-options";
import { toast } from "@/lib/toast";
import { emailError, fieldError, messageError, nameError, phoneError } from "@/lib/form-validation";

import { FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, Clock, Globe } from "lucide-react";

function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: "",
    agreeToComms: false,
  });
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const setError = (name: string, msg?: string) =>
    setErrors((prev) => {
      if (msg) return { ...prev, [name]: msg };
      if (!prev[name]) return prev;
      const { [name]: _removed, ...rest } = prev;
      return rest;
    });

  const bind = (name: "name" | "email" | "phone" | "message") => ({
    name,
    value: formData[name],
    "aria-invalid": errors[name] ? true : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [name]: e.target.value });
      if (errors[name]) setError(name);
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => setError(name, fieldError(name, e.target.value)),
  });

  const fieldClass = (name: string, extra = "") =>
    `bg-input border-2 text-white text-base sm:text-lg transition-colors ${errors[name] ? "border-destructive" : "border-border"} ${extra}`;

  const errorText = (name: string) =>
    errors[name] ? (
      <p role="alert" className="text-sm text-destructive">
        {errors[name]}
      </p>
    ) : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const found: Record<string, string> = {};
    const checks: [string, string | undefined][] = [
      ["name", nameError(formData.name.trim())],
      ["email", emailError(formData.email.trim().toLowerCase())],
      ["phone", phoneError(formData.phone.trim())],
      ["services", formData.services.length ? undefined : "Please choose at least one service."],
      ["message", formData.message.trim() ? messageError(formData.message.trim()) : undefined],
    ];
    for (const [key, msg] of checks) if (msg) found[key] = msg;
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(first === "services" ? "[data-services]" : `[name="${first}"]`)?.scrollIntoView({ block: "center", behavior: "smooth" });
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus({ preventScroll: true });
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, service: formData.services.join("; "), type: "contact" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong. Please try again or email info@safztech.com.");
      }
      setFormData({ name: "", email: "", phone: "", services: [], message: "", agreeToComms: false });
      router.push("/thank-you?type=contact");
    } catch (err) {
      setStatus("idle");
      toast.error("Couldn't send your message", err instanceof Error ? err.message : "Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding-standard bg-background scroll-mt-20">
      <div className="layout-standard section-padding-standard">
        <SectionHeading title="Build your vision.">
          Reach out to our expert team for personalized solutions and
          top-notch web and app development services tailored to your brand.
        </SectionHeading>

        <div className="grid lg:grid-cols-3 gap-20">
          <div className="space-y-8 lg:col-span-2 col-span-1">
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-heading font-poppins uppercase tracking-wider">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    autoComplete="name"
                    maxLength={80}
                    {...bind("name")}
                    className={fieldClass("name", "h-14")}
                  />
                  {errorText("name")}
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-heading font-poppins uppercase tracking-wider">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    maxLength={254}
                    {...bind("email")}
                    className={fieldClass("email", "h-14")}
                  />
                  {errorText("email")}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-heading font-poppins uppercase tracking-wider">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="+1 555 123 4567"
                  autoComplete="tel"
                  maxLength={30}
                  {...bind("phone")}
                  className={fieldClass("phone", "h-14")}
                />
                {errorText("phone")}
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-heading font-poppins uppercase tracking-wider">
                  Service You&apos;re Interested In
                </label>
                <div data-services className="space-y-4">
                  {SERVICE_GROUPS.map((group, i) => (
                    <div key={group.title} className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{group.title}</p>
                      <MultiSelect
                        name={i === 0 ? "services" : `services-${i}`}
                        groups={[group]}
                        placeholder={`Select ${group.title}`}
                        value={formData.services.filter((o) => group.options.includes(o))}
                        invalid={!!errors.services}
                        onChange={(picked) => {
                          setFormData({ ...formData, services: [...formData.services.filter((o) => !group.options.includes(o)), ...picked] });
                          if (errors.services) setError("services");
                        }}
                      />
                    </div>
                  ))}
                </div>
                {errorText("services")}
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-heading font-poppins uppercase tracking-wider">
                  Your Message <span className="normal-case tracking-normal text-paragraph">(optional)</span>
                </label>
                <Textarea
                  placeholder="Tell us about your project and requirements..."
                  maxLength={2000}
                  {...bind("message")}
                  className={fieldClass("message", "min-h-32 resize-none")}
                />
                {errorText("message")}
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agree"
                  checked={formData.agreeToComms}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      agreeToComms: checked as boolean,
                    })
                  }
                  className="border-border border-2 data-[state=checked]:bg-primary data-[state=checked]:text-black mt-1"
                />
                <label htmlFor="agree" className="text-sm leading-relaxed">
                  I agree to receive SMS/text messages from SAFZTECH about
                  support and service updates. Msg frequency varies. Reply
                  STOP to opt out. See our{" "}
                  <Link
                    href={"/terms-conditions"}
                    className="text-white underline cursor-pointer"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href={"/privacy-policy"}
                    className="text-white underline cursor-pointer"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full hover:bg-primary-hover h-14 text-base font-semibold tracking-wider uppercase transition-colors disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>

            </form>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold font-poppins text-white mb-8 sm:mb-12 tracking-tight">
                CONTACT INFORMATION
              </h3>
            </div>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:+14252170763"
                    aria-label="Call +1 425-217-0763"
                    className="mb-3 flex items-center gap-3 text-lg sm:text-xl font-medium text-heading hover:text-primary transition-colors"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                      <Phone className="h-4 w-4" />
                    </span>
                    +1 425-217-0763
                  </a>
                  <a
                    href="https://wa.me/14196012734"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp at +1 (419) 601-2734"
                    className="mb-3 flex items-center gap-3 text-lg sm:text-xl font-medium text-heading hover:text-[#25D366] transition-colors"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <FaWhatsapp className="h-5 w-5" />
                    </span>
                    +1 (419) 601-2734
                  </a>
                  <p className="text-foreground">Mon - Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider mb-2">
                    Email
                  </p>
                  <p className="text-lg sm:text-xl font-medium text-heading mb-1">
                    info@safztech.com
                  </p>
                  <p className="text-foreground">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider mb-2">
                    Hours
                  </p>
                  <p className="text-lg sm:text-xl font-medium text-heading mb-1">
                    Monday - Friday
                  </p>
                  <p className="text-foreground">9:00 AM - 6:00 PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider mb-2">
                    Platforms
                  </p>
                  <p className="text-lg sm:text-xl font-medium text-heading mb-1">
                    Facebook -{" "}
                    <Link
                      href={"https://www.facebook.com/safztech"}
                      target="_blank"
                      className="underline"
                    >
                      safztech
                    </Link>
                  </p>
                  <p className="text-lg sm:text-xl font-medium text-heading mb-1">
                    Instagram -{" "}
                    <Link
                      href={"https://www.instagram.com/safz.tech"}
                      target="_blank"
                      className="underline"
                    >
                      safz.tech
                    </Link>
                  </p>
                  <p className="text-lg sm:text-xl font-medium text-heading mb-1">
                    LinkedIn -{" "}
                    <Link
                      href={"https://www.linkedin.com/company/safztech/"}
                      target="_blank"
                      className="underline"
                    >
                      safztech
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
