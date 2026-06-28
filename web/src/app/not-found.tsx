import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export default function NotFound() {
  const t = getDict(getLocale());
  return (
    <SiteLayout>
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <div className="text-[80px] font-black text-brand">404</div>
        <h1 className="mb-2 text-[26px] font-extrabold text-ink">{t.notFound.title}</h1>
        <p className="mb-6 max-w-md text-muted">{t.notFound.body}</p>
        <div className="flex gap-3">
          <Link href="/" className="btn-primary">{t.common.backHome}</Link>
          <Link href="/models" className="btn-ghost">{t.common.browseModels}</Link>
        </div>
      </div>
    </SiteLayout>
  );
}
