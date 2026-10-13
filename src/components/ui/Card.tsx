import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

const paddings = {
  none: "",
  md: "p-6",
  lg: "p-6 sm:p-8",
};

/** White card with a 1px border and 20px radius. */
export function Card({
  children,
  padding = "lg",
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  padding?: keyof typeof paddings;
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag className={cn("rounded-lg border border-border bg-surface shadow-card", paddings[padding], className)}>
      {children}
    </Tag>
  );
}
