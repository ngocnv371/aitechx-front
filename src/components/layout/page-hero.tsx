import type { ReactNode } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-20 lg:pt-40",
        className,
      )}
    >
      <AuroraBackground />

      <div className="container-page relative flex flex-col items-start gap-5">
        {eyebrow ? (
          <Reveal>
            <Badge tone="violet">{eyebrow}</Badge>
          </Reveal>
        ) : null}

        <Reveal delay={0.06}>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>

        {lead ? (
          <Reveal delay={0.12}>
            <p className="max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
              {lead}
            </p>
          </Reveal>
        ) : null}

        {children}
      </div>
    </section>
  );
}
