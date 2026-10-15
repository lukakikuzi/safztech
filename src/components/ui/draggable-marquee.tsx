"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Pause, Play } from "lucide-react";

interface DraggableMarqueeProps {
  /** With loop: two identical halves, wrapped at half the track width. Without loop: a single set. */
  children: ReactNode;
  /** Auto-scroll speed in px per second. */
  speed?: number;
  /** Wrap around endlessly (default). When false it auto-scrolls to the end and stops. */
  loop?: boolean;
}

// Auto-scrolling ticker the visitor can also grab and drag left/right (mouse
// or touch), with a little momentum on release. Auto-scroll pauses while
// hovering (mouse) or dragging, and is off for prefers-reduced-motion — the
// ticker stays draggable. Position is JS-driven (transform), so drag and
// auto-scroll never fight each other the way a CSS animation would.
function DraggableMarquee({ children, speed = 40, loop = true }: DraggableMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const state = useRef({
    x: 0,
    vel: 0,
    dragging: false,
    hovering: false,
    userPaused: false,
    moved: false,
    startX: 0,
    startPos: 0,
    lastX: 0,
    lastT: 0,
  });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const s = state.current;
    let last = performance.now();
    let raf = 0;
    let running = false;

    // Measured here (and on resize), never inside the animation frame, so the
    // browser doesn't redo layout 60 times a second.
    let half = el.scrollWidth / 2;
    let maxX = 0;
    const measure = () => {
      half = el.scrollWidth / 2;
      maxX = Math.max(0, el.scrollWidth - (el.parentElement?.clientWidth ?? 0));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    if (el.parentElement) ro.observe(el.parentElement);

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!s.dragging) {
        if (!s.hovering && !s.userPaused && !reduce) s.x += speed * dt;
        s.x += s.vel * dt;
        s.vel *= 0.94;
        if (Math.abs(s.vel) < 1) s.vel = 0;
      }
      if (loop) {
        if (half > 0) s.x = ((s.x % half) + half) % half;
      } else if (s.x < 0 || s.x > maxX) {
        s.x = Math.min(Math.max(s.x, 0), maxX);
        s.vel = 0;
      }
      el.style.transform = `translate3d(${-s.x}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(el.parentElement ?? el);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, [speed, loop]);

  const onPointerDown = (e: React.PointerEvent) => {
    const s = state.current;
    s.dragging = true;
    s.moved = false;
    s.vel = 0;
    s.startX = s.lastX = e.clientX;
    s.startPos = s.x;
    s.lastT = performance.now();
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const s = state.current;
    if (!s.dragging) return;
    // Capture only once it is a real drag; capturing on pointerdown would swallow plain clicks on the cards' links.
    if (!s.moved && Math.abs(e.clientX - s.startX) > 5) {
      s.moved = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    s.x = s.startPos - (e.clientX - s.startX);
    const now = performance.now();
    const dt = (now - s.lastT) / 1000;
    if (dt > 0) s.vel = -((e.clientX - s.lastX) / dt);
    s.lastX = e.clientX;
    s.lastT = now;
  };

  const endDrag = (e: React.PointerEvent) => {
    const s = state.current;
    s.dragging = false;
    if (performance.now() - s.lastT > 80) s.vel = 0;
    s.vel = Math.max(-1500, Math.min(1500, s.vel));
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const togglePause = () => {
    state.current.userPaused = !state.current.userPaused;
    setPaused(state.current.userPaused);
  };

  // Keyboard users tabbing into a card: stop the motion and bring it fully into view.
  const onFocusCapture = (e: React.FocusEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (!target.matches(":focus-visible")) return;
    const s = state.current;
    s.hovering = true;
    s.vel = 0;
    const view = e.currentTarget.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    if (rect.left < view.left) s.x += rect.left - view.left;
    else if (rect.right > view.right) s.x += rect.right - view.right;
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={togglePause}
        aria-label={paused ? "Play automatic scrolling" : "Pause automatic scrolling"}
        aria-pressed={paused}
        className="absolute -top-14 right-0 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-background/90 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
      </button>

      <div className="overflow-hidden -mx-[var(--layout-px)] px-[var(--layout-px)] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div
          className="cursor-grab active:cursor-grabbing select-none touch-pan-y"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse") state.current.hovering = true;
          }}
          onPointerLeave={() => {
            state.current.hovering = false;
          }}
          onFocusCapture={onFocusCapture}
          onBlurCapture={() => {
            state.current.hovering = false;
          }}
          onClickCapture={(e) => {
            if (state.current.moved) {
              e.preventDefault();
              e.stopPropagation();
              state.current.moved = false;
            }
          }}
          onDragStart={(e) => e.preventDefault()}
        >
          <div
            ref={trackRef}
            className="flex w-max py-4 will-change-transform [&_img]:pointer-events-none"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DraggableMarquee;
