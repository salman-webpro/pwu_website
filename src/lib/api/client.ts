import type { ApiResult } from "@/types";

/*
 * Low-level HTTP helpers. When NEXT_PUBLIC_API_BASE_URL is empty the site runs
 * in mock mode and these are never called (see mocks.ts).
 */

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

/** True when no backend is configured; API functions return mock data instead. */
export const isMock = !BASE;

export async function apiPost<T>(path: string, body: unknown): Promise<ApiResult<T>> {
  try {
    const res = await fetch(`${BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
    return { ok: true, data: (await res.json()) as T };
  } catch {
    return { ok: false, error: "Network error" };
  }
}

export async function apiGet<T>(path: string, options: { revalidate?: number } = {}): Promise<ApiResult<T>> {
  try {
    const res = await fetch(`${BASE}${path}`, { next: { revalidate: options.revalidate } });
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` };
    return { ok: true, data: (await res.json()) as T };
  } catch {
    return { ok: false, error: "Network error" };
  }
}
