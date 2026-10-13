"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { Alert } from "@/components/ui/Alert";
import { ChoiceGroup } from "@/components/ui/ChoiceGroup";
import { consultationModal as copy } from "@/content/modals";
import { formatPacificDate, formatPacificTime, pacificDateKey } from "@/lib/date";
import type { ConsultationInput } from "@/lib/validation/schemas";
import type { ConsultationSlot } from "@/types";
import { StepSubtitle } from "../ModalParts";

/** Groups slots by their Pacific calendar day, keeping the API's order. */
export function groupSlotsByDay(slots: ConsultationSlot[]) {
  const days = new Map<string, ConsultationSlot[]>();
  for (const slot of slots) {
    const key = pacificDateKey(slot.start);
    days.set(key, [...(days.get(key) ?? []), slot]);
  }
  return days;
}

/** Step 3: pick a day, then a time. `slots` is null while loading. */
export function TimeStep({
  slots,
  failed,
  day,
  onDayChange,
}: {
  slots: ConsultationSlot[] | null;
  failed: boolean;
  day: string | null;
  onDayChange: (day: string) => void;
}) {
  const { control, setValue } = useFormContext<ConsultationInput>();
  const slotStart = useWatch({ control, name: "slotStart" });
  const days = groupSlotsByDay(slots ?? []);
  const dayOptions = [...days.entries()].map(([key, daySlots]) => ({
    value: key,
    label: formatPacificDate(daySlots[0].start),
  }));
  const timeOptions = (day ? (days.get(day) ?? []) : []).map((slot) => ({
    value: slot.start,
    label: formatPacificTime(slot.start),
    disabled: !slot.available,
  }));

  return (
    <>
      <StepSubtitle>{copy.time.subtitle}</StepSubtitle>
      {failed ? (
        <Alert className="mt-4">{copy.time.error}</Alert>
      ) : slots === null ? (
        <p role="status" className="mt-4 text-body text-muted">
          {copy.time.loading}
        </p>
      ) : (
        <>
          <ChoiceGroup
            label={copy.time.datesLabel}
            options={dayOptions}
            value={day}
            onChange={(value) => {
              onDayChange(value);
              setValue("slotStart", ""); // a new day needs a new time
            }}
            itemClassName="h-[50px]"
            className="mt-4 gap-2"
          />
          <ChoiceGroup
            label={copy.time.timesLabel}
            variant="compact"
            options={timeOptions}
            value={slotStart}
            onChange={(value) => setValue("slotStart", value)}
            itemClassName="h-[50px]"
            className="mt-5 grid-cols-3 gap-x-3.5 gap-y-2"
          />
        </>
      )}
    </>
  );
}
