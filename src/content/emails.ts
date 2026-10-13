import { consultationModal } from "./modals";
import { contactForm } from "./contact";
import { site } from "./site";

// Text for the emails sent when a form is submitted (see src/lib/email/templates.ts).

export const emailCopy = {
  footer: `${site.name} · ${site.phone.display} · ${site.email}`,

  // ---------- To the owner ----------
  owner: {
    callSubject: (name: string) => `New call-back request: ${name}`,
    callIntro: "Someone asked for a call back from the website.",
    consultationSubject: (name: string, business: string) => `New consultation booked: ${name}, ${business}`,
    consultationIntro: "A free consultation was booked on the website. Reply to this email to reach the customer.",
    contactSubject: (name: string) => `New message from ${name}`,
    contactIntro: "Someone sent a note from the Contact page. Reply to this email to answer them.",
    labels: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      business: "Business",
      topic: "Topic",
      product: "Product",
      time: "Time",
      bestTime: "Best time (PT)",
      note: "Note",
      message: "Message",
    },
  },

  // ---------- To the customer ----------
  consultation: {
    subject: `You're booked: free consultation with ${site.name}`,
    heading: consultationModal.success.title,
    with: consultationModal.success.with,
    prep: consultationModal.success.prep,
    change: `Need a different time? Reply to this email or call ${site.phone.display}.`,
    calendarFile: "print-wave-consultation.ics",
    eventTitle: `Free consultation with ${site.name}`,
    eventDescription: "A 20-minute walkthrough of your products and setup with a print specialist.",
    durationMinutes: 20,
  },
  contact: {
    subject: `We got your note — ${site.name}`,
    heading: contactForm.success.title,
    body: contactForm.success.body,
    yourMessage: "Your message",
  },

  // Shown only to bots (hidden field). Real visitors never see it.
  honeypotLabel: "Leave this field empty",
};
