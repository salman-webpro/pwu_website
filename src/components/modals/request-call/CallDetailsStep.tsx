"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { callTopics, requestCallModal as copy } from "@/content/modals";
import { formatUsPhone } from "@/lib/phone";
import type { CallbackInput } from "@/lib/validation/schemas";

const ERROR_ID = "call-details-error";

/** Step 1: name, phone (formatted as you type) and topic. One shared error message. */
export function CallDetailsStep() {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<CallbackInput>();
  const hasError = Boolean(errors.name || errors.phone);
  const { name, phone, topic } = copy.details;

  return (
    <div className="mt-6 flex flex-col gap-3.5">
      <Input
        label={name.label}
        autoComplete={name.autoComplete}
        error={Boolean(errors.name)}
        describedBy={errors.name ? ERROR_ID : undefined}
        {...register("name")}
      />
      <Input
        label={phone.label}
        type="tel"
        inputMode="tel"
        placeholder={phone.placeholder}
        autoComplete={phone.autoComplete}
        error={Boolean(errors.phone)}
        describedBy={errors.phone ? ERROR_ID : undefined}
        {...register("phone", {
          onChange: (e) => setValue("phone", formatUsPhone(e.target.value)),
        })}
      />
      <Select label={topic.label} options={callTopics} {...register("topic")} />
      {hasError && (
        <p id={ERROR_ID} role="alert" className="text-small text-error">
          {copy.details.error}
        </p>
      )}
    </div>
  );
}
