import { useId } from "react";

/**
 * Product marks, drawn in the AiTechX house style: single-weight strokes on a
 * 24x24 grid, round caps and joins, painted with the neon -> violet -> magenta
 * gradient used by the site wordmark.
 *
 * These mirror the marks shipped inside the products themselves, so the logo on
 * a product page is the one the app actually uses.
 */

/** Shared gradient stops, matching the parent site's logo. */
const STOPS = [
  { offset: "0%", color: "#67e8f9" },
  { offset: "55%", color: "#a78bfa" },
  { offset: "100%", color: "#f472b6" },
];

const GLYPH = {
  fill: "none",
  strokeWidth: 2.1,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

interface MarkProps {
  className?: string;
}

/** A per-instance gradient id; `useId` emits colons that are unsafe in `url(#...)`. */
function useGradientId(prefix: string): string {
  return `${prefix}-${useId().replace(/:/g, "")}`;
}

/**
 * Typing Master: a keycap carrying the raised ridge found on the F and J home
 * keys — the one physical landmark every touch typist navigates by.
 * Matches `typingmaster/public/favicon.svg`.
 */
export function TypingMasterMark({ className }: MarkProps) {
  const gradientId = useGradientId("typing-master-mark");

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          {STOPS.map((stop) => (
            <stop
              key={stop.offset}
              offset={stop.offset}
              stopColor={stop.color}
            />
          ))}
        </linearGradient>
      </defs>
      <g {...GLYPH} stroke={`url(#${gradientId})`}>
        <rect x="4.2" y="7.2" width="15.6" height="12.4" rx="3.2" />
        <path d="M9.2 16.8h5.6" />
      </g>
    </svg>
  );
}

/**
 * Word Rain: a falling raindrop inside a rounded frame — the mark the game
 * ships as its own favicon, where words fall like rain and typing one shatters
 * it before it reaches the line.
 * Matches `word-rain/public/favicon.svg`.
 */
export function WordRainMark({ className }: MarkProps) {
  const gradientId = useGradientId("word-rain-mark");

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          {STOPS.map((stop) => (
            <stop
              key={stop.offset}
              offset={stop.offset}
              stopColor={stop.color}
            />
          ))}
        </linearGradient>
      </defs>
      <g {...GLYPH} stroke={`url(#${gradientId})`}>
        <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.8" />
        <path d="M12 7.2c-2.4 2.1-3.6 3.95-3.6 5.55 0 2.25 1.65 3.8 3.6 3.8s3.6-1.55 3.6-3.8c0-1.6-1.2-3.45-3.6-5.55Z" />
      </g>
    </svg>
  );
}
