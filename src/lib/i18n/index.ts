import { en } from "./en";
import { vi } from "./vi";
import { defaultLocale, type Locale } from "./config";
import type { Dictionary } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { en, vi };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export { defaultLocale, locales, isLocale } from "./config";
export {
  localeLabels,
  localeShortLabels,
  LOCALE_STORAGE_KEY,
  SITE_URL,
} from "./config";
export type { Locale } from "./config";
export type { Dictionary } from "./types";
