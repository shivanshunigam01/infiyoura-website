import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

const base = SITE.url.replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  const sitemap = absoluteUrl("/sitemap.xml");
  const allowAll = { userAgent: "*", allow: "/", disallow: ["/api/"] as string[] };

  return {
    rules: [
      allowAll,
      { userAgent: "Googlebot", allow: "/", disallow: ["/api/"] },
      { userAgent: "Googlebot-Image", allow: "/", disallow: ["/api/"] },
      { userAgent: "Bingbot", allow: "/", disallow: ["/api/"] },
    ],
    host: base,
    sitemap: [sitemap, absoluteUrl("/rss.xml")],
  };
}
