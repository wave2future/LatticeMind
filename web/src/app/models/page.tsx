import { SiteLayout } from "@/components/SiteLayout";
import { ModelsBrowser } from "@/components/ModelsBrowser";
import { models, modelCategories } from "@/lib/data";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export default function ModelsPage() {
  const locale = getLocale();
  const t = getDict(locale);
  return (
    <SiteLayout wide>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="flex items-center gap-3 text-[38px] font-black text-ink">
            {t.models.title}
            <span className="rounded-full bg-[#edf5ff] px-3 py-1 text-sm font-bold text-brand">
              {t.models.countModels(models.length)}
            </span>
          </h1>
          <p className="lead mt-1 text-[17px]">{t.models.subtitle}</p>
        </div>
      </div>
      <ModelsBrowser models={models} categories={modelCategories} locale={locale} />
    </SiteLayout>
  );
}
