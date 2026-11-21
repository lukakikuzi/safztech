import type { LucideIcon } from "lucide-react";
import { Check, ClipboardList, Compass, Hammer, Rocket, ShieldCheck } from "lucide-react";

import type { ArtKind } from "@/data/services";

const glass =
  "border border-white/20 bg-gradient-to-br from-white/[0.14] to-white/[0.03] shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.35),0_20px_40px_-18px_rgba(0,0,0,0.8)] backdrop-blur-md";
const gold = "bg-gradient-to-br from-[#FFD84A] to-[#F4A900]";
const bar = "rounded-full bg-white/15";

function Browser() {
  return (
    <div className={`w-[78%] rounded-2xl p-3 ${glass}`}>
      <div className="mb-3 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-white/30" />
        ))}
        <span className={`ml-3 h-2 flex-1 ${bar}`} />
      </div>
      <div className={`h-16 rounded-xl ${gold} opacity-90`} />
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-white/10 bg-white/[0.06] p-2">
            <span className="mb-1.5 block h-6 rounded bg-white/10" />
            <span className={`block h-1.5 w-full ${bar}`} />
            <span className={`mt-1 block h-1.5 w-2/3 ${bar}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className={`w-[34%] rounded-[1.6rem] p-2 ${glass}`}>
      <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-white/25" />
      <div className={`h-14 rounded-xl ${gold} opacity-90`} />
      {[0, 1, 2].map((i) => (
        <div key={i} className="mt-2 flex items-center gap-2 rounded-lg bg-white/[0.07] p-2">
          <span className="h-6 w-6 rounded-full bg-primary/60" />
          <span className="flex-1">
            <span className={`block h-1.5 w-full ${bar}`} />
            <span className={`mt-1 block h-1.5 w-2/3 ${bar}`} />
          </span>
        </div>
      ))}
    </div>
  );
}

function Chart() {
  const heights = [34, 52, 44, 68, 58, 84, 96];
  return (
    <div className={`w-[78%] rounded-2xl p-4 ${glass}`}>
      <div className="mb-3 flex items-end justify-between">
        <span className={`h-2 w-16 ${bar}`} />
        <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary">Growth</span>
      </div>
      <div className="flex h-24 items-end gap-2">
        {heights.map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t-md ${i === heights.length - 1 ? gold : "bg-white/20"}`} />
        ))}
      </div>
      <svg viewBox="0 0 100 20" className="mt-3 h-6 w-full" fill="none" aria-hidden>
        <path d="M0 16 L16 12 L32 14 L48 8 L64 10 L80 4 L100 2" stroke="#FFD84A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Funnel() {
  return (
    <div className="flex w-[64%] flex-col items-center gap-2">
      {[100, 80, 60, 40].map((w, i) => (
        <span
          key={i}
          style={{ width: `${w}%` }}
          className={`flex h-9 items-center justify-center rounded-xl text-[11px] font-semibold ${i === 3 ? `${gold} text-black` : `${glass} text-white/80`}`}
        >
          {["Visitors", "Leads", "Calls", "Customers"][i]}
        </span>
      ))}
    </div>
  );
}

function Chat() {
  return (
    <div className="flex w-[72%] flex-col gap-2.5">
      <span className={`w-[70%] rounded-2xl rounded-bl-sm px-4 py-3 ${glass}`}>
        <span className={`block h-1.5 w-full ${bar}`} />
        <span className={`mt-1.5 block h-1.5 w-2/3 ${bar}`} />
      </span>
      <span className={`ml-auto w-[60%] rounded-2xl rounded-br-sm px-4 py-3 ${gold}`}>
        <span className="block h-1.5 w-full rounded-full bg-black/30" />
        <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-black/30" />
      </span>
      <span className={`w-[78%] rounded-2xl rounded-bl-sm px-4 py-3 ${glass}`}>
        <span className={`block h-1.5 w-full ${bar}`} />
        <span className={`mt-1.5 block h-1.5 w-3/4 ${bar}`} />
      </span>
    </div>
  );
}

function Shield() {
  return (
    <div className={`flex w-[62%] flex-col items-center rounded-2xl p-5 ${glass}`}>
      <span className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${gold} text-black`}>
        <ShieldCheck className="h-9 w-9" />
      </span>
      {[0, 1, 2].map((i) => (
        <span key={i} className="mt-2 flex w-full items-center gap-2">
          <span className="flex h-4 w-4 items-center justify-center rounded bg-primary text-black">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span className={`h-1.5 flex-1 ${bar}`} />
        </span>
      ))}
    </div>
  );
}

function Store() {
  return (
    <div className={`w-[78%] rounded-2xl p-3 ${glass}`}>
      <div className="mb-3 flex items-center justify-between">
        <span className={`h-2 w-14 ${bar}`} />
        <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-black ${gold}`}>3</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-white/10 bg-white/[0.06] p-2">
            <span className={`mb-2 block h-12 rounded ${i === 1 ? gold : "bg-white/10"}`} />
            <span className={`block h-1.5 w-full ${bar}`} />
            <span className="mt-1.5 block h-2 w-1/2 rounded-full bg-primary/70" />
          </div>
        ))}
      </div>
    </div>
  );
}

