import type { Faq } from "@/types";
import { site } from "./site";

// Shown on How it works and reused on /faqs.
export const faqs: Faq[] = [
  {
    q: "Do I need an account first?",
    a: "No. First orders start as a quote request. We set up your account after.",
  },
  {
    q: "What is the cutoff?",
    a: `Orders placed before ${site.cutoff.long} count as day zero for production.`,
  },
  {
    q: "What if my specs change?",
    a: "Tell us. We update the saved spec and re-confirm price and date.",
  },
];
