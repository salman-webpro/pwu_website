import { phoneDigits } from "@/lib/validation/schemas";

/**
 * Formats a US phone number as it's typed: "3105551234" → "+1 310 555 1234".
 * Returns "" when there are no digits left, so the field can be cleared.
 */
export function formatUsPhone(value: string) {
  let digits = phoneDigits(value);
  if (digits.startsWith("1")) digits = digits.slice(1); // country code is added back below
  digits = digits.slice(0, 10);
  if (!digits) return "";
  const parts = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6)].filter(Boolean);
  return `+1 ${parts.join(" ")}`;
}
