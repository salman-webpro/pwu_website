"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { Alert } from "@/components/ui/Alert";
import { ChoiceGroup } from "@/components/ui/ChoiceGroup";
import { callWindows, requestCallModal as copy } from "@/content/modals";
import type { CallbackInput } from "@/lib/validation/schemas";
import { StepSubtitle } from "../ModalParts";

/** Step 2: best time to call. Shows the error banner if sending failed. */
export function CallTimeStep({ failed }: { failed: boolean }) {
  const { control, setValue } = useFormContext<CallbackInput>();
  const callWindow = useWatch({ control, name: "window" });
  return (
    <>
      <StepSubtitle>{copy.time.subtitle}</StepSubtitle>
      <ChoiceGroup
        label={copy.time.subtitle}
        options={callWindows}
        value={callWindow}
        onChange={(value) => setValue("window", value)}
        className="mt-4"
      />
      {failed && <Alert className="mt-6">{copy.failure}</Alert>}
    </>
  );
}
