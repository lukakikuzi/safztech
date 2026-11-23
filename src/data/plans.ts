export type Tier = {
  key: "A" | "B" | "C";
  name: string;
  setup: number;
  monthly: number;
  badge?: string;
  features: string[];
};

export type Plan = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  positioning: string;
  audience: string;
  image: string;
  tiers: Tier[];
  note?: string;
  faqs: [string, string][];
};

export const TERM_MONTHS = 6;

export const SHARED_TERMS = [
  "Six-month minimum commitment.",
  "Advertising budget paid separately by the client.",
  "Hosting, domains, paid apps and third-party subscriptions excluded.",
  "Additional website pages, products, campaigns and platforms quoted separately.",
  "Reels and creative quantities are monthly production limits.",
  "Website and content approvals are subject to client cooperation.",
  "No guaranteed sales, rankings or advertising results.",
];

const SHARED_FAQS: [string, string][] = [
  ["How does the pricing work?", "Every package is an initial payment plus a monthly retainer for six months. The 6-month total is shown on each plan."],
  ["Is the ad budget included?", "No. Your advertising budget is paid directly to the ad platform and is separate from our fee. We manage and optimise it for you."],
  ["What is not included?", "Hosting, domains, paid apps and third-party subscriptions. Extra pages, products, campaigns or platforms are quoted separately."],
  ["Do you guarantee sales or rankings?", "No. Nobody can honestly guarantee sales, search rankings or ad results. We commit to the work, the tracking and clear monthly reporting."],
];

