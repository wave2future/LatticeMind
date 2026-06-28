import { SiteLayout } from "@/components/SiteLayout";
import { ContentHero } from "@/components/ContentHero";
import { SectionTitle } from "@/components/ui";
import { FilterGrid, type FilterItem, type FilterGroup } from "@/components/FilterGrid";
import { CaseCard } from "@/components/cards";
import { cases, caseScenarios } from "@/lib/data";
import { localizeCase } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict, term } from "@/lib/i18n";

export default function CasesPage() {
  const locale = getLocale();
  const t = getDict(locale);

  const items: FilterItem[] = cases.map((raw) => {
    const c = localizeCase(raw, locale);
    return {
      key: raw.slug,
      search: c.title + c.problem + c.tags.join("") + raw.title,
      group: raw.scenario,
      render: <CaseCard caseItem={c} />,
    };
  });
  const groups: FilterGroup[] = caseScenarios.map((c) => ({
    value: c === "全部" ? "全部" : c,
    label: c === "全部" ? t.common.all : term(c, locale),
  }));

  return (
    <SiteLayout wide>
      <ContentHero
        eyebrow={t.nav.cases}
        title={t.cases.title}
        description={t.cases.desc}
        primary={{ label: t.cases.newAnalysis, href: "/decision/new" }}
        secondary={{ label: t.common.browseModels, href: "/models" }}
      />
      <section className="mt-8">
        <SectionTitle title={t.cases.listTitle} />
        <FilterGrid
          items={items}
          groups={groups}
          searchPlaceholder={t.cases.searchPlaceholder}
          locale={locale}
        />
      </section>
    </SiteLayout>
  );
}
