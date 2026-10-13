"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Honeypot } from "@/components/ui/Honeypot";
import { consultationModal as copy, modalUi } from "@/content/modals";
import { bookConsultation, getConsultationSlots } from "@/lib/api/consultation";
import { consultationSchema, type ConsultationInput } from "@/lib/validation/schemas";
import type { ConsultationSlot } from "@/types";
import { DetailsStep } from "./consultation/DetailsStep";
import { ReviewStep, slotLabel } from "./consultation/ReviewStep";
import { TimeStep, groupSlotsByDay } from "./consultation/TimeStep";
import { TopicStep } from "./consultation/TopicStep";
import type { ConsultationPreset } from "./ModalProvider";
import { ModalSuccess } from "./ModalParts";
import { ModalShell } from "./ModalShell";

const FORM_ID = "consultation-form";
const SUCCESS = 5;

/** "Free consultation": topic → details → time → review → success. */
export function ConsultationModal({
  open,
  onOpenChange,
  preset,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preset?: ConsultationPreset;
}) {
  const [step, setStep] = useState(1);
  const [failed, setFailed] = useState(false);
  const [slots, setSlots] = useState<ConsultationSlot[] | null>(null);
  const [slotsFailed, setSlotsFailed] = useState(false);
  const [pickedDay, setPickedDay] = useState<string | null>(null);
  const form = useForm<ConsultationInput>({
    resolver: zodResolver(consultationSchema),
    defaultValues: { topic: preset?.topic, name: "", email: "", business: "", product: "business-cards", slotStart: "", note: "" },
  });
  const { control, trigger, handleSubmit, formState } = form;
  const [topic, slotStart] = useWatch({ control, name: ["topic", "slotStart"] });

  // Load bookable times once, when the modal opens.
  useEffect(() => {
    let cancelled = false;
    getConsultationSlots().then((result) => {
      if (cancelled) return;
      if (result.ok) setSlots(result.data);
      else setSlotsFailed(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // First day is preselected until the user picks another.
  const day = pickedDay ?? groupSlotsByDay(slots ?? []).keys().next().value ?? null;

  const canContinue = (step === 1 && Boolean(topic)) || step === 2 || (step === 3 && Boolean(slotStart)) || step === 4;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canContinue) return;
    if (step === 2 && !(await trigger(["name", "email", "business", "product"]))) return;
    if (step < 4) return setStep(step + 1);
    await handleSubmit(async (values) => {
      setFailed(false);
      const result = await bookConsultation({ ...values, note: values.note || undefined });
      if (result.ok) setStep(SUCCESS);
      else setFailed(true);
    })();
  };

  const close = () => onOpenChange(false);

  const footer =
    step === SUCCESS ? (
      <Button variant="solid-pink" size="md" className="mx-auto px-12" onClick={close}>
        {modalUi.done}
      </Button>
    ) : (
      <>
        {step > 1 && (
          <Button variant="outline" size="md" className="px-8" onClick={() => setStep(step - 1)}>
            {modalUi.back}
          </Button>
        )}
        <Button
          type="submit"
          form={FORM_ID}
          variant="solid-pink"
          size="md"
          className="ml-auto px-8"
          disabled={!canContinue}
          loading={formState.isSubmitting}
        >
          {step === 4 ? copy.review.submit : modalUi.continue}
        </Button>
      </>
    );

  return (
    <ModalShell
      open={open}
      onOpenChange={onOpenChange}
      title={step === SUCCESS ? copy.success.title : copy.title}
      description={copy.description}
      progress={{ total: 4, current: Math.min(step, 4) }}
      stepKey={step}
      hideChrome={step === SUCCESS}
      size="consultation"
      footer={footer}
    >
      {step === SUCCESS ? (
        <ModalSuccess title={copy.success.title} highlight={slotLabel(slotStart, "·")}>
          <p className="mt-6 max-w-[280px] text-body font-semibold text-muted">{copy.success.with}</p>
          <p className="mt-6 max-w-[290px] text-body font-semibold text-muted">{copy.success.prep}</p>
        </ModalSuccess>
      ) : (
        <FormProvider {...form}>
          <form id={FORM_ID} onSubmit={onSubmit} noValidate className="relative">
            <Honeypot field={form.register("company_website")} />
            {step === 1 && <TopicStep />}
            {step === 2 && <DetailsStep />}
            {step === 3 && <TimeStep slots={slots} failed={slotsFailed} day={day} onDayChange={setPickedDay} />}
            {step === 4 && <ReviewStep failed={failed} />}
          </form>
        </FormProvider>
      )}
    </ModalShell>
  );
}
