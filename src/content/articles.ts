import type { PageHeroContent, PageMeta } from "@/types";

const lead = "Guides on specs, approvals and reordering. New articles coming soon.";

export const articlesMeta: PageMeta = { title: "Articles", description: lead };

// TODO(design): no Articles design exists yet; this is a placeholder.
export const articlesHero: PageHeroContent = {
  eyebrow: "Articles",
  titleStart: "Print tips for ",
  titleGradient: "repeat business.",
  lead,
};

export const articlesPage = {
  empty: "No articles yet. Check back soon.",
  backLabel: "All articles",
};
