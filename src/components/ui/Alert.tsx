import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Pink inline error banner, announced to screen readers when it appears. */
export function Alert({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      role="alert"
      className={cn("rounded-md border border-error/30 bg-error-tint px-4 py-3 text-small text-error", className)}
    >
      {children}
    </p>
  );
}
