"use client";

import { preloadModal, useModal, type ConsultationPreset } from "@/components/modals/ModalProvider";
import type { ModalId } from "@/types";
import { Button, type ButtonSize, type ButtonVariant } from "./Button";

/**
 * A Button that opens one of the modals. Lets server components render
 * "Free consultation" / "Request a call" buttons without becoming client components.
 */
export function ModalButton({
  modal,
  preset,
  variant,
  size,
  className,
  onClick,
  children,
}: {
  modal: ModalId;
  preset?: ConsultationPreset;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Runs before the modal opens (e.g. to close the mobile menu). */
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const { openModal } = useModal();
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      aria-haspopup="dialog"
      onPointerEnter={() => preloadModal(modal)}
      onFocus={() => preloadModal(modal)}
      onClick={() => {
        onClick?.();
        openModal(modal, preset);
      }}
    >
      {children}
    </Button>
  );
}
