import { SiteLayout } from "@/components/SiteLayout";
import { ContentHero } from "@/components/ContentHero";
import { SectionTitle, StepRow } from "@/components/ui";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

const layersByLocale = {
  zh: [
    { title: "底层学科", desc: "数学、物理、化学、生物、心理、经济、金融、系统、历史、哲学等。" },
    { title: "第一性原理", desc: "稀缺、因果、反馈、熵增、进化、激励、概率、复利、交换、信任。" },
    { title: "思维模型", desc: "机会成本、安全边际、反馈回路、反演、贝叶斯、均值回归、杠杆、瓶颈。" },
    { title: "误判心理学", desc: "损失厌恶、确认偏误、权威误导、社会认同、自利偏差、锚定、剥夺反应。" },
    { title: "认知偏差与谬误", desc: "幸存者偏差、结果偏差、基本归因错误、稻草人、错误因果、非黑即白。" },
    { title: "系统工具", desc: "冰山模型、因果回路图、系统原型、杠杆点、延迟、存量流量。" },
    { title: "决策场景", desc: "产品、投资、创业、管理、学习、职业、消费、人际、健康。" },
    { title: "清单与行动", desc: "多模型扫描、反误判清单、风险清单、证据清单、复盘模板。" },
  ],
  en: [
    { title: "Foundational disciplines", desc: "Math, physics, chemistry, biology, psychology, economics, finance, systems, history, philosophy." },
    { title: "First principles", desc: "Scarcity, causality, feedback, entropy, evolution, incentives, probability, compounding, exchange, trust." },
    { title: "Mental models", desc: "Opportunity cost, margin of safety, feedback loops, inversion, Bayes, mean reversion, leverage, bottleneck." },
    { title: "Psychology of misjudgment", desc: "Loss aversion, confirmation bias, authority, social proof, self-serving bias, anchoring, deprivation." },
    { title: "Cognitive biases & fallacies", desc: "Survivorship bias, outcome bias, fundamental attribution error, straw man, false cause, false dilemma." },
    { title: "Systems tools", desc: "Iceberg model, causal loop diagrams, archetypes, leverage points, delay, stock-flow." },
    { title: "Decision scenarios", desc: "Product, investing, startups, management, learning, career, consumption, relationships, health." },
    { title: "Checklists & action", desc: "Multi-model scans, anti-misjudgment checklists, risk lists, evidence lists, review templates." },
  ],
};

const flowByLocale = {
  zh: [
    { t: "第一性原理", d: "从底层学科提炼不可再分的基本规律。" },
    { t: "思维模型", d: "把原理组织成可调用的跨学科模型。" },
    { t: "误判心理学", d: "理解人为什么会偏离理性。" },
    { t: "系统工具", d: "用结构视角看见复杂问题的根因。" },
  ],
  en: [
    { t: "First principles", d: "Distill irreducible laws from foundational disciplines." },
    { t: "Mental models", d: "Organize principles into callable cross-disciplinary models." },
    { t: "Psychology of misjudgment", d: "Understand why people deviate from rationality." },
    { t: "Systems tools", d: "See root causes of complex problems structurally." },
  ],
};

export default function MethodPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const layers = layersByLocale[locale];
  const flow = flowByLocale[locale];

  return (
    <SiteLayout>
      <ContentHero
        eyebrow={t.method.eyebrow}
        title={t.method.title}
        description={t.method.desc}
        primary={{ label: t.method.startBasics, href: "/paths/decision-foundation" }}
        secondary={{ label: t.method.tryTools, href: "/decision" }}
      />

      <section className="mt-8">
        <SectionTitle title={t.method.flowTitle} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {flow.map((f, i) => (
            <div key={f.t} className="panel">
              <span className="step-no">{i + 1}</span>
              <h3 className="my-2 text-[20px] font-extrabold text-ink">{f.t}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="panel">
          <SectionTitle title={t.method.pyramidTitle} />
          <div className="space-y-5">
            {layers.map((l, i) => (
              <StepRow key={l.title} no={i + 1} title={l.title}>
                {l.desc}
              </StepRow>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="panel !p-8 text-center" style={{ background: "linear-gradient(135deg,#eef4ff,#ffffff)" }}>
          <h2 className="text-[24px] font-black text-ink">{t.method.sixQTitle}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted">{t.method.sixQBody}</p>
        </div>
      </section>
    </SiteLayout>
  );
}
