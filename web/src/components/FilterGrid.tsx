"use client";

import { useMemo, useState, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";

export interface FilterItem {
  key: string;
  search: string;
  group: string;
  render: ReactNode;
}

export interface FilterGroup {
  value: string;
  label: string;
}

export function FilterGrid({
  items,
  groups,
  searchPlaceholder = "🔍",
  columns = 3,
  locale = "zh",
}: {
  items: FilterItem[];
  groups: FilterGroup[];
  searchPlaceholder?: string;
  columns?: 2 | 3;
  locale?: Locale;
}) {
  const itemsLabel = getDict(locale).common.totalItems;
  const [q, setQ] = useState("");
  const [group, setGroup] = useState(groups[0].value);

  const filtered = useMemo(() => {
    return items.filter((it) => {
      if (group !== groups[0].value && it.group !== group) return false;
      if (q && !it.search.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [items, group, groups, q]);

  return (
    <div>
      <div className="panel mb-5">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={searchPlaceholder}
          className="field mb-3"
        />
        <div className="flex flex-wrap gap-2">
          {groups.map((g) => (
            <button
              key={g.value}
              onClick={() => setGroup(g.value)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                group === g.value
                  ? "bg-brand text-white"
                  : "border border-line bg-white text-[#37516f] hover:border-[#9db9df]"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>
      <p className="mb-4 text-sm font-bold text-muted">
        {itemsLabel ? itemsLabel(filtered.length) : `${filtered.length}`}
      </p>
      {filtered.length === 0 ? (
        <div className="panel text-center text-muted">—</div>
      ) : (
        <div
          className={`grid gap-4 ${
            columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 xl:grid-cols-3"
          }`}
        >
          {filtered.map((it) => (
            <div key={it.key}>{it.render}</div>
          ))}
        </div>
      )}
    </div>
  );
}
