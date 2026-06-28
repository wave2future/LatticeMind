"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumb } from "@/components/ui";
import { useLocale } from "@/components/LocaleProvider";
import { getDict } from "@/lib/i18n";

export default function NewDecisionPage() {
  const locale = useLocale();
  const t = getDict(locale);
  const [problem, setProblem] = useState(
    locale === "en" ? "I want to judge whether a product is worth building." : "我要判断一个产品是否值得做。"
  );
  const [scenario, setScenario] = useState("product");

  const scenarios = [
    { key: "product", label: t.decision.scProduct, desc: t.decision.scProductD },
    { key: "investment", label: t.decision.scInvest, desc: t.decision.scInvestD },
    { key: "management", label: t.decision.scManage, desc: t.decision.scManageD },
  ];
  const fields = [t.decision.field1, t.decision.field2, t.decision.field3, t.decision.field4, t.decision.field5];

  return (
    <SiteLayout>
      <Breadcrumb
        items={[
          { label: t.nav.home, href: "/" },
          { label: t.nav.decision, href: "/decision" },
          { label: t.decision.newBtn },
        ]}
      />
      <section className="mb-6">
        <h1 className="text-[34px] font-black text-ink">{t.decision.newTitle}</h1>
        <p className="lead mt-1">{t.decision.newDesc}</p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="panel">
          <h2 className="mb-3 text-[20px] font-extrabold text-ink">{t.decision.describeProblem}</h2>
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            rows={4}
            className="w-full rounded-[12px] border border-[#cbdcf2] bg-white p-4 text-[15px] text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
          />
          <h3 className="mb-2 mt-5 text-[16px] font-extrabold text-ink">{t.decision.chooseScenario}</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {scenarios.map((s) => (
              <button
                key={s.key}
                onClick={() => setScenario(s.key)}
                className={`rounded-[12px] border p-3 text-left transition-all ${
                  scenario === s.key ? "border-brand bg-[#edf5ff]" : "border-line bg-white hover:border-[#9db9df]"
                }`}
              >
                <div className="text-[15px] font-extrabold text-ink">{s.label}</div>
                <div className="text-[12px] text-muted">{s.desc}</div>
              </button>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/decision/model-scan?s=${scenario}`} className="btn-primary">
              {t.decision.startScan}
            </Link>
            <Link href="/decision/bias-check" className="btn-ghost">
              {t.decision.firstBiasCheck}
            </Link>
          </div>
        </div>

        <div className="panel">
          <h2 className="mb-3 text-[20px] font-extrabold text-ink">{t.decision.inputTips}</h2>
          <p className="mb-4 text-[14px] leading-relaxed text-muted">{t.decision.inputTipsDesc}</p>
          <div className="space-y-2">
            {fields.map((f) => (
              <div key={f} className="side-item active">{f}</div>
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
