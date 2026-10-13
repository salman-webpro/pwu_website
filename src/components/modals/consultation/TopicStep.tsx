"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { ChoiceGroup } from "@/components/ui/ChoiceGroup";
import { consultationModal as copy, consultationTopics } from "@/content/modals";
import type { ConsultationInput } from "@/lib/validation/schemas";
import { StepSubtitle } from "../ModalParts";

/** Step 1: what the consultation is about. */
export function TopicStep() {
  const { control, setValue } = useFormContext<ConsultationInput>();
  const topic = useWatch({ control, name: "topic" });
  return (
    <>
      <StepSubtitle>{copy.topic.subtitle}</StepSubtitle>
      <ChoiceGroup
        label={copy.topic.subtitle}
        options={consultationTopics}
        value={topic}
        onChange={(value) => setValue("topic", value)}
        className="mt-4"
      />
    </>
  );
}
