// NOTE: getLocale lives in "./locale" (server-only, uses next/headers) and must
// be imported directly from "@/lib/i18n/locale" by server components — never
// re-export it here, or client components importing this index would break.
export * from "./config";
export * from "./dict";
export * from "./terms";
