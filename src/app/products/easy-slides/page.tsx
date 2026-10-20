import type { Metadata } from "next";
import { ProductDetail } from "@/components/sections/product-detail";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { EASY_SLIDES_URL, SITE_URL } from "@/lib/i18n/config";

const t = getDictionary(defaultLocale);
const product = t.productPages.easySlides;

export const metadata: Metadata = {
  title: product.meta.title,
  description: product.meta.description,
  keywords: product.meta.keywords,
  alternates: { canonical: "/products/easy-slides" },
  openGraph: {
    title: product.meta.title,
    description: product.meta.description,
    url: "/products/easy-slides",
    type: "website",
    images: [{ url: "/products/easy-slides-og.png", width: 1200, height: 630, alt: "Easy Slides" }],
  },
  twitter: { card: "summary_large_image", images: ["/products/easy-slides-og.png"] },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Easy Slides",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web browser",
  description: product.meta.description,
  url: `${SITE_URL}/products/easy-slides`,
  sameAs: [EASY_SLIDES_URL],
  inLanguage: ["vi", "en"],
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: 0,
    priceCurrency: "VND",
    url: EASY_SLIDES_URL,
  },
  audience: { "@type": "EducationalAudience", educationalRole: "teacher" },
  image: `${SITE_URL}/products/easy-slides-og.png`,
  publisher: { "@type": "Organization", name: "AiTechX", url: SITE_URL },
  featureList: product.capabilities.map((item) => item.title),
};

export default function EasySlidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProductDetail productKey="easySlides" />
    </>
  );
}
