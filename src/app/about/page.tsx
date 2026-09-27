import type { Metadata } from "next";
import { AboutView } from "@/components/pages/about-view";
import { defaultLocale, getDictionary } from "@/lib/i18n";

const t = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: t.about.meta.title,
  description: t.about.meta.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutView />;
}
