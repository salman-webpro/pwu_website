import { z } from "zod";

/*
 * Validation rules for every form, shared with the future backend.
 * Kept framework-free and message-free: forms map a failing field to the
 * user-facing message from src/content, so copy stays in one place.
 */

/** Keeps only digits; "+1 (310) 000-0000" → "13100000000". */
export function phoneDigits(value: string) {
  return value.replace(/\D/g, "");
}

/** A US number: 10 digits, optionally preceded by a country code 1. */
export function isValidUsPhone(value: string) {
  const digits = phoneDigits(value);
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

/**
 * Hidden "honeypot" field present on every form. People never see it; bots that fill
 * every input do — submissions with it filled are silently dropped on the server.
 */
export const HONEYPOT = "company_website";
const honeypot = { company_website: z.string().optional() };

export const contactSchema = z.object({
  ...honeypot,
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  message: z.string().trim().min(10),
});

export const callbackSchema = z.object({
  ...honeypot,
  name: z.string().trim().min(1),
  phone: z.string().refine(isValidUsPhone),
  topic: z.enum(["new-quote", "reorder", "order-status", "artwork", "other"]),
  window: z.enum(["within-hour", "morning", "afternoon"]),
});

export const consultationSchema = z.object({
  ...honeypot,
  topic: z.enum(["repeat-ordering", "quote", "team-account", "other"]),
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  business: z.string().trim().min(1),
  product: z.string().min(1),
  slotStart: z.string().min(1),
  note: z.string().trim().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type CallbackInput = z.infer<typeof callbackSchema>;
export type ConsultationInput = z.infer<typeof consultationSchema>;
