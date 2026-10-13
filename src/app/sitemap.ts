import type { MetadataRoute } from "next";
import { infoPages } from "@/content/info-pages";
import { siteUrl } from "@/lib/seo";

// /sitemap.xml — every public page. Add article URLs here once articles exist.
export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = [
    { path: "", priority: 1 },
    { path: "/how-it-works", priority: 0.9 },
    { path: "/business-in-la", priority: 0.9 },
    { path: "/contact", priority: 0.8 },
    { path: "/articles", priority: 0.6 },
  ];
  return [
    ...mainPages.map(({ path, priority }) => ({ url: `${siteUrl}${path}`, priority })),
    ...infoPages.map((page) => ({ url: `${siteUrl}/${page.slug}`, priority: 0.3 })),
  ];
}
