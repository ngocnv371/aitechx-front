"use client";

import { motion } from "motion/react";
import { useLocale } from "@/components/providers/locale-provider";
import { FlagIcon } from "@/components/ui/flag-icon";
import { locales, localeLabels, localeShortLabels } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={cn(
        "relative inline-flex items-center gap-0.5 rounded-full border border-ink-600/80 bg-ink-900/70 p-0.5 backdrop-blur",
        className,
      )}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            aria-label={localeLabels[code]}
            title={localeLabels[code]}
            className={cn(
              "relative z-10 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors duration-200",
              active ? "text-ink-950" : "text-ink-300 hover:text-white",
            )}
          >
            {active ? (
              <motion.span
                layoutId="locale-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-neon-300 to-violet-glow-400"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            ) : null}
            <FlagIcon code={code} />
            {localeShortLabels[code]}
          </button>
        );
      })}
    </div>
  );
}
