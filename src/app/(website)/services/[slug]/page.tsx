import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";

import { FeatureArt, ProcessArt, ServiceArt, ServiceThumb } from "@/components/services/service-art";
import { SERVICES, SERVICE_GROUP_TITLES, getService } from "@/data/services";
import { serviceImage } from "@/lib/service-image";
import { GetPageMetadata } from "@/utils/meta-data";

type PageParams = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return GetPageMetadata({
    alternates: { canonical: `/services/${slug}` },
    title: `${service.title} | SAFZTECH`,
    description: `${service.tagline} ${service.overview}`.slice(0, 300),
  });
}

const STEPS = [
  ["Discover", "A short call to understand your goals, audience and what success looks like."],
  ["Plan", "A clear scope, timeline and approach before any work starts."],
  ["Build & launch", "We deliver in stages so you see progress and give feedback early."],
  ["Grow", "Tracking, support and improvements after launch."],
];

export default async function ServicePage({ params }: PageParams) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.group === service.group && s.slug !== service.slug).slice(0, 3);
  const Icon = service.icon;
  const heroImage = serviceImage(service.slug);

  return (
    <main>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="layout-standard grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-sm text-paragraph transition-colors hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              All services
            </Link>
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              <Icon className="h-4 w-4" />
              {SERVICE_GROUP_TITLES[service.group]}
            </p>
            <h1 className="font-poppins text-4xl font-extrabold leading-[1.05] tracking-tight text-heading sm:text-5xl lg:text-6xl">{service.title}</h1>
            <p className="mt-5 text-lg font-medium text-white sm:text-xl">{service.tagline}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-paragraph sm:text-lg">{service.overview}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Get a free quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/15"
              >
                Free website audit
              </Link>
            </div>
          </div>
          {heroImage ? (
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] border border-white/15">
              <Image src={heroImage} alt={`${service.title} by SAFZTECH`} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-primary/10" />
            </div>
          ) : (
            <ServiceArt kind={service.art} icon={service.icon} chips={[service.features[0][0], service.features[1][0]]} />
          )}
        </div>
      </section>

      <section className="section-padding-standard">
        <div className="layout-standard">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">What you get</p>
          <h2 className="mb-10 max-w-2xl font-poppins text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
            What&apos;s included in {service.title}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {service.features.map(([title, text], i) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-6 sm:p-8">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 font-poppins text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-poppins text-xl font-semibold text-heading">{title}</h3>
                <p className="leading-relaxed text-paragraph">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-standard">
        <div className="layout-standard grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FeatureArt slug={service.slug} icon={service.icon} labels={service.features.map(([t]) => t)} />
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Deliverables</p>
            <h2 className="mb-6 font-poppins text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">What we hand over</h2>
            <ul className="space-y-4">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-base text-white sm:text-lg">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding-standard">
        <div className="layout-standard grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">How we work</p>
            <h2 className="mb-8 font-poppins text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">A simple, transparent process</h2>
            <ol className="space-y-6">
              {STEPS.map(([title, text], i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD84A] to-[#F4A900] font-poppins text-sm font-bold text-black">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-poppins text-lg font-semibold text-heading">{title}</h3>
                    <p className="text-paragraph">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="order-1 lg:order-2">
            <ProcessArt slug={service.slug} />
          </div>
        </div>
      </section>

      <section className="section-padding-standard">
        <div className="layout-standard max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mb-8 font-poppins text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">Common questions</h2>
          <div className="space-y-3">
            {service.faqs.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border border-border bg-card p-5 open:border-primary/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-poppins text-base font-semibold text-heading sm:text-lg">
                  {q}
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 leading-relaxed text-paragraph">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-standard">
        <div className="layout-standard">
          <h2 className="mb-8 font-poppins text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">Related services</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="group overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/50">
                {serviceImage(r.slug) ? (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={serviceImage(r.slug)!} alt="" fill sizes="(min-width: 768px) 360px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                ) : (
                  <ServiceThumb icon={r.icon} label={r.features[0][0]} />
                )}
                <div className="p-5">
                  <h3 className="font-poppins text-lg font-semibold text-heading">{r.title}</h3>
                  <p className="mt-1 text-sm text-paragraph">{r.tagline}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-standard">
        <div className="layout-standard">
          <div className="rounded-[2rem] border border-primary/30 bg-gradient-to-br from-primary/15 to-transparent p-8 text-center sm:p-12">
            <h2 className="mx-auto max-w-2xl font-poppins text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
              Ready to talk about {service.title}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-paragraph">Tell us what you need and we will reply within 24 hours with next steps.</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Tell us about your project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
