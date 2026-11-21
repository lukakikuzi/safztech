"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Search, X } from "lucide-react";

import { cn } from "@/lib/utils";

type Group = { title: string; options: string[] };

type Props = {
  name: string;
  groups: Group[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  invalid?: boolean;
};

export function MultiSelect({ name, groups, value, onChange, placeholder = "Select services", invalid }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const root = useRef<HTMLDivElement>(null);
  const search = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    search.current?.focus({ preventScroll: true });
    const onDown = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = (option: string) => onChange(value.includes(option) ? value.filter((o) => o !== option) : [...value, option]);
  const q = query.trim().toLowerCase();
  const visible = groups
    .map((g) => ({ ...g, options: g.options.filter((o) => o.toLowerCase().includes(q)) }))
    .filter((g) => g.options.length);

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        name={name}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={invalid || undefined}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex min-h-14 w-full items-center justify-between gap-3 rounded-md border-2 bg-input px-4 py-2.5 text-left text-base text-white transition-colors sm:text-lg",
          invalid ? "border-destructive" : "border-border",
          open && "border-primary",
        )}
      >
        <span className="flex flex-wrap gap-2">
          {value.length ? (
            value.map((o) => (
              <span key={o} className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-sm text-heading">
                {o}
                <span
                  role="button"
                  tabIndex={0}
                  aria-label={`Remove ${o}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle(o);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      e.stopPropagation();
                      toggle(o);
                    }
                  }}
                  className="rounded-full hover:text-primary"
                >
                  <X className="h-3.5 w-3.5" />
                </span>
              </span>
            ))
          ) : (
            <span className="text-paragraph">{placeholder}</span>
          )}
        </span>
        <ChevronDown className={cn("h-5 w-5 shrink-0 text-paragraph transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-white/20 bg-[#0d0f0f] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 transition-colors focus-within:border-primary/60">
            <Search className="h-4 w-4 shrink-0 text-paragraph" />
            <input
              ref={search}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services..."
              aria-label="Search services"
              className="h-12 w-full bg-transparent text-base text-white !outline-none placeholder:text-paragraph"
            />
          </div>
          <ul role="listbox" aria-multiselectable className="max-h-72 overflow-y-auto py-2">
            {visible.length ? (
              visible.map((g) => (
                <li key={g.title} role="presentation">
                  {g.options.map((o) => {
                    const on = value.includes(o);
                    return (
                      <div
                        key={o}
                        role="option"
                        aria-selected={on}
                        tabIndex={0}
                        onClick={() => toggle(o)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggle(o);
                          }
                        }}
                        className="flex cursor-pointer items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-white/[0.06] focus-visible:bg-white/[0.06] focus-visible:!outline-none"
                      >
                        <span
                          className={cn(
                            "flex h-4 w-4 shrink-0 items-center justify-center rounded border-2",
                            on ? "border-primary bg-primary text-primary-foreground" : "border-paragraph/60",
                          )}
                        >
                          {on && <Check className="h-3 w-3" strokeWidth={3} />}
                        </span>
                        {o}
                      </div>
                    );
                  })}
                </li>
              ))
            ) : (
              <li className="px-4 py-6 text-center text-sm text-paragraph">No matching service</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
