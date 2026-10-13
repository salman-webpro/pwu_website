import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Brand-gradient text, e.g. "Reorder it forever." */
export function GradientText({ children, className }: { children: ReactNode; className?: string }) {
  // box-decoration-clone keeps the gradient continuous when the text wraps.
  return <span className={cn("text-gradient-brand box-decoration-clone", className)}>{children}</span>;
}
