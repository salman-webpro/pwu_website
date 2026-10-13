import type { FeatureItem, ModalCta, PageHeroContent, PageMeta } from "@/types";
import { site } from "./site";

const lead =
  "Clinics, restaurants, studios, agencies and property teams across LA reorder the same print again and again. We make that a single click.";

export const businessInLaMeta: PageMeta = { title: "Business in LA", description: lead };

export const businessInLaHero: PageHeroContent = {
  eyebrow: "Business in LA",
  titleStart: "Print for ",
  titleGradient: "Los Angeles",
  titleEnd: " businesses.",
  lead,
  cta: { label: "Book a free LA consultation", modal: "consultation" },
};

export const laFeatures: { title: string; items: FeatureItem[] } = {
  title: "Built for how LA teams work",
  items: [
    {
      title: "Multi-location delivery",
      body: "Save every office, clinic or storefront as a delivery location and ship to any of them on reorder.",
    },
    {
      title: "Consistent branding",
      body: "One approved version of every card, flyer and menu, so every location prints the same thing.",
    },
    {
      title: "West Coast timing",
      body: `The ${site.cutoff.long} cutoff is ${site.cutoff.pacific}. We remind you before it passes.`,
    },
    {
      title: "Approval rules",
      body: "Let managers reorder routine items and send new artwork to the owner for sign-off.",
    },
  ],
};

export const laChips: { title: string; chips: string[] } = {
  title: "Who we work with",
  chips: [
    "Dental and medical offices",
    "Restaurants and cafes",
    "Salons and studios",
    "Real estate teams",
    "Agencies",
    "Retail and events",
  ],
};

export const laSoftCta: { title: string; body: string; cta: ModalCta } = {
  title: "Typical LA reorder",
  body: "Business cards for 3 locations, flyers for a promotion, and a postcard mailer: approved once, ordered again in minutes.",
  cta: { label: "Request a call", modal: "call" },
};
