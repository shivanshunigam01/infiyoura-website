export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Our Works", href: "/our-works" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const HOME_SECTIONS = [
  { label: "Story", href: "/#story" },
  { label: "Services", href: "/#services" },
  { label: "Marketing", href: "/#marketing" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
] as const;

export const SERVICE_GROUPS = [
  {
    title: "BUILD",
    items: [
      "Website Development",
      "Web Applications",
      "Mobile Applications",
      "SaaS Development",
      "E-commerce",
      "Custom Software",
    ],
  },
  {
    title: "DESIGN",
    items: [
      "UI/UX Design",
      "Product Design",
      "Branding",
      "Creative Design",
      "Motion Design",
    ],
  },
  {
    title: "INTELLIGENCE",
    items: [
      "AI Solutions",
      "Automation",
      "CRM",
      "API Integrations",
      "Data & Analytics",
    ],
  },
  {
    title: "GROW",
    items: [
      "Google Ads",
      "Meta Ads",
      "SEO",
      "Performance Marketing",
      "Social Media Marketing",
    ],
  },
  {
    title: "INFRASTRUCTURE",
    items: ["AWS", "Cloud", "DevOps", "CI/CD", "Security", "Monitoring"],
  },
] as const;

export const PROCESS = [
  { step: "01", title: "DISCOVER" },
  { step: "02", title: "STRATEGIZE" },
  { step: "03", title: "DESIGN" },
  { step: "04", title: "BUILD" },
  { step: "05", title: "LAUNCH" },
  { step: "06", title: "GROW" },
] as const;

export const TECH = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Docker",
  "Three.js",
  "Google Ads",
  "Meta Ads",
  "Analytics",
] as const;

export const CONTACT_SERVICES = [
  "Website",
  "Web Application",
  "Mobile App",
  "SaaS",
  "UI/UX",
  "AI",
  "CRM",
  "Cloud / DevOps",
  "Google Ads",
  "Meta Ads",
  "SEO",
  "Branding",
  "Other",
] as const;

export const STORY_OVERLAYS = [
  {
    start: 0,
    end: 0.18,
    title: "YOUR IDEA",
    body: "Every great digital experience starts with an idea.",
  },
  {
    start: 0.18,
    end: 0.42,
    title: "WE BUILD IT",
    body: "Design, technology and engineering turn ideas into reality.",
  },
  {
    start: 0.42,
    end: 0.58,
    title: "PEOPLE EXPERIENCE IT",
    body: "Beautiful digital experiences connect businesses with their customers.",
  },
  {
    start: 0.58,
    end: 1,
    title: "BUSINESS GROWS",
    body: "Technology creates new opportunities, customers and connections.",
  },
] as const;
