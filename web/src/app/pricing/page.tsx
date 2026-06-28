import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionTitle } from "@/components/ui";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

const plansByLocale = {
  zh: [
    { name: "免费版", price: "¥0", periodKey: "free", desc: "适合开始探索的个人学习者。", features: ["浏览首页与部分模型", "完整 28 个误判心理倾向", "每日 1 次决策检查", "基础知识图谱", "学习路径预览"], cta: "免费开始", highlight: false },
    { name: "Pro 版", price: "¥49", periodKey: "perMonth", desc: "适合追求专业决策能力的深度用户。", features: ["完整模型库与偏差库", "无限决策分析", "AI 反误判教练", "高级案例库", "决策报告导出", "学习路径进度追踪"], cta: "升级 Pro", highlight: true },
    { name: "企业版", price: "定制", periodKey: "byTeam", desc: "适合需要团队决策训练的组织。", features: ["团队空间与协作", "企业决策模板", "内部案例库", "团队复盘工具", "组织偏差检测", "管理者决策训练营"], cta: "联系我们", highlight: false },
  ],
  en: [
    { name: "Free", price: "$0", periodKey: "free", desc: "For individuals starting to explore.", features: ["Home and selected models", "All 28 misjudgment tendencies", "1 decision check per day", "Basic knowledge graph", "Learning path preview"], cta: "Start free", highlight: false },
    { name: "Pro", price: "$7", periodKey: "perMonth", desc: "For power users seeking professional decision skill.", features: ["Full model & bias library", "Unlimited decision analysis", "AI anti-misjudgment coach", "Advanced case library", "Decision report export", "Learning path progress"], cta: "Upgrade to Pro", highlight: true },
    { name: "Enterprise", price: "Custom", periodKey: "byTeam", desc: "For organizations needing team decision training.", features: ["Team spaces & collaboration", "Enterprise decision templates", "Internal case library", "Team review tools", "Organizational bias detection", "Manager decision bootcamp"], cta: "Contact us", highlight: false },
  ],
} as const;

const faqByLocale = {
  zh: [
    ["免费版可以一直用吗？", "可以。免费版永久可用，包含完整的 28 个误判心理倾向和基础图谱。"],
    ["Pro 版支持随时取消吗？", "支持。你可以随时取消订阅，已付费周期内继续享受全部权益。"],
    ["AI 反误判教练是什么？", "它会检测你表达中的偏差线索，提醒心理倾向，并生成反方观点与冷静期建议。"],
    ["企业版如何计费？", "按团队规模定制，包含团队空间、内部案例库与组织偏差检测，请联系我们。"],
  ],
  en: [
    ["Can I use the free plan forever?", "Yes. The free plan is permanent and includes all 28 misjudgment tendencies and the basic graph."],
    ["Can I cancel Pro anytime?", "Yes. Cancel anytime and keep full access through the paid period."],
    ["What is the AI anti-misjudgment coach?", "It detects bias cues in your wording, flags tendencies, and generates counter-views and cooling-off advice."],
    ["How is Enterprise priced?", "Custom by team size, including team spaces, an internal case library and organizational bias detection — contact us."],
  ],
};

export default function PricingPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const plans = plansByLocale[locale];
  const faqs = faqByLocale[locale];

  return (
    <SiteLayout>
      <section className="py-8 text-center">
        <h1 className="text-[40px] font-black text-ink">{t.pricing.title}</h1>
        <p className="lead mx-auto mt-3 max-w-2xl">{t.pricing.lead}</p>
      </section>

      <section>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`panel relative flex flex-col ${p.highlight ? "ring-2 ring-brand" : ""}`}
              style={p.highlight ? { boxShadow: "0 18px 45px rgba(29, 78, 216, .18)" } : {}}
            >
              {p.highlight && (
                <span className="absolute -top-3 right-6 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
                  {t.pricing.popular}
                </span>
              )}
              <h3 className="text-[22px] font-black text-ink">{p.name}</h3>
              <p className="mt-1 text-sm text-muted">{p.desc}</p>
              <div className="my-5">
                <span className="text-[40px] font-black text-ink">{p.price}</span>
                <span className="ml-2 text-sm text-muted">{t.pricing[p.periodKey]}</span>
              </div>
              <ul className="mb-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[15px] text-[#35506f]">
                    <span className="text-brand">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/register" className={p.highlight ? "btn-primary w-full" : "btn-ghost w-full"}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="panel">
          <SectionTitle title={t.pricing.faqTitle} />
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map(([q, a]) => (
              <div key={q}>
                <h4 className="mb-1 text-[16px] font-extrabold text-ink">{q}</h4>
                <p className="text-[15px] leading-relaxed text-muted">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
