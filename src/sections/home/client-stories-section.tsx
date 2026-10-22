import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

import VideoCarousel from "@/components/video-testimonials/video-carousel";
import { videoTestimonials } from "@/data/video-testimonials";

const FEATURED_MAX = 2;

function ClientStoriesSection() {
  if (videoTestimonials.length === 0) return null;
  const featured = videoTestimonials.length <= FEATURED_MAX;

  const heading = (
    <>
      <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        <Quote className="h-3.5 w-3.5" /> Client Stories
      </span>
      <h2 className="mb-4 font-poppins text-[1.75rem] font-extrabold leading-[1.05] tracking-tight text-heading sm:text-4xl md:text-5xl lg:text-6xl">
        Hear it from the owners we&apos;ve built for.
      </h2>
      <p className="text-base text-paragraph md:text-lg">
        Real video feedback from clients who trusted us with their store, their growth and their payments.
      </p>
    </>
  );

  return (
    <section id="client-stories" className="relative isolate overflow-x-clip">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(255,170,0,0.12)] blur-3xl" />

      <div className="layout-standard section-padding-standard relative">
        {featured ? (
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_auto] lg:gap-20">
            <div className="text-center lg:text-left">
              {heading}
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <Link
                  href="/free-audit"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,215,0,0.55)] bg-gradient-to-br from-[rgba(255,200,0,0.5)] to-[rgba(255,140,0,0.2)] px-8 py-4 font-semibold text-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5)] backdrop-blur-[10px] transition-all hover:from-[rgba(255,200,0,0.65)]"
                >
                  Get Free Growth Audit <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center gap-2 px-2 py-4 text-sm font-semibold text-heading transition-colors hover:text-primary">
                  See our work <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <VideoCarousel items={videoTestimonials} featured />
            </div>
          </div>
        ) : (
          <>
            <div className="mx-auto mb-12 max-w-2xl text-center">{heading}</div>
            <VideoCarousel items={videoTestimonials} />
          </>
        )}
      </div>
    </section>
  );
}

export default ClientStoriesSection;
