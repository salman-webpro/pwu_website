import type { Metadata } from "next";
import { site } from "@/content/site";
import type { PageMeta } from "@/types";

/** Public site URL (set NEXT_PUBLIC_SITE_URL on Vercel). */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

/**
 * Per-page metadata: title, description, canonical URL and social-share text.
 * `absoluteTitle` skips the "| Print Wave USA" suffix (Home).
 */
export function pageMetadata(meta: PageMeta, path: string, { absoluteTitle = false } = {}): Metadata {
  return {
    title: absoluteTitle ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: { canonical: path },
    openGraph: { title: meta.title, description: meta.description, url: path },
  };
}

/** schema.org LocalBusiness data, rendered as JSON-LD in the root layout. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: siteUrl,
    logo: `${siteUrl}${site.logo.src}`,
    telephone: site.phone.display,
    email: site.email,
    areaServed: site.areaServed,
  };
}
