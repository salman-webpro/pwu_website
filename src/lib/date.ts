/*
 * Small Pacific-time helpers built on Intl (no date library).
 * All consultation times are shown and chosen in America/Los_Angeles.
 */

export const PACIFIC_TZ = "America/Los_Angeles";

/** The calendar date ("YYYY-MM-DD") it currently is in a time zone. */
export function todayIn(timeZone: string, now = new Date()) {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

/** Adds days to a "YYYY-MM-DD" date. */
export function addDays(date: string, days: number) {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

/** 0 = Sunday … 6 = Saturday for a "YYYY-MM-DD" date. */
export function weekday(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

/** The next `count` weekdays after `from` (not including `from` itself). */
export function nextBusinessDays(from: string, count: number) {
  const days: string[] = [];
  let date = from;
  while (days.length < count) {
    date = addDays(date, 1);
    const day = weekday(date);
    if (day !== 0 && day !== 6) days.push(date);
  }
  return days;
}

/** How far a time zone is ahead of UTC at a given instant, in ms. */
function zoneOffset(instant: number, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).formatToParts(new Date(instant));
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  const asUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"), get("second"));
  return asUtc - instant;
}

/** Converts a wall-clock time in a time zone ("2026-10-09", "10:30") to an ISO UTC string. */
export function zonedTimeToIso(date: string, time: string, timeZone = PACIFIC_TZ) {
  const [y, m, d] = date.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  const guess = Date.UTC(y, m - 1, d, hh, mm);
  // Two passes handle the hour around daylight-saving changes.
  let utc = guess - zoneOffset(guess, timeZone);
  utc = guess - zoneOffset(utc, timeZone);
  return new Date(utc).toISOString();
}

/** "Fri, Oct 9" in Pacific time. */
export function formatPacificDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", { timeZone: PACIFIC_TZ, weekday: "short", month: "short", day: "numeric" }).format(
    new Date(iso),
  );
}

/** "10:30 AM" in Pacific time. */
export function formatPacificTime(iso: string) {
  return new Intl.DateTimeFormat("en-US", { timeZone: PACIFIC_TZ, hour: "numeric", minute: "2-digit" }).format(
    new Date(iso),
  );
}

/** "YYYY-MM-DD" of an instant in Pacific time (used to group slots by day). */
export function pacificDateKey(iso: string) {
  return todayIn(PACIFIC_TZ, new Date(iso));
}
