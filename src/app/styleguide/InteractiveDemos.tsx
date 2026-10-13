"use client";

import { useState } from "react";
import { ChoiceGroup } from "@/components/ui/ChoiceGroup";
import { ModalButton } from "@/components/ui/ModalButton";
import { ProgressSteps } from "@/components/ui/ProgressSteps";

// Dev-only demos for /styleguide.

export function ChoiceDemos() {
  const [row, setRow] = useState<string | null>("within-hour");
  const [slot, setSlot] = useState<string | null>(null);
  return (
    <div className="grid max-w-[480px] gap-6">
      <ChoiceGroup
        label="Call window"
        value={row}
        onChange={setRow}
        options={[
          { value: "within-hour", label: "Within the hour" },
          { value: "morning", label: "Morning (9 AM to 12 PM)" },
          { value: "afternoon", label: "Afternoon (12 PM to 4 PM)" },
        ]}
      />
      <ChoiceGroup
        label="Time slot"
        variant="compact"
        className="grid-cols-3"
        value={slot}
        onChange={setSlot}
        options={[
          { value: "0900", label: "9:00 AM" },
          { value: "1030", label: "10:30 AM" },
          { value: "1200", label: "12:00 PM", disabled: true },
          { value: "1330", label: "1:30 PM" },
          { value: "1500", label: "3:00 PM" },
          { value: "1630", label: "4:30 PM" },
        ]}
      />
    </div>
  );
}

export function ProgressDemos() {
  return (
    <div className="grid max-w-[420px] gap-4">
      <ProgressSteps total={2} current={1} />
      <ProgressSteps total={4} current={3} />
    </div>
  );
}

export function ModalDemos() {
  return (
    <div className="flex flex-wrap gap-4">
      <ModalButton modal="consultation">Free consultation</ModalButton>
      <ModalButton modal="consultation" preset={{ topic: "quote" }} variant="secondary">
        Request a quote (preset)
      </ModalButton>
      <ModalButton modal="call" variant="outline">
        Request a call
      </ModalButton>
    </div>
  );
}
