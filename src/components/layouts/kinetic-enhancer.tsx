"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Applies the kinetic headline style to every plain-text h1/h2 inside <main>:
// words slide up, fade in and sharpen one after another when the heading
// scrolls into view, and the last word is a gold gradient with a soft glow.
//
// A heading is only touched once React has claimed its DOM node (React tags
// hydrated nodes with a __reactFiber$ key). Splitting a heading earlier makes
// React discard the change when it hydrates that part of the page.
const isHydrated = (el: HTMLElement) =>
  Object.keys(el).some((k) => k.startsWith("__reactFiber$"));

function split(el: HTMLElement) {
  const text = (el.textContent ?? "").trim();
  if (!text) return false;
  const words = text.split(/\s+/);

  el.textContent = "";
  words.forEach((word, i) => {
    const isKey = i === words.length - 1;
    const delay = `${(i * 0.12).toFixed(2)}s`;
    const w = document.createElement("span");
    w.style.setProperty("--d", delay);

    if (isKey) {
      w.className = "kn-keywrap";
      const inner = document.createElement("span");
      inner.className = "kn-key";
      inner.style.setProperty("--d", delay);
      inner.textContent = word;
      w.appendChild(inner);
    } else {
      w.className = "kn-w";
      w.textContent = word;
    }

    el.appendChild(w);
    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
  });
  return true;
}

export default function KineticEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    // Returns true while some heading is still waiting for hydration.
    const scan = () => {
      let pending = false;
      document.querySelectorAll<HTMLElement>("main h1, main h2").forEach((el) => {
        if (el.dataset.kn) return;
        if (!isHydrated(el)) {
          pending = true;
          return;
        }
        el.dataset.kn = "1";
        const plain = el.childNodes.length === 1 && el.firstChild?.nodeType === Node.TEXT_NODE;
        // Headings keep the gold key word, but no longer animate.
        if (plain) split(el);
      });
      return pending;
    };

    let tries = 0;
    let timer = 0;
    const tick = () => {
      if (scan() && tries++ < 120) timer = window.setTimeout(tick, 250);
    };
    tick();

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
