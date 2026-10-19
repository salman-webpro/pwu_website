import type { ModalCta, NavLink } from "@/types";
import { site } from "./site";

export const header: {
  links: NavLink[];
  cta: ModalCta;
  navLabel: string;
  menuLabel: string;
  closeMenuLabel: string;
} = {
  navLabel: "Main",
  links: [
    { label: "How it works", href: "/how-it-works" },
    { label: "Business in LA", href: "/business-in-la" },
    { label: "Articles", href: "/articles" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Free consultation", modal: "consultation" },
  menuLabel: "Open menu",
  closeMenuLabel: "Close menu",
};

export const footer = {
  tagline: site.tagline,
  information: {
    title: "Information",
    links: [
      { label: "About us", href: "/about" },
      { label: "FAQs", href: "/faqs" },
      { label: "Shipping info", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Accessibility", href: "/accessibility" },
    ] satisfies NavLink[],
  },
  menu: {
    title: "Menu",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Products", href: "/#products" },
      { label: "Business Memory", href: "/how-it-works#business-memory" },
    ] satisfies NavLink[],
  },
  support: { title: "Customer support", phone: site.phone },
  cta: { label: "Request a call", modal: "call" } satisfies ModalCta,
  contact: { phone: site.phone, email: site.email },
  cutoff: { value: site.cutoff.short, label: ["Order cutoff", "for day-zero", "production"] },
  bottom: {
    title: "Don't see your product, or have questions?",
    body: "Send us a note and a print specialist will get back to you.",
    emailLabel: "Email us",
    email: site.email,
  },
  // Year is added at render time: "© {year} {legal}".
  copyright: { legalName: site.legalName, suffix: "All rights reserved." },
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Usage", href: "/terms" },
  ] satisfies NavLink[],
};
