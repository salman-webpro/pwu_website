"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Honeypot } from "@/components/ui/Honeypot";
import { Input } from "@/components/ui/Input";
import { SuccessCheck } from "@/components/ui/SuccessCheck";
import { Textarea } from "@/components/ui/Textarea";
import type { contactForm } from "@/content/contact";
import { sendContactMessage } from "@/lib/api/leads";
import { cn } from "@/lib/utils";
import { contactSchema, type ContactInput } from "@/lib/validation/schemas";

/** "Send a note" card on the Contact page. Swaps to a thank-you message after sending. */
export function ContactForm({ copy, className }: { copy: typeof contactForm; className?: string }) {
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");
  const successRef = useRef<HTMLHeadingElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema), defaultValues: { name: "", email: "", message: "" } });

  // Move focus to the thank-you heading so screen-reader users hear it.
  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
  }, [status]);

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");
    const result = await sendContactMessage(values);
    setStatus(result.ok ? "sent" : "error");
  });

  return (
    <section className={cn("rounded-xl border border-border bg-surface p-6 sm:p-8", className)}>
      {status === "sent" ? (
        <div className="flex flex-col items-center py-12 text-center">
          <SuccessCheck />
          <h2 ref={successRef} tabIndex={-1} className="mt-6 text-h2 text-ink focus:outline-none">
            {copy.success.title}
          </h2>
          <p className="mt-3 text-body text-muted">{copy.success.body}</p>
        </div>
      ) : (
        <>
          <h2 className="text-h2 text-ink">{copy.title}</h2>
          <form onSubmit={onSubmit} noValidate className="relative mt-6 flex flex-col gap-4">
            <Honeypot field={register("company_website")} />
            <Input
              label={copy.fields.name.label}
              autoComplete={copy.fields.name.autoComplete}
              error={errors.name && copy.errors.name}
              {...register("name")}
            />
            <Input
              label={copy.fields.email.label}
              type="email"
              autoComplete={copy.fields.email.autoComplete}
              error={errors.email && copy.errors.email}
              {...register("email")}
            />
            <Textarea
              label={copy.fields.message.label}
              error={errors.message && copy.errors.message}
              {...register("message")}
            />
            {status === "error" && <Alert>{copy.failure}</Alert>}
            <Button type="submit" loading={isSubmitting} className="mt-3 self-start">
              {copy.submit}
            </Button>
          </form>
        </>
      )}
    </section>
  );
}
