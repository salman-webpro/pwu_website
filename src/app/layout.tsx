import type { Metadata } from "next";
import { Inter, Mrs_Saint_Delafield } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ModalProvider } from "@/components/modals/ModalProvider";
import { site } from "@/content/site";
import { localBusinessJsonLd, siteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// TODO(design): stand-in for the handwritten accent font — confirm the real name in Figma.
const scriptAccent = Mrs_Saint_Delafield({
  variable: "--font-script-accent",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false, // only used once, on Home
});

// Pages set their own title; it's shown as "<page> | Print Wave USA".
// The share image and tab icon come from app/opengraph-image.tsx and app/icon.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${scriptAccent.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          // Business details for search engines (schema.org LocalBusiness).
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()).replace(/</g, "\\u003c") }}
        />
        <ModalProvider>
          <a
            href="#main"
            className="sr-only z-50 rounded-pill bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
          >
            {site.skipLink}
          </a>
          <Header />
          <main id="main" className="flex-1 overflow-x-clip">
            {children}
          </main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
