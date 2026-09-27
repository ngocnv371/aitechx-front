"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Badge } from "@/components/ui/badge";
import { Typewriter } from "@/components/ui/typewriter";
import { EASE } from "@/lib/motion";

function LiveTerminal() {
  const { t } = useLocale();

  return (
    <div
      className="glass-panel hairline-gradient relative overflow-hidden rounded-2xl shadow-panel"
      data-active="true"
    >
      {/* header */}
      <div className="flex items-center gap-3 border-b border-ink-700/70 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-magenta-500/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-lime-neon-400/80" />
        </div>
        <span className="truncate font-mono text-[0.7rem] text-ink-400">
          {t.hero.terminalTitle}
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-lime-neon-400/30 bg-lime-neon-400/10 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-lime-neon-400">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-lime-neon-400" />
            <span className="relative inline-flex size-1.5 rounded-full bg-lime-neon-400" />
          </span>
          live
        </span>
      </div>

      {/* body */}
      <div className="relative space-y-2.5 px-4 py-5 font-mono text-[0.78rem] leading-relaxed sm:text-[0.83rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan bg-gradient-to-b from-transparent via-neon-400/10 to-transparent"
        />

        {t.hero.terminalLines.map((line, index) => {
          const isCommand = line.startsWith("$");
          return (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                delay: 0.5 + index * 0.26,
                duration: 0.4,
                ease: EASE,
              }}
              className="flex gap-2"
            >
              <span
                className={
                  isCommand
                    ? "shrink-0 text-neon-300"
                    : "shrink-0 text-lime-neon-400"
                }
              >
                {line.slice(0, 1)}
              </span>
              <span className={isCommand ? "text-ink-200" : "text-ink-100"}>
                {line.slice(1).trim()}
              </span>
            </motion.div>
          );
        })}

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.9 }}
          className="inline-block h-4 w-2 animate-blink bg-neon-400 align-middle"
        />
      </div>
    </div>
  );
}

function FloatingMetric({
  className,
  value,
  label,
  tone,
  delay,
}: {
  className: string;
  value: string;
  label: string;
  tone: "neon" | "violet";
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: EASE }}
      className={className}
    >
      <div className="glass-panel flex items-center gap-3 rounded-xl px-3.5 py-2.5 shadow-panel">
        <span
          className={
            tone === "neon"
              ? "grid size-8 place-items-center rounded-lg bg-neon-400/12 text-neon-300"
              : "grid size-8 place-items-center rounded-lg bg-violet-glow-500/12 text-violet-glow-300"
          }
        >
          <Sparkles className="size-4" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="font-display text-sm font-semibold text-ink-50">
            {value}
          </span>
          <span className="text-[0.68rem] uppercase tracking-wider text-ink-400">
            {label}
          </span>
        </span>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative isolate overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-32 lg:pt-40">
      <AuroraBackground />

      <div className="container-page relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Copy */}
          <div className="flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <Badge tone="neon">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-neon-400" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-neon-400" />
                </span>
                {t.hero.badge}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
              className="max-w-2xl text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-[3.6rem]"
            >
              <span className="text-ink-50">{t.hero.titleTop}</span>
              <br />
              <span className="text-gradient">{t.hero.titleAccent}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 rounded-xl border border-ink-700/70 bg-ink-900/50 px-4 py-2.5 font-mono text-xs text-ink-400 sm:text-sm"
            >
              <span className="uppercase tracking-[0.18em]">
                {t.hero.typingLabel}
              </span>
              <span className="hidden h-4 w-px bg-ink-600 sm:block" />
              <Typewriter
                words={t.hero.typingWords}
                className="text-neon-300"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
              className="max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-400 via-neon-300 to-violet-glow-400 px-7 py-3.5 text-base font-semibold text-ink-950 shadow-[0_14px_44px_-14px_rgba(34,211,238,0.9)] transition-all duration-300 hover:brightness-110"
              >
                {t.hero.primaryCta}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/#products"
                className="glass-panel inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold text-ink-100 transition-colors duration-300 hover:border-neon-400/60 hover:text-white"
              >
                <Play className="size-4 text-neon-400" />
                {t.hero.secondaryCta}
              </Link>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 28, rotateX: 8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              className="relative [perspective:1200px]"
            >
              <LiveTerminal />

              <FloatingMetric
                className="absolute -left-4 -top-6 hidden animate-float-slow sm:block"
                value="+18%"
                label="OEE"
                tone="neon"
                delay={0.9}
              />
              <FloatingMetric
                className="absolute -bottom-6 -right-3 hidden animate-float sm:block"
                value="99.2%"
                label="QC accuracy"
                tone="violet"
                delay={1.15}
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-20 flex flex-col items-center gap-3"
        >
          <span className="text-[0.7rem] uppercase tracking-[0.3em] text-ink-500">
            {t.hero.scroll}
          </span>
          <span className="relative h-12 w-px overflow-hidden bg-ink-700">
            <motion.span
              className="absolute inset-x-0 h-5 bg-gradient-to-b from-neon-400 to-transparent"
              animate={{ y: [-20, 48] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
