"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { createContext, Suspense, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { ConsultationTopic, ModalId } from "@/types";
import { ModalDeepLink } from "./ModalDeepLink";

// Loaded only when first needed, so form/validation code isn't in every page's bundle.
const loaders = {
  call: () => import("./RequestCallModal").then((m) => m.RequestCallModal),
  consultation: () => import("./ConsultationModal").then((m) => m.ConsultationModal),
};
const RequestCallModal = dynamic(loaders.call);
const ConsultationModal = dynamic(loaders.consultation);

/** Start downloading a modal's code early (e.g. on button hover) so it opens instantly. */
export function preloadModal(id: ModalId) {
  void loaders[id]();
}

export type ConsultationPreset = { topic?: ConsultationTopic };

interface ModalContextValue {
  openModal: (id: ModalId, preset?: ConsultationPreset) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

/** Open either modal from anywhere: `const { openModal } = useModal()`. */
export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside <ModalProvider>");
  return ctx;
}

/** Mounted once in app/layout.tsx. Renders whichever modal is open. */
export function ModalProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [active, setActive] = useState<{ id: ModalId; preset?: ConsultationPreset } | null>(null);

  const openModal = useCallback((id: ModalId, preset?: ConsultationPreset) => setActive({ id, preset }), []);

  const closeModal = useCallback(() => {
    setActive(null);
    // If the modal was opened from a ?modal= link, drop the param so it doesn't reopen.
    const url = new URL(window.location.href);
    if (url.searchParams.has("modal")) {
      url.searchParams.delete("modal");
      url.searchParams.delete("topic");
      router.replace(`${url.pathname}${url.search}${url.hash}`, { scroll: false });
    }
  }, [router]);

  const value = useMemo(() => ({ openModal, closeModal }), [openModal, closeModal]);

  const onOpenChange = (open: boolean) => {
    if (!open) closeModal();
  };

  // Modals are only mounted while open, so closing always resets the flow.
  return (
    <ModalContext.Provider value={value}>
      {children}
      <Suspense fallback={null}>
        <ModalDeepLink onOpen={openModal} />
      </Suspense>
      {active?.id === "call" && <RequestCallModal open onOpenChange={onOpenChange} />}
      {active?.id === "consultation" && (
        <ConsultationModal open onOpenChange={onOpenChange} preset={active.preset} />
      )}
    </ModalContext.Provider>
  );
}
