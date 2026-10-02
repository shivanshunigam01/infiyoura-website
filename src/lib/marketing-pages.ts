export type ServicePage = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  bullets: readonly string[];
};

export const SERVICE_PAGES: readonly ServicePage[] = [
  {
    slug: "website-development",
    title: "Website Development",
    headline: "Fast, modern websites that convert",
    description:
      "We design and build marketing sites, corporate websites, and landing pages on Next.js and proven stacks—optimized for speed, SEO, and clear calls to action.",
    bullets: [
      "Next.js & React",
      "CMS integration",
      "Performance & Core Web Vitals",
      "Analytics & conversion tracking",
    ],
  },
  {
    slug: "web-applications",
    title: "Web Application Development",
    headline: "Custom web apps for real workflows",
    description:
      "Dashboards, portals, SaaS products, and internal tools—built with scalable architecture, auth, APIs, and clean UX.",
    bullets: ["SaaS & B2B platforms", "Admin dashboards", "API design", "Cloud deployment"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    headline: "iOS & Android experiences users love",
    description:
      "Native and cross-platform mobile apps—from MVP to production—with secure backends and app-store readiness.",
    bullets: ["React Native / native", "Push & offline", "App Store launch", "Backend & APIs"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX & Product Design",
    headline: "Design that clarifies and persuades",
    description:
      "Research, wireframes, visual design, and prototypes so your product feels premium before a single line of code ships.",
    bullets: ["User flows & wireframes", "Design systems", "Prototyping", "Handoff to development"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    headline: "Paid and organic growth, measured",
    description:
      "Campaign strategy, creative, and optimization across Google, Meta, and performance channels—with reporting you can trust.",
    bullets: ["Google Ads", "Meta Ads", "Landing page CRO", "Monthly reporting"],
  },
  {
    slug: "social-media",
    title: "Social Media Marketing",
    headline: "Consistent brand presence that builds trust",
    description:
      "Content planning, creative production, community management, and paid social—aligned with your business goals.",
    bullets: ["Content calendars", "Reels & short-form", "Community management", "Influencer coordination"],
  },
  {
    slug: "seo",
    title: "SEO & Content",
    headline: "Visibility that compounds over time",
    description:
      "Technical SEO, on-page optimization, and content strategy so the right people find you when they search.",
    bullets: ["Technical audits", "On-page SEO", "Content strategy", "Local & international SEO"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    headline: "Smarter operations with AI",
    description:
      "Chatbots, workflow automation, CRM integrations, and custom AI features that save time and improve customer experience.",
    bullets: ["AI assistants", "Process automation", "CRM & integrations", "Data pipelines"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    headline: "Reliable infrastructure for growth",
    description:
      "AWS and modern cloud setup, CI/CD, monitoring, and security practices so your product stays fast and available.",
    bullets: ["AWS & cloud", "CI/CD pipelines", "Monitoring & alerts", "Security best practices"],
  },
] as const;

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}

export const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Works", href: "/our-works" },
      { label: "Work", href: "/work" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "Web Applications", href: "/services/web-applications" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Social Media", href: "/services/social-media" },
      { label: "SEO", href: "/services/seo" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
] as const;

export const WORK_ITEMS = [
  {
    title: "E-commerce growth platform",
    category: "Web · Marketing",
    summary: "Storefront, analytics, and paid campaigns for scalable online sales.",
  },
  {
    title: "B2B SaaS dashboard",
    category: "Web App · Cloud",
    summary: "Multi-tenant product with billing, roles, and real-time reporting.",
  },
  {
    title: "Brand & social launch",
    category: "Design · Social",
    summary: "Visual identity, content system, and always-on social presence.",
  },
] as const;
