import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SkipLink } from "@/components/layout/skip-link";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SITE_URL } from "@/lib/i18n/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AiTechX — Công ty phần mềm lấy AI làm trọng tâm",
    template: "%s | AiTechX",
  },
  description:
    "AiTechX xây dựng phần mềm ứng dụng AI cho doanh nghiệp: hệ thống AI theo yêu cầu, nền tảng luyện gõ Typing Master, giải pháp quản trị sản xuất Workshop và trò chơi luyện gõ Word Rain.",
  keywords: [
    "AiTechX",
    "aitechx.vn",
    "công ty phần mềm AI",
    "phần mềm quản lý sản xuất",
    "luyện gõ bàn phím",
    "AI Việt Nam",
  ],
  authors: [{ name: "AiTechX", url: SITE_URL }],
  creator: "AiTechX",
  applicationName: "AiTechX",
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
      "en-US": "/?lang=en",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "AiTechX",
    locale: "vi_VN",
    title: "AiTechX — Phần mềm biết suy nghĩ, sản phẩm đủ sức mở rộng",
    description:
      "Kỹ nghệ phần mềm lấy AI làm trọng tâm: sản phẩm AI theo yêu cầu, Typing Master, Workshop và Word Rain.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiTechX — AI-first software engineering",
    description:
      "We design and ship AI-powered software for ambitious teams — education and manufacturing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#04060f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="min-h-dvh antialiased">
        <LocaleProvider>
          <SkipLink />
          <ScrollProgress />
          <Navbar />
          <main id="main-content" className="relative">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
