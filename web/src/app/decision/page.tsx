import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { ContentHero } from "@/components/ContentHero";
import { SectionTitle, IconBadge } from "@/components/ui";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

const recordsByLocale = {
  zh: [
    { id: "001", title: "AI 笔记 App 产品机会判断", scenario: "产品决策", status: "已完成", date: "2026-06-20" },
    { id: "002", title: "是否加仓某只下跌股票", scenario: "投资决策", status: "进行中", date: "2026-06-24" },
    { id: "003", title: "团队效率下降的系统分析", scenario: "管理决策", status: "草稿", date: "2026-06-26" },
  ],
  en: [
    { id: "001", title: "AI note app opportunity judgment", scenario: "Product decision", status: "Completed", date: "2026-06-20" },
    { id: "002", title: "Whether to average down a falling stock", scenario: "Investment decision", status: "In progress", date: "2026-06-24" },
    { id: "003", title: "Systems analysis of falling team efficiency", scenario: "Management decision", status: "Draft", date: "2026-06-26" },
  ],
};

export default function DecisionPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const records = recordsByLocale[locale];

  const tools = [
    { icon: "🔍", color: "#155eef", title: t.decision.t1, desc: t.decision.t1d, href: "/decision/model-scan" },
    { icon: "🛡", color: "#0f9f96", title: t.decision.t2, desc: t.decision.t2d, href: "/decision/bias-check" },
    { icon: "↻", color: "#f58a2a", title: t.decision.t3, desc: t.decision.t3d, href: "/decision/system-map" },
    { icon: "📋", color: "#7b61d1", title: t.decision.t4, desc: t.decision.t4d, href: "/decision/review" },
  ];

  const statusClass = (s: string) =>
    s === t.decision.statusDone
      ? "bg-[#eefcf3] text-[#1d6b3e]"
      : s === t.decision.statusOngoing
        ? "bg-[#edf5ff] text-brand"
        : "bg-[#f1f5fb] text-muted";

  return (
    <SiteLayout>
      <ContentHero
        eyebrow={t.nav.decision}
        title={t.decision.title}
        description={t.decision.desc}
        primary={{ label: t.decision.newBtn, href: "/decision/new" }}
        secondary={{ label: t.decision.records, href: "/account/decisions" }}
      />

      <section className="mt-8">
        <SectionTitle title={t.decision.fourTools} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {tools.map((tl) => (
            <Link key={tl.href} href={tl.href} className="card flex flex-col">
              <IconBadge icon={tl.icon} color={tl.color} size={52} />
              <h3 className="my-3 text-[19px] font-extrabold text-ink">{tl.title}</h3>
              <p className="flex-1 text-[14px] leading-relaxed text-muted">{tl.desc}</p>
              <span className="mt-3 font-bold text-brand">{t.common.startUsing}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <SectionTitle title={t.decision.recentRecords} link="/account/decisions" linkLabel={t.common.viewAll} />
        <div className="panel">
          <table className="data-table">
            <thead>
              <tr>
                <th>{t.decision.colTitle}</th>
                <th>{t.decision.colScenario}</th>
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
                  <td>
                    <span className={`rounded-full px-2 py-1 text-xs font-bold ${statusClass(r.status)}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="text-muted">{r.date}</td>
                  <td>
                    <Link href={`/decision/records/${r.id}`} className="font-bold text-brand">
                      {t.decision.viewReport}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </SiteLayout>
  );
}