const MOCK: Record<ArtKind, () => React.JSX.Element> = {
  browser: Browser,
  phone: Phone,
  chart: Chart,
  funnel: Funnel,
  chat: Chat,
  shield: Shield,
  store: Store,
};

export function ServiceArt({ kind, icon: Icon, chips }: { kind: ArtKind; icon: LucideIcon; chips: [string, string] }) {
  const Mock = MOCK[kind];
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-white/15 bg-[#07090a]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[70px]" />
      <div className="relative flex h-full items-center justify-center">
        <Mock />
      </div>
      <span className={`absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl ${gold} text-black shadow-[0_0_30px_rgba(252,196,40,0.45)]`}>
        <Icon className="h-7 w-7" />
      </span>
      <span className={`absolute bottom-5 left-5 rounded-full px-4 py-1.5 text-xs font-medium text-white ${glass}`}>{chips[0]}</span>
      <span className={`absolute bottom-5 right-5 hidden rounded-full px-4 py-1.5 text-xs font-medium text-white sm:block ${glass}`}>{chips[1]}</span>
    </div>
  );
}

const seed = (slug: string) => [...slug].reduce((n, c) => n + c.charCodeAt(0), 0);

function Backdrop({ glow }: { glow: string }) {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div aria-hidden className={`absolute h-[60%] w-[60%] rounded-full bg-primary/25 blur-[70px] ${glow}`} />
    </>
  );
}

const GLOWS = ["left-[8%] top-[10%]", "right-[8%] top-[10%]", "left-[8%] bottom-[5%]", "right-[8%] bottom-[5%]"];
const NODES = [
  "left-[4%] top-[8%]",
  "right-[4%] top-[8%]",
  "left-[4%] bottom-[8%]",
  "right-[4%] bottom-[8%]",
];

export function FeatureArt({ slug, icon: Icon, labels }: { slug: string; icon: LucideIcon; labels: string[] }) {
  const n = seed(slug);
  const order = [0, 1, 2, 3].map((i) => (i + n) % 4);
  return (
    <div className="relative aspect-[10/7] w-full overflow-hidden rounded-[2rem] border border-white/15 bg-[#07090a]">
      <Backdrop glow={GLOWS[n % 4]} />
      <svg viewBox="0 0 100 70" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
        {[[22, 15], [78, 15], [22, 55], [78, 55]].map(([x, y]) => (
          <path key={`${x}${y}`} d={`M50 35 L${x} ${y}`} stroke="rgba(255,216,74,0.35)" strokeWidth="0.4" strokeDasharray="1.5 1.5" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25" />
        <span className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />
        <span className={`relative flex h-24 w-24 items-center justify-center rounded-[1.75rem] ${gold} text-black shadow-[0_0_50px_rgba(252,196,40,0.5)]`} style={{ transform: `rotate(${(n % 3) * 4 - 4}deg)` }}>
          <Icon className="h-11 w-11" />
        </span>
      </div>
      {order.map((labelIndex, slot) => (
        <span key={slot} className={`absolute max-w-[40%] rounded-2xl px-3 py-2 text-xs font-medium leading-snug text-white sm:text-sm ${glass} ${NODES[slot]}`}>
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle" />
          {labels[labelIndex]}
        </span>
      ))}
    </div>
  );
}

const STEP_ICONS = [Compass, ClipboardList, Hammer, Rocket];
const STEP_LABELS = ["Discover", "Plan", "Build", "Launch"];

export function ProcessArt({ slug }: { slug: string }) {
  const n = seed(slug);
  return (
    <div className="relative aspect-[10/7] w-full overflow-hidden rounded-[2rem] border border-white/15 bg-[#07090a]">
      <Backdrop glow={GLOWS[(n + 1) % 4]} />
      <div className="absolute inset-x-[6%] bottom-[8%] top-[10%] flex items-end gap-3">
        {STEP_ICONS.map((StepIcon, i) => (
          <div
            key={i}
            style={{ height: `${34 + i * 20}%` }}
            className={`flex flex-1 flex-col items-center justify-between rounded-2xl p-3 ${i === 3 ? `${gold} text-black shadow-[0_0_40px_rgba(252,196,40,0.4)]` : `${glass} text-white`}`}
          >
            <StepIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-[10px] font-semibold uppercase tracking-wider sm:text-xs">{STEP_LABELS[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServiceThumb({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#07090a]">
      <Backdrop glow="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <span className={`absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl ${gold} text-black shadow-[0_0_30px_rgba(252,196,40,0.45)]`}>
        <Icon className="h-7 w-7" />
      </span>
      <span className={`absolute bottom-3 left-3 rounded-full px-3 py-1 text-[11px] font-medium text-white ${glass}`}>{label}</span>
    </div>
  );
}
