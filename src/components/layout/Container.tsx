import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Centers content at the site's 1296px content width.
 * The max-width includes the side gutters so the content itself is exactly 1296px on desktop.
 */
export function Container({
  children,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  return <Tag className={cn("mx-auto w-full max-w-[calc(1296px+3rem)] px-4 sm:px-6", className)}>{children}</Tag>;
}
