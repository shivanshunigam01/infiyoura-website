import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { allSitemapEntries } from "@/lib/sitemap-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const lastModified = new Date();

  return allSitemapEntries().map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
