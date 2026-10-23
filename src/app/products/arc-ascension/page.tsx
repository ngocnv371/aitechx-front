import type { Metadata } from "next";
import { ProductDetail } from "@/components/sections/product-detail";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { SITE_URL } from "@/lib/i18n/config";

const t = getDictionary(defaultLocale);
const product = t.productPages.arcAscension;

export const metadata: Metadata = {
  title: product.meta.title,
  description: product.meta.description,
  keywords: product.meta.keywords,
  alternates: { canonical: "/products/arc-ascension" },
  openGraph: {
    title: product.meta.title,
    description: product.meta.description,
    url: "/products/arc-ascension",
    type: "website",
    images: [{ url: "/products/arc-ascension-og.png", width: 1200, height: 630, alt: "ARC: Ascension" }],
  },
  twitter: { card: "summary_large_image", images: ["/products/arc-ascension-og.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "ARC: Ascension",
  applicationCategory: "GameApplication",
  genre: ["Card game", "Role-playing"],
  gamePlatform: ["Windows", "Android"],
  operatingSystem: "Windows, Android",
  description: product.meta.description,
  url: `${SITE_URL}/products/arc-ascension`,
  inLanguage: ["vi", "en"],
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: 0,
    priceCurrency: "VND",
  },
  image: `${SITE_URL}/products/arc-ascension-og.png`,
  publisher: { "@type": "Organization", name: "AiTechX", url: SITE_URL },
  featureList: product.capabilities.map((item) => item.title),
};

export default function ArcAscensionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProductDetail productKey="arcAscension" />
    </>
  );
}
