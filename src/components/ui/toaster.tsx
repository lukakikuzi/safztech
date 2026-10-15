"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, X, XCircle } from "lucide-react";

import { subscribe, type ToastItem } from "@/lib/toast";

const LIFETIME = { success: 5000, error: 7000 };

export default function Toaster() {
  const [items, setItems] = useState<ToastItem[]>([]);

  useEffect(
    () =>
      subscribe((t) => {
        setItems((prev) => [...prev.slice(-3), t]);
        window.setTimeout(() => setItems((prev) => prev.filter((i) => i.id !== t.id)), LIFETIME[t.kind]);
      }),
    [],
  );

  const close = (id: number) => setItems((prev) => prev.filter((i) => i.id !== id));

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-4 bottom-4 z-[100] flex flex-col items-center gap-3 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:items-end"
    >
      {items.map((t) => {
        const ok = t.kind === "success";
        return (
          <div
            key={t.id}
            role={ok ? "status" : "alert"}
            className="toast-in pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl border border-white/20 bg-[rgba(10,10,12,0.72)] p-4 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.3),0_24px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            style={{ borderLeft: `3px solid ${ok ? "#34d399" : "#f87171"}` }}
          >
            {ok ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
            ) : (
              <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
            )}
            <div className="min-w-0 flex-1">
              <p className="font-poppins text-sm font-semibold text-heading">{t.title}</p>
              {t.description && <p className="mt-0.5 text-sm leading-snug text-paragraph">{t.description}</p>}
            </div>
            <button
              type="button"
              onClick={() => close(t.id)}
              aria-label="Dismiss"
              className="flex-shrink-0 text-paragraph transition-colors hover:text-heading"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
