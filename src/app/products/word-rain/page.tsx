import type { Metadata } from "next";
import { ProductDetail } from "@/components/sections/product-detail";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { SITE_URL } from "@/lib/i18n/config";

const t = getDictionary(defaultLocale);
const product = t.productPages.wordRain;

export const metadata: Metadata = {
  title: product.meta.title,
  description: product.meta.description,
  alternates: { canonical: "/products/word-rain" },
  openGraph: {
    title: product.meta.title,
    description: product.meta.description,
    url: "/products/word-rain",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Word Rain",
  applicationCategory: "GameApplication",
  operatingSystem: "Web browser",
  description: product.meta.description,
  url: `${SITE_URL}/products/word-rain`,
  publisher: { "@type": "Organization", name: "AiTechX", url: SITE_URL },
  featureList: product.capabilities.map((item) => item.title),
};

export default function WordRainPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProductDetail productKey="wordRain" />
    </>
  );
}
