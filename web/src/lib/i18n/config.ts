export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh";

export const LOCALE_COOKIE = "lang";

export const localeNames: Record<Locale, string> = {
  zh: "中文",
  en: "English",
};

export function isLocale(v: string | undefined | null): v is Locale {
  return !!v && (locales as readonly string[]).includes(v);
}
