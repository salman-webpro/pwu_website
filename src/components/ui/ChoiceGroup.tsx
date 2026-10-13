"use client";

import { useRef, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

export interface ChoiceItem<V extends string = string> {
  value: V;
  label: string;
  disabled?: boolean;
}

const variants = {
  /** Full-width row, 56px, left-aligned text. */
  row: "h-14 px-4 text-left",
  /** Compact cell for grids (time slots), 44px, centered text. */
  compact: "h-11 px-2 text-center justify-center",
};

/**
 * Radio group of selectable boxes (role="radiogroup" / role="radio").
 * Arrow keys move and select, like native radios; only one option is tabbable.
 */
export function ChoiceGroup<V extends string>({
  label,
  options,
  value,
  onChange,
  variant = "row",
  error,
  className,
  itemClassName,
}: {
  /** Accessible name of the group (visually hidden). */
  label: string;
  options: ChoiceItem<V>[];
  value: V | null | undefined;
  onChange: (value: V) => void;
  variant?: keyof typeof variants;
  error?: boolean;
  className?: string;
  /** Extra classes for every option, e.g. a custom height. */
  itemClassName?: string;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const enabled = options.map((o, i) => (o.disabled ? -1 : i)).filter((i) => i >= 0);
  const selectedIndex = options.findIndex((o) => o.value === value);
  const tabStop = selectedIndex >= 0 ? selectedIndex : enabled[0];

  function onKeyDown(e: KeyboardEvent, index: number) {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (!(e.key in keys) || enabled.length === 0) return;
    e.preventDefault();
    const pos = enabled.indexOf(index);
    const next = enabled[(pos + keys[e.key] + enabled.length) % enabled.length];
    onChange(options[next].value);
    refs.current[next]?.focus();
  }

  return (
    <div role="radiogroup" aria-label={label} aria-invalid={error || undefined} className={cn("grid gap-2.5", className)}>
      {options.map((o, i) => {
        const selected = o.value === value;
        return (
          <button
            key={o.value}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-disabled={o.disabled || undefined}
            tabIndex={i === tabStop ? 0 : -1}
            onClick={() => !o.disabled && onChange(o.value)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={cn(
              "flex w-full items-center rounded-md border border-border bg-field text-body text-ink transition-colors",
              "focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:outline-none",
              !o.disabled && !selected && "hover:border-ink/30",
              selected && "border-[1.5px] border-pink bg-pink-tint",
              o.disabled && "cursor-not-allowed opacity-40",
              variants[variant],
              itemClassName,
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
