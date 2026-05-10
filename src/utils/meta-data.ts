import { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || "https://www.safztech.com";

export const defaultMetadata: Metadata = {
  title: "SAFZTECH — Premium Software House & Digital Growth Partner",
  description:
    "SAFZTECH builds high-converting websites, mobile apps & custom software — then markets them with SEO, paid ads & conversion optimization. 150+ businesses served, $2.5B+ in revenue created.",

  applicationName: "Safztech",
  creator: "SAFZTECH",
  generator: "Next.js",
  keywords: [
    "Safztech",
    "Software Development Agency",
    "Digital Marketing Agency",
    "Lead Generation",
    "SEO Services",
    "Custom Web Development",
    "Mobile App Development",
    "E-Commerce Development",
    "Conversion Rate Optimization",
    "SaaS Development",
    "Full Stack Development",
    "UI UX Design",
  ],

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-512x512.png",
        sizes: "512x512",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo-96x96.png",
        sizes: "96x96",
      },
      {
        rel: "icon",
        type: "image/png",
        url: "/favicons/logo.png",
        sizes: "834x408",
      },
      { rel: "icon", type: "image/svg+xml", url: "/favicons/logo.svg" },
      { rel: "icon", type: "image/x-icon", url: "/favicons/favicon.ico" },
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        url: "/favicons/favicon.ico",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/favicons/apple-icon.png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "SAFZTECH — Premium Software House & Digital Growth Partner",
    description:
      "SAFZTECH builds high-converting websites, mobile apps & custom software — then markets them with SEO, paid ads & conversion optimization. 150+ businesses served, $2.5B+ in revenue created.",
    siteName: "Safztech",
    images: [
      {
        url: `${BASE_URL}/social/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Safztech - Your Vision, Engineered to Perfection",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SAFZTECH — Premium Software House & Digital Growth Partner",
    description:
      "SAFZTECH builds high-converting websites, mobile apps & custom software — then markets them with SEO, paid ads & conversion optimization. 150+ businesses served, $2.5B+ in revenue created.",
    images: [`${BASE_URL}/social/twitter-preview.jpg`],
    creator: "@safztech",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export function GetPageMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    title: overrides.title ?? defaultMetadata.title,
    description: overrides.description ?? defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...overrides.openGraph,
      title: overrides.title || defaultMetadata.openGraph?.title,
      description:
        overrides.description || defaultMetadata.openGraph?.description,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...overrides.twitter,
      title: overrides.title || defaultMetadata.twitter?.title,
      description:
        overrides.description || defaultMetadata.twitter?.description,
    },
  };
}
