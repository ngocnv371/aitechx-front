import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/i18n/config";

// Required for `output: "export"` — metadata routes must opt into static generation.
export const dynamic = "force-static";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}> = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  {
    path: "/products/typing-master",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  { path: "/products/workshop", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/word-rain", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/easy-quiz", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Mirrors `trailingSlash: true` in next.config.ts so sitemap entries point at
  // the final URL instead of taking a redirect hop.
  const absolute = (path: string) =>
    path === "" ? `${SITE_URL}/` : `${SITE_URL}${path}/`;

  return routes.map((route) => ({
    url: absolute(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        vi: absolute(route.path),
        en: `${absolute(route.path)}?lang=en`,
      },
    },
  }));
}
