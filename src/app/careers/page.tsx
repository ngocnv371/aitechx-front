import type { Metadata } from "next";
import { CareersView } from "@/components/pages/careers-view";
import { defaultLocale, getDictionary } from "@/lib/i18n";

const t = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: t.careers.meta.title,
  description: t.careers.meta.description,
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return <CareersView />;
}
