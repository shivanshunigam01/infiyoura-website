import type { Metadata } from "next";
import { FAVICON_PATH, LOGO_PATH, SITE } from "@/lib/site";
import {
  GLOBAL_KEYWORDS,
  HOME_KEYWORDS,
  PAGE_SEO,
  SEO_GEO,
  SEO_LOCALE,
  keywordsForPath,
  normalizeSeoPath,
} from "@/lib/seo";

function buildVerification(): Metadata["verification"] {
  const verification: Metadata["verification"] = {};
  if (process.env.GOOGLE_SITE_VERIFICATION) {
    verification.google = process.env.GOOGLE_SITE_VERIFICATION;
  }
  if (process.env.BING_SITE_VERIFICATION) {
    verification.other = {
      ...(verification.other ?? {}),
      "msvalidate.01": process.env.BING_SITE_VERIFICATION,
    };
  }
  if (process.env.YANDEX_VERIFICATION) {
    verification.yandex = process.env.YANDEX_VERIFICATION;
  }
  return Object.keys(verification).length ? verification : undefined;
}

const DEFAULT_ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

function sharedOpenGraph({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}): Metadata["openGraph"] {
  return {
    title,
    description,
    url,
    siteName: SITE.name,
    type: "website",
    locale: SEO_LOCALE,
    images: [
      {
        url: LOGO_PATH,
        alt: SITE.tagline,
        width: 1200,
        height: 630,
      },
    ],
  };
}

function sharedTwitter({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [LOGO_PATH],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || undefined,
    site: process.env.NEXT_PUBLIC_TWITTER_SITE || undefined,
  };
}

/** Root layout defaults — home + global SEO. */
export function rootMetadata(): Metadata {
  const description = PAGE_SEO["/"]?.description ?? SITE.description;
  const keywords = [...HOME_KEYWORDS];

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: SITE.title,
      template: `%s | ${SITE.name}`,
    },
    description,
    keywords,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "technology",
    applicationName: SITE.name,
    referrer: "origin-when-cross-origin",
    formatDetection: { email: false, address: false, telephone: false },
    robots: DEFAULT_ROBOTS,
    icons: {
      icon: [
        { url: FAVICON_PATH, type: "image/png" },
        { url: FAVICON_PATH, sizes: "32x32", type: "image/png" },
        { url: FAVICON_PATH, sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: FAVICON_PATH, type: "image/png" }],
      shortcut: FAVICON_PATH,
    },
    openGraph: sharedOpenGraph({
      title: SITE.title,
      description,
      url: SITE.url,
    }),
    twitter: sharedTwitter({ title: SITE.title, description }),
    alternates: {
      canonical: SITE.url,
    },
    other: {
      "geo.region": SEO_GEO.region,
      "geo.placename": SEO_GEO.placename,
      "geo.position": SEO_GEO.position,
      ICBM: SEO_GEO.position.replace(";", ", "),
    },
    verification: buildVerification(),
  };
}

export function pageMetadata({
  title,
  description,
  path = "",
  keywords,
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const normalized = normalizeSeoPath(path);
  const pageSeo = PAGE_SEO[normalized];
  const desc = description ?? pageSeo?.description ?? SITE.description;
  const url = `${SITE.url}${normalized === "/" ? "" : normalized}`;
  const ogTitle = title === SITE.name ? SITE.title : `${title} | ${SITE.name}`;
  const keywordList = keywords ?? keywordsForPath(normalized);

  return {
    title,
    description: desc,
    keywords: keywordList.length ? keywordList : [...GLOBAL_KEYWORDS],
    robots: DEFAULT_ROBOTS,
    openGraph: sharedOpenGraph({ title: ogTitle, description: desc, url }),
    twitter: sharedTwitter({ title: ogTitle, description: desc }),
    alternates: { canonical: url },
  };
}
