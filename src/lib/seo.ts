import { SITE, SITE_ADDRESS_LINES, LOGO_PATH } from "@/lib/site";

/** Primary keyword themes — merged into page-level metadata. */
export const GLOBAL_KEYWORDS = [
  "Infiyoura",
  "digital agency",
  "software development company",
  "web development",
  "website development",
  "web application development",
  "mobile app development",
  "UI UX design",
  "digital marketing agency",
  "social media marketing",
  "SEO services",
  "search engine optimization",
  "Google Ads",
  "Meta Ads",
  "branding agency",
  "technology partner",
  "custom software",
  "Next.js development",
  "React development",
  "AI solutions",
  "business automation",
  "cloud DevOps",
  "Ahmedabad",
  "Gujarat",
  "India",
  "global digital studio",
] as const;

export const HOME_KEYWORDS = [
  ...GLOBAL_KEYWORDS,
  "premium website design",
  "startup technology partner",
  "B2B web agency",
  "ecommerce development",
  "SaaS development",
  "landing page design",
  "Core Web Vitals optimization",
  "YOUR IDEAS OUR TECHNOLOGY",
] as const;

export const PAGE_SEO: Record<
  string,
  { keywords: readonly string[]; description?: string }
> = {
  "/": {
    keywords: HOME_KEYWORDS,
    description:
      "Infiyoura is a premium digital studio for website development, web & mobile apps, UI/UX, SEO, social media, and performance marketing—serving brands in Ahmedabad, India, and worldwide.",
  },
  "/about": {
    keywords: [
      ...GLOBAL_KEYWORDS,
      "about Infiyoura",
      "digital agency team",
      "Jeckvelin Mecwan",
      "founder",
      "technology company Ahmedabad",
    ],
    description:
      "Meet Infiyoura—founder-led digital studio building websites, apps, and growth systems for ambitious brands from Ahmedabad to global markets.",
  },
  "/services": {
    keywords: [
      ...GLOBAL_KEYWORDS,
      "digital services",
      "agency services list",
      "hire web developers India",
      "outsourced development",
    ],
    description:
      "Explore Infiyoura services: websites, web apps, mobile apps, UI/UX, SEO, social media, paid ads, AI automation, and cloud DevOps.",
  },
  "/work": {
    keywords: [
      ...GLOBAL_KEYWORDS,
      "portfolio",
      "case studies",
      "client projects",
      "web design portfolio",
      "app development portfolio",
    ],
    description:
      "See how Infiyoura helps brands grow with websites, applications, and integrated digital marketing—selected work and outcomes.",
  },
  "/our-works": {
    keywords: [
      ...GLOBAL_KEYWORDS,
      "our works",
      "client portfolio",
      "live projects",
      "website portfolio India",
      "production websites",
    ],
    description:
      "Explore Infiyoura's live client projects—automotive, healthcare, finance, travel, SaaS, and enterprise platforms with previews and tech stacks.",
  },
  "/contact": {
    keywords: [
      ...GLOBAL_KEYWORDS,
      "contact digital agency",
      "get a quote website",
      "hire Infiyoura",
      "web development quote Ahmedabad",
      "project inquiry",
    ],
    description:
      "Contact Infiyoura for website development, apps, SEO, and marketing. Based in Ahmedabad, India—serving clients worldwide. infiyoura@gmail.com",
  },
  "/careers": {
    keywords: [
      ...GLOBAL_KEYWORDS,
      "careers",
      "jobs",
      "developer jobs Ahmedabad",
      "designer jobs",
      "marketing jobs",
      "join digital agency",
    ],
    description:
      "Careers at Infiyoura—developers, designers, and marketers building premium digital products for global clients.",
  },
  "/blog": {
    keywords: [
      ...GLOBAL_KEYWORDS,
      "digital marketing blog",
      "web development insights",
      "SEO tips",
      "technology blog India",
    ],
    description:
      "Insights from Infiyoura on web development, apps, SEO, social media, and digital growth for modern businesses.",
  },
  "/privacy": {
    keywords: ["Infiyoura privacy policy", "data protection", "website privacy"],
    description: "Infiyoura Privacy Policy—how we collect, use, and protect your information.",
  },
  "/terms": {
    keywords: ["Infiyoura terms of service", "website terms", "service agreement"],
    description: "Infiyoura Terms of Service—terms governing use of our website and digital services.",
  },
  "/cookies": {
    keywords: ["cookie policy", "Infiyoura cookies", "website cookies"],
    description: "Infiyoura Cookie Policy—how we use cookies and similar technologies.",
  },
};

