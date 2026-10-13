/*
 * Sends email through Resend's HTTP API (https://resend.com/docs/api-reference/emails/send-email).
 * Server-only: RESEND_API_KEY has no NEXT_PUBLIC_ prefix, so it never reaches the browser.
 */

export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  attachments?: { filename: string; content: string /* base64 */ }[];
}

/** True when a Resend key is configured; otherwise forms run in "log only" mode. */
export const emailEnabled = Boolean(process.env.RESEND_API_KEY);

/** Who emails come from, e.g. "Print Wave USA <support@printwaveusa.com>" (domain must be verified in Resend). */
export const emailFrom = process.env.EMAIL_FROM ?? "Print Wave USA <onboarding@resend.dev>";

export async function sendEmail(message: EmailMessage): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: emailFrom,
        to: [message.to],
        subject: message.subject,
        html: message.html,
        text: message.text,
        reply_to: message.replyTo,
        attachments: message.attachments,
      }),
    });
    const data = (await res.json().catch(() => ({}))) as { id?: string; message?: string };
    if (!res.ok || !data.id) return { ok: false, error: data.message ?? `Resend HTTP ${res.status}` };
    return { ok: true, id: data.id };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Network error" };
  }
}
