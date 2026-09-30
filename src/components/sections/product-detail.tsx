"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, Check, Factory, Sparkles } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { Accordion } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  TypingMasterMark,
  WordRainMark,
  EasyQuizMark,
} from "@/components/ui/product-mark";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type ProductKey = "typingMaster" | "workshop" | "wordRain" | "easyQuiz";
type Tone = "neon" | "violet" | "lime" | "spark";

/** Product mark, matching the icon the app itself ships. */
const MARKS: Record<ProductKey, ComponentType<{ className?: string }>> = {
  typingMaster: TypingMasterMark,
  workshop: Factory,
  wordRain: WordRainMark,
  easyQuiz: EasyQuizMark,
};

/** Accent colours per product — one source for every tinted element on the page. */
const TONES: Record<
  ProductKey,
  {
    name: Tone;
    glow: string;
    ring: string;
    shadow: string;
    icon: string;
    chip: string;
    bullet: string;
    sparkle: string;
  }
> = {
  typingMaster: {
    name: "neon",
    glow: "bg-neon-500/20",
    ring: "border-neon-400/30",
    shadow: "shadow-[0_0_26px_-10px_rgba(34,211,238,0.9)]",
    icon: "text-neon-300",
    chip: "border-neon-400/30 bg-neon-400/10 text-neon-300",
    bullet: "bg-neon-400/15 text-neon-300",
    sparkle: "text-neon-400",
  },
  workshop: {
    name: "violet",
    glow: "bg-violet-glow-600/25",
    ring: "border-violet-glow-400/30",
    shadow: "shadow-[0_0_26px_-10px_rgba(167,139,250,0.9)]",
    icon: "text-violet-glow-300",
    chip: "border-violet-glow-400/30 bg-violet-glow-500/10 text-violet-glow-300",
    bullet: "bg-violet-glow-500/15 text-violet-glow-300",
    sparkle: "text-violet-glow-400",
  },
  wordRain: {
    name: "lime",
    glow: "bg-lime-neon-400/20",
    ring: "border-lime-neon-400/30",
    shadow: "shadow-[0_0_26px_-10px_rgba(163,230,53,0.9)]",
    icon: "text-lime-neon-400",
    chip: "border-lime-neon-400/30 bg-lime-neon-400/10 text-lime-neon-400",
    bullet: "bg-lime-neon-400/15 text-lime-neon-400",
    sparkle: "text-lime-neon-400",
  },
  easyQuiz: {
    name: "spark",
    glow: "bg-spark-500/20",
    ring: "border-spark-400/30",
    shadow: "shadow-[0_0_26px_-10px_rgba(251,191,36,0.9)]",
    icon: "text-spark-300",
    chip: "border-spark-400/30 bg-spark-400/10 text-spark-300",
    bullet: "bg-spark-400/15 text-spark-300",
    sparkle: "text-spark-400",
  },
};

/**
 * Products that are simply free to play in the browser. These skip the demo and
 * sales CTAs entirely and link straight at the live app.
 */
const PLAY_URLS: Partial<Record<ProductKey, string>> = {
  wordRain: "https://wordrain.aitechx.vn",
  easyQuiz: "https://easyquiz.aitechx.vn",
};

/** The primary gradient pill, shared by the hero and closing CTAs. */
const PRIMARY_CTA =
  "group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-400 via-neon-300 to-violet-glow-400 px-7 py-3.5 text-base font-semibold text-ink-950 shadow-[0_14px_44px_-14px_rgba(34,211,238,0.9)] transition-all duration-300 hover:brightness-110";

