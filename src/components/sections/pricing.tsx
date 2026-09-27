"use client";

import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function Pricing() {
  const { t } = useLocale();

  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-neon-500/10 blur-[150px]"
      />

      <div className="container-page relative flex flex-col gap-14">
        <SectionHeading
          eyebrow={t.pricing.label}
          title={t.pricing.title}
          description={t.pricing.description}
        />

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {t.pricing.tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.09} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col gap-6 rounded-3xl border p-7 transition-all duration-500",
                  tier.featured
                    ? "border-neon-400/50 bg-gradient-to-b from-ink-800/90 to-ink-950 shadow-[0_40px_90px_-45px_rgba(34,211,238,0.7)] lg:-translate-y-3"
                    : "border-ink-700/70 bg-ink-900/40 hover:border-ink-600 hover:bg-ink-900/70",
                )}
              >
                {tier.featured ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge tone="neon" className="bg-ink-950">
                      <Sparkles className="size-3" />
                      {t.common.popular}
                    </Badge>
                  </div>
                ) : null}

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink-50">
                    {tier.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-300">
                    {tier.description}
                  </p>
                </div>

                <div className="flex flex-col gap-1 border-y border-ink-700/60 py-5">
                  <span className="font-display text-4xl font-semibold text-ink-50">
                    {tier.price}
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] text-ink-400">
                    {tier.period}
                  </span>
                </div>

                <ul className="flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-ink-200"
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid size-4 shrink-0 place-items-center rounded-full",
                          tier.featured
                            ? "bg-neon-400/15 text-neon-300"
                            : "bg-ink-700/70 text-ink-200",
                        )}
                      >
                        <Check className="size-2.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
                    tier.featured
                      ? "bg-gradient-to-r from-neon-400 to-violet-glow-400 text-ink-950 hover:brightness-110"
                      : "border border-ink-600 text-ink-100 hover:border-neon-400/60 hover:text-white",
                  )}
                >
                  {tier.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="text-center text-xs leading-relaxed text-ink-500">
            {t.pricing.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
