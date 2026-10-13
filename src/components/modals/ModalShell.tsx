"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import { ProgressSteps } from "@/components/ui/ProgressSteps";
import { modalUi } from "@/content/modals";
import { cn } from "@/lib/utils";

const minHeights = {
  call: "sm:min-h-[540px]",
  consultation: "sm:min-h-[690px]",
};

/**
 * Shared frame for both modals: overlay, panel, progress bars, close button, title and footer.
 * Radix handles focus trap, Esc, overlay click and scroll lock.
 * Focus moves to the title when the modal opens and whenever `stepKey` changes.
 */
export function ModalShell({
  open,
  onOpenChange,
  title,
  description,
  progress,
  stepKey,
  hideChrome = false,
  size = "call",
  footer,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  /** Read by screen readers when the dialog opens (visually hidden). */
  description: string;
  progress?: { total: number; current: number };
  /** Changes on every step; triggers the fade-in and moves focus to the title. */
  stepKey?: string | number;
  /** Success step: hide the progress row, close button and visible title. */
  hideChrome?: boolean;
  size?: keyof typeof minHeights;
  footer?: ReactNode;
  children: ReactNode;
}) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const firstStep = useRef(true);

  useEffect(() => {
    if (firstStep.current) {
      firstStep.current = false;
      return;
    }
    titleRef.current?.focus();
  }, [stepKey]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/45 backdrop-blur-sm motion-safe:animate-fade-in" />
        <Dialog.Content
          onOpenAutoFocus={(e) => {
            e.preventDefault();
            titleRef.current?.focus();
          }}
          className={cn(
            "fixed z-50 flex flex-col overflow-y-auto bg-surface p-7 shadow-elevated focus:outline-none",
            // Phones: full-height sheet anchored to the bottom.
            "inset-x-0 bottom-0 h-[calc(100dvh-1rem)] rounded-t-modal motion-safe:animate-sheet-in",
            // Tablet and up: centered 480px panel.
            "sm:inset-auto sm:top-1/2 sm:left-1/2 sm:h-auto sm:max-h-[calc(100dvh-2rem)] sm:w-[480px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-modal sm:motion-safe:animate-dialog-in",
            minHeights[size],
          )}
        >
          {!hideChrome && (
            <div className="flex items-center gap-3">
              {progress ? <ProgressSteps {...progress} className="flex-1" /> : <span className="flex-1" />}
              <Dialog.Close
                aria-label={modalUi.close}
                className="-mr-2 inline-flex size-10 items-center justify-center rounded-pill text-muted transition-colors hover:bg-field hover:text-ink focus-visible:ring-2 focus-visible:ring-pink focus-visible:outline-none"
              >
                <X aria-hidden className="size-5" />
              </Dialog.Close>
            </div>
          )}
          <Dialog.Title
            ref={titleRef}
            tabIndex={-1}
            className={cn(
              "text-[2rem] leading-tight font-bold tracking-[-0.02em] text-ink focus:outline-none",
              hideChrome ? "sr-only" : "mt-6",
            )}
          >
            {title}
          </Dialog.Title>
          <Dialog.Description className="sr-only">{description}</Dialog.Description>

          <div key={stepKey} className="flex flex-1 flex-col motion-safe:animate-step-in">
            {children}
          </div>

          {footer && <div className="mt-auto flex items-center gap-3 pt-8">{footer}</div>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
