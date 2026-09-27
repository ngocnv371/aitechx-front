import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/i18n/config";

// Required for `output: "export"` — metadata routes must opt into static generation.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
