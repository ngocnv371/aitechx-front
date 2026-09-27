import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex select-none items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-neon-400 via-neon-300 to-violet-glow-400 text-ink-950 shadow-[0_10px_40px_-12px_rgba(34,211,238,0.75)] hover:shadow-[0_16px_50px_-10px_rgba(139,92,246,0.85)] hover:brightness-110",
  secondary:
    "glass-panel text-ink-50 hover:border-neon-400/60 hover:text-white",
  outline:
    "border border-ink-600 text-ink-100 hover:border-neon-400/70 hover:bg-neon-400/5 hover:text-white",
  ghost: "text-ink-200 hover:bg-ink-800/70 hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonLinkProps extends Omit<
  ComponentProps<typeof Link>,
  "className"
> {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function buttonClasses(variant: Variant = "primary", size: Size = "md") {
  return cn(base, variants[variant], sizes[size]);
}
