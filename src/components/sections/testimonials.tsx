"use client";

import { Quote, Star } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  const { t } = useLocale();

  return (
    <section id="testimonials" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow={t.testimonials.label}
          title={t.testimonials.title}
          description={t.testimonials.description}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.testimonials.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.09} className="h-full">
              <figure className="glass-panel hairline-gradient flex h-full flex-col gap-5 rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <Quote className="size-6 text-neon-400/70" />
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="size-3.5 fill-neon-400 text-neon-400"
                      />
                    ))}
                  </span>
                </div>

                <blockquote className="text-sm leading-relaxed text-ink-200">
                  “{item.quote}”
                </blockquote>

                <figcaption className="mt-auto flex items-center gap-3 border-t border-ink-700/60 pt-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-neon-400/25 to-violet-glow-500/25 font-display text-sm font-semibold text-ink-50">
                    {item.name.slice(0, 1)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-display text-sm font-semibold text-ink-50">
                      {item.name}
                    </span>
                    <span className="block truncate text-xs text-ink-400">
                      {item.role} · {item.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