export function ProductDetail({ productKey }: { productKey: ProductKey }) {
  const { t } = useLocale();
  const p = t.productPages[productKey];
  const cfg = TONES[productKey];
  const Mark = MARKS[productKey];
  const playUrl = PLAY_URLS[productKey];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-0 grid-backdrop opacity-[0.3] [mask-image:radial-gradient(ellipse_at_top,black_5%,transparent_70%)]" />
          <div
            className={cn(
              "absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full blur-[140px] animate-float-slow",
              cfg.glow,
            )}
          />
          <div className="absolute -right-20 top-1/3 h-[24rem] w-[24rem] rounded-full bg-magenta-500/12 blur-[130px] animate-float" />
        </div>

        <div className="container-page relative flex flex-col gap-8">
          <Reveal>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-400 transition-colors hover:text-neon-300"
            >
              <ArrowRight className="size-3.5 rotate-180" />
              {t.productPages.backToProducts}
            </Link>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.05}>
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "grid size-12 shrink-0 place-items-center rounded-2xl border bg-gradient-to-br from-ink-800 to-ink-900",
                    cfg.ring,
                    cfg.shadow,
                  )}
                >
                  <Mark className={cn("size-6", cfg.icon)} />
                </span>
                <Badge tone={cfg.name}>{p.eyebrow}</Badge>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-[4rem]">
                <span className="text-gradient">{p.title}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="max-w-2xl font-display text-xl font-medium text-ink-100 sm:text-2xl">
                {p.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
                {p.description}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.28}>
            <div className="flex flex-wrap items-center gap-3">
              {playUrl ? (
                <a
                  href={playUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={PRIMARY_CTA}
                >
                  {t.common.playFree}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              ) : (
                <>
                  <Link href="/contact" className={PRIMARY_CTA}>
                    {t.common.bookDemo}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/#pricing"
                    className="glass-panel inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold text-ink-100 transition-colors duration-300 hover:border-neon-400/60 hover:text-white"
                  >
                    {t.common.contactSales}
                  </Link>
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.34}>
            <dl className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800/60 sm:grid-cols-2 lg:grid-cols-4">
              {p.highlights.map((item) => (
                <div key={item.label} className="bg-ink-950/90 px-5 py-6">
                  <dt className="text-xs uppercase tracking-[0.14em] text-ink-400">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-2xl font-semibold text-ink-50">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="relative border-y border-ink-800/80 bg-ink-950/60 py-20 lg:py-24">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {p.overviewTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-base leading-relaxed text-ink-300 sm:text-lg">
              {p.overview}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-20 lg:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            align="left"
            eyebrow={p.title}
            title={t.productPages.capabilities}
            titleClassName="text-2xl sm:text-3xl lg:text-4xl"
          />

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink-800 bg-ink-800/50 sm:grid-cols-2 lg:grid-cols-3">
            {p.capabilities.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 3) * 0.06}
                className="group bg-ink-950 p-6 transition-colors duration-500 hover:bg-ink-900/80"
              >
                <div className="flex flex-col gap-3">
                  <span
                    className={cn(
                      "grid size-9 place-items-center rounded-lg border text-xs font-semibold",
                      cfg.chip,
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink-50">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-300">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes + use cases */}
      <section className="relative border-y border-ink-800/80 bg-ink-950/60 py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                {p.outcomesTitle}
              </h2>
            </Reveal>
            <ul className="flex flex-col gap-4">
              {p.outcomes.map((outcome, index) => (
                <Reveal key={outcome} delay={index * 0.06}>
                  <li className="flex items-start gap-3 text-sm leading-relaxed text-ink-200 sm:text-base">
                    <span
                      className={cn(
                        "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                        cfg.bullet,
                      )}
                    >
                      <Check className="size-3" />
                    </span>
                    {outcome}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                {p.useCasesTitle}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {p.useCases.map((useCase, index) => (
                <Reveal
                  key={useCase.title}
                  delay={index * 0.06}
                  className="h-full"
                >
                  <div className="glass-panel hairline-gradient h-full rounded-2xl p-5 transition-transform duration-500 hover:-translate-y-1">
                    <div className="flex items-center gap-2">
                      <Sparkles className={cn("size-3.5", cfg.sparkle)} />
                      <h3 className="font-display text-sm font-semibold text-ink-50">
                        {useCase.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">
                      {useCase.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 lg:py-28">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading
            align="left"
            title={t.productPages.faqTitle}
            titleClassName="text-2xl sm:text-3xl lg:text-4xl"
          />
          <Reveal delay={0.08}>
            <div className="glass-panel max-w-3xl rounded-3xl px-6 py-3 sm:px-8">
              <Accordion items={p.faq} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-ink-800/80 py-20 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[44rem] -translate-x-1/2 rounded-full bg-neon-500/12 blur-[140px]"
        />
        <div className="container-page relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {t.productPages.ctaTitle}
            </h2>
            <p className="text-base leading-relaxed text-ink-300 sm:text-lg">
              {p.ctaDescription}
            </p>
          </div>
          {playUrl ? (
            <a
              href={playUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(PRIMARY_CTA, "shrink-0")}
            >
              {t.common.playFree}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          ) : (
            <Link href="/contact" className={cn(PRIMARY_CTA, "shrink-0")}>
              {t.common.bookDemo}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
