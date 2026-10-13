import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Path traced from docs/design/assets/circler.png.
const d =
  "M168 7C110 3 40 8 12 25C-8 40 15 65 120 70C215 74 280 58 282 38C284 18 225 5 140 5C80 5 30 12 15 22";

/** Wraps text in a hand-drawn pink ellipse (the "Why Print Wave USA" label on Home). */
export function HandDrawnCircle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("relative inline-block px-8 py-4", className)}>
      <svg
        aria-hidden
        viewBox="0 0 285 75"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 size-full text-pink"
      >
        <path d={d} stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
}
