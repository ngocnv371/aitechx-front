import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Inline SVG locale flags.
 *
 * Deliberately not emoji: Windows browsers (Chrome/Edge/Firefox) do not ship
 * regional-indicator glyphs, so "🇻🇳" renders as the letters "VN" there.
 */
export function FlagIcon({
  code,
  className,
}: {
  code: Locale;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 16"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className={cn(
        "h-3 w-4 shrink-0 overflow-hidden rounded-[2px] ring-1 ring-black/10",
        className,
      )}
    >
      {code === "vi" ? <VietnamFlag /> : <UnitedStatesFlag />}
    </svg>
  );
}

function VietnamFlag() {
  return (
    <>
      <rect width="24" height="16" fill="#DA251D" />
      <path
        fill="#FFFF00"
        d="M12 3.6 L12.99 6.64 L16.18 6.64 L13.6 8.52 L14.59 11.56 L12 9.68 L9.41 11.56 L10.4 8.52 L7.82 6.64 L11.01 6.64 Z"
      />
    </>
  );
}

function UnitedStatesFlag() {
  const star =
    "M0 -1 L0.2245 -0.309 L0.951 -0.309 L0.3633 0.1181 L0.588 0.809 L0 0.382 L-0.588 0.809 L-0.3633 0.1181 L-0.951 -0.309 L-0.2245 -0.309 Z";

  // The real canton holds 9 rows of 11/10 stars, but this flag renders ~12px
  // tall here, so a dense grid would collapse into unreadable noise.
  const starScale = 0.7;
  const starPoints = [1.9, 4.3, 6.7].flatMap((cy) =>
    [1.7, 3.6, 5.5, 7.4].map((cx) => ({ cx, cy, key: `${cx}-${cy}` })),
  );

  return (
    <>
      <rect width="24" height="16" fill="#FFFFFF" />
      {[0, 2.46, 4.92, 7.38, 9.85, 12.31, 14.77].map((y) => (
        <rect key={y} y={y} width="24" height="1.23" fill="#B22234" />
      ))}
      <rect width="9.6" height="8.62" fill="#3C3B6E" />
      <g fill="#FFFFFF">
        {starPoints.map(({ cx, cy, key }) => (
          <path
            key={key}
            d={star}
            transform={`translate(${cx} ${cy}) scale(${starScale})`}
          />
        ))}
      </g>
    </>
  );
}
