import React from "react";

const glass =
  "rounded-3xl border border-white/20 bg-gradient-to-br from-white/[0.14] to-white/[0.03] bg-[rgba(0,0,0,0.25)] shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-1.5px_1px_rgba(255,255,255,0.12),0_24px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur-[10px]";

const codeLines = [
  { w: "46%", c: "#FFD84A", pad: 0 },
  { w: "70%", c: "#ffffff", pad: 16 },
  { w: "58%", c: "#F4A900", pad: 16 },
  { w: "34%", c: "#ffffff", pad: 32 },
  { w: "62%", c: "#FFD84A", pad: 16 },
  { w: "28%", c: "#ffffff", pad: 0 },
];

// One scene for "we build and we grow": a code window and a growth chart linked by a gold thread.
export default function AboutMotion() {
  return (
    <div aria-hidden className="relative mx-auto h-[215px] w-full max-w-[460px] select-none overflow-hidden min-[480px]:h-[360px] sm:h-[420px] sm:overflow-visible">
      {/* Designed at 460px wide; scaled down on phones so nothing spills past the screen */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[460px] -translate-x-1/2 origin-top scale-[0.5] min-[480px]:scale-[0.85] sm:scale-100">
      {/* soft light and a slow orbit ring */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,170,0,0.28),transparent_70%)]" />
      <div className="ab-spin absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[rgba(255,215,0,0.22)]">
        <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-[#FFD84A] shadow-[0_0_12px_3px_rgba(255,200,0,0.7)]" />
      </div>

      {/* service chips orbit the centre and always stay upright */}
      {[["Web", 270], ["Apps", 0], ["SEO", 90], ["Ads", 180]].map(([label, a]) => (
        <span key={label} className="absolute left-1/2 top-1/2 z-10 h-0 w-0">
          <span
            className={`${glass} ab-orbit absolute -left-7 -top-3.5 block w-14 rounded-full py-1.5 text-center font-poppins text-xs font-semibold text-white`}
            style={{ ["--a" as string]: a }}
          >
            {label}
          </span>
        </span>
      ))}

      {/* build: code window */}
      <div className={`${glass} animate-float-y absolute left-0 top-2 w-[62%] p-4`} style={{ animationDuration: "7s" }}>
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-poppins text-[10px] text-white/60">build.tsx</span>
        </div>
        <div className="space-y-2">
          {codeLines.map((l, i) => (
            <div key={i} style={{ paddingLeft: l.pad }}>
              <div
                className="ab-line h-1.5 rounded-full"
                style={{ width: l.w, background: l.c, opacity: 0.85, ["--d" as string]: `${i * 0.25}s` }}
              />
            </div>
          ))}
          <span className="ab-blink inline-block h-3 w-1.5 rounded-sm bg-[#FFD84A]" />
        </div>
      </div>

      {/* grow: chart */}
      <div className={`${glass} animate-float-y absolute bottom-2 right-0 w-[68%] p-4`} style={{ animationDuration: "8s", animationDelay: "1s" }}>
        <div className="flex items-end justify-between">
          <div>
            <p className="font-poppins text-[10px] uppercase tracking-wider text-white/60">Qualified leads</p>
            <p className="bg-gradient-to-br from-[#FFD84A] to-[#F4A900] bg-clip-text font-montserrat text-3xl font-extrabold text-transparent">+312%</p>
          </div>
          <div className="flex h-9 items-end gap-1">
            {[0.5, 0.8, 0.6, 1, 0.75].map((h, i) => (
              <span key={i} className="ab-bar w-1.5 rounded-sm bg-[#FFD84A]/80" style={{ height: `${h * 100}%`, ["--d" as string]: `${i * 0.3}s` }} />
            ))}
          </div>
        </div>
        <svg viewBox="0 0 200 80" className="mt-3 h-24 w-full overflow-visible">
          <defs>
            <linearGradient id="ab-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFD84A" stopOpacity="0.35" />
              <stop offset="1" stopColor="#FFD84A" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="ab-area" d="M0 70 C25 66 35 58 55 55 S90 40 110 34 S150 22 200 6 V80 H0 Z" fill="url(#ab-fill)" />
          <path className="ab-path" pathLength={1} d="M0 70 C25 66 35 58 55 55 S90 40 110 34 S150 22 200 6" fill="none" stroke="#FFD84A" strokeWidth="2.5" strokeLinecap="round" style={{ filter: "drop-shadow(0 0 6px rgba(255,200,0,0.8))" }} />
        </svg>
      </div>

      {/* the thread between them, with a spark travelling along it */}
      <svg viewBox="0 0 460 420" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <path id="ab-thread" d="M150 150 C 190 215, 250 215, 290 262" fill="none" stroke="rgba(255,215,0,0.55)" strokeWidth="1.5" strokeDasharray="4 5" />
        <circle r="4" fill="#FFD84A" style={{ filter: "drop-shadow(0 0 8px rgba(255,200,0,0.9))" }}>
          <animateMotion dur="3s" repeatCount="indefinite" path="M150 150 C 190 215, 250 215, 290 262" />
        </circle>
      </svg>

      {/* floating chips */}
      <span className={`${glass} animate-float-y absolute right-2 top-10 rounded-full px-3 py-1.5 font-poppins text-xs text-white`} style={{ animationDuration: "6s", animationDelay: "0.5s" }}>
        ✓ Shipped
      </span>
      <span className={`${glass} animate-float-y absolute bottom-24 left-0 rounded-full px-3 py-1.5 font-poppins text-xs text-white`} style={{ animationDuration: "9s", animationDelay: "2s" }}>
        ↗ Leads
      </span>
      </div>
    </div>
  );
}
