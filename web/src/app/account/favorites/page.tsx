import { AccountLayout } from "@/components/AccountLayout";
import { ModelCard, BiasCard } from "@/components/cards";
import { SectionTitle } from "@/components/ui";
import { models, misjudgments } from "@/lib/data";
import { localizeModel, localizeMisjudgment } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export default function FavoritesPage() {
  const locale = getLocale();
  const t = getDict(locale);

  return (
    <AccountLayout title={t.account.navFav}>
      <section>
        <SectionTitle title={t.account.favModels} link="/models" linkLabel={t.common.viewAll} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {models.slice(0, 6).map((m) => (
            <ModelCard key={m.slug} model={localizeModel(m, locale)} locale={locale} />
          ))}
        </div>
      </section>
      <section className="mt-8">
        <SectionTitle title={t.account.favBiases} link="/misjudgment" linkLabel={t.common.viewAll} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {misjudgments.slice(0, 3).map((b) => (
            <BiasCard key={b.slug} bias={localizeMisjudgment(b, locale)} href={`/misjudgment/${b.slug}`} />
          ))}
        </div>
      </section>
    </AccountLayout>
  );
}
