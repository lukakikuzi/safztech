import type { Tier } from "@/data/plans";

export type FeatureDiff = { text: string; status: "same" | "new" | "up"; was?: string };

const numbers = (f: string) => (f.match(/\d+\+?/g) ?? []).join(" / ");
const shape = (f: string) => f.replace(/\d+\+?/g, "#").toLowerCase();

/** Each feature of `tier` marked as new or increased compared with the tier below it. */
export function diffAgainst(lower: Tier | undefined, tier: Tier): FeatureDiff[] {
  if (!lower) return tier.features.map((text) => ({ text, status: "same" }));
  const before = new Map(lower.features.map((f) => [shape(f), numbers(f)]));
  return tier.features.map((text) => {
    const was = before.get(shape(text));
    if (was === undefined) return { text, status: "new" };
    return was === numbers(text) ? { text, status: "same" } : { text, status: "up", was };
  });
}
