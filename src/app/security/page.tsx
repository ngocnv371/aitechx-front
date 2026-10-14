import type { Metadata } from "next";
import { LegalView } from "@/components/pages/legal-view";
import { defaultLocale, getDictionary } from "@/lib/i18n";

const t = getDictionary(defaultLocale);
const doc = t.legal.security;

export const metadata: Metadata = {
  title: doc.meta.title,
  description: doc.meta.description,
  alternates: { canonical: "/security" },
  openGraph: {
    title: `${doc.meta.title} | AiTechX`,
    description: doc.meta.description,
    url: "/security",
  },
};

export default function SecurityPage() {
  return <LegalView page="security" />;
}
