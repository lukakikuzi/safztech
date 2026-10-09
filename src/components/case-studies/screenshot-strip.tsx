"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useDragScroll } from "@/components/ui/use-drag-scroll";

// A long full-page screenshot is cut into side-by-side panels instead of one
// tall box, so the page keeps scrolling normally and visitors move sideways
// with the arrows, by dragging, or by swiping.
const CARD_W = 320;
const CARD_H = 500;

interface ScreenshotStripProps {
  src: string;
  alt: string;
  /** image height ÷ image width */
  ratio: number;
}

export default function ScreenshotStrip({ src, alt, ratio }: ScreenshotStripProps) {
  const scroller = useRef<HTMLDivElement>(null);
  const panels = Math.max(1, Math.ceil((ratio * CARD_W) / CARD_H));

  useDragScroll(scroller);

  const scrollBy = (dir: 1 | -1) =>
    scroller.current?.scrollBy({ left: dir * (CARD_W + 20) * 2, behavior: "smooth" });

  return (
    <div className="relative">
      <div
        ref={scroller}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="group"
        aria-label={`${alt}, in ${panels} panels. Scroll sideways to see the rest.`}
      >
        {Array.from({ length: panels }).map((_, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0 overflow-hidden rounded-lg border border-border bg-card shadow-lg"
            style={{ width: CARD_W, height: CARD_H }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- one full-page screenshot shown in panels */}
            <img
              src={src}
              alt={i === 0 ? alt : ""}
              aria-hidden={i === 0 ? undefined : true}
              width={CARD_W}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              draggable={false}
              className="block max-w-none select-none"
              style={{ width: CARD_W, height: "auto", marginTop: -i * CARD_H }}
            />
          </div>
        ))}
      </div>

      {panels > 2 && (
        <div className="mt-2 flex items-center justify-end gap-2">
          <span className="mr-auto text-paragraph text-xs">
            Drag or scroll sideways to see the full page →
          </span>
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous screenshots"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next screenshots"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
