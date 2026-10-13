import type { CallbackInput, ContactInput } from "@/lib/validation/schemas";
import type { ApiResult } from "@/types";
import { submitCallback, submitContact } from "./actions";
import { apiPost, isMock } from "./client";

// With no NEXT_PUBLIC_API_BASE_URL, forms are handled by this project's own
// Server Actions (actions.ts), which email the submission via Resend.
// Endpoint paths are proposals for a future backend; rename them here.

/** "Request a call" modal. */
export function requestCallback(req: CallbackInput): Promise<ApiResult<{ id: string }>> {
  if (isMock) return submitCallback(req);
  return apiPost("/leads/callback", req);
}

/** Contact page "Send a note" form. */
export function sendContactMessage(msg: ContactInput): Promise<ApiResult<{ id: string }>> {
  if (isMock) return submitContact(msg);
  return apiPost("/leads/contact", msg);
}
