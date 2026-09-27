"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  const { t } = useLocale();

  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden border-y border-ink-800/80 bg-ink-950/60 py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-backdrop opacity-[0.18]"
      />

      <div className="container-page relative flex flex-col gap-16">
        <SectionHeading
          eyebrow={t.process.label}
          title={t.process.title}
          description={t.process.description}
        />

        <div className="relative">
          {/* connecting rail */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-ink-600 to-transparent lg:block"
          />

          <ol className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
            {t.process.steps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.1}>
                <li className="group relative flex flex-col gap-4">
                  <span className="relative grid size-14 place-items-center rounded-2xl border border-ink-700 bg-ink-950 font-display text-lg font-semibold text-neon-300 transition-all duration-500 group-hover:border-neon-400/60 group-hover:shadow-[0_0_32px_-10px_rgba(34,211,238,0.9)]">
                    {step.step}
                    <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-400/10 to-violet-glow-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>

                  <h3 className="font-display text-xl font-semibold text-ink-50">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-300">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
