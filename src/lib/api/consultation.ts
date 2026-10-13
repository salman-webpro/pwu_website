import type { ApiResult, ConsultationBooking, ConsultationSlot } from "@/types";
import { apiGet, apiPost, isMock } from "./client";
import { mocks } from "./mocks";

/** Bookable consultation times for the next 3 business days. */
export function getConsultationSlots(): Promise<ApiResult<ConsultationSlot[]>> {
  if (isMock) return mocks.getConsultationSlots();
  return apiGet("/consultations/slots?days=3");
}

/** "Free consultation" modal, final step. */
export function bookConsultation(booking: ConsultationBooking): Promise<ApiResult<{ id: string; start: string }>> {
  if (isMock) return mocks.bookConsultation(booking);
  return apiPost("/consultations", booking);
}
