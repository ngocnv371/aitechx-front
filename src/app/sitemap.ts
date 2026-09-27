import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/i18n/config";

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
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        vi: `${SITE_URL}${route.path}`,
        en: `${SITE_URL}${route.path}?lang=en`,
      },
    },
  }));
}
