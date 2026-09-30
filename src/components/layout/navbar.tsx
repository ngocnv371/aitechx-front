"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ChevronDown,
  CloudRain,
  Factory,
  Keyboard,
  Menu,
  X,
} from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { useLocale } from "@/components/providers/locale-provider";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const productLinks = [
    {
      href: "/products/typing-master",
      name: t.products.items[0].name,
      description: t.products.items[0].tagline,
      icon: Keyboard,
    },
    {
      href: "/products/workshop",
      name: t.products.items[1].name,
      description: t.products.items[1].tagline,
      icon: Factory,
    },
    {
      href: "/products/word-rain",
      name: t.products.items[2].name,
      description: t.products.items[2].tagline,
      icon: CloudRain,
    },
  ];

  const links = [
    { href: "/#solutions", label: t.nav.solutions },
    { href: "/about", label: t.nav.about },
    { href: "/careers", label: t.nav.careers },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) =>
    href.startsWith("/#")
      ? false
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-ink-700/70 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-6 lg:h-20">
        <Logo />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((open) => !open)}
              aria-expanded={productsOpen}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-ink-200 transition-colors hover:text-white"
            >
              {t.nav.products}
              <ChevronDown
                className={cn(
                  "size-3.5 transition-transform duration-300",
                  productsOpen && "rotate-180",
                )}
              />
            </button>

            <AnimatePresence>
              {productsOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3"
                >
                  <div className="glass-panel hairline-gradient overflow-hidden rounded-2xl p-2 shadow-panel">
                    {productLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-ink-800/70"
                      >
                        <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border border-neon-400/30 bg-neon-400/10 text-neon-300">
                          <item.icon className="size-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="flex items-center gap-1.5 font-display text-sm font-semibold text-ink-50">
                            {item.name}
                            <ArrowRight className="size-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-ink-300">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "text-white"
                  : "text-ink-200 hover:text-white",
              )}
            >
              {link.label}
              {isActive(link.href) ? (
                <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-neon-400 to-transparent" />
              ) : null}
            </Link>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <LocaleSwitcher className="hidden sm:inline-flex" />

          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-neon-400 to-violet-glow-400 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-[0_10px_36px_-14px_rgba(34,211,238,0.9)] transition-all duration-300 hover:brightness-110 md:inline-flex"
          >
            {t.nav.cta}
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileOpen}
            className="grid size-10 place-items-center rounded-full border border-ink-600 text-ink-100 transition-colors hover:border-neon-400/60 hover:text-white lg:hidden"
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="overflow-hidden border-t border-ink-700/70 bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-page flex max-h-[calc(100dvh-4rem)] flex-col gap-6 overflow-y-auto py-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.26em] text-ink-400">
                  {t.nav.products}
                </span>
                {productLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 rounded-xl border border-ink-700/70 bg-ink-900/60 p-3.5"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-neon-400/30 bg-neon-400/10 text-neon-300">
                      <item.icon className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-sm font-semibold text-ink-50">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-ink-300">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>

              <div className="flex flex-col">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="border-b border-ink-800 py-3.5 font-display text-base font-medium text-ink-100 transition-colors hover:text-neon-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4">
                <LocaleSwitcher />
                <Link
                  href="/contact"
                  className="flex-1 rounded-full bg-gradient-to-r from-neon-400 to-violet-glow-400 px-5 py-3 text-center text-sm font-semibold text-ink-950"
                >
                  {t.nav.cta}
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
