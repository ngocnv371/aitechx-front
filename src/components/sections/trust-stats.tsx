"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Counter } from "@/components/ui/counter";
import { Marque } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";

const CLIENTS = [
  "NovaFab",
  "EduCore Academy",
  "Lumen Logistics",
  "Helios EMS",
  "Mekong Foods",
  "Terravia Plastics",
  "Orbit Retail",
  "Kite Studio",
];

export function TrustStats() {
  const { t } = useLocale();

  return (
    <section className="relative border-y border-ink-800/80 bg-ink-950/60 py-14">
      <div className="container-page flex flex-col gap-10">
        <Reveal>
          <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-ink-500">
            {t.hero.trustLabel}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <Marque items={CLIENTS} />
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800/60 sm:grid-cols-2 lg:grid-cols-4">
          {t.stats.items.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.07}
              className="bg-ink-950/90 px-6 py-7 transition-colors duration-300 hover:bg-ink-900/90"
            >
              <div className="flex flex-col gap-1.5">
                <span className="font-display text-3xl font-semibold text-ink-50 sm:text-4xl">
                  <Counter value={item.value} suffix={item.suffix} />
                </span>
                <span className="text-sm text-ink-400">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
