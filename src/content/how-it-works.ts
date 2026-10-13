import type { PageHeroContent, PageMeta, Step } from "@/types";
import { site } from "./site";

const lead =
  "Start with a quote request. We build your account, lock your specs, and every reorder after that skips the email thread.";

export const howItWorksMeta: PageMeta = { title: "How it works", description: lead };

export const howItWorksHero: PageHeroContent = {
  eyebrow: "How it works",
  titleStart: "Set up once.",
  titleGradient: "Reorder in one click.",
  gradientOnNewLine: true,
  lead,
  cta: { label: "Free consultation", modal: "consultation" },
};

export const howItWorksSteps: { title: string; steps: Step[] } = {
  title: "From first quote to one-click reorder",
  steps: [
    {
      title: "Pick a product and quantity",
      body: "Choose from standardized business print categories. Quantity tiers are shown up front.",
    },
    {
      title: "Send your quote request",
      body: "No account needed to start. We confirm specs and send back a firm price and delivery date.",
    },
    {
      title: "We set up your account",
      body: "Approved artwork, specs, delivery locations and approval rules are saved as Business Memory.",
    },
    {
      title: "Reorder without starting over",
      body: `Check out instantly on fixed-price products. Orders before ${site.cutoff.long} count as day zero.`,
    },
  ],
};

export const memoryPanel: {
  title: string;
  subtitle: string;
  items: { word: string; title: string; body: string }[];
} = {
  title: "What Business Memory keeps",
  subtitle: "Your team should never re-explain a decision.",
  items: [
    { word: "Approved", title: "Approved products", body: "Firm price and delivery date" },
    { word: "Artwork", title: "Artwork templates", body: "Ready to reuse" },
    { word: "Delivery", title: "Delivery locations", body: "Saved to your account" },
    { word: "Approval", title: "Approval rules", body: "Right person signs off" },
  ],
};

export const howItWorksFaq = { title: "Common questions" };
