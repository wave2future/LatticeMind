import { cookies } from "next/headers";
import { LOCALE_COOKIE, defaultLocale, isLocale, type Locale } from "./config";

// Server-side locale resolution from cookie. Reading cookies opts pages into
// dynamic rendering, which is fine for this app.
export function getLocale(): Locale {
  const v = cookies().get(LOCALE_COOKIE)?.value;
  return isLocale(v) ? v : defaultLocale;
}
