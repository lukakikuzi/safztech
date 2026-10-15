import data from "./case-studies.json";

export interface CaseStudyResult {
  value: string;
  label: string;
  sub: string;
}

export interface CaseStudyImage {
  src: string;
  width: number;
  height: number;
}

export interface CaseStudyGalleryShot {
  src: string;
  alt: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  type: string;
  industry: string;
  img: CaseStudyImage;
  /** Sharp 2x capture of the live site's first screen, used for large backgrounds. */
  bgImg?: CaseStudyImage;
  imgAlt: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  stack: string[];
  timeline?: string;
  quote?: string;
  quoteName?: string;
  liveUrl?: string;
  domain?: string;
  platform?: string;
  category?: string;
  engagement?: string;
  whatWeDid?: string[];
  features?: string[];
  gallery?: CaseStudyGalleryShot[];
}

// Single source of truth: edit case-studies.json and the home slider, the
// /case-studies page and every /case-studies/[slug] page update together.
export const caseStudies = data as CaseStudy[];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const typeBadgeStyle: Record<string, string> = {
  "Software + Growth": "bg-primary/15 text-primary border border-primary/30",
  "Custom Software": "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  "Digital Growth": "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  "E-Commerce Build": "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  "Merchant Payments": "bg-orange-500/10 text-orange-400 border border-orange-500/20",
};
