"use client";

import { useLocale } from "@/components/providers/locale-provider";

export function SkipLink() {
  const { t } = useLocale();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-neon-400 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink-950"
    >
      {t.nav.skipToContent}
    </a>
  );
}
