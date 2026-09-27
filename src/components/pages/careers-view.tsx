"use client";

import { PageHero } from "@/components/layout/page-hero";
import { useLocale } from "@/components/providers/locale-provider";
import { CareersContent } from "@/components/sections/careers-content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";

export function CareersView() {
  const { t } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={t.careers.label}
        title={t.careers.title}
        lead={t.careers.lead}
      >
        <Reveal delay={0.18}>
          <Badge tone="lime">
            {t.careers.roles.length} {t.careers.openRolesCount}
          </Badge>
        </Reveal>
      </PageHero>
      <CareersContent />
    </>
  );
}
