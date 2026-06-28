"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumb } from "@/components/ui";
import { useLocale } from "@/components/LocaleProvider";
import { getDict } from "@/lib/i18n";
import { getReviewQuestions } from "@/lib/data/en/decision.en";

export default function ReviewPage() {
  const locale = useLocale();
  const t = getDict(locale);
  const router = useRouter();
  const { status } = useSession();
  const questions = getReviewQuestions(locale);
  const [answers, setAnswers] = useState<string[]>(questions.map(() => ""));
  const [saved, setSaved] = useState(false);

  const set = (i: number, v: string) => {
    setSaved(false);
    setAnswers((prev) => prev.map((a, idx) => (idx === i ? v : a)));
  };

  const onSave = () => {
    if (status === "loading") return;
    if (status !== "authenticated") {
      router.push(`/login?callbackUrl=${encodeURIComponent("/decision/review")}`);
      return;
    }
    // No backend yet — persist the draft locally and confirm.
    try {
      localStorage.setItem("decision-review-draft", JSON.stringify({ answers, savedAt: Date.now() }));
    } catch {
      /* ignore storage errors */
    }
    setSaved(true);
  };

  const done = answers.filter((a) => a.trim()).length;

  return (
    <SiteLayout>
      <Breadcrumb
        items={[
          { label: t.nav.home, href: "/" },
          { label: t.nav.decision, href: "/decision" },
          { label: t.decision.reviewTitle },
        ]}
      />
      <section className="mb-6">
        <h1 className="text-[32px] font-black text-ink">{t.decision.reviewTitle}</h1>
        <p className="lead mt-1">{t.decision.reviewDesc}</p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="panel space-y-5">
          {questions.map((q, i) => (
            <div key={i}>
              <label className="mb-1 block text-[15px] font-extrabold text-ink">{i + 1}. {q}</label>
              <textarea
                value={answers[i]}
                onChange={(e) => set(i, e.target.value)}
                rows={2}
                className="w-full rounded-[12px] border border-[#cbdcf2] bg-white p-3 text-[15px] text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
                placeholder={t.decision.writeReview}
              />
            </div>
          ))}
          <div className="flex flex-wrap items-center gap-3">
            <button className="btn-primary" onClick={onSave}>{t.decision.saveReview}</button>
            {saved && <span className="text-sm font-bold text-[#1d6b3e]">✓ {t.decision.reviewSaved}</span>}
            {status === "unauthenticated" && !saved && (
              <span className="text-sm text-muted">{t.decision.loginToSave}</span>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel">
            <h2 className="mb-3 text-[20px] font-extrabold text-ink">{t.decision.reviewProgress}</h2>
            <div className="progress"><div className="bar" style={{ width: `${Math.round((done / questions.length) * 100)}%` }} /></div>
            <p className="mt-2 text-sm text-muted">{t.decision.filled(done, questions.length)}</p>
          </div>
          <div className="panel" style={{ background: "linear-gradient(135deg,#eef4ff,#fff)" }}>
            <h3 className="mb-2 text-[16px] font-extrabold text-ink">{t.decision.reviewPoints}</h3>
            <ul className="space-y-2 text-[14px] text-[#35506f]">
              <li>• {t.decision.rp1}</li>
              <li>• {t.decision.rp2}</li>
              <li>• {t.decision.rp3}</li>
              <li>• {t.decision.rp4}</li>
            </ul>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
