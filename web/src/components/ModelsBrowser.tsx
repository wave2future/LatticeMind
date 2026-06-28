"use client";

import { useMemo, useState } from "react";
import type { MentalModel } from "@/lib/types";
import type { Locale } from "@/lib/i18n/config";
import { getDict, term } from "@/lib/i18n";
import { localizeModel } from "@/lib/data/localize";
import { ModelCard } from "./cards";

const difficulties = ["入门", "进阶", "高阶"];

export function ModelsBrowser({
  models,
  categories,
  locale = "zh",
}: {
  models: MentalModel[];
  categories: string[];
  locale?: Locale;
}) {
  const t = getDict(locale);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("全部模型");
  const [diff, setDiff] = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    return models.filter((m) => {
      if (cat !== "全部模型" && m.category !== cat) return false;
      if (diff && m.difficulty !== diff) return false;
      if (q) {
        const lm = localizeModel(m, locale);
        const hay = (
          m.title + m.summary + m.coreQuestion + m.useCases.join("") +
          lm.title + lm.summary + lm.coreQuestion + lm.useCases.join("")
        ).toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [models, cat, diff, q, locale]);

  const countByCat = (c: string) =>
    c === "全部模型" ? models.length : models.filter((m) => m.category === c).length;

  return (
    <div className="grid gap-6 lg:grid-cols-[248px_1fr]">
      <aside className="panel h-fit">
        <h3 className="mb-3 text-[15px] font-extrabold text-ink">{t.models.categoryTitle}</h3>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`side-item flex w-full items-center justify-between ${
              cat === c ? "active" : ""
            }`}
          >
            <span>{term(c, locale)}</span>
            <span className="text-[13px] text-muted">{countByCat(c)}</span>
          </button>
        ))}
        <div className="my-4 border-t border-line" />
        <h3 className="mb-3 text-[15px] font-extrabold text-ink">{t.common.difficulty}</h3>
        {difficulties.map((d) => (
          <label
            key={d}
            className="mb-1 flex cursor-pointer items-center gap-2 px-1 py-2 text-[15px] font-bold text-[#35506f]"
          >
            <input
              type="checkbox"
              checked={diff === d}
              onChange={() => setDiff(diff === d ? null : d)}
              className="h-4 w-4 accent-brand"
            />
            {term(d, locale)}
            <span className="ml-auto text-[13px] text-muted">
              {models.filter((m) => m.difficulty === d).length}
            </span>
          </label>
        ))}
        {(diff || cat !== "全部模型" || q) && (
          <button
            onClick={() => {
              setDiff(null);
              setCat("全部模型");
              setQ("");
            }}
            className="mt-4 w-full rounded-[10px] border border-line py-2 text-sm font-bold text-muted hover:text-brand"
          >
            {t.common.clearFilters}
          </button>
        )}
      </aside>

      <div>
        <div className="panel mb-4">
          <div className="flex flex-wrap items-center gap-3">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t.models.searchPlaceholder}
              className="field flex-1"
            />
            <div className="flex overflow-hidden rounded-[12px] border border-[#cbdcf2]">
              <button
                onClick={() => setView("grid")}
                className={`px-3 py-2 text-sm font-bold ${
                  view === "grid" ? "bg-[#edf5ff] text-brand" : "text-muted"
                }`}
              >
                ▦
              </button>
              <button
                onClick={() => setView("list")}
                className={`px-3 py-2 text-sm font-bold ${
                  view === "list" ? "bg-[#edf5ff] text-brand" : "text-muted"
                }`}
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        <p className="mb-4 text-sm font-bold text-muted">{t.models.countModels(filtered.length)}</p>

        {filtered.length === 0 ? (
          <div className="panel text-center text-muted">{t.models.empty}</div>
        ) : (
          <div
            className={
              view === "grid"
                ? "grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
                : "grid gap-4 grid-cols-1"
            }
          >
            {filtered.map((m) => (
              <ModelCard key={m.slug} model={localizeModel(m, locale)} locale={locale} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
