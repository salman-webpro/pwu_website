import { consultationTimes } from "@/content/modals";
import { nextBusinessDays, PACIFIC_TZ, todayIn, zonedTimeToIso } from "@/lib/date";
import type { ApiResult, Article, ConsultationSlot } from "@/types";

/*
 * Stand-in data used while NEXT_PUBLIC_API_BASE_URL is empty.
 * (Form submissions are handled by the Server Actions in actions.ts.)
 */

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mocks = {
  /** Next 3 business days × the fixed Pacific times, all available. */
  async getConsultationSlots(): Promise<ApiResult<ConsultationSlot[]>> {
    await delay(300);
    const days = nextBusinessDays(todayIn(PACIFIC_TZ), 3);
    const slots = days.flatMap((day) =>
      consultationTimes.map((time) => ({ start: zonedTimeToIso(day, time), available: true })),
    );
    return { ok: true, data: slots };
  },

  async getArticles(): Promise<ApiResult<Article[]>> {
    return { ok: true, data: [] };
  },

  async getArticle(): Promise<ApiResult<Article | null>> {
    return { ok: true, data: null };
  },
};
