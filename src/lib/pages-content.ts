import { UNSPLASH_IT } from "@/lib/unsplash";
import { SITE_MAPS_URL } from "@/lib/site";

export const SERVICE_SLUG_IMAGES: Record<string, string> = {
  "website-development": UNSPLASH_IT.laptopCode,
  "web-applications": UNSPLASH_IT.devWorkspace,
  "mobile-apps": UNSPLASH_IT.mobileDev,
  "ui-ux-design": UNSPLASH_IT.designUI,
  "digital-marketing": UNSPLASH_IT.marketing,
  "social-media": UNSPLASH_IT.startup,
  "seo": UNSPLASH_IT.analytics,
  "ai-automation": UNSPLASH_IT.serverRoom,
  "cloud-devops": UNSPLASH_IT.serverRoom,
};

export const ABOUT_VALUES = [
  { title: "Ownership", body: "We treat your product like our own—clear communication, honest timelines, and accountability." },
  { title: "Craft", body: "Design and code quality you can feel: performance, accessibility, and polish in every release." },
  { title: "Growth mindset", body: "We ship, measure, and iterate—marketing and product decisions backed by data." },
  { title: "Partnership", body: "One team for design, development, and digital growth—no handoff chaos." },
] as const;

export const ABOUT_MILESTONES = [
  {
    year: "Founded",
    text: "Jeckvelin Mecwan founded Infiyoura as a studio for startups needing design, development, and marketing in one place.",
  },
  { year: "Today", text: "Serving clients across India and globally—web, mobile, social, SEO, and cloud." },
  { year: "Focus", text: "Premium delivery for SaaS, e-commerce, services, and media brands." },
] as const;

export const SERVICES_INTRO = [
  "Fixed-scope websites and landing pages",
  "Retainers for product engineering",
  "Monthly social & performance marketing",
  "SEO and content programs",
  "AI integrations and automation",
  "Cloud setup and DevOps support",
] as const;

export const SERVICES_FAQ = [
  {
    question: "Do you work with early-stage startups?",
    answer: "Yes. We help with MVPs, marketing sites, and growth foundations—scoped to your budget and timeline.",
  },
  {
    question: "Can you handle design and development together?",
    answer: "That's our default. UI/UX, engineering, and launch support live on one roadmap.",
  },
  {
    question: "Do you offer ongoing marketing?",
    answer: "Yes—social media management, Google/Meta ads, SEO, and reporting on monthly retainers.",
  },
] as const;

export const SERVICE_PROCESS = [
  "Discovery & scope",
  "UX / architecture",
  "Build & QA",
  "Launch & handoff",
  "Grow & optimize",
] as const;

export const SERVICE_EXTRA: Record<
  string,
  { outcomes: readonly string[]; idealFor: string; faq: readonly { question: string; answer: string }[] }
> = {
  "website-development": {
    idealFor: "Brands that need a fast, credible web presence that ranks and converts.",
    outcomes: ["Marketing & corporate sites", "Landing pages for campaigns", "Headless CMS setups", "Localization-ready builds"],
    faq: [
      { question: "Which stack do you use?", answer: "We primarily ship on Next.js and modern React for speed, SEO, and maintainability." },
      { question: "How long does a site take?", answer: "Typical marketing sites run 4–10 weeks depending on pages, CMS, and integrations." },
    ],
  },
  "web-applications": {
    idealFor: "Teams building SaaS, portals, or internal tools that need to scale.",
    outcomes: ["Multi-tenant SaaS", "Admin & ops dashboards", "Customer portals", "API-first backends"],
    faq: [
      { question: "Can you work with our existing backend?", answer: "Yes—we integrate with your APIs or help design new services as needed." },
    ],
  },
  "mobile-apps": {
    idealFor: "Products that need native-quality mobile experiences on iOS and Android.",
    outcomes: ["Cross-platform MVPs", "App Store & Play launch", "Auth & payments", "Push notifications"],
    faq: [
      { question: "Native or cross-platform?", answer: "We recommend React Native for most MVPs; native when platform-specific features dominate." },
    ],
  },
  "ui-ux-design": {
    idealFor: "Founders who want clarity before development—or a refresh of an existing product.",
    outcomes: ["User research & flows", "Wireframes & prototypes", "Visual design systems", "Developer handoff"],
    faq: [
      { question: "Do you design only?", answer: "Yes, or as part of a full build with our engineering team." },
    ],
  },
  "digital-marketing": {
    idealFor: "Businesses ready to invest in measurable paid and organic growth.",
    outcomes: ["Google & Meta campaigns", "Funnel & landing CRO", "Creative production", "Weekly performance reports"],
    faq: [
      { question: "Minimum ad spend?", answer: "We tailor plans to your market; we'll advise on realistic budgets during discovery." },
    ],
  },
  "social-media": {
    idealFor: "Brands that need consistent, on-brand content without hiring in-house.",
    outcomes: ["Content calendars", "Short-form video & reels", "Community replies", "Paid social boosts"],
    faq: [
      { question: "Which platforms?", answer: "Instagram, LinkedIn, Facebook, YouTube Shorts—based on your audience." },
    ],
  },
  seo: {
    idealFor: "Sites that need durable visibility in search—not quick hacks.",
    outcomes: ["Technical SEO fixes", "On-page optimization", "Content briefs", "Local & international SEO"],
    faq: [
      { question: "How soon will we rank?", answer: "SEO compounds over months; we set expectations and track leading indicators from day one." },
    ],
  },
  "ai-automation": {
    idealFor: "Teams drowning in manual work or exploring AI features for customers.",
    outcomes: ["Support chatbots", "Workflow automation", "CRM integrations", "Custom AI features"],
    faq: [
      { question: "Which AI providers?", answer: "We integrate leading APIs and open models based on privacy, cost, and quality needs." },
    ],
  },
  "cloud-devops": {
    idealFor: "Products moving to production or scaling beyond a single server.",
    outcomes: ["AWS & cloud architecture", "CI/CD pipelines", "Monitoring & alerts", "Security baselines"],
    faq: [
      { question: "Do you offer 24/7 ops?", answer: "We set up observability and on-call playbooks; managed ops available on retainer." },
    ],
  },
};

