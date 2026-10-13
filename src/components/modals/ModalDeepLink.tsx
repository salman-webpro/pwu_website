"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { consultationTopics } from "@/content/modals";
import type { ConsultationTopic, ModalId } from "@/types";
import type { ConsultationPreset } from "./ModalProvider";

/**
 * Opens a modal from the URL, e.g. /?modal=consultation&topic=quote or /contact?modal=call.
 * Handy for ads and emails. Must be rendered inside <Suspense> (it reads the URL).
 */
export function ModalDeepLink({ onOpen }: { onOpen: (id: ModalId, preset?: ConsultationPreset) => void }) {
  const params = useSearchParams();
  const modal = params.get("modal");
  const topic = params.get("topic");

  useEffect(() => {
    if (modal === "call") onOpen("call");
    if (modal === "consultation") {
      const valid = consultationTopics.some((t) => t.value === topic);
      onOpen("consultation", valid ? { topic: topic as ConsultationTopic } : undefined);
    }
  }, [modal, topic, onOpen]);

  return null;
}
