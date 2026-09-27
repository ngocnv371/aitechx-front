"use client";

import { PageHero } from "@/components/layout/page-hero";
import { useLocale } from "@/components/providers/locale-provider";
import { AboutContent } from "@/components/sections/about-content";

export function AboutView() {
  const { t } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={t.about.label}
        title={t.about.title}
        lead={t.about.lead}
      />
      <AboutContent />
    </>
  );
}
