"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumb, StepRow } from "@/components/ui";
import { useLocale } from "@/components/LocaleProvider";
import { getDict } from "@/lib/i18n";
import { getModelScanDimensions } from "@/lib/data/en/decision.en";

const outputStructureByLocale = {
  zh: ["问题定义", "关键变量", "适用模型", "不适用模型", "主要风险", "验证实验", "决策清单", "下一步行动"],
  en: ["Problem definition", "Key variables", "Applicable models", "Inapplicable models", "Main risks", "Validation experiment", "Decision checklist", "Next actions"],
};
const nextStepsByLocale = {
  zh: ["先验证最关键的假设（如真实痛点或留存）", "设计一个最小可逆实验", "设置明确的停止条件", "记录事前预测，便于日后复盘"],
  en: ["Validate the most critical assumption first (e.g., real pain or retention)", "Design a minimal reversible experiment", "Set explicit stop conditions", "Record the prior prediction for later review"],
};

export default function ModelScanPage() {
  const locale = useLocale();
  const t = getDict(locale);
  const [problem, setProblem] = useState(locale === "en" ? "Is an AI app worth building?" : "一个 AI App 是否值得开发？");
  const dimensions = getModelScanDimensions(locale);
  const outputStructure = outputStructureByLocale[locale];
  const nextSteps = nextStepsByLocale[locale];

  return (
    <SiteLayout>
      <Breadcrumb
        items={[
          { label: t.nav.home, href: "/" },
          { label: t.nav.decision, href: "/decision" },
          { label: t.decision.scanTitle },
        ]}
      />
      <section className="mb-6">
        <h1 className="text-[32px] font-black text-ink">{t.decision.scanTitle}</h1>
        <p className="lead mt-1">{t.decision.scanDesc}</p>
      </section>

      <div className="panel mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <input value={problem} onChange={(e) => setProblem(e.target.value)} className="field flex-1" placeholder={t.decision.scanInput} />
          <button className="btn-primary">{t.decision.scanBtn}</button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="panel">
          <h2 className="mb-3 text-[20px] font-extrabold text-ink">{t.decision.scanOutput}</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th className="w-28">{t.decision.colDiscipline}</th>
                <th>{t.decision.colRecModels}</th>
              </tr>
            </thead>
            <tbody>
              {dimensions.map((d) => (
                <tr key={d.discipline}>
                  <th>{d.discipline}</th>
                  <td>{d.models}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-6">
          <div className="panel">
            <h2 className="mb-3 text-[20px] font-extrabold text-ink">{t.decision.outputStructure}</h2>
            <div className="flex flex-wrap gap-2">
              {outputStructure.map((o, i) => (
                <span key={o} className="pill">{i + 1}. {o}</span>
              ))}
            </div>
          </div>
          <div className="panel">
            <h2 className="mb-3 text-[20px] font-extrabold text-ink">{t.decision.nextActions}</h2>
            <div className="space-y-3">
              {nextSteps.map((s, i) => (
                <StepRow key={i} no={i + 1}>{s}</StepRow>
              ))}
            </div>
          </div>
          <div className="panel" style={{ background: "linear-gradient(135deg,#eef4ff,#fff)" }}>
            <p className="mb-3 text-[14px] text-muted">{t.decision.scanCont}</p>
            <div className="flex flex-col gap-2">
              <Link href="/decision/bias-check" className="btn-ghost w-full">{t.decision.nextBiasCheck}</Link>
              <Link href="/decision/system-map" className="btn-ghost w-full">{t.decision.nextSysMap}</Link>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
