"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";

import type { VideoTestimonial } from "@/data/video-testimonials";

export default function VideoCarousel({ items, featured = false }: { items: VideoTestimonial[]; featured?: boolean }) {
  const [open, setOpen] = useState<VideoTestimonial | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const width = featured ? 300 : 260;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const back = opener.current;
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      back?.focus();
    };
  }, [open]);

  return (
    <>
      <div className="-mx-12 -my-24 snap-x snap-mandatory overflow-x-auto px-12 py-24 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className={`flex w-max items-start gap-7 ${featured ? "mx-auto xl:mx-0" : "mx-auto"}`}>
          {items.map((t, i) => {
            const who = `${t.name ? `${t.name}, ` : ""}${t.company}`;
            return (
              <li key={t.id} className={`flex-shrink-0 snap-center ${!featured && i % 2 === 1 ? "sm:mt-12" : ""}`} style={{ width }}>
                <div className="group/card">
                  <button
                    type="button"
                    onClick={(e) => {
                      opener.current = e.currentTarget;
                      setOpen(t);
                    }}
                    aria-haspopup="dialog"
                    aria-label={`Play video feedback from ${who}`}
                    className="relative block aspect-[9/16] w-full overflow-hidden rounded-[1.6rem] border border-primary/30 bg-black text-left shadow-[0_24px_60px_-20px_rgba(255,200,0,0.45)] ring-1 ring-white/5 transition-[border-color,box-shadow] duration-500 group-hover/card:border-primary/70 group-hover/card:shadow-[0_28px_70px_-18px_rgba(255,200,0,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.poster}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="h-full w-full scale-105 object-cover transition-[transform,filter] duration-700 ease-[cubic-bezier(0.2,1,0.22,1)] [@media(hover:hover)]:[filter:grayscale(1)_contrast(1.1)_brightness(1.1)] group-hover/card:scale-[1.14] group-hover/card:[filter:grayscale(0)_contrast(1)_brightness(1)] group-focus-within/card:[filter:grayscale(0)_contrast(1)_brightness(1)]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/25" />

                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-white/40 motion-reduce:hidden" />
                      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-2xl transition-transform duration-500 group-hover/card:scale-125">
                        <Play className="ml-1 h-6 w-6 fill-current" />
                      </span>
                    </span>

                    <span className="absolute inset-x-0 bottom-0 p-5">
                      <span className="block font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t.company}</span>
                      <span className="mt-1 block text-xs text-white/70">Client feedback</span>
                    </span>

                    <span className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between">
                      {t.isNew ? (
                        <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary-foreground shadow-lg">New</span>
                      ) : (
                        <span />
                      )}
                      {t.duration && (
                        <span className="rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium tabular-nums text-white backdrop-blur">{t.duration}</span>
                      )}
                    </span>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Video feedback from ${open.name ? `${open.name}, ` : ""}${open.company}`}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setOpen(null)}
          >
            <button
              ref={closeBtn}
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close video"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X className="h-5 w-5" />
            </button>
            <div
              className="aspect-[9/16] h-[min(82vh,860px)] max-w-full overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-primary/30"
              onClick={(e) => e.stopPropagation()}
            >
              <video src={open.video} poster={open.poster} controls autoPlay playsInline preload="auto" className="h-full w-full object-contain" />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
