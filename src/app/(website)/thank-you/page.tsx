import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";

import { GetPageMetadata } from "@/utils/meta-data";

export const metadata: Metadata = GetPageMetadata({
  alternates: { canonical: "/thank-you" },
  title: "Thank You | SAFZTECH",
  robots: { index: false, follow: false },
});

const COPY = {
  contact: {
    title: "Message received.",
    text: "Thanks for reaching out. Our team will review your project and get back to you within 24 hours (Mon–Fri, 9am–6pm EST).",
  },
  referral: {
    title: "Application received.",
    text: "Thanks for applying to the referral program. Our team will be in touch soon with more information.",
  },
};

export default async function ThankYouPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  const copy = COPY[type as keyof typeof COPY] ?? COPY.contact;

  return (
    <main className="pt-20">
      <div className="layout-standard flex min-h-[70svh] flex-col items-center justify-center py-20 text-center">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-primary/40 bg-primary/10 shadow-[0_0_40px_rgba(255,200,0,0.35)]">
          <Check className="h-10 w-10 text-primary" strokeWidth={2.5} />
        </div>
        <h1 className="font-poppins text-4xl font-extrabold text-heading sm:text-5xl">{copy.title}</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-paragraph sm:text-lg">{copy.text}</p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,215,0,0.55)] bg-gradient-to-br from-[rgba(255,200,0,0.5)] to-[rgba(255,140,0,0.2)] px-7 py-3.5 font-semibold text-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5)] backdrop-blur-[10px] transition-all hover:from-[rgba(255,200,0,0.65)]"
          >
            Back to home <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 font-semibold text-heading backdrop-blur-[10px] transition-colors hover:border-primary hover:text-primary"
          >
            See our work
          </Link>
        </div>
      </div>
    </main>
  );
}
