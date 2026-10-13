import type { Metadata } from "next";
import { Inter, Mrs_Saint_Delafield } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ModalProvider } from "@/components/modals/ModalProvider";
import { site } from "@/content/site";
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
});

// Pages set their own title; it's shown as "<page> | Print Wave USA". Expanded in T4.3 (SEO).
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${scriptAccent.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
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
