import type { ApiResult, CallbackRequest, ContactMessage } from "@/types";
import { apiPost, isMock } from "./client";
import { mocks } from "./mocks";

// Endpoint paths are proposals; rename them here when the backend is ready.

/** "Request a call" modal. */
export function requestCallback(req: CallbackRequest): Promise<ApiResult<{ id: string }>> {
  if (isMock) return mocks.requestCallback(req);
  return apiPost("/leads/callback", req);
}

/** Contact page "Send a note" form. */
export function sendContactMessage(msg: ContactMessage): Promise<ApiResult<{ id: string }>> {
  if (isMock) return mocks.sendContactMessage(msg);
  return apiPost("/leads/contact", msg);
}
