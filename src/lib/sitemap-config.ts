import type { MetadataRoute } from "next";
import { SERVICE_PAGES } from "@/lib/marketing-pages";

export type SitemapEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/** Marketing and legal pages included in /sitemap.xml */
export const STATIC_SITEMAP_ROUTES: readonly SitemapEntry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.85 },
  { path: "/services", changeFrequency: "weekly", priority: 0.95 },
  { path: "/work", changeFrequency: "monthly", priority: 0.8 },
  { path: "/our-works", changeFrequency: "weekly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.65 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.75 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
] as const;

export const SERVICE_SITEMAP_ROUTES: readonly SitemapEntry[] = SERVICE_PAGES.map((s) => ({
  path: `/services/${s.slug}`,
  changeFrequency: "monthly" as const,
  priority: 0.88,
}));

export const ALL_PUBLIC_PATHS: readonly string[] = [
  ...STATIC_SITEMAP_ROUTES.map((r) => (r.path === "" ? "/" : r.path)),
  ...SERVICE_SITEMAP_ROUTES.map((r) => r.path),
];

export function allSitemapEntries(): SitemapEntry[] {
  return [...STATIC_SITEMAP_ROUTES, ...SERVICE_SITEMAP_ROUTES];
}
