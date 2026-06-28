import { SiteLayout } from "@/components/SiteLayout";
import { ContentHero } from "@/components/ContentHero";
import { SectionTitle } from "@/components/ui";
import { FilterGrid, type FilterItem, type FilterGroup } from "@/components/FilterGrid";
import { BiasCard } from "@/components/cards";
import { misjudgments, misjudgmentCategories } from "@/lib/data";
import { localizeMisjudgments } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict, term } from "@/lib/i18n";

export default function MisjudgmentPage() {
  const locale = getLocale();
  const t = getDict(locale);

  const items: FilterItem[] = misjudgments.map((raw) => {
    const b = localizeMisjudgments([raw], locale)[0];
    return {
      key: raw.slug,
      search: b.title + b.summary + b.triggers.join("") + raw.title + raw.summary,
      group: raw.category,
      render: <BiasCard bias={b} href={`/misjudgment/${raw.slug}`} />,
    };
  });
  const groups: FilterGroup[] = misjudgmentCategories.map((c) => ({
    value: c === "全部" ? "全部" : c,
    label: c === "全部" ? t.common.all : term(c, locale),
  }));

  return (
    <SiteLayout wide>
      <ContentHero
        eyebrow={t.nav.misjudgment}
        title={t.misjudgment.title}
        description={t.misjudgment.desc}
        primary={{ label: t.misjudgment.startCheck, href: "/decision/bias-check" }}
        secondary={{ label: t.misjudgment.learnPath, href: "/paths/psychology-of-misjudgment" }}
      />

      <section className="mt-8">
        <div className="panel mb-6">
          <h2 className="mb-2 text-[22px] font-extrabold text-ink">{t.misjudgment.introTitle}</h2>
          <p className="lead">{t.misjudgment.introBody}</p>
        </div>

        <SectionTitle title={t.misjudgment.listTitle} />
        <FilterGrid
          items={items}
          groups={groups}
          searchPlaceholder={t.misjudgment.searchPlaceholder}
          locale={locale}
        />
      </section>
    </SiteLayout>
  );
}
