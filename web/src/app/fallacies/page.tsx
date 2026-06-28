import { SiteLayout } from "@/components/SiteLayout";
import { ContentHero } from "@/components/ContentHero";
import { SectionTitle } from "@/components/ui";
import { FilterGrid, type FilterItem, type FilterGroup } from "@/components/FilterGrid";
import { FallacyCard } from "@/components/cards";
import { fallacies, fallacyCategories } from "@/lib/data";
import { localizeFallacy } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict, term } from "@/lib/i18n";

export default function FallaciesPage() {
  const locale = getLocale();
  const t = getDict(locale);

  const items: FilterItem[] = fallacies.map((raw) => {
    const f = localizeFallacy(raw, locale);
    return {
      key: raw.slug,
      search: f.title + f.summary + f.example + raw.title,
      group: raw.category,
      render: <FallacyCard fallacy={f} />,
    };
  });
  const groups: FilterGroup[] = fallacyCategories.map((c) => ({
    value: c === "全部" ? "全部" : c,
    label: c === "全部" ? t.common.all : term(c, locale),
  }));

  return (
    <SiteLayout wide>
      <ContentHero
        eyebrow={t.nav.fallacies}
        title={t.fallacies.title}
        description={t.fallacies.desc}
        primary={{ label: t.fallacies.viewBiases, href: "/biases" }}
        secondary={{ label: t.common.browseModels, href: "/models" }}
      />
      <section className="mt-8">
        <SectionTitle title={t.fallacies.listTitle} />
        <FilterGrid
          items={items}
          groups={groups}
          searchPlaceholder={t.fallacies.searchPlaceholder}
          locale={locale}
        />
      </section>
    </SiteLayout>
  );
}
