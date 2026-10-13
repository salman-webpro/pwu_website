import type { ConsultationInput } from "@/lib/validation/schemas";
import type { ApiResult, ConsultationSlot } from "@/types";
import { submitConsultation } from "./actions";
import { apiGet, apiPost, isMock } from "./client";
import { mocks } from "./mocks";

/** Bookable consultation times for the next 3 business days. */
export function getConsultationSlots(): Promise<ApiResult<ConsultationSlot[]>> {
  if (isMock) return mocks.getConsultationSlots();
  return apiGet("/consultations/slots?days=3");
}

/** "Free consultation" modal, final step. Emails the booking via Resend unless a backend is configured. */
export function bookConsultation(booking: ConsultationInput): Promise<ApiResult<{ id: string; start: string }>> {
  if (isMock) return submitConsultation(booking);
  return apiPost("/consultations", booking);
}
