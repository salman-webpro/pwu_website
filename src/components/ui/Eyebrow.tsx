import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Small pink pill shown above inner-page h1s ("How it works", "Contact", ...). */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border border-pink bg-pink-tint px-2.5 py-1 text-eyebrow text-pink",
        className,
      )}
    >
      {children}
    </span>
  );
}
