import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Non-interactive pill label. Render inside a <ul>. */
export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <li className={cn("rounded-pill border border-border bg-surface px-[18px] py-2.5 text-body text-ink", className)}>
      {children}
    </li>
  );
}
