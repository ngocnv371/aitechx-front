import type { Metadata } from "next";
import { LegalView } from "@/components/pages/legal-view";
import { defaultLocale, getDictionary } from "@/lib/i18n";

const t = getDictionary(defaultLocale);
const doc = t.legal.privacy;

export const metadata: Metadata = {
  title: doc.meta.title,
  description: doc.meta.description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `${doc.meta.title} | AiTechX`,
    description: doc.meta.description,
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return <LegalView page="privacy" />;
}
