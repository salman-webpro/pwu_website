import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Section H2 with an optional subtitle and optional element above it (eyebrow, circled label). */
export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "left",
  tone = "light",
  id,
  className,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: ReactNode;
  align?: "left" | "center";
  /** `dark` = white text for dark backgrounds. */
  tone?: "light" | "dark";
  id?: string;
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow}
      <h2 id={id} className={cn("text-h2", tone === "dark" ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-6 text-body", tone === "dark" ? "text-muted-on-dark" : "text-muted")}>{subtitle}</p>
      )}
    </div>
  );
}
