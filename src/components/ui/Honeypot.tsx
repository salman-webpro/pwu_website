"use client";

import type { UseFormRegisterReturn } from "react-hook-form";
import { emailCopy } from "@/content/emails";

/**
 * Spam trap: an input real visitors never see or reach with Tab. Bots that fill every
 * field fill this one too, and the server quietly drops those submissions.
 */
export function Honeypot({ field }: { field: UseFormRegisterReturn }) {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        {emailCopy.honeypotLabel}
        <input type="text" tabIndex={-1} autoComplete="off" {...field} />
      </label>
    </div>
  );
}
