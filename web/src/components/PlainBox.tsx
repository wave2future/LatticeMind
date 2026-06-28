import type { Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";
import { ConceptDiagram } from "./ConceptDiagram";
import type { ResolvedExtra } from "@/lib/data/extras";

// "In plain words" panel: an everyday explanation + analogy + optional diagram,
// shown near the top of a concept's detail page for beginners.
export function PlainBox({ extra, locale }: { extra?: ResolvedExtra; locale: Locale }) {
  if (!extra || (!extra.plain && !extra.diagram)) return null;
  const t = getDict(locale);

  return (
    <div
      className="rounded-[16px] border border-[#cfe0fb] p-5"
      style={{ background: "linear-gradient(135deg,#eef5ff,#ffffff)" }}
    >
      <h2 className="mb-3 flex items-center gap-2 text-[20px] font-extrabold text-ink">
        <span>💡</span>
        {t.common.plainTitle}
      </h2>
      <div className={extra.diagram ? "grid gap-5 sm:grid-cols-[1.5fr_1fr] sm:items-center" : ""}>
        <div>
          {extra.plain && (
            <p className="text-[16px] leading-[1.85] text-[#2c4a6e]">{extra.plain}</p>
          )}
          {extra.analogy && (
            <p className="mt-3 rounded-xl bg-white/70 p-3 text-[15px] leading-relaxed text-[#35506f]">
              <span className="font-extrabold text-brand">{t.common.analogyLabel}：</span>
              {extra.analogy}
            </p>
          )}
        </div>
        {extra.diagram && <ConceptDiagram type={extra.diagram} />}
      </div>
    </div>
  );
}
