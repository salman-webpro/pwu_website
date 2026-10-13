"use client";

import { useId, type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { FieldWrapper, fieldA11y, fieldClasses, type FieldProps } from "./Field";

type TextareaProps = FieldProps & Omit<ComponentProps<"textarea">, "id"> & { id?: string; wrapperClassName?: string };

/** Labelled multi-line input, 120px tall by default. */
export function Textarea({ label, error, hint, describedBy, id, className, wrapperClassName, ...rest }: TextareaProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldWrapper id={fieldId} label={label} error={error} hint={hint} className={wrapperClassName}>
      <textarea
        {...rest}
        {...fieldA11y(fieldId, { label, error, hint, describedBy })}
        className={cn(fieldClasses, "min-h-[120px] resize-y py-3", className)}
      />
    </FieldWrapper>
  );
}
