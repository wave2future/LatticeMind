import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import {
  modelMap, misjudgmentMap, biasMap, caseMap, systemToolMap, biasHref,
} from "@/lib/data";
import {
  localizeModel, localizeMisjudgment, localizeBias, localizeCase, localizeSystemTool,
} from "@/lib/data/localize";

export function RelatedModels({ slugs, locale = "zh" }: { slugs: string[]; locale?: Locale }) {
  return (
    <Chips
      items={slugs
        .map((s) => modelMap[s])
        .filter(Boolean)
        .map((m) => ({ label: localizeModel(m, locale).title, href: `/models/${m.slug}` }))}
    />
  );
}

export function RelatedBiases({ slugs, locale = "zh" }: { slugs: string[]; locale?: Locale }) {
  return (
    <Chips
      items={slugs
        .map((s) => {
          const href = biasHref(s);
          if (!href) return null;
          if (misjudgmentMap[s]) return { label: localizeMisjudgment(misjudgmentMap[s], locale).title, href };
          if (biasMap[s]) return { label: localizeBias(biasMap[s], locale).title, href };
          return null;
        })
        .filter((x): x is { label: string; href: string } => !!x)}
    />
  );
}

export function RelatedCases({ slugs, locale = "zh" }: { slugs: string[]; locale?: Locale }) {
  return (
    <Chips
      items={slugs
        .map((s) => caseMap[s])
        .filter(Boolean)
        .map((c) => ({ label: localizeCase(c, locale).title, href: `/cases/${c.slug}` }))}
    />
  );
}

export function RelatedSystems({ slugs, locale = "zh" }: { slugs: string[]; locale?: Locale }) {
  return (
    <Chips
      items={slugs
        .map((s) => systemToolMap[s])
        .filter(Boolean)
        .map((t) => ({ label: localizeSystemTool(t, locale).title, href: `/systems/${t.slug}` }))}
    />
  );
}

function Chips({ items }: { items: { label: string; href: string }[] }) {
  if (items.length === 0) return <p className="text-sm text-muted">—</p>;
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <Link
          key={it.href + it.label}
          href={it.href}
          className="pill transition-colors hover:border-brand hover:text-brand"
        >
          {it.label}
        </Link>
      ))}
    </div>
  );
}
