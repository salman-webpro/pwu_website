import type { ModalCta, PageHeroContent, PageMeta } from "@/types";
import { site } from "./site";

const lead = `Pick whichever way suits you. Orders placed before ${site.cutoff.long} count as day zero.`;

export const contactMeta: PageMeta = { title: "Contact", description: lead };

export const contactHero: PageHeroContent = {
  eyebrow: "Contact",
  titleStart: "Talk to a ",
  titleGradient: "print specialist.",
  lead,
};

export const contactOptions: {
  consultation: { title: string; body: string; cta: ModalCta };
  call: { title: string; body: string; cta: ModalCta };
  direct: { title: string; phone: typeof site.phone; email: string };
} = {
  consultation: {
    title: "Free consultation",
    body: "A 20-minute walkthrough of your products and setup.",
    cta: { label: "Book now", modal: "consultation" },
  },
  call: {
    title: "Request a call",
    body: "Leave your number and we will call you back.",
    cta: { label: "Request a call", modal: "call" },
  },
  direct: { title: "Phone and email", phone: site.phone, email: site.email },
};

export const contactForm = {
  title: "Send a note",
  fields: {
    name: { label: "Name", autoComplete: "name" },
    email: { label: "Email", autoComplete: "email" },
    message: { label: "Message" },
  },
  submit: "Send message",
  errors: {
    name: "Add your name",
    email: "Add a valid email",
    message: "Add a message of at least 10 characters",
  },
  // TODO(design): success copy isn't in the design.
  success: {
    title: "Thanks, we got your note.",
    body: "A print specialist will reply within one business day.",
  },
  failure: `Something went wrong. Please email ${site.email}.`,
};
