import Link from "next/link";
import { AccountLayout } from "@/components/AccountLayout";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

const recordsByLocale = {
  zh: [
    { id: "001", title: "AI 笔记 App 产品机会判断", scenario: "产品决策", status: "已完成", date: "2026-06-20", models: 5, biases: 4 },
    { id: "002", title: "是否加仓某只下跌股票", scenario: "投资决策", status: "进行中", date: "2026-06-24", models: 4, biases: 4 },
    { id: "003", title: "团队效率下降的系统分析", scenario: "管理决策", status: "草稿", date: "2026-06-26", models: 4, biases: 3 },
    { id: "004", title: "是否追进某热门赛道", scenario: "创业决策", status: "已完成", date: "2026-06-12", models: 4, biases: 4 },
    { id: "005", title: "订阅产品涨价方案评估", scenario: "产品决策", status: "已完成", date: "2026-05-30", models: 3, biases: 3 },
  ],
  en: [
    { id: "001", title: "AI note app opportunity judgment", scenario: "Product decision", status: "Completed", date: "2026-06-20", models: 5, biases: 4 },
    { id: "002", title: "Whether to average down a falling stock", scenario: "Investment decision", status: "In progress", date: "2026-06-24", models: 4, biases: 4 },
    { id: "003", title: "Systems analysis of falling team efficiency", scenario: "Management decision", status: "Draft", date: "2026-06-26", models: 4, biases: 3 },
    { id: "004", title: "Whether to chase a hot market", scenario: "Startup decision", status: "Completed", date: "2026-06-12", models: 4, biases: 4 },
    { id: "005", title: "Evaluating a subscription price increase", scenario: "Product decision", status: "Completed", date: "2026-05-30", models: 3, biases: 3 },
  ],
};

export default function DecisionsPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const records = recordsByLocale[locale];

  const statusClass = (s: string) =>
    s === t.decision.statusDone
      ? "bg-[#eefcf3] text-[#1d6b3e]"
      : s === t.decision.statusOngoing
        ? "bg-[#edf5ff] text-brand"
        : "bg-[#f1f5fb] text-muted";

  return (
    <AccountLayout title={t.account.navDecisions}>
      <div className="mb-4 flex justify-between">
        <p className="text-sm text-muted">{t.account.allRecords(records.length)}</p>
        <Link href="/decision/new" className="btn-primary">{t.account.newDecision}</Link>
      </div>
      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>{t.decision.colTitle}</th>
              <th>{t.decision.colScenario}</th>
              <th>{t.account.colModelsBiases}</th>
              <th>{t.decision.colStatus}</th>
              <th>{t.decision.colDate}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <tr key={r.id}>
                <td className="font-bold">{r.title}</td>
                <td>{r.scenario}</td>
                <td className="text-muted">{t.account.mb(r.models, r.biases)}</td>
                <td>
                  <span className={`rounded-full px-2 py-1 text-xs font-bold ${statusClass(r.status)}`}>{r.status}</span>
                </td>
                <td className="text-muted">{r.date}</td>
                <td>
                  <Link href={`/decision/records/${r.id}`} className="font-bold text-brand">{t.decision.view}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AccountLayout>
  );
}
