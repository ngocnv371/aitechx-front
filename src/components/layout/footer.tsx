"use client";

import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { useLocale } from "@/components/providers/locale-provider";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t.footer.productsTitle,
      links: [
        { label: t.products.items[0].name, href: "/products/typing-master" },
        { label: t.products.items[1].name, href: "/products/workshop" },
        { label: t.pricing.label, href: "/#pricing" },
        { label: t.nav.solutions, href: "/#solutions" },
      ],
    },
    {
      title: t.footer.companyTitle,
      links: [
        { label: t.footer.about, href: "/about" },
        { label: t.footer.careers, href: "/careers" },
        { label: t.footer.contact, href: "/contact" },
        { label: t.footer.blog, href: "/#insights" },
      ],
    },
    {
      title: t.footer.legalTitle,
      links: [
        { label: t.footer.privacy, href: "/#privacy" },
        { label: t.footer.terms, href: "/#terms" },
        { label: t.footer.security, href: "/#security" },
      ],
    },
  ];

  const socials = ["LinkedIn", "GitHub", "Facebook"];

  return (
    <footer className="relative mt-24 border-t border-ink-800 bg-ink-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neon-400/60 to-transparent"
      />

      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-ink-300">
              {t.footer.tagline}
            </p>

            <ul className="mt-1 flex flex-col gap-3 text-sm text-ink-300">
              <li>
                <a
                  href={`mailto:${t.cta.info.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-neon-300"
                >
                  <Mail className="size-4 text-neon-400" />
                  {t.cta.info.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <Phone className="size-4 text-neon-400" />
                {t.cta.info.phone}
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="size-4 text-neon-400" />
                {t.cta.info.address}
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-400">
                  {column.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-200 transition-colors hover:text-neon-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-ink-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            {socials.map((social) => (
              <a
                key={social}
                href="#"
                className="rounded-full border border-ink-700 px-3 py-1.5 text-xs font-medium text-ink-300 transition-colors hover:border-neon-400/60 hover:text-white"
              >
                {social}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-ink-400">
            <span>
              © {year} {t.footer.rights}
            </span>
            <span className="hidden sm:inline">·</span>
            <span>{t.common.madeIn}</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-ink-700 px-3 py-1.5 text-xs font-medium text-ink-200 transition-colors hover:border-neon-400/60 hover:text-white"
            >
              <ArrowUp className="size-3.5" />
              {t.footer.backToTop}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
