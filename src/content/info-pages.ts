import type { InfoPage } from "@/types";
import { privacyPage, termsPage } from "./legal";

// Placeholder pages behind the footer links, rendered by src/app/(info)/[slug]/page.tsx.
// TODO(content): replace "Content coming soon." with real copy.
const comingSoon = ["Content coming soon."];

export const infoPages: InfoPage[] = [
  { slug: "about", eyebrow: "About us", title: "About Print Wave USA", description: "About Print Wave USA.", body: comingSoon },
  { slug: "faqs", eyebrow: "FAQs", title: "Frequently asked questions", description: "Answers to common questions about ordering with Print Wave USA.", body: [], showFaqs: true },
  { slug: "shipping", eyebrow: "Shipping info", title: "Shipping information", description: "How Print Wave USA ships your orders.", body: comingSoon },
  { slug: "returns", eyebrow: "Returns", title: "Returns", description: "Print Wave USA returns policy.", body: comingSoon },
  { slug: "accessibility", eyebrow: "Accessibility", title: "Accessibility", description: "Our commitment to an accessible website.", body: comingSoon },
  privacyPage,
  termsPage,
];

export function getInfoPage(slug: string): InfoPage | undefined {
  return infoPages.find((page) => page.slug === slug);
}

export const notFoundPage = {
  eyebrow: "404",
  title: "Page not found",
  lead: "The page you're looking for doesn't exist or has moved.",
  cta: { label: "Back to home", href: "/" },
};
