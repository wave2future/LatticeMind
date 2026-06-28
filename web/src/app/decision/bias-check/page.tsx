"use client";

import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumb } from "@/components/ui";
import { useLocale } from "@/components/LocaleProvider";
import { getDict } from "@/lib/i18n";
import { getBiasCheckItems } from "@/lib/data/en/decision.en";

type Answer = "yes" | "no" | null;

export default function BiasCheckPage() {
  const locale = useLocale();
  const t = getDict(locale);
  const items = getBiasCheckItems(locale);
  const [answers, setAnswers] = useState<Answer[]>(items.map(() => null));

  const set = (i: number, v: Answer) =>
    setAnswers((prev) => prev.map((a, idx) => (idx === i ? v : a)));

  const { answered, warnings } = useMemo(() => {
    const answered = answers.filter((a) => a !== null).length;
    const flagOnNo = new Set([2, 9]);
    const warnings = answers.filter((a, i) => (flagOnNo.has(i) ? a === "no" : a === "yes")).length;
    return { answered, warnings };
  }, [answers]);

  const progress = Math.round((answered / items.length) * 100);

  return (
    <SiteLayout>
      <Breadcrumb
        items={[
          { label: t.nav.home, href: "/" },
          { label: t.nav.decision, href: "/decision" },
          { label: t.decision.biasTitle },
        ]}
      />
      <section className="mb-6">
        <h1 className="text-[32px] font-black text-ink">{t.decision.biasTitle}</h1>
        <p className="lead mt-1">{t.decision.biasDesc}</p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="panel">
          <div className="space-y-3">
            {items.map((item, i) => {
              const flagOnNo = i === 2 || i === 9;
              const flagged = flagOnNo ? answers[i] === "no" : answers[i] === "yes";
              return (
                <div
                  key={item.key}
                  className={`flex items-center justify-between gap-4 rounded-xl border p-4 ${
                    flagged ? "border-[#f0b9b9] bg-[#fff6f6]" : "border-line bg-white"
                  }`}
                >
                  <div>
                    <span className="mr-2 rounded-md bg-[#edf5ff] px-2 py-1 text-xs font-bold text-brand">{item.key}</span>
                    <span className="text-[15px] font-bold text-ink">{item.q}</span>
                  </div>
                  <div className="flex flex-shrink-0 gap-2">
                    <button
                      onClick={() => set(i, "yes")}
                      className={`rounded-lg px-3 py-1 text-sm font-bold ${answers[i] === "yes" ? "bg-brand text-white" : "border border-line text-muted"}`}
                    >
                      {t.decision.yes}
                    </button>
                    <button
                      onClick={() => set(i, "no")}
                      className={`rounded-lg px-3 py-1 text-sm font-bold ${answers[i] === "no" ? "bg-brand text-white" : "border border-line text-muted"}`}
                    >
                      {t.decision.no}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel">
            <h2 className="mb-3 text-[20px] font-extrabold text-ink">{t.decision.checkProgress}</h2>
            <div className="progress"><div className="bar" style={{ width: `${progress}%` }} /></div>
            <p className="mt-2 text-sm text-muted">{t.decision.answered(answered, items.length)}</p>
          </div>
          <div
            className="panel"
            style={{ background: warnings > 0 ? "linear-gradient(135deg,#fff1f1,#fff)" : "linear-gradient(135deg,#eefcf3,#fff)" }}
          >
            <h2 className="mb-2 text-[20px] font-extrabold text-ink">{t.decision.riskHint}</h2>
            {answered === 0 ? (
              <p className="text-[15px] text-muted">{t.decision.riskNone}</p>
            ) : warnings > 0 ? (
              <p className="text-[15px] leading-relaxed text-[#8a3030]">{t.decision.riskWarn(warnings)}</p>
            ) : (
              <p className="text-[15px] leading-relaxed text-[#1d6b3e]">{t.decision.riskOk}</p>
            )}
          </div>
          <div className="panel">
            <h3 className="mb-2 text-[16px] font-extrabold text-ink">{t.decision.nextSuggest}</h3>
            <ul className="space-y-2 text-[14px] text-[#35506f]">
              <li>• {t.decision.bs1}</li>
              <li>• {t.decision.bs2}</li>
              <li>• {t.decision.bs3}</li>
            </ul>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
