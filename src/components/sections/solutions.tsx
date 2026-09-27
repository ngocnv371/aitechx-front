"use client";

import Link from "next/link";
import { ArrowUpRight, GraduationCap, Rocket, Workflow } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const ICONS = [Rocket, Workflow, GraduationCap];

export function Solutions() {
  const { t } = useLocale();

  return (
    <section
      id="solutions"
      className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-violet-glow-600/10 blur-[140px]"
      />

      <div className="container-page relative flex flex-col gap-14">
        <SectionHeading
          eyebrow={t.solutions.label}
          title={t.solutions.title}
          description={t.solutions.description}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.solutions.items.map((item, index) => {
            const Icon = ICONS[index] ?? Rocket;
            return (
              <Reveal key={item.title} delay={index * 0.09} className="h-full">
                <article className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-ink-700/70 bg-ink-900/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-neon-400/40 hover:bg-ink-900/70">
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent transition-all duration-500",
                      "group-hover:from-neon-400/70 group-hover:via-violet-glow-400/70 group-hover:to-transparent",
                    )}
                  />

                  <span className="grid size-11 place-items-center rounded-xl border border-ink-600 bg-ink-950/80 text-neon-300 transition-colors duration-500 group-hover:border-neon-400/50 group-hover:text-neon-300">
                    <Icon className="size-5" />
                  </span>

                  <h3 className="font-display text-lg font-semibold text-ink-50">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-300">
                    {item.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-ink-400 transition-colors group-hover:text-neon-300"
                  >
                    {t.common.talkToUs}
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
