import type { Metadata } from "next";
import { ProductDetail } from "@/components/sections/product-detail";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { SITE_URL } from "@/lib/i18n/config";

const t = getDictionary(defaultLocale);
const product = t.productPages.typingMaster;

export const metadata: Metadata = {
  title: product.meta.title,
  description: product.meta.description,
  alternates: { canonical: "/products/typing-master" },
  openGraph: {
    title: product.meta.title,
    description: product.meta.description,
    url: "/products/typing-master",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Typing Master",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web browser",
  description: product.meta.description,
  url: `${SITE_URL}/products/typing-master`,
  publisher: { "@type": "Organization", name: "AiTechX", url: SITE_URL },
  featureList: product.capabilities.map((item) => item.title),
};

export default function TypingMasterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProductDetail productKey="typingMaster" />
    </>
  );
}
