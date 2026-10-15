// Types and parser for Google's PageSpeed Insights API (v5), trimmed down to
// what the free-audit results page shows.

export type Strategy = "mobile" | "desktop";

export interface InsightMetric {
  id: string;
  title: string;
  value: string;
  /** Lighthouse score 0–1 for this metric. */
  score: number | null;
}

export interface InsightIssue {
  id: string;
  title: string;
  description: string;
  displayValue?: string;
  score: number;
  category: "Performance" | "Accessibility" | "Best Practices" | "SEO";
}

export interface InsightResult {
  url: string;
  finalUrl: string;
  strategy: Strategy;
  fetchedAt: string;
  scores: { performance: number | null; accessibility: number | null; bestPractices: number | null; seo: number | null };
  metrics: InsightMetric[];
  issues: InsightIssue[];
  passedCount: number;
  screenshot?: string;
}

const CATEGORY_LABEL: Record<string, InsightIssue["category"]> = {
  performance: "Performance",
  accessibility: "Accessibility",
  "best-practices": "Best Practices",
  seo: "SEO",
};

const METRIC_IDS = [
  "first-contentful-paint",
  "largest-contentful-paint",
  "total-blocking-time",
  "cumulative-layout-shift",
  "speed-index",
];

type Audit = {
  id?: string;
  title?: string;
  description?: string;
  displayValue?: string;
  score?: number | null;
  scoreDisplayMode?: string;
  details?: { data?: string };
};

type Lighthouse = {
  finalDisplayedUrl?: string;
  finalUrl?: string;
  categories?: Record<string, { score?: number | null; auditRefs?: { id: string; weight: number }[] }>;
  audits?: Record<string, Audit>;
};

const pct = (s: number | null | undefined) => (typeof s === "number" ? Math.round(s * 100) : null);

/** Lighthouse descriptions are markdown with "Learn more" links — flatten to a short plain sentence. */
function plain(text: string | undefined): string {
  const t = (text ?? "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`/g, "")
    .replace(/\s*(Learn more[^.]*|See [^.]*)\.?\s*$/i, "")
    .replace(/\s+/g, " ")
    .trim();
  return t.length > 170 ? `${t.slice(0, 167).trimEnd()}…` : t;
}

export function parsePageSpeed(raw: unknown, url: string, strategy: Strategy): InsightResult {
  const lh = ((raw as { lighthouseResult?: Lighthouse })?.lighthouseResult ?? {}) as Lighthouse;
  const audits = lh.audits ?? {};
  const cats = lh.categories ?? {};

  const issues: (InsightIssue & { impact: number })[] = [];
  let passedCount = 0;
  for (const [catId, cat] of Object.entries(cats)) {
    for (const ref of cat.auditRefs ?? []) {
      const a = audits[ref.id];
      if (!a || typeof a.score !== "number" || ref.weight <= 0) continue;
      if (a.score >= 0.9) {
        passedCount++;
        continue;
      }
      issues.push({
        id: `${catId}:${ref.id}`,
        title: a.title ?? ref.id,
        description: plain(a.description),
        displayValue: a.displayValue,
        score: a.score,
        category: CATEGORY_LABEL[catId] ?? "Performance",
        impact: ref.weight * (1 - a.score),
      });
    }
  }
  issues.sort((a, b) => b.impact - a.impact);

  return {
    url,
    finalUrl: lh.finalDisplayedUrl ?? lh.finalUrl ?? url,
    strategy,
    fetchedAt: new Date().toISOString(),
    scores: {
      performance: pct(cats.performance?.score),
      accessibility: pct(cats.accessibility?.score),
      bestPractices: pct(cats["best-practices"]?.score),
      seo: pct(cats.seo?.score),
    },
    metrics: METRIC_IDS.flatMap((id) => {
      const a = audits[id];
      return a ? [{ id, title: a.title ?? id, value: a.displayValue ?? "—", score: a.score ?? null }] : [];
    }),
    issues: issues.slice(0, 10).map(({ impact: _impact, ...rest }) => rest),
    passedCount,
    screenshot: audits["final-screenshot"]?.details?.data,
  };
}

/** Normalises what a visitor typed into an http(s) URL, or null if it isn't a public website address. */
export function normaliseUrl(input: string): string | null {
  const text = input.trim();
  if (!text || text.length > 2000) return null;
  let u: URL;
  try {
    u = new URL(/^https?:\/\//i.test(text) ? text : `https://${text}`);
  } catch {
    return null;
  }
  if (u.protocol !== "http:" && u.protocol !== "https:") return null;
  const host = u.hostname.toLowerCase();
  if (!host.includes(".") || host.endsWith(".local") || host.endsWith(".internal") || host.endsWith(".localhost")) return null;
  if (/^(127\.|10\.|0\.|169\.254\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(host) || host.includes(":")) return null;
  u.hash = "";
  return u.toString();
}
