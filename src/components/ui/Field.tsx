import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shared look for Input, Textarea and Select. */
export const fieldClasses =
  "w-full rounded-md border border-border bg-field px-4 text-body text-ink placeholder:text-muted/70 " +
  "transition-colors focus:border-pink focus:outline-none focus-visible:ring-2 focus-visible:ring-pink/30 " +
  "disabled:cursor-not-allowed disabled:opacity-50 " +
  "aria-invalid:border-[1.5px] aria-invalid:border-error aria-invalid:bg-error-tint";

export interface FieldProps {
  label: string;
  /** Message under the field. Pass `true` to show the error style without a message (shared message elsewhere). */
  error?: string | boolean;
  hint?: string;
  /** Extra element ids describing this field, e.g. a shared error message. */
  describedBy?: string;
}

/** Builds the aria props + ids for a field. */
export function fieldA11y(id: string, { error, hint, describedBy }: FieldProps) {
  const ids = [
    hint ? `${id}-hint` : null,
    typeof error === "string" ? `${id}-error` : null,
    describedBy ?? null,
  ].filter(Boolean);
  return {
    id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": ids.length ? ids.join(" ") : undefined,
  };
}

/** Label above, hint/error below. */
export function FieldWrapper({
  id,
  label,
  error,
  hint,
  className,
  children,
}: FieldProps & { id: string; className?: string; children: ReactNode }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-small font-bold text-ink">
        {label}
      </label>
      {children}
      {hint && (
        <p id={`${id}-hint`} className="text-small text-muted">
          {hint}
        </p>
      )}
      {typeof error === "string" && (
        <p id={`${id}-error`} className="text-small text-error">
          {error}
        </p>
      )}
    </div>
  );
}
