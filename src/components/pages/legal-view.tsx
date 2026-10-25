"use client";

import { PageHero } from "@/components/layout/page-hero";
import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/ui/reveal";

export type LegalPageKey = "privacy" | "terms" | "security" | "arcAscensionPrivacy" | "arcDescentPrivacy";

export function LegalView({ page }: { page: LegalPageKey }) {
  const { t } = useLocale();
  const doc = t.legal[page];

  return (
    <>
      <PageHero eyebrow={t.legal.label} title={doc.title} lead={doc.lead} />

      <section className="relative border-t border-ink-800/80 py-20 lg:py-24">
        <div className="container-page flex flex-col gap-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-400">
            {t.legal.updatedLabel}: {doc.updated}
          </p>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
            {doc.sections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 0.05}>
                <article className="flex flex-col gap-3">
                  <h2 className="font-display text-xl font-semibold text-ink-50 sm:text-2xl">
                    {section.heading}
                  </h2>
                  <p className="text-sm leading-relaxed text-ink-300 sm:text-base">
                    {section.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
