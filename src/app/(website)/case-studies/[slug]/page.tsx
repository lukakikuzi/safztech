import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock } from "lucide-react";

import ProjectGallery from "@/components/case-studies/project-gallery";
import ScreenshotStrip from "@/components/case-studies/screenshot-strip";
import { caseStudies, getCaseStudy, typeBadgeStyle } from "@/data/case-studies";
import { GetPageMetadata } from "@/utils/meta-data";

type PageParams = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return GetPageMetadata({
    title: `${study.client} Case Study | SAFZTECH`,
    description: study.challenge,
  });
}

export default async function CaseStudyPage({ params }: PageParams) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 4);
  const facts = [
    ["Project type", study.engagement ?? study.type],
    ["Platform", study.platform],
    ["Category", study.category ?? study.industry],
    ["Timeline", study.timeline],
  ].filter(([, value]) => value) as [string, string][];

  return (
    <main className="pt-32 pb-24">
      <div className="layout-standard">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-paragraph hover:text-primary transition-colors text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to case studies
        </Link>

        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <span
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 ${typeBadgeStyle[study.type]}`}
          >
            {study.type}
          </span>
          <h1 className="font-poppins text-heading text-4xl lg:text-6xl font-semibold mb-4 leading-tight">
            {study.client}
          </h1>
          <ul className="flex flex-wrap gap-2 mb-6">
            {study.stack.map((tag) => (
              <li
                key={tag}
                className="border border-border text-paragraph text-xs font-semibold tracking-wide px-3 py-1"
              >
                {tag}
              </li>
            ))}
            {study.timeline && (
              <li className="flex items-center gap-1 text-xs text-paragraph px-1">
                <Clock className="w-3 h-3" /> {study.timeline}
              </li>
            )}
          </ul>
          <p className="text-foreground text-lg leading-relaxed mb-8">{study.challenge}</p>
          <div className="flex flex-wrap items-center gap-4">
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 hover:bg-primary-hover transition-colors"
              >
                Visit {study.domain} <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 border border-border text-heading font-semibold px-8 py-4 hover:border-primary/60 transition-colors"
            >
              All case studies
            </Link>
          </div>
        </div>

        {/* At-a-glance facts */}
        {facts.length > 0 && (
          <dl className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-border rounded-xl border border-border bg-card/80 overflow-hidden mb-10">
            {facts.map(([label, value]) => (
              <div key={label} className="flex-1 px-6 py-5">
                <dt className="text-paragraph text-xs font-semibold tracking-[0.15em] uppercase mb-1">
                  {label}
                </dt>
                <dd className="text-heading text-sm font-medium">{value}</dd>
              </div>
            ))}
            {study.liveUrl && (
              <div className="flex-1 px-6 py-5">
                <dt className="text-paragraph text-xs font-semibold tracking-[0.15em] uppercase mb-1">
                  Live site
                </dt>
                <dd className="text-sm font-medium">
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    {study.domain}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        )}

        {/* Solution */}
        <div className="border border-border bg-card p-8 mb-8">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            Solution
          </p>
          <p className="text-foreground leading-relaxed">{study.solution}</p>
        </div>

        {/* Results */}
        <div
          className={`grid grid-cols-2 gap-4 mb-10 ${
            study.results.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {study.results.map((r) => (
            <div key={r.label} className="border border-border bg-secondary-background p-6 text-center">
              <div className="text-3xl font-bold text-primary font-poppins mb-1">{r.value}</div>
              <div className="text-heading text-sm font-medium mb-1">{r.label}</div>
              <div className="text-paragraph text-xs">{r.sub}</div>
            </div>
          ))}
        </div>

        {/* What we did + key features */}
        {(study.whatWeDid?.length || study.features?.length) && (
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {(
              [
                ["What we did", study.whatWeDid],
                ["Key features", study.features],
              ] as [string, string[] | undefined][]
            )
              .filter(([, items]) => items?.length)
              .map(([title, items]) => (
                <div key={title} className="border border-border bg-card p-7 lg:p-9">
                  <h2 className="font-poppins text-heading text-xl font-semibold mb-5">{title}</h2>
                  <ul className="space-y-3">
                    {items!.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-foreground text-sm md:text-base leading-snug"
                      >
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        )}

        {/* Full-page screenshot in side-by-side panels */}
        <div className="mb-14">
          <h2 className="font-poppins text-heading text-xl font-semibold mb-5">
            The site, top to bottom
          </h2>
          <ScreenshotStrip
            src={study.img.src}
            alt={`${study.client} website, full page`}
            ratio={study.img.height / study.img.width}
          />
        </div>

        {study.gallery && study.gallery.length > 0 && (
          <div className="mb-14">
            <h2 className="font-poppins text-heading text-xl font-semibold mb-5">More screens</h2>
            <ProjectGallery shots={study.gallery} />
          </div>
        )}

        {/* Testimonial */}
        {study.quote && (
          <div className="border border-primary/20 bg-primary/5 p-8 mb-14">
            <p className="text-foreground text-lg italic leading-relaxed mb-4">
              &ldquo;{study.quote}&rdquo;
            </p>
            <p className="text-primary font-semibold text-sm">&mdash; {study.quoteName}</p>
          </div>
        )}

        {/* More case studies */}
        <div className="mb-20">
          <h2 className="font-poppins text-heading text-2xl font-semibold mb-6">
            More case studies
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/case-studies/${other.slug}`}
                  className="group border border-border bg-card overflow-hidden flex h-full flex-col hover:border-primary/40 transition-colors"
                >
                  <div
                    className="aspect-video bg-cover bg-top"
                    style={{ backgroundImage: `url(${other.img.src})` }}
                  />
                  <div className="p-4">
                    <p className="text-heading font-semibold font-poppins text-sm group-hover:text-primary transition-colors">
                      {other.client}
                    </p>
                    <p className="text-paragraph text-xs mt-1">{other.type}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="border border-primary/30 bg-primary/5 px-8 py-10 lg:px-12 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div>
            <h2 className="text-heading text-2xl lg:text-3xl font-semibold font-poppins mb-2">
              Want Similar Results?
            </h2>
            <p className="text-paragraph text-sm md:text-base max-w-md">
              Start with a free audit and see exactly where your business stands, or talk to us
              about a full build.
            </p>
          </div>
          <Link
            href="/free-audit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 hover:bg-primary-hover transition-colors whitespace-nowrap"
          >
            Get Your Free Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
