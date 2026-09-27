"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { useLocale } from "@/components/providers/locale-provider";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function ContactSection({
  showHeading = true,
  className,
}: {
  showHeading?: boolean;
  className?: string;
}) {
  const { t } = useLocale();

  const details = [
    {
      icon: Mail,
      label: t.cta.info.emailLabel,
      value: t.cta.info.email,
      href: `mailto:${t.cta.info.email}`,
    },
    { icon: Phone, label: t.cta.info.phoneLabel, value: t.cta.info.phone },
    { icon: MapPin, label: t.cta.info.addressLabel, value: t.cta.info.address },
    {
      icon: Clock,
      label: t.cta.info.responseLabel,
      value: t.cta.info.response,
    },
  ];

  return (
    <section
      id="contact"
      className={cn(
        "relative isolate scroll-mt-24 overflow-hidden py-24 lg:py-32",
        className,
      )}
    >
      <AuroraBackground grid={false} />

      <div className="container-page relative grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          {showHeading ? (
            <div className="flex flex-col gap-4">
              <Reveal>
                <Badge tone="violet">{t.cta.label}</Badge>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="max-w-lg text-3xl font-semibold leading-tight sm:text-4xl">
                  {t.cta.title}
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="max-w-lg text-base leading-relaxed text-ink-300">
                  {t.cta.description}
                </p>
              </Reveal>
            </div>
          ) : null}

          <Reveal delay={0.18}>
            <ul className="flex flex-col gap-px overflow-hidden rounded-2xl border border-ink-800 bg-ink-800/50">
              {details.map((item) => {
                const Icon = item.icon;
                const content = (
                  <span className="flex items-center gap-4 bg-ink-950/90 px-5 py-4 transition-colors duration-300 group-hover:bg-ink-900">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-ink-700 bg-ink-900 text-neon-300">
                      <Icon className="size-4" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-500">
                        {item.label}
                      </span>
                      <span className="truncate text-sm text-ink-100">
                        {item.value}
                      </span>
                    </span>
                  </span>
                );

                return (
                  <li key={item.label} className="group">
                    {item.href ? (
                      <a href={item.href} className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
