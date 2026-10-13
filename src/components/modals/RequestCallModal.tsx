"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Honeypot } from "@/components/ui/Honeypot";
import { callWindows, modalUi, requestCallModal as copy } from "@/content/modals";
import { requestCallback } from "@/lib/api/leads";
import { callbackSchema, type CallbackInput } from "@/lib/validation/schemas";
import { ModalSuccess } from "./ModalParts";
import { ModalShell } from "./ModalShell";
import { CallDetailsStep } from "./request-call/CallDetailsStep";
import { CallTimeStep } from "./request-call/CallTimeStep";

type Step = "details" | "time" | "success";
const FORM_ID = "request-call-form";

/** "Request a call": details → best time → success. */
export function RequestCallModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [step, setStep] = useState<Step>("details");
  const [failed, setFailed] = useState(false);
  const form = useForm<CallbackInput>({
    resolver: zodResolver(callbackSchema),
    defaultValues: { name: "", phone: "", topic: "new-quote", window: "within-hour" },
  });
  const { trigger, handleSubmit, getValues, formState } = form;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "details") {
      if (await trigger(["name", "phone"])) setStep("time");
      return;
    }
    await handleSubmit(async (values) => {
      setFailed(false);
      const result = await requestCallback({ ...values, name: values.name.trim() });
      if (result.ok) setStep("success");
      else setFailed(true);
    })();
  };

  const close = () => onOpenChange(false);
  const values = getValues();
  const windowSentence = callWindows.find((w) => w.value === values.window)?.sentence ?? "";

  const footer =
    step === "success" ? (
      <Button variant="solid-pink" size="md" className="mx-auto px-12" onClick={close}>
        {modalUi.done}
      </Button>
    ) : (
      <>
        {step === "time" && (
          <Button variant="outline" size="md" className="px-8" onClick={() => setStep("details")}>
            {modalUi.back}
          </Button>
        )}
        <Button
          type="submit"
          form={FORM_ID}
          variant="solid-pink"
          size="md"
          className="ml-auto px-8"
          loading={formState.isSubmitting}
        >
          {step === "details" ? modalUi.continue : copy.time.submit}
        </Button>
      </>
    );

  return (
    <ModalShell
      open={open}
      onOpenChange={onOpenChange}
      title={step === "success" ? copy.success.title : copy.title}
      description={copy.description}
      progress={{ total: 2, current: step === "details" ? 1 : 2 }}
      stepKey={step}
      hideChrome={step === "success"}
      size="call"
      footer={footer}
    >
      {step === "success" ? (
        <ModalSuccess title={copy.success.title} highlight={`${copy.success.phonePrefix} ${values.phone}`}>
          <p className="mt-1 text-body text-muted">
            {windowSentence} {copy.success.windowSuffix}
          </p>
          <p className="mt-6 max-w-[260px] text-body text-muted">{copy.success.note}</p>
        </ModalSuccess>
      ) : (
        <FormProvider {...form}>
          <form id={FORM_ID} onSubmit={onSubmit} noValidate className="relative">
            <Honeypot field={form.register("company_website")} />
            {step === "details" ? <CallDetailsStep /> : <CallTimeStep failed={failed} />}
          </form>
        </FormProvider>
      )}
    </ModalShell>
  );
}
