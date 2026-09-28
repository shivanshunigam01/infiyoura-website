import type { MetadataRoute } from "next";
import { FAVICON_PATH, SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.title,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    lang: "en-IN",
    orientation: "portrait-primary",
    categories: ["business", "productivity"],
    icons: [
      {
        src: FAVICON_PATH,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: FAVICON_PATH,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
