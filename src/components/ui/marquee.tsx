import { cn } from "@/lib/utils";

/** Infinite horizontal marquee. Children are duplicated for a seamless loop. */
export function Marque({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const row = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div className="flex w-max animate-marquee items-center gap-14">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="whitespace-nowrap font-display text-lg font-semibold uppercase tracking-[0.2em] text-ink-400 transition-colors duration-300 hover:text-neon-300 sm:text-xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
