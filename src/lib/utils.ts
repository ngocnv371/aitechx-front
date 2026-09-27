import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number with locale-aware grouping. */
export function formatNumber(value: number, locale: string = "vi-VN") {
  const isFraction = !Number.isInteger(value);
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: isFraction ? 2 : 0,
    maximumFractionDigits: isFraction ? 2 : 0,
  }).format(value);
}
