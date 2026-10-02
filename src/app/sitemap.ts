import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICE_PAGES } from "@/lib/marketing-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticPaths = [
    "",
    "/about",
    "/services",
    "/work",
    "/our-works",
    "/contact",
    "/careers",
    "/blog",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  const now = new Date();

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
    ...SERVICE_PAGES.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