const SERVICE_KEYWORD_MAP: Record<string, readonly string[]> = {
  "website-development": [
    "website development company",
    "corporate website",
    "Next.js website",
    "landing page development",
    "responsive web design",
  ],
  "web-applications": [
    "web application development",
    "SaaS development",
    "custom web app",
    "dashboard development",
    "API development",
  ],
  "mobile-apps": [
    "mobile app development",
    "iOS app development",
    "Android app development",
    "React Native",
    "app development India",
  ],
  "ui-ux-design": [
    "UI UX design agency",
    "product design",
    "wireframing",
    "design system",
    "Figma design",
  ],
  "digital-marketing": [
    "digital marketing agency",
    "performance marketing",
    "PPC agency",
    "lead generation",
    "conversion optimization",
  ],
  "social-media": [
    "social media marketing",
    "Instagram marketing",
    "LinkedIn marketing",
    "content creation agency",
    "social media management",
  ],
  seo: [
    "SEO agency",
    "technical SEO",
    "on-page SEO",
    "local SEO Ahmedabad",
    "SEO company India",
  ],
  "ai-automation": [
    "AI development",
    "chatbot development",
    "workflow automation",
    "CRM automation",
    "business AI solutions",
  ],
  "cloud-devops": [
    "cloud DevOps",
    "AWS deployment",
    "CI/CD",
    "infrastructure as code",
    "managed cloud",
  ],
};

export function serviceSeoKeywords(slug: string): string[] {
  const specific = SERVICE_KEYWORD_MAP[slug] ?? [];
  return [...new Set([...GLOBAL_KEYWORDS, ...specific, slug.replace(/-/g, " ")])];
}

export function normalizeSeoPath(path: string): string {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path.replace(/\/$/, "") || "/" : `/${path.replace(/\/$/, "")}`;
}

export function keywordsForPath(path: string, extra?: string[]): string[] {
  const key = normalizeSeoPath(path);
  const base = PAGE_SEO[key]?.keywords ?? GLOBAL_KEYWORDS;
  return [...new Set([...base, ...(extra ?? [])])];
}

export const SEO_LOCALE = "en_IN";

export const SEO_GEO = {
  region: "IN-GJ",
  placename: "Ahmedabad, Gujarat, India",
  position: "23.0225;72.5714",
} as const;

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${p === "/" ? "" : p}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: absoluteUrl(LOGO_PATH),
    email: SITE.email,
    slogan: SITE.tagline,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
      addressLocality: "Ahmedabad",
      postalCode: "380009",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    areaServed: ["IN", "US", "GB", "AE", "Worldwide"],
    sameAs: [] as string[],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    image: absoluteUrl(LOGO_PATH),
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneTel,
    description: SITE.description,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_ADDRESS_LINES.slice(0, 2).join(", "),
      addressLocality: "Ahmedabad",
      postalCode: "380009",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.0225,
      longitude: 72.5714,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital services",
      itemListElement: [
        "Website Development",
        "Web Applications",
        "Mobile Apps",
        "UI/UX Design",
        "SEO",
        "Social Media Marketing",
        "Digital Marketing",
        "AI & Automation",
        "Cloud & DevOps",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-IN",
  };
}

export function portfolioItemListJsonLd(
  items: { name: string; url: string; description: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Infiyoura client projects",
    description: "Selected production websites and platforms delivered by Infiyoura.",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: item.name,
        url: item.url,
        description: item.description,
        creator: { "@id": `${SITE.url}/#organization` },
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(slug: string, title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: "Worldwide",
    url: absoluteUrl(`/services/${slug}`),
  };
}
