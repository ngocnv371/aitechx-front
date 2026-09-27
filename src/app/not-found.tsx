"use client";

import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function NotFound() {
  const { t, locale } = useLocale();

  const message =
    locale === "vi"
      ? "Trang bạn tìm không tồn tại hoặc đã được di chuyển."
      : "The page you are looking for doesn't exist or has been moved.";

  return (
    <section className="relative isolate grid min-h-[70vh] place-items-center overflow-hidden px-6 py-32">
      <AuroraBackground />

      <div className="relative flex flex-col items-center gap-6 text-center">
        <span className="grid size-14 place-items-center rounded-2xl border border-ink-700 bg-ink-950/80 text-neon-300">
          <Compass className="size-6" />
        </span>

        <p className="text-gradient font-display text-6xl font-semibold sm:text-7xl">
          404
        </p>

        <p className="max-w-md text-base leading-relaxed text-ink-300">
          {message}
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-400 to-violet-glow-400 px-6 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:brightness-110"
        >
          <ArrowLeft className="size-4" />
          {t.common.backHome}
        </Link>
      </div>
    </section>
  );
}
