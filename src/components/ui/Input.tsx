"use client";

import { useId, type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { FieldWrapper, fieldA11y, fieldClasses, type FieldProps } from "./Field";

type InputProps = FieldProps & Omit<ComponentProps<"input">, "id"> & { id?: string; wrapperClassName?: string };

/** Labelled text input. Works with react-hook-form's `register()` (ref is forwarded). */
export function Input({ label, error, hint, describedBy, id, className, wrapperClassName, ...rest }: InputProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <FieldWrapper id={fieldId} label={label} error={error} hint={hint} className={wrapperClassName}>
      <input
        {...rest}
        {...fieldA11y(fieldId, { label, error, hint, describedBy })}
        className={cn(fieldClasses, "h-12", className)}
      />
    </FieldWrapper>
  );
}
