"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { consultationModal as copy, consultationProducts } from "@/content/modals";
import type { ConsultationInput } from "@/lib/validation/schemas";

/** Step 2: name, work email, business and product, with a message under each invalid field. */
export function DetailsStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ConsultationInput>();
  const { name, email, business, product } = copy.details;

  return (
    <div className="mt-6 flex flex-col gap-3.5">
      <Input label={name.label} autoComplete={name.autoComplete} error={errors.name && name.error} {...register("name")} />
      <Input
        label={email.label}
        type="email"
        autoComplete={email.autoComplete}
        error={errors.email && email.error}
        {...register("email")}
      />
      <Input
        label={business.label}
        autoComplete={business.autoComplete}
        error={errors.business && business.error}
        {...register("business")}
      />
      <Select
        label={product.label}
        options={consultationProducts}
        error={errors.product && product.error}
        {...register("product")}
      />
    </div>
  );
}
