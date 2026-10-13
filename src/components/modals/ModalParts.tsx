import type { ReactNode } from "react";
import { SuccessCheck } from "@/components/ui/SuccessCheck";
import { cn } from "@/lib/utils";

/** Muted line under the modal title ("What do you want to talk about?"). */
export function StepSubtitle({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("mt-4 text-body text-muted", className)}>{children}</p>;
}

/** Centered success content: gradient check, heading, pink highlight line, then details. */
export function ModalSuccess({
  title,
  highlight,
  children,
}: {
  title: string;
  highlight: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center pt-12 text-center sm:pt-[54px]">
      <SuccessCheck />
      {/* The dialog's own title is visually hidden on this step; this is the visible heading. */}
      <p aria-hidden className="mt-6 text-[2rem] leading-tight font-bold tracking-[-0.02em] text-ink">
        {title}
      </p>
      <p className="mt-5 text-lg font-semibold text-pink">{highlight}</p>
      {children}
    </div>
  );
}
