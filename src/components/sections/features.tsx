"use client";

import { Brain, Cloud, Database, Eye, Plug, TrendingUp } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const ICONS = [Brain, Eye, TrendingUp, Cloud, Plug, Database];

export function Features() {
  const { t } = useLocale();

  return (
    <section id="capabilities" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow={t.features.label}
          title={t.features.title}
          description={t.features.description}
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink-800 bg-ink-800/50 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((item, index) => {
            const Icon = ICONS[index] ?? Brain;
            return (
              <Reveal
                key={item.title}
                delay={(index % 3) * 0.07}
                className="group relative bg-ink-950 p-7 transition-colors duration-500 hover:bg-ink-900/80"
              >
                <div className="flex flex-col gap-4">
                  <span className="relative grid size-12 place-items-center rounded-2xl border border-ink-700 bg-gradient-to-br from-ink-800 to-ink-900 text-neon-300 transition-all duration-500 group-hover:border-neon-400/50 group-hover:shadow-[0_0_28px_-8px_rgba(34,211,238,0.8)]">
                    <Icon className="size-5" />
                  </span>

                  <h3 className="font-display text-lg font-semibold text-ink-50">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-300">
                    {item.description}
                  </p>
                </div>

                <span
                  aria-hidden
                  className="pointer-events-none absolute right-5 top-5 font-mono text-xs text-ink-700 transition-colors duration-500 group-hover:text-neon-400/70"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
