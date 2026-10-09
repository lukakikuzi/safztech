"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useDragScroll } from "./use-drag-scroll";

interface HSliderProps {
  children: React.ReactNode;
  className?: string;
}

function HSlider({ children, className = "" }: HSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useDragScroll(trackRef);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  const arrowClass =
    "hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 items-center justify-center rounded-full border border-primary/40 bg-background/90 text-primary backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-0 disabled:pointer-events-none";

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollByPage(-1)}
        disabled={!canPrev}
        className={`${arrowClass} left-1`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div
        ref={trackRef}
        onScroll={update}
        className={`flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing px-4 scroll-px-4 select-none snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
      >
        {children}
      </div>

      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollByPage(1)}
        disabled={!canNext}
        className={`${arrowClass} right-1`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

export default HSlider;
