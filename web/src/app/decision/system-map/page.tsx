"use client";

import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumb } from "@/components/ui";
import { KnowledgeGraph } from "@/components/KnowledgeGraph";
import { useLocale } from "@/components/LocaleProvider";
import { getDict } from "@/lib/i18n";
import { getSystemMapVariables } from "@/lib/data/en/decision.en";

const resultsByLocale = {
  zh: [
    { label: "增强回路", desc: "口碑带来更多用户，更多用户产生更多口碑。", color: "#155eef" },
    { label: "平衡回路", desc: "获客成本上升抑制了无限增长。", color: "#0f9f96" },
    { label: "延迟", desc: "内容积累到自然流量转化存在数月周期。", color: "#f58a2a" },
    { label: "瓶颈变量", desc: "激活率是当前限制整体增长的关键环节。", color: "#7b61d1" },
    { label: "杠杆点", desc: "提升激活与早期留存的反馈，撬动整体增长。", color: "#3fa66b" },
  ],
  en: [
    { label: "Reinforcing loop", desc: "Word of mouth brings more users, who generate more word of mouth.", color: "#155eef" },
    { label: "Balancing loop", desc: "Rising acquisition cost curbs unlimited growth.", color: "#0f9f96" },
    { label: "Delay", desc: "Content accumulation to organic-traffic conversion takes months.", color: "#f58a2a" },
    { label: "Bottleneck variable", desc: "Activation rate is the key link limiting overall growth now.", color: "#7b61d1" },
    { label: "Leverage point", desc: "Improving activation and early-retention feedback moves overall growth.", color: "#3fa66b" },
  ],
};

export default function SystemMapPage() {
  const locale = useLocale();
  const t = getDict(locale);
  const variables = getSystemMapVariables(locale);
  const results = resultsByLocale[locale];
  const [problem, setProblem] = useState(locale === "en" ? "Company user growth is slowing" : "公司用户增长变慢");
  const [selected, setSelected] = useState<string[]>(variables.slice(0, 5));

  const toggle = (v: string) =>
    setSelected((prev) => (prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]));

  return (
    <SiteLayout>
      <Breadcrumb
        items={[
          { label: t.nav.home, href: "/" },
          { label: t.nav.decision, href: "/decision" },
          { label: t.decision.sysTitle },
        ]}
      />
      <section className="mb-6">
        <h1 className="text-[32px] font-black text-ink">{t.decision.sysTitle}</h1>
        <p className="lead mt-1">{t.decision.sysDesc}</p>
      </section>

      <div className="panel mb-6">
        <label className="mb-2 block text-[15px] font-extrabold text-ink">{t.decision.analyzing}</label>
        <input value={problem} onChange={(e) => setProblem(e.target.value)} className="field" />
        <p className="mb-2 mt-4 text-[15px] font-extrabold text-ink">{t.decision.selectVars}</p>
        <div className="flex flex-wrap gap-2">
          {variables.map((v) => (
            <button
              key={v}
              onClick={() => toggle(v)}
              className={`rounded-full px-3 py-2 text-sm font-bold transition-colors ${
                selected.includes(v) ? "bg-brand text-white" : "border border-line bg-white text-[#37516f] hover:border-[#9db9df]"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="panel">
          <h2 className="mb-3 text-[20px] font-extrabold text-ink">{t.decision.loopDiagram}</h2>
          <KnowledgeGraph compact />
          <p className="mt-3 text-[13px] text-muted">{t.decision.varsIncluded(selected.length)}</p>
        </div>
        <div className="panel">
          <h2 className="mb-3 text-[20px] font-extrabold text-ink">{t.decision.identifyResult}</h2>
          <div className="space-y-4">
            {results.map((r) => (
              <div key={r.label} className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full" style={{ background: r.color }} />
                <div>
                  <h3 className="text-[15px] font-extrabold text-ink">{r.label}</h3>
                  <p className="text-[14px] text-muted">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
