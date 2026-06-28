import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumb, Pill, StepRow } from "@/components/ui";
import { RelatedModels, RelatedBiases } from "@/components/RelatedLinks";
import { GatedButton } from "@/components/GatedButton";
import { getModelScanDimensions } from "@/lib/data/en/decision.en";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { id: string } }) {
  return { title: `Report #${params.id}` };
}

const content = {
  zh: {
    summary: [
      "问题：AI 笔记 App 是否值得开发？",
      "场景：产品决策 · 综合难度中等",
      "核心判断：先用最小实验验证种子用户留存，再决定是否加大投入。",
    ],
    risks: ["被 AI 热潮裹挟的从众与过度自信", "只看成功竞品的幸存者偏差", "高估差异化、低估获客成本"],
    steps: ["用 50 个种子用户验证 7 日留存", "设定留存阈值作为停止条件", "记录事前预测，30 天后复盘"],
    summaryBody: "本次判断建议以最小可逆实验先验证关键假设（留存），避免在未验证前被热潮与过度自信推动而重投入。",
  },
  en: {
    summary: [
      "Problem: Is an AI note app worth building?",
      "Scenario: Product decision · Medium difficulty",
      "Core judgment: Validate seed-user retention with a minimal experiment before scaling investment.",
    ],
    risks: ["Herding and overconfidence swept along by the AI wave", "Survivorship bias of looking only at successful competitors", "Overrating differentiation, underrating acquisition cost"],
    steps: ["Validate 7-day retention with 50 seed users", "Set a retention threshold as the stop condition", "Record the prior prediction; review in 30 days"],
    summaryBody: "This judgment recommends validating the key assumption (retention) with a minimal reversible experiment first, avoiding heavy investment driven by hype and overconfidence before validation.",
  },
};

export default function RecordPage({ params }: { params: { id: string } }) {
  const locale = getLocale();
  const t = getDict(locale);
  const c = content[locale];
  const dims = getModelScanDimensions(locale);

  return (
    <SiteLayout>
      <Breadcrumb
        items={[
          { label: t.nav.home, href: "/" },
          { label: t.nav.decision, href: "/decision" },
          { label: `${t.decision.reportTitle} #${params.id}` },
        ]}
      />

      <section className="panel !p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-[30px] font-black text-ink">{t.decision.reportTitle}</h1>
            <div className="mt-2 flex gap-2">
              <Pill>{t.decision.scProduct}</Pill>
              <Pill>{t.decision.statusDone}</Pill>
              <Pill>2026-06-20</Pill>
            </div>
          </div>
          <GatedButton label={t.decision.exportPdf} className="btn-primary" action="print" />
        </div>
        <div className="mt-5 space-y-2">
          {c.summary.map((s) => (
            <p key={s} className="text-[15px] text-[#35506f]">{s}</p>
          ))}
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <div className="panel">
            <h2 className="mb-3 text-[20px] font-extrabold text-ink">{t.decision.scanSection}</h2>
            <table className="data-table">
              <tbody>
                {dims.map((d) => (
                  <tr key={d.discipline}>
                    <th className="w-24">{d.discipline}</th>
                    <td>{d.models}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="panel">
            <h2 className="mb-3 text-[20px] font-extrabold text-ink">{t.decision.mainRisks}</h2>
            <ul className="space-y-2">
              {c.risks.map((r) => (
                <li key={r} className="flex gap-2 text-[15px] text-[#8a3030]"><span>⚠</span>{r}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h2 className="mb-3 text-[20px] font-extrabold text-ink">{t.decision.checklistNext}</h2>
            <div className="space-y-3">
              {c.steps.map((s, i) => (
                <StepRow key={i} no={i + 1}>{s}</StepRow>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel">
            <h2 className="mb-3 text-[20px] font-extrabold text-ink">{t.decision.reportSummary}</h2>
            <p className="text-[15px] leading-relaxed text-muted">{c.summaryBody}</p>
          </div>
          <div className="panel">
            <h3 className="mb-3 text-[16px] font-extrabold text-ink">{t.decision.appliedModels}</h3>
            <RelatedModels slugs={["opportunity-cost", "expected-value", "moat", "circle-of-competence"]} locale={locale} />
          </div>
          <div className="panel">
            <h3 className="mb-3 text-[16px] font-extrabold text-ink">{t.decision.watchBiases}</h3>
            <RelatedBiases slugs={["confirmation-bias", "overconfidence", "herd-mentality", "survivorship-bias"]} locale={locale} />
          </div>
          <Link href="/decision/review" className="btn-ghost w-full">{t.decision.enterReview}</Link>
        </div>
      </div>
    </SiteLayout>
  );
}
