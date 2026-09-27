"use client";

import { ArrowRight, Briefcase, Clock3, MapPin, Sparkles } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function CareersContent() {
  const { t } = useLocale();
  const careers = t.careers;
  const careersEmail = "careers@aitechx.vn";

  const applyHref = (role: string) =>
    `mailto:${careersEmail}?subject=${encodeURIComponent(
      `Application — ${role}`,
    )}`;

  return (
    <>
      {/* Benefits */}
      <section className="relative border-y border-ink-800/80 bg-ink-950/60 py-20 lg:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading align="left" title={careers.benefitsTitle} />

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink-800 bg-ink-800/50 sm:grid-cols-2 lg:grid-cols-3">
            {careers.benefits.map((benefit, index) => (
              <Reveal
                key={benefit.title}
                delay={(index % 3) * 0.06}
                className="bg-ink-950 p-6 transition-colors duration-500 hover:bg-ink-900/80"
              >
                <h3 className="font-display text-base font-semibold text-ink-50">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {benefit.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section id="roles" className="relative scroll-mt-24 py-20 lg:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            align="left"
            eyebrow={careers.openRolesLabel}
            title={careers.openRolesTitle}
            description={`${careers.roles.length} ${careers.openRolesCount}`}
          />

          {careers.roles.length === 0 ? (
            <p className="text-base text-ink-300">{careers.noRoles}</p>
          ) : (
            <ul className="flex flex-col gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800/50">
              {careers.roles.map((role, index) => (
                <Reveal key={role.title} delay={index * 0.05}>
                  <li className="group flex flex-col gap-4 bg-ink-950/95 p-6 transition-colors duration-300 hover:bg-ink-900 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-display text-lg font-semibold text-ink-50">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="size-3.5 text-neon-400" />
                          {role.team}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock3 className="size-3.5 text-neon-400" />
                          {role.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5 text-neon-400" />
                          {role.location}
                        </span>
                      </div>
                    </div>

                    <a
                      href={applyHref(role.title)}
                      className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-ink-600 px-5 py-2.5 text-sm font-semibold text-ink-100 transition-all duration-300 hover:border-neon-400/70 hover:text-white lg:self-auto"
                    >
                      {careers.applyCta}
                      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>
          )}

          <Reveal delay={0.1}>
            <a
              href={`mailto:${careersEmail}?subject=${encodeURIComponent("Speculative application")}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-neon-300 transition-colors hover:text-neon-200"
            >
              <Sparkles className="size-4" />
              {careers.speculativeCta}
              <ArrowRight className="size-3.5" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Hiring process */}
      <section className="relative border-t border-ink-800/80 py-20 lg:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading align="left" title={careers.processTitle} />

          <ol className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
            {careers.process.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.09}>
                <li className="group flex flex-col gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl border border-ink-700 bg-ink-950 font-display text-base font-semibold text-neon-300 transition-colors duration-500 group-hover:border-neon-400/60">
                    {step.step}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink-50">
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
      </section>
    </>
  );
}
