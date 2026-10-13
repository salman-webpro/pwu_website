import { icons } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { IconName } from "@/types";

const tones = {
  light: "bg-surface text-ink",
  gradient: "bg-gradient-brand text-white",
  ink: "bg-ink text-white",
  "pink-tint": "bg-pink-tint text-pink",
  "green-tint": "bg-success-tint text-success",
};

/** Small rounded square holding an icon. `size` is the square's width in px. */
export function IconSquare({
  icon,
  tone = "light",
  size = 28,
  className,
}: {
  icon: IconName;
  tone?: keyof typeof tones;
  size?: number;
  className?: string;
}) {
  const Icon = icons[icon];
  return (
    <span
      aria-hidden
      className={cn("inline-flex shrink-0 items-center justify-center", tones[tone], className)}
      style={{ width: size, height: size, borderRadius: Math.round(size * 0.28) }}
    >
      <Icon strokeWidth={1.75} style={{ width: size * 0.55, height: size * 0.55 }} />
    </span>
  );
}
