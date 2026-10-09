import { RefObject, useEffect } from "react";

export function useDragScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let down = false;
    let moved = false;
    let startX = 0;
    let startLeft = 0;

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      down = true;
      moved = false;
      startX = e.clientX;
      startLeft = el.scrollLeft;
      el.style.scrollSnapType = "none";
      el.style.scrollBehavior = "auto";
    };

    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 5) moved = true;
      if (moved) el.scrollLeft = startLeft - dx;
    };

    const onUp = () => {
      if (!down) return;
      down = false;
      el.style.scrollSnapType = "";
      el.style.scrollBehavior = "";
    };

    const onClickCapture = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    const onDragStart = (e: Event) => e.preventDefault();

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("click", onClickCapture, true);
    el.addEventListener("dragstart", onDragStart);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("click", onClickCapture, true);
      el.removeEventListener("dragstart", onDragStart);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [ref]);
}
