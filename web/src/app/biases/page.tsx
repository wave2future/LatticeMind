import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { ContentHero } from "@/components/ContentHero";
import { SectionTitle, IconBadge } from "@/components/ui";
import { FilterGrid, type FilterItem, type FilterGroup } from "@/components/FilterGrid";
import { BiasCard } from "@/components/cards";
import { biases, cognitiveStages, decisionRisks } from "@/lib/data";
import { localizeBias } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict, term } from "@/lib/i18n";

const stageColors: Record<string, string> = {
  信息获取: "#155eef",
  信息解释: "#0f9f96",
  价值判断: "#f58a2a",
  行动选择: "#7b61d1",
  社会影响: "#2781ca",
  结果复盘: "#3fa66b",
};

export default function BiasesPage() {
  const locale = getLocale();
  const t = getDict(locale);

  const items: FilterItem[] = biases.map((raw) => {
    const b = localizeBias(raw, locale);
    return {
      key: raw.slug,
      search: b.title + b.summary + b.triggers.join("") + raw.title,
      group: raw.stage,
      render: <BiasCard bias={b} href={`/biases/${raw.slug}`} />,
    };
  });
  const groups: FilterGroup[] = [
    { value: "全部", label: t.common.all },
    ...cognitiveStages.map((s) => ({ value: s, label: term(s, locale) })),
  ];

  return (
    <SiteLayout wide>
      <ContentHero
        eyebrow={t.nav.biases}
        title={t.biases.title}
        description={t.biases.desc}
        primary={{ label: t.biases.startCheck, href: "/decision/bias-check" }}
        secondary={{ label: t.biases.viewMis, href: "/misjudgment" }}
      />

      <section className="mt-8">
        <SectionTitle title={t.biases.byStage} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {cognitiveStages.map((stage) => {
            const list = biases.filter((b) => b.stage === stage);
            const color = stageColors[stage] ?? "#155eef";
            return (
              <div key={stage} className="panel">
                <div className="mb-3 flex items-center gap-3">
                  <IconBadge icon={term(stage, locale).slice(0, 1)} color={color} size={40} />
                  <h3 className="text-[18px] font-extrabold text-ink">{term(stage, locale)}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {list.map((b) => (
                    <Link key={b.slug} href={`/biases/${b.slug}`} className="pill hover:border-brand hover:text-brand">
                      {localizeBias(b, locale).title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-8">
        <SectionTitle title={t.biases.byRisk} />
        <div className="panel">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {decisionRisks.map((risk) => {
              const list = biases.filter((b) => b.risk === risk);
              return (
                <div key={risk} className="rounded-xl border border-line p-4">
                  <h4 className="mb-2 text-[15px] font-extrabold text-brand">{term(risk, locale)}</h4>
                  <ul className="space-y-1">
                    {list.map((b) => (
                      <li key={b.slug}>
                        <Link href={`/biases/${b.slug}`} className="text-[14px] text-[#35506f] hover:text-brand">
                          {localizeBias(b, locale).title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <SectionTitle title={t.biases.browseAll} />
        <FilterGrid
          items={items}
          groups={groups}
          searchPlaceholder={t.biases.searchPlaceholder}
          locale={locale}
        />
      </section>
    </SiteLayout>
  );
}
