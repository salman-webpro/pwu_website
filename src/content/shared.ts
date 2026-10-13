import type { CtaPanelContent } from "@/types";

// "Not sure where to start?" panel, shared by Home, How it works, Business in LA and Articles.
export const ctaPanel: CtaPanelContent = {
  title: "Not sure where to start?",
  body: "A print specialist will set up your first quote.",
  primary: { label: "Free consultation", modal: "consultation" },
  secondary: { label: "Request a call", modal: "call" },
};
