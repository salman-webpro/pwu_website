import { cn } from "@/lib/utils";

// Paths traced from docs/design/assets/{left,right} squarrel.png.
const shapes = {
  /** Sweeps in from the top-left, loops at the bottom, tail exits left. */
  right: {
    viewBox: "0 0 142 227",
    d: "M30 1C85 30 130 75 139 135C145 180 125 200 98 199C68 198 45 180 46 158C47 138 62 127 78 128C98 130 108 150 106 172C103 205 65 222 0 222",
  },
  /** Comes in from the top-right, loops near the top, long tail down to the right. */
  left: {
    viewBox: "0 0 141 278",
    d: "M140 1C100 3 55 20 42 48C30 75 38 120 65 130C88 138 100 115 96 92C92 65 70 48 45 50C15 53 0 90 2 135C5 190 50 240 120 277",
  },
};

/**
 * Thin pink hand-drawn curve used at section edges. Decorative only.
 * Position it with `className` (absolute + offsets + width). Add `-scale-x-100` to mirror.
 * Only shown from 1536px: squiggles sit in the side gutters, which are too narrow below that.
 */
export function Squiggle({ variant = "right", className }: { variant?: keyof typeof shapes; className?: string }) {
  const shape = shapes[variant];
  return (
    <svg
      aria-hidden
      viewBox={shape.viewBox}
      fill="none"
      className={cn("pointer-events-none absolute hidden text-squiggle 2xl:block", className)}
    >
      <path d={shape.d} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
