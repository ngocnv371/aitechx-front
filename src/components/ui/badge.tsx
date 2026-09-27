import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "neon",
}: {
  children: ReactNode;
  className?: string;
  tone?: "neon" | "violet" | "neutral" | "lime";
}) {
  const tones = {
    neon: "border-neon-400/40 bg-neon-400/10 text-neon-300",
    violet:
      "border-violet-glow-400/40 bg-violet-glow-500/10 text-violet-glow-300",
    lime: "border-lime-neon-400/40 bg-lime-neon-400/10 text-lime-neon-400",
    neutral: "border-ink-600 bg-ink-800/70 text-ink-200",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
