import { emailCopy } from "@/content/emails";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/seo";

/*
 * Plain HTML email layouts. Email clients ignore most CSS, so everything is
 * inline styles and tables. Colors mirror the tokens in src/app/globals.css.
 */

const C = { ink: "#151433", copy: "#4D4C65", muted: "#65657A", pink: "#E11D74", border: "#E6E4EF", bg: "#F7F7FA" };

/** Escapes user input before putting it in HTML. */
export function esc(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** Wraps body HTML in the branded frame (logo, white card, footer). */
function frame(body: string) {
  return `<!doctype html><html><body style="margin:0;padding:24px;background:${C.bg};font-family:Inter,Arial,sans-serif;color:${C.ink}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">
<tr><td style="padding:0 0 16px"><img src="${siteUrl}${site.logo.src}" width="120" alt="${esc(site.name)}" style="display:block"></td></tr>
<tr><td style="background:#ffffff;border:1px solid ${C.border};border-radius:20px;padding:32px">${body}</td></tr>
<tr><td style="padding:16px 0;font-size:13px;color:${C.muted};text-align:center">${esc(emailCopy.footer)}</td></tr>
</table></td></tr></table></body></html>`;
}

/** A heading plus optional paragraphs (already-safe HTML). */
function heading(text: string) {
  return `<h1 style="margin:0 0 12px;font-size:24px;line-height:1.25;color:${C.ink}">${esc(text)}</h1>`;
}
function paragraph(text: string, style = "") {
  return `<p style="margin:0 0 12px;font-size:16px;line-height:1.5;color:${C.copy};${style}">${esc(text)}</p>`;
}

/** Label/value rows for owner notifications. Multi-line values keep their line breaks. */
function detailsTable(rows: [string, string | undefined][]) {
  const cells = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px 8px 0;font-size:14px;color:${C.muted};vertical-align:top;white-space:nowrap">${esc(label)}</td>` +
        `<td style="padding:8px 0;font-size:15px;color:${C.ink};white-space:pre-wrap">${esc(value!)}</td></tr>`,
    )
    .join("");
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-top:1px solid ${C.border};margin-top:8px">${cells}</table>`;
}

const detailsText = (rows: [string, string | undefined][]) =>
  rows
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

/** Notification to the owner: intro line + a table of the submitted fields. */
export function ownerEmail(subject: string, intro: string, rows: [string, string | undefined][]) {
  return {
    subject,
    html: frame(heading(subject) + paragraph(intro) + detailsTable(rows)),
    text: `${subject}\n\n${intro}\n\n${detailsText(rows)}\n`,
  };
}

/** Confirmation to the customer: heading, optional pink highlight line, paragraphs, optional quoted text. */
export function customerEmail({
  subject,
  title,
  highlight,
  paragraphs,
  quote,
}: {
  subject: string;
  title: string;
  highlight?: string;
  paragraphs: string[];
  quote?: { label: string; text: string };
}) {
  const quoteHtml = quote
    ? `<p style="margin:16px 0 4px;font-size:13px;color:${C.muted}">${esc(quote.label)}</p>` +
      `<blockquote style="margin:0;padding:12px 16px;border-left:3px solid ${C.pink};background:${C.bg};font-size:15px;color:${C.copy};white-space:pre-wrap">${esc(quote.text)}</blockquote>`
    : "";
  const html = frame(
    heading(title) +
      (highlight ? paragraph(highlight, `color:${C.pink};font-weight:600;font-size:18px`) : "") +
      paragraphs.map((p) => paragraph(p)).join("") +
      quoteHtml,
  );
  const text = [title, highlight, ...paragraphs, quote ? `${quote.label}:\n${quote.text}` : undefined]
    .filter(Boolean)
    .join("\n\n");
  return { subject, html, text };
}
