"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, Check, Factory } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { TypingMasterMark, WordRainMark } from "@/components/ui/product-mark";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type Tone = "neon" | "violet" | "lime";

/** Product marks, matching the icons the apps themselves ship. */
const ICONS: Record<Tone, ComponentType<{ className?: string }>> = {
  neon: TypingMasterMark,
  violet: Factory,
  lime: WordRainMark,
};

const VISUALS = {
  neon: {
    accent: "from-neon-400/25 to-violet-glow-500/10",
    ring: "border-neon-400/30 text-neon-300",
    bar: "from-neon-400 to-neon-300",
    bullet: "bg-neon-400/15 text-neon-300",
    href: "/products/typing-master",
  },
  violet: {
    accent: "from-violet-glow-500/25 to-magenta-500/10",
    ring: "border-violet-glow-400/30 text-violet-glow-300",
    bar: "from-violet-glow-400 to-magenta-400",
    bullet: "bg-violet-glow-500/15 text-violet-glow-300",
    href: "/products/workshop",
  },
  lime: {
    accent: "from-lime-neon-400/25 to-neon-400/10",
    ring: "border-lime-neon-400/30 text-lime-neon-400",
    bar: "from-lime-neon-400 to-neon-300",
    bullet: "bg-lime-neon-400/15 text-lime-neon-400",
    href: "/products/word-rain",
  },
} as const;

/** Abstract product preview — a stylised dashboard rather than a real screenshot. */
function ProductPreview({ tone }: { tone: Tone }) {
  const cfg = VISUALS[tone];
  const Icon = ICONS[tone];

  return (
    <div
      className={cn(
        "relative h-40 overflow-hidden rounded-xl border border-ink-700/70 bg-gradient-to-br sm:h-44",
        cfg.accent,
      )}
    >
      <div className="absolute inset-0 grid-backdrop opacity-25" />
      <div className="relative flex h-full items-center gap-5 px-6">
        <span
          className={cn(
            "grid size-14 shrink-0 place-items-center rounded-2xl border bg-ink-950/70 backdrop-blur",
            cfg.ring,
          )}
        >
          <Icon className="size-6" />
        </span>

        <div className="flex min-w-0 flex-1 flex-col gap-2.5">
          {[92, 74, 58].map((width, index) => (
            <span key={width} className="flex items-center gap-2">
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-800">
                <span
                  className={cn(
                    "block h-full rounded-full bg-gradient-to-r",
                    cfg.bar,
                  )}
                  style={{ width: `${width - index * 4}%` }}
                />
              </span>
              <span className="font-mono text-[0.65rem] text-ink-400">
                {width}%
              </span>
            </span>
          ))}
          <span className="mt-1 flex gap-1.5">
            {[38, 62, 44, 78, 30, 66].map((height, index) => (
              <span
                key={index}
                className={cn(
                  "w-2 rounded-t-sm bg-gradient-to-t opacity-70",
                  cfg.bar,
                )}
                style={{ height: `${height / 2.6}px` }}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  const { t } = useLocale();
  const tones = ["neon", "violet", "lime"] as const;

  return (
    <section id="products" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="container-page flex flex-col gap-14">
        <SectionHeading
          eyebrow={t.products.label}
          title={t.products.title}
          description={t.products.description}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.products.items.map((product, index) => {
            const tone = tones[index] ?? "neon";
            const cfg = VISUALS[tone];

            return (
              <Reveal key={product.id} delay={index * 0.1}>
                <article className="glass-panel hairline-gradient group flex h-full flex-col gap-6 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-40px_rgba(34,211,238,0.35)] sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <Badge tone={tone}>{product.badge}</Badge>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-500">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-2xl font-semibold text-ink-50 sm:text-3xl">
                      {product.name}
                    </h3>
                    <p className="text-base font-medium text-ink-200">
                      {product.tagline}
                    </p>
                    <p className="text-sm leading-relaxed text-ink-300">
                      {product.description}
                    </p>
                  </div>

                  <ProductPreview tone={tone} />

                  <ul className="flex flex-col gap-2.5">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-ink-200"
                      >
                        <span
                          className={cn(
                            "mt-0.5 grid size-4 shrink-0 place-items-center rounded-full",
                            cfg.bullet,
                          )}
                        >
                          <Check className="size-2.5" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={cfg.href}
                    className="mt-auto inline-flex items-center gap-2 font-display text-sm font-semibold text-ink-50 transition-colors group-hover:text-neon-300"
                  >
                    {t.products.cta}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
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
