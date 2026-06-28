import { AdminLayout } from "@/components/AdminLayout";
import { KnowledgeGraph } from "@/components/KnowledgeGraph";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

const nodeTypesByLocale = {
  zh: [["学科", 8], ["第一性原理", 13], ["思维模型", 100], ["误判倾向", 28], ["逻辑谬误", 12], ["系统工具", 8], ["决策场景", 11], ["案例", 8], ["清单", 50]],
  en: [["Disciplines", 8], ["First principles", 13], ["Mental models", 100], ["Misjudgment tendencies", 28], ["Fallacies", 12], ["System tools", 8], ["Decision scenarios", 11], ["Cases", 8], ["Checklists", 50]],
} as const;

const edgeTypesByLocale = {
  zh: ["属于", "来自", "相关", "抵消", "触发", "组合", "应用于", "造成", "检查"],
  en: ["belongs to", "from", "related", "offsets", "triggers", "combines", "applies to", "causes", "checks"],
};

export default function AdminGraphPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const nodeTypes = nodeTypesByLocale[locale];
  const edgeTypes = edgeTypesByLocale[locale];

  return (
    <AdminLayout title={locale === "en" ? "Graph" : "图谱管理"} action={t.admin.newNode}>
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="panel">
          <h2 className="mb-3 text-[18px] font-extrabold text-ink">{t.admin.graphPreview}</h2>
          <KnowledgeGraph compact />
          <p className="mt-3 text-[13px] text-muted">{t.admin.graphHint}</p>
        </div>
        <div className="space-y-6">
          <div className="panel">
            <h3 className="mb-3 text-[16px] font-extrabold text-ink">{t.admin.nodeTypes}</h3>
            <div className="space-y-2">
              {nodeTypes.map(([label, n]) => (
                <div key={label as string} className="flex items-center justify-between text-[14px]">
                  <span className="text-[#35506f]">{label}</span>
                  <span className="font-bold text-ink">{n}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="panel">
            <h3 className="mb-3 text-[16px] font-extrabold text-ink">{t.admin.edgeTypes}</h3>
            <div className="flex flex-wrap gap-2">
              {edgeTypes.map((e) => (
                <span key={e} className="pill">{e}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
