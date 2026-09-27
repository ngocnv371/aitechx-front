import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="AiTechX"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-xl border border-neon-400/30 bg-gradient-to-br from-ink-800 to-ink-900 shadow-[0_0_22px_-8px_rgba(34,211,238,0.9)]">
        <svg
          viewBox="0 0 24 24"
          className="size-5"
          fill="none"
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="aitechx-mark" x1="0" y1="0" x2="24" y2="24">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="55%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <path
            d="M4.5 19.5 12 4.5l7.5 15"
            stroke="url(#aitechx-mark)"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.6 15.2h6.8"
            stroke="url(#aitechx-mark)"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </span>

      <span className="font-display text-lg font-semibold tracking-tight text-ink-50">
        Ai<span className="text-gradient">Tech</span>X
      </span>
    </Link>
  );
}
