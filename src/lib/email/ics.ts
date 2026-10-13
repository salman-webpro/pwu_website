/*
 * Builds a calendar file (.ics) so the booking shows "Add to calendar" in Gmail, Outlook, Apple Mail.
 */

/** 2026-10-16T17:30:00.000Z → 20261016T173000Z */
function icsDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

/** Escapes text per the iCalendar spec. */
function icsText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
}

export function buildIcs({
  uid,
  start,
  durationMinutes,
  title,
  description,
  organizerName,
  organizerEmail,
}: {
  uid: string;
  start: string; // ISO UTC
  durationMinutes: number;
  title: string;
  description: string;
  organizerName: string;
  organizerEmail: string;
}) {
  const startDate = new Date(start);
  const endDate = new Date(startDate.getTime() + durationMinutes * 60_000);
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Print Wave USA//Website//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${icsDate(new Date())}`,
    `DTSTART:${icsDate(startDate)}`,
    `DTEND:${icsDate(endDate)}`,
    `SUMMARY:${icsText(title)}`,
    `DESCRIPTION:${icsText(description)}`,
    `ORGANIZER;CN=${icsText(organizerName)}:mailto:${organizerEmail}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.join("\r\n");
}
