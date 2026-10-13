"use server";

/*
 * Server Actions behind the three forms. They run on the server (Vercel), validate the input
 * with the same zod schemas as the forms, and email the owner (+ the customer) via Resend.
 * Without RESEND_API_KEY they only log the submission, so local development works offline.
 */

import { emailCopy } from "@/content/emails";
import { callTopics, callWindows, consultationModal, consultationProducts, consultationTopics } from "@/content/modals";
import { site } from "@/content/site";
import { formatPacificDate, formatPacificTime } from "@/lib/date";
import { buildIcs } from "@/lib/email/ics";
import { emailEnabled, sendEmail, type EmailMessage } from "@/lib/email/resend";
import { customerEmail, ownerEmail } from "@/lib/email/templates";
import { callbackSchema, consultationSchema, contactSchema } from "@/lib/validation/schemas";
import type { ApiResult } from "@/types";

const ownerAddress = process.env.EMAIL_TO ?? site.email;
const L = emailCopy.owner.labels;
const labelOf = (list: { value: string; label: string }[], value: string) =>
  list.find((item) => item.value === value)?.label ?? value;

/** Sends the owner email (must succeed) and the customer email (best effort). */
async function deliver(
  label: string,
  name: string,
  owner: Omit<EmailMessage, "to">,
  customer?: EmailMessage,
): Promise<ApiResult<{ id: string }>> {
  // Dev-only: submit with the name "fail" to preview the error state.
  if (process.env.NODE_ENV !== "production" && name.trim().toLowerCase() === "fail") {
    return { ok: false, error: "Test failure" };
  }

  if (!emailEnabled) {
    console.info(`[forms] ${label} (RESEND_API_KEY not set — not emailed)\n${owner.text}`);
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { ok: true, data: { id: crypto.randomUUID() } };
  }

  const sent = await sendEmail({ ...owner, to: ownerAddress });
  if (!sent.ok) {
    console.error(`[forms] ${label}: owner email failed — ${sent.error}`);
    return { ok: false, error: "Email failed" };
  }
  if (customer) {
    const confirmation = await sendEmail(customer);
    // The request reached the owner, so don't show the visitor an error for this.
    if (!confirmation.ok) console.error(`[forms] ${label}: confirmation email failed — ${confirmation.error}`);
  }
  return { ok: true, data: { id: sent.id } };
}

/** Bots fill the hidden honeypot field; pretend it worked and send nothing. */
const botResult = (): ApiResult<{ id: string }> => ({ ok: true, data: { id: "ignored" } });

export async function submitCallback(input: unknown): Promise<ApiResult<{ id: string }>> {
  const parsed = callbackSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "Invalid input" };
  const v = parsed.data;
  if (v.company_website) return botResult();

  const owner = ownerEmail(emailCopy.owner.callSubject(v.name), emailCopy.owner.callIntro, [
    [L.name, v.name],
    [L.phone, v.phone],
    [L.topic, labelOf(callTopics, v.topic)],
    [L.bestTime, labelOf(callWindows, v.window)],
  ]);
  return deliver("Call request", v.name, owner);
}

export async function submitConsultation(input: unknown): Promise<ApiResult<{ id: string; start: string }>> {
  const parsed = consultationSchema.safeParse(input);
  if (!parsed.success || Number.isNaN(Date.parse(parsed.data.slotStart))) return { ok: false, error: "Invalid input" };
  const v = parsed.data;
  if (v.company_website) return { ok: true, data: { id: "ignored", start: v.slotStart } };

  const date = formatPacificDate(v.slotStart);
  const time = formatPacificTime(v.slotStart);
  const tz = consultationModal.review.timeZoneLabel;
  const c = emailCopy.consultation;

  const owner = {
    ...ownerEmail(emailCopy.owner.consultationSubject(v.name, v.business), emailCopy.owner.consultationIntro, [
      [L.time, `${date} ${consultationModal.review.timeJoiner} ${time} ${tz}`],
      [L.topic, labelOf(consultationTopics, v.topic)],
      [L.name, v.name],
      [L.email, v.email],
      [L.business, v.business],
      [L.product, labelOf(consultationProducts, v.product)],
      [L.note, v.note],
    ]),
    replyTo: v.email,
  };

  const ics = buildIcs({
    uid: `${crypto.randomUUID()}@printwaveusa.com`,
    start: v.slotStart,
    durationMinutes: c.durationMinutes,
    title: c.eventTitle,
    description: c.eventDescription,
    organizerName: site.name,
    organizerEmail: site.email,
  });
  const customer: EmailMessage = {
    ...customerEmail({ subject: c.subject, title: c.heading, highlight: `${date} · ${time} ${tz}`, paragraphs: [c.with, c.prep, c.change] }),
    to: v.email,
    replyTo: site.email,
    attachments: [{ filename: c.calendarFile, content: Buffer.from(ics).toString("base64") }],
  };

  const result = await deliver("Consultation", v.name, owner, customer);
  return result.ok ? { ok: true, data: { id: result.data.id, start: v.slotStart } } : result;
}

export async function submitContact(input: unknown): Promise<ApiResult<{ id: string }>> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "Invalid input" };
  const v = parsed.data;
  if (v.company_website) return botResult();

  const owner = {
    ...ownerEmail(emailCopy.owner.contactSubject(v.name), emailCopy.owner.contactIntro, [
      [L.name, v.name],
      [L.email, v.email],
      [L.message, v.message],
    ]),
    replyTo: v.email,
  };
  const c = emailCopy.contact;
  const customer: EmailMessage = {
    ...customerEmail({ subject: c.subject, title: c.heading, paragraphs: [c.body], quote: { label: c.yourMessage, text: v.message } }),
    to: v.email,
    replyTo: site.email,
  };
  return deliver("Contact message", v.name, owner, customer);
}
