"use client";

import { useId, type ComponentProps } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Option } from "@/types";
import { FieldWrapper, fieldA11y, fieldClasses, type FieldProps } from "./Field";

type SelectProps = FieldProps &
  Omit<ComponentProps<"select">, "id" | "children"> & { id?: string; options: Option[]; wrapperClassName?: string };

/** Labelled native <select> with a custom chevron. */
export function Select({ label, error, hint, describedBy, id, options, className, wrapperClassName, ...rest }: SelectProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldWrapper id={fieldId} label={label} error={error} hint={hint} className={wrapperClassName}>
      <div className="relative">
        <select
          {...rest}
          {...fieldA11y(fieldId, { label, error, hint, describedBy })}
          className={cn(fieldClasses, "h-12 cursor-pointer appearance-none pr-10", className)}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-ink"
        />
      </div>
    </FieldWrapper>
  );
}
