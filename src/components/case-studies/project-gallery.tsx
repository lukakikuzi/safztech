"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import type { CaseStudyGalleryShot } from "@/data/case-studies";

// Thumbnails of extra screens; click one to see it large.
export default function ProjectGallery({ shots }: { shots: CaseStudyGalleryShot[] }) {
  const [open, setOpen] = useState<CaseStudyGalleryShot | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {shots.map((shot) => (
          <li key={shot.src}>
            <button
              type="button"
              onClick={() => setOpen(shot)}
              className="group block w-full text-left"
              aria-label={`View larger: ${shot.label}`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card group-hover:border-primary/50 transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element -- plain thumbnail */}
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <p className="mt-2 text-paragraph text-sm group-hover:text-primary transition-colors">
                {shot.label}
              </p>
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.label}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
          >
            <X className="w-5 h-5" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element -- plain lightbox image */}
          <img
            src={open.src}
            alt={open.alt}
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
