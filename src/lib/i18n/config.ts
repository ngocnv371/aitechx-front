export const locales = ["vi", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "vi";

export const localeLabels: Record<Locale, string> = {
  vi: "Tiếng Việt",
  en: "English",
};

export const localeShortLabels: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
};

/** Public site origin. Override with NEXT_PUBLIC_SITE_URL (no trailing slash). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://aitechx.vn"
).replace(/\/$/, "");

/** Live Easy Slides app — every "make a quiz" CTA on the site links here. */
export const EASY_SLIDES_URL = "https://easyslides.aitechx.vn";

export const LOCALE_STORAGE_KEY = "aitechx.locale";

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" && (locales as readonly string[]).includes(value)
  );
}
