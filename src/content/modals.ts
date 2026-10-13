import type { CallTopic, CallWindow, ConsultationTopic, Option } from "@/types";
import { products } from "./products";
import { site } from "./site";

// Shared modal UI labels.
export const modalUi = {
  close: "Close",
  back: "Back",
  continue: "Continue",
  done: "Done",
};

// ---------- Request a call ----------

export const callTopics: Option<CallTopic>[] = [
  { value: "new-quote", label: "New Quote" },
  // TODO(design): only "New Quote" is visible in the design; the rest are assumptions.
  { value: "reorder", label: "Reorder" },
  { value: "order-status", label: "Order status" },
  { value: "artwork", label: "Artwork or specs" },
  { value: "other", label: "Something else" },
];

export const callWindows: (Option<CallWindow> & { sentence: string })[] = [
  { value: "within-hour", label: "Within the hour", sentence: "within the hour" },
  { value: "morning", label: "Morning (9 AM to 12 PM)", sentence: "in the morning, 9 AM to 12 PM" },
  { value: "afternoon", label: "Afternoon (12 PM to 4 PM)", sentence: "in the afternoon, 12 PM to 4 PM" },
];

export const requestCallModal = {
  title: "Request a call",
  description: "Leave your number and a print specialist will call you back.",
  details: {
    name: { label: "Name", autoComplete: "name" },
    phone: { label: "Phone", placeholder: "+1 310 000 0000", autoComplete: "tel" },
    topic: { label: "What is it about?" },
    error: "Add your name and a valid phone number.",
  },
  time: {
    subtitle: "Best time to reach you (Pacific Time)?",
    submit: "Request call",
  },
  failure: `We couldn't send that. Please try again or call ${site.phone.display}.`,
  success: {
    title: "We will call you",
    // "Call-back to {phone}"
    phonePrefix: "Call-back to",
    // "{window sentence} (Pacific Time)."
    windowSuffix: "(Pacific Time).",
    note: `Calls placed after ${site.cutoff.long} are returned the next business day.`,
  },
};

// ---------- Free consultation ----------

export const consultationTopics: Option<ConsultationTopic>[] = [
  { value: "repeat-ordering", label: "Set up repeat ordering" },
  { value: "quote", label: "Get a quote for a specific product" },
  { value: "team-account", label: "Move my team to one account" },
  { value: "other", label: "Something else" },
];

export const consultationProducts: Option[] = [
  ...products.map((p) => ({ value: p.slug, label: p.title })),
  { value: "not-sure", label: "Not sure yet" },
];

/** Fixed consultation start times, Pacific Time (24h "HH:MM"). */
export const consultationTimes = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"];

export const consultationModal = {
  title: "Free consultation",
  description: "Book a free 20-minute call with a print specialist.",
  topic: { subtitle: "What do you want to talk about?" },
  details: {
    name: { label: "Name", autoComplete: "name", error: "Add your name" },
    email: { label: "Work email", autoComplete: "email", error: "Add a valid work email" },
    business: { label: "Business name", autoComplete: "organization", error: "Add your business name" },
    product: { label: "Products you print", error: "Choose a product" },
  },
  time: {
    subtitle: "Pick a time (Pacific Time).",
    datesLabel: "Date",
    timesLabel: "Time",
    loading: "Loading available times…",
    // TODO(design): slot loading/error states aren't in the design.
    error: `We couldn't load available times. Please try again or call ${site.phone.display}.`,
  },
  review: {
    subtitle: "Review and confirm.",
    note: { label: "Anything we should know? (optional)", placeholder: "Add a note for the specialist…" },
    submit: "Confirm booking",
    // "{date} at {time} PT"
    timeJoiner: "at",
    timeZoneLabel: "PT",
  },
  failure: `We couldn't book that. Please try again or call ${site.phone.display}.`,
  success: {
    title: "You are booked",
    // "{date} · {time} PT"
    with: "with a print specialist.",
    prep: "Have a recent order or your print files handy. Nothing else needed.",
  },
};
