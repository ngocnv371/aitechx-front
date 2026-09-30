import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Products } from "@/components/sections/products";
import { Solutions } from "@/components/sections/solutions";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustStats } from "@/components/sections/trust-stats";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { SITE_URL } from "@/lib/i18n/config";

export const metadata: Metadata = {
  title: {
    absolute: "AiTechX — Phần mềm biết suy nghĩ, sản phẩm đủ sức mở rộng",
  },
  description: getDictionary(defaultLocale).meta.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const t = getDictionary(defaultLocale);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AiTechX",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    email: t.cta.info.email,
    description: t.meta.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
      addressLocality: "Hanoi",
    },
    sameAs: ["https://aitechx.vn"],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Typing Master",
          applicationCategory: "EducationalApplication",
          operatingSystem: "Web",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Workshop",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Word Rain",
          applicationCategory: "GameApplication",
          operatingSystem: "Web",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Easy Quiz",
          applicationCategory: "EducationalApplication",
          operatingSystem: "Web",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Hero />
      <TrustStats />
      <Products />
      <Features />
      <Solutions />
      <Process />
      <Testimonials />
      <Pricing />
      <Faq />
      <ContactSection />
    </>
  );
}