export const WORK_DETAIL: Record<string, { challenge: string; solution: string; results: readonly string[] }> = {
  "E-commerce growth platform": {
    challenge: "Legacy storefront and disconnected ads made it hard to scale profitably.",
    solution: "New Next.js storefront, analytics layer, and always-on Google/Meta campaigns.",
    results: ["Faster checkout", "Unified reporting", "Improved ROAS on paid"],
  },
  "B2B SaaS dashboard": {
    challenge: "Manual onboarding and billing limited growth.",
    solution: "Multi-tenant app with roles, Stripe billing, and real-time usage dashboards.",
    results: ["Self-serve signup", "Automated invoicing", "Executive reporting"],
  },
  "Brand & social launch": {
    challenge: "New brand entering a crowded market with no digital presence.",
    solution: "Identity system, website, and 90-day social content plan with paid support.",
    results: ["Consistent visual language", "Daily social cadence", "Launch campaign live"],
  },
  "Mobile fintech MVP": {
    challenge: "Validate mobile-first product with secure KYC in weeks, not months.",
    solution: "Cross-platform app, API backend, and compliance-aware user flows.",
    results: ["App store release", "KYC integrated", "Cloud-hosted APIs"],
  },
};

export const CONTACT_FAQ = [
  { question: "What happens after I submit the form?", answer: "We review your brief and reply within one business day with next steps or a short call invite." },
  { question: "Do you sign NDAs?", answer: "Yes—happy to execute a mutual NDA before sharing sensitive product details." },
  { question: "What budgets do you work with?", answer: "Projects range from focused landing pages to full product builds; we'll scope to your budget transparently." },
  {
    question: "Where are you based?",
    answer:
      "Our studio is at FF-04, Indraprastha Business House, Near Vijay Cross Road, Ahmedabad 380009. We also work with clients globally across time zones.",
  },
] as const;

export const CONTACT_CHANNELS = [
  { label: "Email", value: "hello@infiyoura.com", href: "mailto:hello@infiyoura.com" },
  {
    label: "Office",
    value: "FF-04, Indraprastha Business House, Near Vijay Cross Road, Ahmedabad 380009",
    href: SITE_MAPS_URL,
  },
  { label: "Response time", value: "Within 1 business day", href: undefined },
  { label: "Engagement types", value: "Fixed projects & monthly retainers", href: undefined },
] as const;

export const CAREERS_BENEFITS = [
  "Remote-friendly with flexible hours",
  "Work on varied client products",
  "Learn design, engineering, and growth",
  "Small team—real ownership",
  "Portfolio-worthy shipped work",
] as const;

export const CAREERS_ROLES = [
  {
    title: "Full-stack Developer",
    type: "Remote · Full-time",
    description: "Build Next.js apps, APIs, and integrations for client products. TypeScript, React, and cloud deployment experience preferred.",
  },
  {
    title: "UI/UX Designer",
    type: "Remote · Full-time / Contract",
    description: "Own flows, visuals, and prototypes for web and mobile. Strong Figma skills and marketing site experience a plus.",
  },
  {
    title: "Digital Marketing Specialist",
    type: "Hybrid · Full-time",
    description: "Run Google/Meta campaigns, report on performance, and collaborate on landing pages and creative.",
  },
  {
    title: "Social Media Manager",
    type: "Remote · Contract",
    description: "Content calendars, short-form creative, and community management for B2B and D2C brands.",
  },
  {
    title: "SEO & Content Writer",
    type: "Remote · Part-time",
    description: "Technical SEO audits, on-page optimization, and long-form content aligned with search intent.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "nextjs-website-checklist",
    title: "The 2026 checklist for a high-performance Next.js marketing site",
    excerpt: "Core Web Vitals, SEO basics, and conversion patterns we use on every launch.",
    category: "Development",
    date: "Mar 2026",
  },
  {
    slug: "social-media-b2b",
    title: "Social media for B2B: what actually drives pipeline",
    excerpt: "LinkedIn, thought leadership, and creative that fits professional buyers.",
    category: "Social",
    date: "Feb 2026",
  },
  {
    slug: "mvp-mobile-scope",
    title: "Scoping a mobile MVP without overbuilding",
    excerpt: "Features to ship first, and what to defer until you have user signal.",
    category: "Mobile",
    date: "Feb 2026",
  },
  {
    slug: "seo-technical-audit",
    title: "Technical SEO fixes that unblock growth",
    excerpt: "Crawlability, schema, and site architecture mistakes we see on growing sites.",
    category: "SEO",
    date: "Jan 2026",
  },
  {
    slug: "paid-ads-creative",
    title: "Matching ad creative to your landing page",
    excerpt: "Why message match improves ROAS—and how we test creative systematically.",
    category: "Marketing",
    date: "Jan 2026",
  },
  {
    slug: "design-systems-startups",
    title: "Lightweight design systems for startups",
    excerpt: "Tokens, components, and documentation without slowing your team down.",
    category: "Design",
    date: "Dec 2025",
  },
] as const;
