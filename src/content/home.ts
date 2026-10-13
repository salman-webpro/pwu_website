import type { FeatureItem, IconItem, IconName, IconStat, LinkCta, ModalCta, PageMeta, Stat, Step } from "@/types";
import { site } from "./site";

const lead =
  "Print Wave USA turns repeat business printing into a system. Your files, specs and approvals are set up one time, so every reorder takes a click instead of an email thread.";

export const homeMeta: PageMeta = {
  title: "Print Wave USA — Approve your print once. Reorder it forever.",
  description: lead,
};

export const homeHero: {
  titleLines: { text: string; gradient?: boolean }[];
  lead: string;
  primaryCta: ModalCta;
  secondaryCta: LinkCta;
  note: string;
} = {
  titleLines: [
    { text: "Approve your" },
    { text: "print once." },
    { text: "Reorder", gradient: true },
    { text: "it forever.", gradient: true },
  ],
  lead,
  primaryCta: { label: "Request a quote", modal: "consultation", preset: { topic: "quote" } },
  secondaryCta: { label: "See how it works", href: "/how-it-works" },
  note: "First orders start as a quote request. We set up your account, then you reorder instantly.",
};

export const dashboardMockup: {
  srLabel: string;
  org: { initials: string; name: string };
  nav: { icon: IconName; label: string; active?: boolean }[];
  title: string;
  intro: string;
  alert: string;
  stats: Stat[];
  table: { title: string; rows: { name: string; qty: string }[] };
  badges: {
    reorder: { title: string; body: string };
    proof: { title: string; body: string };
  };
} = {
  srLabel: "Preview of the Print Wave USA client dashboard",
  org: { initials: "HD", name: "Harborview Dental Group" },
  nav: [
    { icon: "LayoutGrid", label: "Dashboard", active: true },
    { icon: "Box", label: "Products" },
    { icon: "ClipboardList", label: "Orders" },
    { icon: "Layers", label: "Business Memory" },
    { icon: "CircleCheck", label: "Approvals" },
    { icon: "BarChart3", label: "Reports" },
  ],
  title: "Dashboard",
  intro: "Business Memory is healthy. Two decisions need your attention today.",
  alert: `Order cutoff in 1h 14m: orders placed before ${site.cutoff.long} count as day zero`,
  stats: [
    { label: "On-time rate", value: "100%" },
    { label: "Orders this week", value: "6" },
  ],
  table: {
    title: "Approved products",
    rows: [
      { name: "Business Cards", qty: "500" },
      { name: "Postcards 6\"×9\"", qty: "1,000" },
      { name: "Bifold Brochure", qty: "250" },
    ],
  },
  badges: {
    reorder: { title: "Reordered in 1 click", body: "Same art, same specs" },
    proof: { title: "Proof approved", body: "Postcards 6\"×9\"" },
  },
};

export const featureStrip: FeatureItem[] = [
  { title: "Firm pricing", body: "Price and delivery date locked once approved" },
  { title: "Artwork saved", body: "Upload once, reuse on every reorder" },
  { title: `${site.cutoff.long} cutoff`, body: "Orders before it count as day zero" },
  { title: "Quote to checkout", body: "One account for quotes and instant orders" },
];

export const homeSteps: { title: string; subtitle: string; steps: Step[] } = {
  title: "Request in three clicks. We handle the setup.",
  subtitle:
    "No account needed to start. Tell us what you print and how many, and a print specialist takes it from there.",
  steps: [
    {
      title: "Pick a product and quantity",
      body: "Choose from standardized business print categories. Quantity tiers are shown up front.",
    },
    {
      title: "Send your quote request",
      body: "We review it, confirm specs, and send back a firm price and delivery date.",
    },
    {
      title: "Reorder without starting over",
      body: "Your approved artwork and specs are saved in your account. Check out instantly on fixed-price products.",
    },
  ],
};

export const homeProducts = {
  title: "Standardized print for repeat business use",
  subtitle: "Built for work you order again and again, not one-off jobs.",
};

export const businessMemoryBand: { title: string; subtitle: string; stats: Stat[] } = {
  title: "Business Memory keeps every decision you've made",
  subtitle:
    "Approved once, ordered forever. Your account keeps the details your team shouldn't have to re-explain.",
  stats: [
    { value: "14", label: "Approved products with firm price and delivery date" },
    { value: "9", label: "Artwork templates, ready to reuse" },
    { value: "4", label: "Delivery locations saved to your account" },
    { value: "2", label: "Approval rules so the right person signs off" },
  ],
};

export const whyPrintWave: {
  eyebrow: string;
  title: string;
  subtitle: string;
  without: { title: string; items: IconItem[]; footer: string };
  with: { title: string; items: IconItem[]; highlight: string; script: string };
  stats: IconStat[];
} = {
  eyebrow: "Why Print Wave USA",
  title: "Printing shouldn't feel like starting over",
  subtitle: "Most print orders repeat. Your process shouldn't.",
  without: {
    title: "Without a system",
    items: [
      { icon: "File", label: "Resending files every time" },
      { icon: "Mail", label: "Back-and-forth emails slowing every order" },
      { icon: "Repeat", label: "Reconfirming specs you already approved" },
    ],
    footer: "Every order starts from zero.",
  },
  with: {
    title: "With Print Wave USA",
    items: [
      { icon: "Layers", label: "Built once, reordered without friction" },
      { icon: "CircleCheck", label: "Same specs, same output, every time" },
      { icon: "Zap", label: "Your team focuses on work, not print logistics" },
    ],
    highlight: "One click.",
    script: "that's the whole reorder!",
  },
  stats: [
    { icon: "RefreshCw", value: "1 click", label: "to reorder an approved product" },
    { icon: "Upload", value: "0 files", label: "re-sent once your account is set up" },
    { icon: "Clock", value: site.cutoff.long, label: "order cutoff for day-zero production" },
  ],
};
