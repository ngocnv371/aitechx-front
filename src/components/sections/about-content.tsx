"use client";

import Link from "next/link";
import { ArrowRight, Brain, Compass, Gauge, Users } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const VALUE_ICONS = [Gauge, Compass, Brain, Users];

export function AboutContent() {
  const { t } = useLocale();
  const about = t.about;

  return (
    <>
      {/* Story */}
      <section className="relative border-y border-ink-800/80 bg-ink-950/60 py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {about.storyTitle}
            </h2>
          </Reveal>
          <div className="flex flex-col gap-5">
            {about.story.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 0.07}>
                <p className="text-base leading-relaxed text-ink-300 sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 lg:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading align="left" title={about.valuesTitle} />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {about.values.map((value, index) => {
              const Icon = VALUE_ICONS[index] ?? Gauge;
              return (
                <Reveal
                  key={value.title}
                  delay={(index % 2) * 0.08}
                  className="h-full"
                >
                  <article className="glass-panel hairline-gradient flex h-full flex-col gap-4 rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1">
                    <span className="grid size-11 place-items-center rounded-xl border border-ink-600 bg-ink-950/80 text-neon-300">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-ink-50">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-300">
                      {value.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative border-y border-ink-800/80 bg-ink-950/60 py-20 lg:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            align="left"
            eyebrow={about.expertiseLabel}
            title={about.expertiseTitle}
          />

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink-800 bg-ink-800/50 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 3) * 0.06}
                className="bg-ink-950 p-6 transition-colors duration-500 hover:bg-ink-900/80"
              >
                <h3 className="font-display text-base font-semibold text-ink-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="relative py-20 lg:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            align="left"
            eyebrow={about.stackLabel}
            title={about.stackTitle}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.stackGroups.map((group, index) => (
              <Reveal key={group.name} delay={index * 0.07} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-ink-700/70 bg-ink-900/40 p-5">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-neon-300">
                    {group.name}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-ink-700 bg-ink-950/70 px-3 py-1 font-mono text-xs text-ink-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative border-t border-ink-800/80 py-20 lg:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            align="left"
            eyebrow={about.teamLabel}
            title={about.teamTitle}
            description={about.teamNote}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.07}>
                <div className="group flex flex-col items-start gap-4 rounded-2xl border border-ink-700/70 bg-ink-900/40 p-5 transition-colors duration-500 hover:border-neon-400/40">
                  <span className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-neon-400/25 to-violet-glow-500/25 font-display text-xl font-semibold text-ink-50">
                    {member.name.slice(0, 1)}
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-display text-base font-semibold text-ink-50">
                      {member.name}
                    </span>
                    <span className="text-sm text-ink-400">{member.role}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-ink-800/80 py-20 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[22rem] w-[44rem] -translate-x-1/2 rounded-full bg-violet-glow-600/15 blur-[140px]"
        />
        <div className="container-page relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {t.cta.title}
            </h2>
            <p className="text-base leading-relaxed text-ink-300 sm:text-lg">
              {t.cta.description}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-400 via-neon-300 to-violet-glow-400 px-7 py-3.5 text-base font-semibold text-ink-950 transition-all duration-300 hover:brightness-110"
            >
              {t.common.talkToUs}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/careers"
              className="glass-panel inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold text-ink-100 transition-colors duration-300 hover:border-neon-400/60 hover:text-white"
            >
              {t.nav.careers}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
