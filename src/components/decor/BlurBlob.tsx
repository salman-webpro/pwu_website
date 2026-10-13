import { cn } from "@/lib/utils";

/**
 * Soft blurred color glow. Decorative only.
 * Set position, size and color with `className`, e.g. "left-0 top-0 size-96 bg-blob-blue/60".
 */
export function BlurBlob({ className }: { className?: string }) {
  return <div aria-hidden className={cn("pointer-events-none absolute rounded-full blur-[100px]", className)} />;
}
