"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  const { t } = useLocale();

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 border-t border-ink-800/80 py-24 lg:py-32"
    >
      <div className="container-page flex flex-col gap-12">
        <SectionHeading
          eyebrow={t.faq.label}
          title={t.faq.title}
          description={t.faq.description}
        />

        <Reveal delay={0.1}>
          <div className="glass-panel mx-auto w-full max-w-3xl rounded-3xl px-6 py-3 sm:px-8">
            <Accordion items={t.faq.items} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
