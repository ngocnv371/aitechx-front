import { cn } from "@/lib/utils";

/** Ambient background: grid, noise, and drifting colour orbs. */
export function AuroraBackground({
  className,
  grid = true,
}: {
  className?: string;
  grid?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {grid ? (
        <div className="absolute inset-0 grid-backdrop opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_72%)]" />
      ) : null}

      <div className="absolute -top-52 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-neon-500/20 blur-[130px] animate-float-slow" />
      <div className="absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-violet-glow-600/25 blur-[130px] animate-float" />
      <div className="absolute -right-28 top-1/3 h-[26rem] w-[26rem] rounded-full bg-magenta-500/12 blur-[130px] animate-float-slow" />

      <div className="absolute inset-0 noise-overlay opacity-[0.035] mix-blend-soft-light" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  );
}
