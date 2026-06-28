import type { Metadata } from "next";
import "./globals.css";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";
import { LocaleProvider } from "@/components/LocaleProvider";
import { AuthProvider } from "@/components/AuthProvider";

export function generateMetadata(): Metadata {
  const t = getDict(getLocale());
  return {
    title: { default: t.meta.title, template: `%s · ${t.brand.name}` },
    description: t.meta.description,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getLocale();
  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"}>
      <body>
        <AuthProvider>
          <LocaleProvider locale={locale}>{children}</LocaleProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
