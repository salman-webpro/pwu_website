import Link from "next/link";
import { Loader2 } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "dark" | "solid-pink";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill text-button " +
  "transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink " +
  "focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-gradient-brand text-white hover:-translate-y-px hover:brightness-105",
  secondary: "bg-surface text-ink shadow-elevated hover:-translate-y-px",
  outline: "border-[1.5px] border-ink bg-transparent text-ink hover:bg-ink/5",
  dark: "bg-ink text-white hover:bg-ink/90",
  "solid-pink": "bg-pink text-white hover:brightness-105",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-11 px-5",
  md: "h-12 px-6",
  lg: "h-13 px-7",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps & Omit<ComponentProps<"button">, keyof CommonProps> & { href?: undefined };
type ButtonAsLink = CommonProps & Omit<ComponentProps<typeof Link>, keyof CommonProps> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Pill button. Renders a next/link when `href` is given, otherwise a <button>. */
export function Button({ variant = "primary", size = "lg", loading = false, className, children, ...rest }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  // Label stays in the layout (invisible) while loading, so the button width doesn't jump.
  const content = (
    <>
      <span className={cn("inline-flex items-center gap-2", loading && "invisible")}>{children}</span>
      {loading && <Loader2 aria-hidden className="absolute size-5 animate-spin" />}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <Link {...(rest as ButtonAsLink)} className={classes}>
        {content}
      </Link>
    );
  }

  const { type = "button", disabled, ...buttonRest } = rest as ButtonAsButton;
  return (
    <button
      {...buttonRest}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={classes}
    >
      {content}
    </button>
  );
}