export const PLANS: Plan[] = [
  {
    slug: "business-growth-program",
    name: "Business Growth Program",
    eyebrow: "Website + SEO + Social + Ads",
    headline: "A website and a marketing engine that bring you customers.",
    positioning: "One team builds your site, ranks it, promotes it and tracks every lead, so you get a steady flow of enquiries instead of a brochure.",
    audience: "For service businesses and brands that want more leads, not just a nicer website.",
    image: "/images/services/seo-organic-growth-v2.webp",
    tiers: [
      {
        key: "A", name: "Launch", setup: 999, monthly: 500,
        features: [
          "Custom website (up to 5 pages)", "Website copywriting and lead forms", "Keyword research (30 keywords)", "On-page and technical SEO", "2 SEO articles/month",
          "2 social media platforms", "12 social media posts/month", "1 advertising platform", "Up to 2 active campaigns", "2 ad creatives/month", "Conversion tracking and monthly reporting",
        ],
      },
      {
        key: "B", name: "Growth", setup: 1599, monthly: 900,
        features: [
          "Custom website (up to 8 pages)", "2 landing pages", "Keyword research (50 keywords)", "On-page, technical and local SEO", "4 SEO articles/month",
          "3 social media platforms", "15 social media posts/month", "4 reels/month", "1 advertising platform", "Up to 3 active campaigns", "4 ad creatives/month",
          "Lead management setup", "Monthly conversion optimization", "Monthly strategy meeting and reporting",
        ],
      },
      {
        key: "C", name: "Scale", setup: 2999, monthly: 1500,
        features: [
          "Custom website (up to 12 pages)", "3 conversion-focused landing pages", "Keyword research (100 keywords)", "Advanced SEO and local SEO", "6 SEO articles/month",
          "3 social media platforms", "20 social media posts/month", "8 reels/month", "2 advertising platforms", "Up to 5 active campaigns", "8 ad creatives/month",
          "CRM and lead automation setup", "Advanced conversion optimization", "Biweekly performance reviews",
        ],
      },
    ],
    faqs: [
      ["Who is this program for?", "Businesses that want a new or improved website plus ongoing SEO, social and ad management from one team."],
      ...SHARED_FAQS,
    ],
  },
  {
    slug: "ecommerce-growth-program",
    name: "Ecommerce Growth Program",
    eyebrow: "Shopify & WooCommerce",
    headline: "Turn your store into a customer acquisition and revenue growth system.",
    positioning: "Store design, conversion work, email flows, SEO, paid ads and social, run together to help your brand scale through paid advertising and social media.",
    audience: "For Shopify and WooCommerce brands that want to increase sales and scale.",
    image: "/images/services/ecommerce-platforms-v2.webp",
    tiers: [
      {
        key: "A", name: "Ecommerce Launch", setup: 999, monthly: 500,
        features: [
          "Shopify/WooCommerce store setup or redesign", "Up to 15 products", "5 core website pages", "Conversion-focused product pages", "Basic checkout optimization",
          "Keyword research and SEO setup", "2 SEO articles/month", "2 social media platforms", "12 social media posts/month", "4 advertising creatives/month",
          "1 advertising platform", "Up to 2 active campaigns", "Basic analytics and conversion tracking", "Monthly performance report",
        ],
      },
      {
        key: "B", name: "Ecommerce Growth", setup: 1599, monthly: 900,
        features: [
          "Custom Shopify/WooCommerce design", "Up to 50 products", "Advanced product page optimization", "Upsells and product bundles", "Popup and email capture setup",
          "Welcome and abandoned-cart email flows", "6 SEO articles/month", "SEO and AI search optimization", "3 social media platforms", "15 social media posts/month", "8 reels/month",
          "2 advertising platforms", "Up to 4 active campaigns", "8 advertising creatives/month", "Retargeting and audience testing", "Monthly growth and sales reporting",
        ],
      },
      {
        key: "C", name: "Ecommerce Scale", setup: 2999, monthly: 1600, badge: "Recommended premium tier",
        features: [
          "Custom ecommerce website design", "Up to 100 products", "Advanced conversion optimization", "Subscription, loyalty or referral functionality (one selected)", "Advanced email marketing automation",
          "8 SEO articles/month", "Advanced SEO and authority building", "3 social media platforms", "20 social media posts/month", "12 reels/month", "2 advertising platforms",
          "Up to 6 active campaigns", "12 advertising creatives/month", "Advanced retargeting and creative testing", "Customer acquisition optimization", "Biweekly performance reporting and strategy reviews",
        ],
      },
    ],
    faqs: [
      ["Which platforms do you work with?", "Shopify and WooCommerce. We can set up a new store or redesign your existing one."],
      ...SHARED_FAQS,
    ],
  },
  {
    slug: "peptide-growth-program",
    name: "Peptide Brand Growth Program",
    eyebrow: "For peptide & research brands",
    headline: "Digital infrastructure and marketing built around the peptide industry.",
    positioning: "Specialized, compliance-conscious website development and marketing systems designed around the unique challenges of the peptide industry.",
    audience: "Exclusive for peptide brands, research-focused businesses and eligible peptide industry operators.",
    image: "/images/services/peptide-research-chemical-store-development-v2.webp",
    tiers: [
      {
        key: "A", name: "Peptide Launch", setup: 1500, monthly: 600,
        features: [
          "Shopify/WooCommerce website", "Up to 15 products", "Premium product page design", "Claims-conscious website copy review", "Legal pages and disclaimer system", "COA/lab report display functionality",
          "Basic technical SEO", "4 educational SEO articles/month", "2 social media platforms", "12 social media posts/month", "4 educational content creatives/month",
          "Basic email capture and 1 lead magnet", "Basic analytics and reporting",
        ],
      },
      {
        key: "B", name: "Peptide Growth", setup: 2500, monthly: 1000,
        features: [
          "Custom ecommerce website", "Up to 40 products", "Batch and COA library functionality", "Wholesale/B2B inquiry functionality", "Ongoing claims and website copy review", "8 SEO articles/month",
          "Advanced SEO and AI search optimization", "3 social media platforms", "15 social media posts/month", "8 educational reels/month", "Email marketing and automation",
          "Lead qualification funnel", "Educational landing pages", "Payment processor setup assistance", "Monthly growth and performance reporting",
        ],
      },
      {
        key: "C", name: "Peptide Authority", setup: 4000, monthly: 1800, badge: "Exclusive premium tier",
        features: [
          "Advanced custom ecommerce website", "Custom B2B portal and tiered pricing", "Advanced product and COA library", "Ongoing claims and content review", "8+ SEO articles/month",
          "Advanced SEO, AEO and GEO strategy", "Digital PR and authority-building strategy", "3 social media platforms", "20 social media posts/month", "12 educational reels/month",
          "Advanced email segmentation and automation", "Wholesale lead generation funnel", "Payment infrastructure consulting", "Advanced marketing analytics", "Biweekly strategy and performance reviews",
        ],
      },
    ],
    note:
      "Peptide package qualification: all website copy, product claims, advertising and email content must be reviewed against your actual legal business model and applicable regulations. SAFZTECH provides marketing and implementation services, not legal certification. Paid advertising is subject to platform eligibility and approval, and campaign activity is never represented as guaranteed.",
    faqs: [
      ["Do you provide legal or compliance certification?", "No. We provide marketing and implementation services. All copy, claims and ads are reviewed against your actual legal business model and applicable regulations, and you should confirm requirements with a qualified advisor."],
      ["Can you run ads for peptide brands?", "Paid advertising depends on platform eligibility and approval. We tell you what is realistic and never present campaign results as guaranteed."],
      ...SHARED_FAQS,
    ],
  },
];

export const getPlan = (slug: string) => PLANS.find((p) => p.slug === slug);
export const sixMonthTotal = (t: Tier) => t.setup + t.monthly * TERM_MONTHS;
export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
