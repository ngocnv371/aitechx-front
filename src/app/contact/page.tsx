import type { Metadata } from "next";
import { ContactView } from "@/components/pages/contact-view";
import { defaultLocale, getDictionary } from "@/lib/i18n";

const t = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: t.nav.contact,
  description: t.cta.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${t.nav.contact} | AiTechX`,
    description: t.cta.description,
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactView />;
}
