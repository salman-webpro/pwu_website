import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge only knows Tailwind's built-in sizes (text-sm, text-xl, …). Without this list it
 * would treat our custom sizes (text-h2, text-lead, …) as colors and drop them next to text-ink.
 * Keep in sync with the --text-* tokens in src/app/globals.css.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-xl",
            "display-l",
            "h2",
            "big-word",
            "stat-dark",
            "stat-light",
            "h3",
            "lead",
            "body",
            "small",
            "eyebrow",
            "overline",
            "nav",
            "button",
          ],
        },
      ],
    },
  },
});

/** Combine class names and let later Tailwind classes override earlier ones. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
