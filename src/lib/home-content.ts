import { UNSPLASH_IT } from "@/lib/unsplash";

export const HOME_STATS = [
  { value: "120+", label: "Projects delivered" },
  { value: "15+", label: "Industries served" },
  { value: "24/7", label: "Support & iteration" },
  { value: "1 Team", label: "Design · Dev · Growth" },
] as const;

export const HOME_PILLARS = [
  {
    title: "Strategy first",
    body: "Discovery workshops, clear roadmaps, and measurable KPIs before we write a line of code.",
    image: UNSPLASH_IT.meeting,
    imageAlt: "Product strategy workshop with a technology team",
  },
  {
    title: "Craft at scale",
    body: "Premium UI, performant engineering, and cloud-ready architecture built for real users.",
    image: UNSPLASH_IT.laptopCode,
    imageAlt: "Developer writing code on a laptop",
  },
  {
    title: "Growth built-in",
    body: "SEO, paid media, and social systems that launch with your product—not months later.",
    image: UNSPLASH_IT.marketing,
    imageAlt: "Marketing team reviewing campaign performance",
  },
] as const;

export const HOME_CAPABILITIES = [
  "Website & Web Apps",
  "Mobile Applications",
  "UI/UX & Branding",
  "Social Media",
  "Digital Marketing",
  "SEO & Content",
  "AI & Automation",
  "Cloud & DevOps",
] as const;

export const SHOWCASE_BENTO = [
  {
    title: "Engineering",
    caption: "Full-stack product teams shipping on modern stacks.",
    image: UNSPLASH_IT.devWorkspace,
    imageAlt: "Software team at work in a tech office",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Cloud & data",
    caption: "Secure, observable infrastructure.",
    image: UNSPLASH_IT.serverRoom,
    imageAlt: "Server infrastructure and technology",
    className: "md:col-span-1",
  },
  {
    title: "Design systems",
    caption: "Interfaces users trust.",
    image: UNSPLASH_IT.designUI,
    imageAlt: "UI design and prototyping",
    className: "md:col-span-1",
  },
] as const;

export const HOME_WORK = [
  {
    title: "E-commerce growth platform",
    category: "Web · Marketing",
    summary: "Storefront, analytics, and paid campaigns for scalable online sales.",
    image: UNSPLASH_IT.analytics,
    imageAlt: "Business analytics dashboard on laptop",
  },
  {
    title: "B2B SaaS dashboard",
    category: "Web App · Cloud",
    summary: "Multi-tenant product with billing, roles, and real-time reporting.",
    image: UNSPLASH_IT.teamCollaboration,
    imageAlt: "SaaS product team collaborating",
  },
  {
    title: "Brand & social launch",
    category: "Design · Social",
    summary: "Visual identity, content system, and always-on social presence.",
    image: UNSPLASH_IT.startup,
    imageAlt: "Creative team planning a brand launch",
  },
  {
    title: "Mobile fintech MVP",
    category: "Mobile · Security",
    summary: "Cross-platform app with KYC flows and cloud-backed APIs.",
    image: UNSPLASH_IT.mobileDev,
    imageAlt: "Mobile application development",
  },
] as const;

export const INDUSTRIES = [
  {
    name: "SaaS & startups",
    body: "MVPs, dashboards, and GTM sites that help you raise and convert.",
    image: UNSPLASH_IT.startup,
    imageAlt: "Startup team in modern office",
  },
  {
    name: "E-commerce & D2C",
    body: "High-performance storefronts, CRO, and retention marketing.",
    image: UNSPLASH_IT.analytics,
    imageAlt: "E-commerce growth and analytics",
  },
  {
    name: "Healthcare & services",
    body: "Accessible UX, compliance-aware builds, and patient-friendly flows.",
    image: UNSPLASH_IT.officeTeam,
    imageAlt: "Professional services team",
  },
  {
    name: "Education & media",
    body: "Content platforms, streaming-ready sites, and community tools.",
    image: UNSPLASH_IT.remoteTeam,
    imageAlt: "Distributed media and education team",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Infiyoura delivered our marketing site and admin portal in one timeline—design quality felt like a product company, not an agency.",
    name: "Founder",
    role: "B2B SaaS · India",
  },
  {
    quote:
      "Our social and paid campaigns finally match our brand. Clear reporting every week.",
    name: "Marketing lead",
    role: "D2C brand",
  },
] as const;

export const MARKETING_HIGHLIGHTS = [
  "Google & Meta ad management",
  "Conversion-focused landing pages",
  "SEO audits & content plans",
  "Social content & reels",
  "Email & lifecycle flows",
  "Monthly growth reporting",
] as const;
