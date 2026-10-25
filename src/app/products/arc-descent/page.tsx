import type { Metadata } from "next";
import { ProductDetail } from "@/components/sections/product-detail";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { SITE_URL } from "@/lib/i18n/config";

const t = getDictionary(defaultLocale);
const product = t.productPages.arcDescent;

export const metadata: Metadata = {
  title: product.meta.title,
  description: product.meta.description,
  keywords: product.meta.keywords,
  alternates: { canonical: "/products/arc-descent" },
  openGraph: {
    title: product.meta.title,
    description: product.meta.description,
    url: "/products/arc-descent",
    type: "website",
    images: [{ url: "/products/arc-descent-og.png", width: 1200, height: 630, alt: "ARC: Descent" }],
  },
  twitter: { card: "summary_large_image", images: ["/products/arc-descent-og.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: "ARC: Descent",
  applicationCategory: "GameApplication",
  genre: ["Tower defense", "Card game"],
  gamePlatform: ["Windows", "Android"],
  operatingSystem: "Windows, Android",
  description: product.meta.description,
  url: `${SITE_URL}/products/arc-descent`,
  inLanguage: ["vi", "en"],
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: 0,
    priceCurrency: "VND",
  },
  image: `${SITE_URL}/products/arc-descent-og.png`,
  publisher: { "@type": "Organization", name: "AiTechX", url: SITE_URL },
  featureList: product.capabilities.map((item) => item.title),
};

export default function ArcDescentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProductDetail productKey="arcDescent" />
    </>
  );
}
