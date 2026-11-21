import {
  Activity,
  Bot,
  Building2,
  ClipboardCheck,
  Code2,
  CreditCard,
  FileText,
  FlaskConical,
  Gem,
  Globe,
  Layers,
  LineChart,
  Mail,
  Megaphone,
  PenTool,
  Puzzle,
  Repeat,
  Search,
  Share2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Target,
  TrendingUp,
  Video,
  type LucideIcon,
} from "lucide-react";

export type ArtKind = "browser" | "phone" | "chart" | "funnel" | "chat" | "shield" | "store";

export type Service = {
  slug: string;
  group: 0 | 1 | 2;
  title: string;
  tagline: string;
  overview: string;
  features: [string, string][];
  deliverables: string[];
  faqs: [string, string][];
  art: ArtKind;
  icon: LucideIcon;
};

export const SERVICE_GROUP_TITLES = ["Software & Apps", "Digital Growth", "Peptides & Research Chemicals"] as const;

export const SERVICES: Service[] = [
  {
    slug: "website-wordpress-development",
    group: 0,
    title: "Website & WordPress Development",
    tagline: "Fast, search-friendly websites that turn visitors into enquiries.",
    overview:
      "Whether you need a sharp business website, a WordPress site your team can edit, or a custom Next.js build, we design and develop it around one goal: getting you leads. Every site ships mobile-first, fast, and ready to rank.",
    features: [
      ["WordPress & custom builds", "WordPress with a clean editor for your team, or a custom Next.js site when you need speed and full control."],
      ["Built to convert", "Clear offers, strong calls to action, and forms that are easy to finish."],
      ["Fast and mobile-first", "Optimised images, clean code and a layout that works on every screen size."],
      ["SEO foundations", "Proper structure, metadata, sitemaps and schema so search engines can understand every page."],
    ],
    deliverables: ["Custom design for desktop and mobile", "Contact forms wired to your inbox or CRM", "Analytics and conversion tracking", "Training so your team can edit content"],
    faqs: [
      ["Do you build on WordPress?", "Yes. We build WordPress sites with a lightweight theme and an easy editor, and we also build custom sites when WordPress is not the right fit."],
      ["Can you redesign my current site?", "Yes. We keep what works, fix what does not, and migrate your content and URLs so you do not lose search rankings."],
    ],
    art: "browser",
    icon: Globe,
  },
  {
    slug: "custom-web-applications",
    group: 0,
    title: "Custom Web Applications",
    tagline: "Web platforms built around the way your business actually works.",
    overview:
      "Off-the-shelf tools force your process into their mould. We build client portals, dashboards, booking systems and internal tools that fit your workflow and scale with you.",
    features: [
      ["Client & staff portals", "Secure logins, roles and permissions so each person sees only what they should."],
      ["Dashboards & reporting", "Live numbers from your own data, in a view your team will actually open."],
      ["Workflow automation", "Replace spreadsheets and copy-paste with flows that run themselves."],
      ["Integrations", "Connect payments, email, CRMs and the other tools you already pay for."],
    ],
    deliverables: ["Product plan and clickable prototype", "Production-ready web app", "Admin panel for your team", "Documentation and handover"],
    faqs: [
      ["How long does a custom web app take?", "It depends on scope. After a short discovery call we give you a phase plan, so you see a working first version early and grow from there."],
      ["Who owns the code?", "You do. The source code, accounts and infrastructure are yours at handover."],
    ],
    art: "browser",
    icon: Code2,
  },
  {
    slug: "mobile-app-development",
    group: 0,
    title: "Mobile App Development (iOS & Android)",
    tagline: "Mobile apps your customers will keep on their home screen.",
    overview:
      "We design and build iOS and Android apps that feel fast and simple: on-demand services, booking, loyalty, tracking and more, from first prototype to store launch.",
    features: [
      ["iOS & Android from one team", "Native-feeling apps for both stores, built with the right stack for your goals."],
      ["Push notifications & accounts", "Keep users coming back with timely messages and smooth sign-in."],
      ["Payments & maps", "In-app purchases, subscriptions, live location and booking flows."],
      ["App Store launch support", "We prepare listings, screenshots and submissions for Apple and Google."],
    ],
    deliverables: ["UX flows and app design", "iOS and Android builds", "Backend and admin dashboard", "Store submission and post-launch fixes"],
    faqs: [
      ["Should I build for iOS, Android, or both?", "We help you decide from your audience and budget. Many projects launch on both using one shared codebase."],
      ["Do you help with the App Store review?", "Yes. We prepare the listing and handle review feedback until the app is live."],
    ],
    art: "phone",
    icon: Smartphone,
  },
  {
    slug: "custom-software-saas",
    group: 0,
    title: "Custom Software & SaaS",
    tagline: "Replace a stack of subscriptions with software built for you, or launch your own product.",
    overview:
      "From billing and inventory systems to a full SaaS product, we handle architecture, development and deployment, so you can focus on customers instead of infrastructure.",
    features: [
      ["SaaS product builds", "Multi-tenant accounts, subscriptions and admin tooling for a product you can sell."],
      ["Internal systems", "Billing, inventory, order management and CRMs shaped to your operations."],
      ["Scalable architecture", "Cloud setups that handle growth without a rewrite."],
      ["Ongoing support", "Monitoring, fixes and new features after launch."],
    ],
    deliverables: ["Technical plan and roadmap", "Working software in staged releases", "Cloud deployment and backups", "Handover documentation"],
    faqs: [
      ["Can you start with an MVP?", "Yes. We recommend it. Launch the core, learn from real users, then grow."],
      ["Do you maintain the software after launch?", "We can. Many clients keep us on for updates, monitoring and new features."],
    ],
    art: "browser",
    icon: Layers,
  },
  {
    slug: "ecommerce-platforms",
    group: 0,
    title: "E-Commerce Platforms",
    tagline: "Online stores designed to sell, not just to look good.",
    overview:
      "We build and improve online stores on Shopify, WooCommerce and custom stacks, with clean catalogs, fast checkout and the integrations a growing store needs.",
    features: [
      ["Store design & build", "Product pages, collections and a checkout tuned to reduce drop-off."],
      ["Payments & shipping", "Gateways, tax, shipping rules and order emails set up properly."],
      ["Catalog & inventory tools", "Bulk upload, variants, stock sync and clean product data."],
      ["Speed & tracking", "Fast pages and accurate analytics so you know what drives sales."],
    ],
    deliverables: ["Store design and build", "Payment and shipping setup", "Analytics and ad pixels", "Training and launch checklist"],
    faqs: [
      ["Which platform should I choose?", "We recommend based on your catalog size, budget and growth plans. Shopify, WooCommerce and custom builds each fit different stores."],
      ["Can you migrate my existing store?", "Yes. We move products, customers and orders and set up redirects to protect your SEO."],
    ],
    art: "store",
    icon: ShoppingCart,
  },
  {
    slug: "cms-content-platforms",
    group: 0,
    title: "CMS & Content Platforms",
    tagline: "Publish and update content yourself, without calling a developer.",
    overview:
      "We set up content platforms, from WordPress to headless CMS setups, so your team can add pages, posts and products with a simple editor while the site stays fast and secure.",
    features: [
      ["Easy editing", "Page and post editors designed for non-technical teams."],
      ["Headless options", "Pair a modern front end with a CMS for speed and flexibility."],
      ["Roles & workflows", "Drafts, approvals and permissions for larger teams."],
      ["Security & backups", "Hardened setups, updates and automated backups."],
    ],
    deliverables: ["CMS selection and setup", "Custom templates", "Content migration", "Editor training"],
    faqs: [
      ["Is WordPress still a good choice?", "For many businesses, yes. We use it when it fits and recommend alternatives when it does not."],
      ["Can you move my old content?", "Yes. We migrate posts, pages and media, and keep your URLs working."],
    ],
    art: "browser",
    icon: FileText,
  },
  {
    slug: "ui-ux-design-development",
    group: 0,
    title: "UI/UX Design & Development",
    tagline: "Interfaces that look premium and feel effortless to use.",
    overview:
      "We research, wireframe, design and build interfaces for websites and apps. The result is a clear journey for your users and a consistent visual system for your brand.",
    features: [
      ["Research & wireframes", "We map user goals and sketch flows before any pixels are polished."],
      ["Visual design systems", "Colours, type and components that keep every screen consistent."],
      ["Prototypes", "Clickable previews so you can test ideas before development."],
      ["Design to code", "Pixel-accurate builds, so what you approve is what ships."],
    ],
    deliverables: ["User flows and wireframes", "High-fidelity designs", "Reusable component library", "Developer-ready handoff"],
    faqs: [
      ["Can you design only, without development?", "Yes. We can deliver design files for your own developers, or take the project through to code."],
      ["Do you redesign existing products?", "Yes. We audit what you have and improve the parts that hurt conversion and usability."],
    ],
    art: "browser",
    icon: PenTool,
  },
  {
    slug: "chatbot-development",
    group: 0,
    title: "Chatbot Development",
    tagline: "Chatbots that answer, qualify leads and book calls around the clock.",
    overview:
      "We build chatbots for websites, WhatsApp and support desks. They answer common questions, collect lead details and hand over to your team when a human is needed.",
    features: [
      ["Lead capture", "Ask the right questions and send qualified leads to your inbox or CRM."],
      ["Support answers", "Instant replies from your own FAQs and documents."],
      ["Booking flows", "Let visitors choose a time without back-and-forth emails."],
      ["Human handover", "Smooth escalation to your team with the full conversation."],
    ],
    deliverables: ["Conversation design", "Chatbot build and testing", "Website or app integration", "Reporting on chats and leads"],
    faqs: [
      ["Can the chatbot use my own content?", "Yes. We train it on your FAQs, pages and policies so answers match your business."],
      ["Where can the chatbot run?", "On your website, in WhatsApp, or inside your own app."],
    ],
    art: "chat",
    icon: Bot,
  },
  {
    slug: "chrome-extension-development",
    group: 0,
    title: "Chrome Extension Development",
    tagline: "Browser extensions that put your tool inside your users' workflow.",
    overview:
      "We design, build and publish Chrome extensions: productivity tools, data helpers and companion apps for your product, packaged for the Chrome Web Store.",
    features: [
      ["Manifest V3 builds", "Modern, store-compliant extensions with clean permissions."],
      ["Page tools & automation", "Add features to any website, from data capture to one-click actions."],
      ["Account & sync", "Sign-in and cloud sync so users carry their data across devices."],
      ["Web Store publishing", "Listing, assets and review handling included."],
    ],
    deliverables: ["Extension design and build", "Optional backend and dashboard", "Chrome Web Store submission", "Updates after launch"],
    faqs: [
      ["Can you build an extension for my SaaS?", "Yes. Companion extensions are a common way to bring a product closer to the user."],
      ["Will it work in other browsers?", "We can adapt it for Edge, Brave and Firefox as well."],
    ],
    art: "browser",
    icon: Puzzle,
  },
  {
    slug: "nft-marketplace-development",
    group: 0,
    title: "NFT Marketplace Development",
    tagline: "Marketplaces for minting, listing and trading digital collectibles.",
    overview:
      "We build NFT marketplaces with wallet connection, minting, listings and royalties, with a front end that makes the experience simple for first-time buyers.",
    features: [
      ["Wallet connection", "Support for popular wallets and smooth sign-in."],
      ["Minting & listings", "Create collections, set prices and manage auctions or fixed sales."],
      ["Smart contract integration", "Contracts connected to your marketplace, with a security review."],
      ["Admin & analytics", "Moderate collections and track volume from one dashboard."],
    ],
    deliverables: ["Marketplace design and front end", "Smart contract integration", "Admin dashboard", "Testnet launch before mainnet"],
    faqs: [
      ["Which blockchains do you support?", "We work with the major EVM chains and can discuss others based on your project."],
      ["Do you test before going live?", "Yes. We launch on a testnet first and review contracts before real funds are involved."],
    ],
    art: "store",
    icon: Gem,
  },
  {
    slug: "healthcare-food-delivery-real-estate-apps",
    group: 0,
    title: "Healthcare, Food Delivery & Real Estate Apps",
    tagline: "Industry apps with the booking, ordering and listing flows that sector needs.",
    overview:
      "We build apps for healthcare, food delivery and real estate: appointments, ordering, live tracking, property search and the admin tools behind them.",
    features: [
      ["Healthcare apps", "Appointment booking, patient portals and reminders, designed with privacy in mind."],
      ["Food delivery apps", "Menus, ordering, payments and live delivery tracking."],
      ["Real estate apps", "Property search, saved listings, agent profiles and enquiries."],
      ["Admin & vendor panels", "Manage orders, listings and users from one place."],
    ],
    deliverables: ["Industry-specific app design", "Customer and admin apps", "Payments and notifications", "Launch and support"],
    faqs: [
      ["Do you handle healthcare privacy requirements?", "We design with privacy and secure storage in mind and can align the build with the rules that apply to you. Your compliance advisor makes the final call."],
      ["Can one app serve customers and vendors?", "Yes. We usually build separate experiences for each role on the same platform."],
    ],
    art: "phone",
    icon: Building2,
  },

  {
    slug: "seo-organic-growth",
    group: 1,
    title: "SEO & Organic Growth",
    tagline: "Rank for the searches your customers make and keep the traffic compounding.",
    overview:
      "We improve technical health, content and authority so your site earns steady organic traffic. Reporting is tied to leads and revenue, not just rankings.",
    features: [
      ["Technical SEO", "Crawlability, speed, structure and schema fixed at the source."],
      ["Keyword & content strategy", "Pages built around what your buyers search for."],
      ["On-page optimisation", "Titles, headings and internal links tuned for relevance."],
      ["Authority building", "Quality links and mentions that raise trust."],
    ],
    deliverables: ["Full SEO audit", "Keyword map and content plan", "On-page and technical fixes", "Monthly reporting"],
    faqs: [
      ["How long does SEO take?", "Most sites see movement over a few months. We share early indicators so you can see progress along the way."],
      ["Do you guarantee rankings?", "No honest agency can. We commit to the work, the reporting and the strategy."],
    ],
    art: "chart",
    icon: Search,
  },
  {
    slug: "paid-advertising-google-meta",
    group: 1,
    title: "Paid Advertising (Google & Meta)",
    tagline: "Ads that reach buyers now and pay for themselves.",
    overview:
      "We plan, launch and optimise Google and Meta campaigns with clear tracking, so you know which ads bring leads and which ones to switch off.",
    features: [
      ["Search & shopping ads", "Capture people already looking for what you sell."],
      ["Meta & Instagram ads", "Creative and audiences that find new customers."],
      ["Landing pages", "Pages matched to the ad so clicks convert."],
      ["Tracking & budget control", "Conversion tracking and spend reports you can read at a glance."],
    ],
    deliverables: ["Account audit and strategy", "Campaign setup and creative", "Conversion tracking", "Weekly optimisation and reports"],
    faqs: [
      ["What ad budget do I need?", "We recommend a testing budget based on your market, then scale what works."],
      ["Do I own the ad accounts?", "Yes. Accounts stay in your name and you keep full access."],
    ],
    art: "chart",
    icon: Megaphone,
  },
  {
    slug: "lead-generation-outreach",
    group: 1,
    title: "Lead Generation & Outreach",
    tagline: "A steady flow of qualified conversations, not just clicks.",
    overview:
      "We build systems that find the right prospects and start conversations: targeted outreach, landing pages and follow-up that keeps your pipeline full.",
    features: [
      ["Targeted prospect lists", "Researched contacts that match your ideal customer."],
      ["Outreach sequences", "Personal, relevant emails and messages with proper follow-up."],
      ["Lead magnets & audits", "Free tools and offers that bring qualified prospects to you."],
      ["Pipeline tracking", "Every lead logged with status and next step."],
    ],
    deliverables: ["Ideal customer profile", "Outreach copy and sequences", "Lead tracking dashboard", "Monthly performance review"],
    faqs: [
      ["Is outreach compliant?", "We follow platform rules and regional email regulations, and always include clear opt-outs."],
      ["How do I see the leads?", "Leads land in a dashboard or your CRM, with status and notes."],
    ],
    art: "funnel",
    icon: Target,
  },
  {
    slug: "conversion-rate-optimisation",
    group: 1,
    title: "Conversion Rate Optimisation",
    tagline: "Get more customers from the traffic you already have.",
    overview:
      "We study how visitors behave on your site, find where they drop off, and test fixes to your pages, offers and forms until more of them take action.",
    features: [
      ["Behaviour analysis", "Heatmaps, recordings and funnels that show where visitors get stuck."],
      ["A/B testing", "Structured tests so changes are proven, not guessed."],
      ["Page & form improvements", "Clearer messaging, trust signals and simpler forms."],
      ["Speed fixes", "Faster pages that keep impatient visitors engaged."],
    ],
    deliverables: ["CRO audit", "Prioritised test plan", "Implemented improvements", "Results report"],
    faqs: [
      ["How much traffic do I need?", "Testing works best with steady traffic. For smaller sites we focus on proven fixes first."],
      ["Will changes hurt my SEO?", "No. We protect your rankings and structure while improving conversion."],
    ],
    art: "funnel",
    icon: TrendingUp,
  },
  {
    slug: "social-media-marketing",
    group: 1,
    title: "Social Media Marketing",
    tagline: "Content and community that builds a following who buy.",
    overview:
      "We plan, create and publish content for your social channels, and run paid social where it makes sense, so your brand shows up consistently and drives real enquiries.",
    features: [
      ["Content planning", "A calendar built around your audience and goals."],
      ["Design & short video", "On-brand posts, reels and stories."],
      ["Community management", "Replies and engagement that keep followers warm."],
      ["Paid social", "Boost the content that works and reach new audiences."],
    ],
    deliverables: ["Channel strategy", "Monthly content calendar", "Designed posts and videos", "Performance reporting"],
    faqs: [
      ["Which platforms do you cover?", "Instagram, Facebook, LinkedIn, TikTok and X, chosen around where your buyers are."],
      ["Do I approve posts first?", "Yes. You review the calendar and posts before anything goes live."],
    ],
    art: "chat",
    icon: Share2,
  },
  {
    slug: "content-email-marketing",
    group: 1,
    title: "Content & Email Marketing",
    tagline: "Useful content and well-timed emails that turn readers into customers.",
    overview:
      "We write and design content that answers your buyers' questions, and email campaigns that nurture them toward a decision.",
    features: [
      ["Blog & landing content", "Search-friendly articles and pages in your brand voice."],
      ["Email campaigns", "Newsletters and promotions that get opened."],
      ["Lead nurture flows", "Automated sequences that follow up for you."],
      ["Reporting", "See opens, clicks and the revenue they influence."],
    ],
    deliverables: ["Content plan", "Written and designed assets", "Email templates", "Monthly performance review"],
    faqs: [
      ["Who writes the content?", "Our writers draft it with input from you, and you approve it before publishing."],
      ["Which email tools do you use?", "We work with the platform you already have, or help you pick one."],
    ],
    art: "chat",
    icon: Mail,
  },
  {
    slug: "email-retention-marketing",
    group: 1,
    title: "Email & Retention Marketing",
    tagline: "Bring customers back and grow lifetime value.",
    overview:
      "Acquiring a customer is expensive; keeping one is not. We set up the flows that welcome new buyers, recover abandoned carts and reward repeat purchases.",
    features: [
      ["Welcome & onboarding flows", "Set the tone and drive the first repeat purchase."],
      ["Abandoned cart recovery", "Remind shoppers and win back lost sales."],
      ["Win-back campaigns", "Re-engage customers who have gone quiet."],
      ["Segmentation", "Send the right message to the right group."],
    ],
    deliverables: ["Lifecycle map", "Automated flows", "Segmented campaigns", "Revenue reporting"],
    faqs: [
      ["Does this suit my store?", "Retention flows work for most stores and subscription businesses with repeat customers."],
      ["How soon will I see results?", "Automated flows often start producing revenue soon after launch, and improve as we refine them."],
    ],
    art: "funnel",
    icon: Repeat,
  },
  {
    slug: "youtube-video-automation",
    group: 1,
    title: "YouTube & Video Automation",
    tagline: "Publish video consistently without a full production team.",
    overview:
      "We set up repeatable workflows for YouTube and short-form video: scripting, editing, thumbnails and scheduling, so your channel stays active and grows.",
    features: [
      ["Channel strategy", "Topics and formats matched to your audience."],
      ["Scripts & editing", "Clean, engaging videos from your ideas or source material."],
      ["Thumbnails & titles", "Packaging that earns the click."],
      ["Scheduling & reporting", "Consistent publishing and clear growth numbers."],
    ],
    deliverables: ["Channel plan", "Editing and thumbnail workflow", "Publishing schedule", "Monthly analytics review"],
    faqs: [
      ["Do I need to be on camera?", "Not necessarily. We can build faceless formats or edit your own footage."],
      ["Can you repurpose videos for Shorts and Reels?", "Yes. One video can become several short clips across platforms."],
    ],
    art: "chat",
    icon: Video,
  },

  {
    slug: "peptide-research-chemical-store-development",
    group: 2,
    title: "Peptides & Research-Chemical Store Development",
    tagline: "Stores built for research-use brands, with compliance in mind from day one.",
    overview:
      "We build online stores for peptide and research-chemical brands: clean catalogs, clear research-use-only messaging, and the checkout and policy pages these stores need.",
    features: [
      ["Catalog & variants", "Products, dosages and batch details laid out clearly."],
      ["Research-use messaging", "Clear wording and disclaimers placed where they belong."],
      ["Checkout & payments", "A checkout set up for the payment options available to your category."],
      ["Fast, trustworthy design", "A professional look that builds buyer confidence."],
    ],
    deliverables: ["Store design and build", "Product and policy pages", "Payment setup support", "Analytics and launch checklist"],
    faqs: [
      ["Do you provide legal advice?", "No. We build with common compliance practices in mind, and recommend you confirm requirements with a qualified advisor."],
      ["Can you migrate my existing store?", "Yes. We move products and customers and protect your search rankings."],
    ],
    art: "store",
    icon: FlaskConical,
  },
  {
    slug: "compliance-audit-growth-strategy",
    group: 2,
    title: "Compliance Audit & Growth Strategy",
    tagline: "A clear picture of your risks and your biggest growth opportunities.",
    overview:
      "We review your site, messaging, ads and funnel for common problems in this category, then build a prioritised plan to grow while staying on the right side of platform rules.",
    features: [
      ["Site & messaging review", "Check claims, wording and page structure."],
      ["Platform policy check", "Spot what ad and payment platforms commonly flag."],
      ["Funnel & traffic review", "See where you win and where you leak."],
      ["Action plan", "A ranked to-do list with owners and next steps."],
    ],
    deliverables: ["Written audit report", "Prioritised fix list", "Growth roadmap", "Walkthrough call"],
    faqs: [
      ["Is this legal advice?", "No. It is a marketing and website review. Legal questions should go to a qualified professional."],
      ["How long does the audit take?", "We share a timeline after a short intake and keep the review focused on what matters most."],
    ],
    art: "shield",
    icon: ClipboardCheck,
  },
  {
    slug: "compliant-website-build-cro",
    group: 2,
    title: "Compliant Website Build & CRO",
    tagline: "A site that converts and respects the rules of your category.",
    overview:
      "We rebuild or refine your website with careful messaging, trust elements and conversion improvements, so more visitors become customers without risky copy.",
    features: [
      ["Careful copy", "Product and category copy written with common restrictions in mind."],
      ["Trust elements", "Testing, shipping and policy information shown clearly."],
      ["Conversion design", "Layouts and calls to action that guide buyers."],
      ["Speed & tracking", "Fast pages and clean analytics."],
    ],
    deliverables: ["Website build or refresh", "Policy and info pages", "Conversion improvements", "Analytics setup"],
    faqs: [
      ["Can you update my existing site instead?", "Yes. We can refine what you have or rebuild it, depending on what is faster and safer."],
      ["Do you write the copy?", "Yes, and you approve everything before it goes live."],
    ],
    art: "shield",
    icon: ShieldCheck,
  },
  {
    slug: "high-risk-payment-setup",
    group: 2,
    title: "High-Risk Payment Setup",
    tagline: "Get a checkout that can actually take payments.",
    overview:
      "Many mainstream processors decline research-chemical stores. We help you prepare, apply for and integrate payment options suited to your category, and connect them to your checkout.",
    features: [
      ["Application preparation", "Documents and site readiness for processor review."],
      ["Provider guidance", "Options matched to your products and volume."],
      ["Checkout integration", "Gateways connected and tested end to end."],
      ["Backup options", "A second option so one decline does not stop sales."],
    ],
    deliverables: ["Readiness checklist", "Application support", "Checkout integration", "Test orders before launch"],
    faqs: [
      ["Do you guarantee approval?", "No. Approval is up to the provider. We improve your chances through preparation and a clean site."],
      ["Who holds the merchant account?", "Your business does. We help you apply and integrate."],
    ],
    art: "store",
    icon: CreditCard,
  },
  {
    slug: "peptide-seo-aeo-geo",
    group: 2,
    title: "Peptide-Specific SEO, AEO & GEO",
    tagline: "Be found in Google and in AI answers, within what the category allows.",
    overview:
      "We optimise for classic search, answer engines and AI assistants, building educational, well-structured content that earns visibility in this tightly restricted category.",
    features: [
      ["Keyword & topic research", "Find the research-focused searches your buyers make."],
      ["Structured content", "Pages and FAQs that answer questions clearly."],
      ["AEO & GEO", "Formatting and schema so AI tools can cite your pages."],
      ["Technical SEO", "Speed, crawlability and clean site architecture."],
    ],
    deliverables: ["Topic and keyword map", "Optimised pages and FAQs", "Schema and technical fixes", "Monthly visibility report"],
    faqs: [
      ["What are AEO and GEO?", "Answer Engine Optimisation and Generative Engine Optimisation. They help your content appear in AI-generated answers."],
      ["Can SEO work in a restricted category?", "Yes, through useful, careful content and a technically healthy site."],
    ],
    art: "chart",
    icon: LineChart,
  },
  {
    slug: "performance-marketing-for-peptide-brands",
    group: 2,
    title: "Performance Marketing for Peptide Brands",
    tagline: "Growth channels that work around category restrictions.",
    overview:
      "Mainstream ad platforms often restrict this category. We build acquisition that does not depend on a single channel: search, email, content, partnerships and compliant paid options where available.",
    features: [
      ["Channel mix", "Spread risk across search, email, content and partners."],
      ["Email & SMS", "Owned channels you control."],
      ["Affiliate & referral", "Programs that reward customers and partners for sending buyers."],
      ["Reporting", "See which channels bring orders."],
    ],
    deliverables: ["Channel strategy", "Campaign setup", "Email and referral flows", "Monthly performance review"],
    faqs: [
      ["Can I run Google or Meta ads?", "Often these platforms restrict the category. We tell you what is realistic and focus on channels you can rely on."],
      ["Do you run affiliate programs?", "We can set up and manage a referral or affiliate program for your store."],
    ],
    art: "funnel",
    icon: Activity,
  },
  {
    slug: "ongoing-compliance-monitoring",
    group: 2,
    title: "Ongoing Compliance Monitoring",
    tagline: "Stay on top of changes so surprises do not hit your sales.",
    overview:
      "Rules and platform policies change. We regularly review your site, content and marketing and flag issues early, so you can fix them before they cost you.",
    features: [
      ["Scheduled reviews", "Regular checks of pages, copy and ads."],
      ["Change alerts", "Heads-up when policies or platform rules shift."],
      ["Fix support", "We help implement the changes."],
      ["Monthly summary", "A short report of what we checked and changed."],
    ],
    deliverables: ["Monitoring checklist", "Regular site reviews", "Alerts and recommendations", "Monthly summary"],
    faqs: [
      ["Is this a legal service?", "No. It is a marketing and website review. For legal questions, speak with a qualified professional."],
      ["How often do you review?", "We agree a schedule that fits your size and how often your content changes."],
    ],
    art: "shield",
    icon: ShieldCheck,
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
