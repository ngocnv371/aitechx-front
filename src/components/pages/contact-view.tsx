"use client";

import { PageHero } from "@/components/layout/page-hero";
import { useLocale } from "@/components/providers/locale-provider";
import { ContactSection } from "@/components/sections/contact-section";

export function ContactView() {
  const { t } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={t.cta.label}
        title={t.cta.title}
        lead={t.cta.description}
      />
      <ContactSection showHeading={false} />
    </>
  );
}
