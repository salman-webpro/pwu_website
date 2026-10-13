import { consultationTimes } from "@/content/modals";
import { nextBusinessDays, PACIFIC_TZ, todayIn, zonedTimeToIso } from "@/lib/date";
import type { ApiResult, Article, ConsultationSlot } from "@/types";

/*
 * Fake backend used while NEXT_PUBLIC_API_BASE_URL is empty.
 * Tip: in development, submit any form with the name "fail" to see the error state.
 */

const delay = (ms = 600) => new Promise((resolve) => setTimeout(resolve, ms));

function shouldFail(payload: unknown) {
  return (
    process.env.NODE_ENV !== "production" &&
    typeof payload === "object" &&
    payload !== null &&
    "name" in payload &&
    String((payload as { name: unknown }).name).trim().toLowerCase() === "fail"
  );
}

async function fakeSubmit(label: string, payload: unknown): Promise<ApiResult<{ id: string }>> {
  await delay();
  if (shouldFail(payload)) return { ok: false, error: "Mock failure" };
  console.info(`[mock] ${label}`, payload);
  return { ok: true, data: { id: crypto.randomUUID() } };
}

export const mocks = {
  requestCallback: (payload: unknown) => fakeSubmit("requestCallback", payload),
  sendContactMessage: (payload: unknown) => fakeSubmit("sendContactMessage", payload),

  async getConsultationSlots(): Promise<ApiResult<ConsultationSlot[]>> {
    await delay(300);
    const days = nextBusinessDays(todayIn(PACIFIC_TZ), 3);
    const slots = days.flatMap((day) =>
      consultationTimes.map((time) => ({ start: zonedTimeToIso(day, time), available: true })),
    );
    return { ok: true, data: slots };
  },

  async bookConsultation(payload: { slotStart: string }): Promise<ApiResult<{ id: string; start: string }>> {
    const result = await fakeSubmit("bookConsultation", payload);
    return result.ok ? { ok: true, data: { id: result.data.id, start: payload.slotStart } } : result;
  },

  async getArticles(): Promise<ApiResult<Article[]>> {
    return { ok: true, data: [] };
  },

  async getArticle(): Promise<ApiResult<Article | null>> {
    return { ok: true, data: null };
  },
};
