"use client";

import { useFormContext } from "react-hook-form";
import { Alert } from "@/components/ui/Alert";
import { Textarea } from "@/components/ui/Textarea";
import { consultationModal as copy, consultationProducts, consultationTopics } from "@/content/modals";
import { formatPacificDate, formatPacificTime } from "@/lib/date";
import type { ConsultationInput } from "@/lib/validation/schemas";
import { StepSubtitle } from "../ModalParts";

/** "Fri, Oct 9 at 10:30 AM PT" */
export function slotLabel(iso: string, joiner: string) {
  return `${formatPacificDate(iso)} ${joiner} ${formatPacificTime(iso)} ${copy.review.timeZoneLabel}`;
}

/** Step 4: summary of everything chosen, an optional note, and the error banner if booking failed. */
export function ReviewStep({ failed }: { failed: boolean }) {
  const { register, getValues } = useFormContext<ConsultationInput>();
  const v = getValues();
  const lines = [
    `${v.name}, ${v.business}`,
    v.email,
    consultationProducts.find((p) => p.value === v.product)?.label ?? v.product,
    slotLabel(v.slotStart, copy.review.timeJoiner),
  ];

  return (
    <>
      <StepSubtitle className="font-semibold">{copy.review.subtitle}</StepSubtitle>
      <ul className="mt-4 flex flex-col gap-3.5 rounded-[16px] border border-border bg-surface p-5 text-body font-semibold text-copy">
        <li className="text-ink">{consultationTopics.find((t) => t.value === v.topic)?.label}</li>
        {lines.map((line) => (
          <li key={line} className="break-words">
            {line}
          </li>
        ))}
      </ul>
      <Textarea
        label={copy.review.note.label}
        placeholder={copy.review.note.placeholder}
        wrapperClassName="mt-6"
        className="min-h-[110px]"
        {...register("note")}
      />
      {failed && <Alert className="mt-4">{copy.failure}</Alert>}
    </>
  );
}
