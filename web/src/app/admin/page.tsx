import { AdminLayout } from "@/components/AdminLayout";
import { Pill } from "@/components/ui";
import { models, biases, misjudgments, cases, fallacies, systemTools } from "@/lib/data";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

const flowByLocale = {
  zh: ["草稿", "AI 辅助生成", "人工校对", "建立图谱关系", "发布", "用户反馈", "内容迭代"],
  en: ["Draft", "AI-assisted generation", "Human review", "Build graph relations", "Publish", "User feedback", "Iterate"],
};

const labelByLocale = {
  zh: ["通用思维模型", "误判心理倾向", "认知偏差", "逻辑谬误", "系统工具", "决策案例"],
  en: ["General mental models", "Misjudgment tendencies", "Cognitive biases", "Logical fallacies", "System tools", "Decision cases"],
};

export default function AdminHomePage() {
  const locale = getLocale();
  const t = getDict(locale);
  const flow = flowByLocale[locale];
  const labels = labelByLocale[locale];

  const metrics = [
    { label: t.admin.draft, value: "42" },
    { label: t.admin.toReview, value: "18" },
    { label: t.admin.published, value: String(models.length + biases.length + misjudgments.length + cases.length + fallacies.length + systemTools.length) },
    { label: t.admin.graphEdges, value: "1,284" },
  ];

  const counts = [
    models.filter((m) => m.category === "通用思维").length,
    misjudgments.length,
    biases.length,
    fallacies.length,
    systemTools.length,
    cases.length,
  ];

  return (
    <AdminLayout title={locale === "en" ? "Dashboard" : "后台首页"} action={t.admin.newContent}>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="panel">
            <p className="text-sm text-muted">{m.label}</p>
            <div className="mt-2 text-[34px] font-black text-ink">{m.value}</div>
          </div>
        ))}
      </div>

      <div className="panel mt-6">
        <h2 className="mb-4 text-[20px] font-extrabold text-ink">{t.admin.flowTitle}</h2>
        <div className="flex flex-wrap gap-2">
          {flow.map((f, i) => (
            <Pill key={f}>{i + 1}. {f}</Pill>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {labels.map((label, i) => (
          <div key={label} className="panel flex items-center justify-between">
            <span className="font-bold text-ink">{label}</span>
            <span className="text-[22px] font-black text-brand">{counts[i]}</span>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
