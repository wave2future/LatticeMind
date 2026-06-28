import type { Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";

export interface AdminRow {
  title: string;
  type: string;
  category: string;
  status: string;
}

export function AdminTable({
  rows,
  filters,
  locale = "zh",
}: {
  rows: AdminRow[];
  filters: string[];
  locale?: Locale;
}) {
  const t = getDict(locale);
  return (
    <div className="panel">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <input className="field flex-1" placeholder={t.admin.searchPlaceholder} />
        {filters.map((f) => (
          <button key={f} className="filter-chip">{f} ▾</button>
        ))}
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>{t.admin.colTitle}</th>
            <th>{t.admin.colType}</th>
            <th>{t.admin.colCategory}</th>
            <th>{t.admin.colStatus}</th>
            <th>{t.admin.colActions}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="font-bold">{r.title}</td>
              <td>{r.type}</td>
              <td>{r.category}</td>
              <td>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-bold ${
                    r.status === t.admin.published
                      ? "bg-[#eefcf3] text-[#1d6b3e]"
                      : r.status === t.admin.toReview
                        ? "bg-[#fff6ec] text-[#9a5a13]"
                        : "bg-[#f1f5fb] text-muted"
                  }`}
                >
                  {r.status}
                </span>
              </td>
              <td>
                <span className="mr-3 cursor-pointer font-bold text-brand">{t.admin.edit}</span>
                <span className="cursor-pointer font-bold text-muted">{t.admin.relations}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
