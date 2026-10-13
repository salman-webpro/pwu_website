import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/** 76px gradient circle with a white check — success states of forms and modals. */
export function SuccessCheck({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("inline-flex size-[76px] items-center justify-center rounded-pill bg-gradient-brand text-white", className)}
    >
      <Check className="size-9" strokeWidth={2.5} />
    </span>
  );
}
