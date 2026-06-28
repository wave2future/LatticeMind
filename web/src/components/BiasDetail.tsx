import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumb, IconBadge, Pill, StepRow } from "@/components/ui";
import { RelatedModels, RelatedBiases, RelatedCases } from "@/components/RelatedLinks";
import type { Bias } from "@/lib/types";
import type { Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";
import { localizeMisjudgment, localizeBias } from "@/lib/data/localize";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="panel">
      <h2 className="mb-3 text-[22px] font-extrabold text-ink">{title}</h2>
      {children}
    </div>
  );
}

function ListBlock({ items, marker = "•" }: { items: string[]; marker?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2 text-[15px] leading-relaxed text-[#35506f]">
          <span className="mt-1 text-brand">{marker}</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function BiasDetail({
  bias: raw,
  kind,
  locale = "zh",
}: {
  bias: Bias;
  kind: "misjudgment" | "bias";
  locale?: Locale;
}) {
  const t = getDict(locale);
  const td = t.biasDetail;
  const bias = kind === "misjudgment" ? localizeMisjudgment(raw, locale) : localizeBias(raw, locale);
  const color = kind === "misjudgment" ? "#7b61d1" : "#155eef";
  const root = kind === "misjudgment" ? "/misjudgment" : "/biases";
  const rootLabel = kind === "misjudgment" ? t.nav.misjudgment : t.nav.biases;

  return (
    <SiteLayout>
      <Breadcrumb
        items={[
          { label: t.nav.home, href: "/" },
          { label: rootLabel, href: root },
          { label: bias.title },
        ]}
      />

      <section className="panel !p-8">
        <div className="mb-4 flex items-center gap-4">
          <IconBadge icon={bias.mungerNumber ?? bias.title.slice(0, 1)} color={color} size={56} />
          <div>
            <h1 className="text-[34px] font-black text-ink">{bias.title}</h1>
            <div className="mt-1 flex flex-wrap gap-2">
              <Pill>{bias.category}</Pill>
              {bias.isMunger && <Pill>{td.mungerTag(bias.mungerNumber)}</Pill>}
              {!bias.isMunger && <Pill>{td.riskTag(bias.risk)}</Pill>}
            </div>
          </div>
        </div>
        <p className="lead">{bias.summary}</p>
        {bias.mungerView && (
          <p className="mt-4 rounded-xl bg-[#f5f2ff] p-4 text-[15px] italic leading-relaxed text-[#4a3a7a]">
            ❝ {bias.mungerView}
          </p>
        )}
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <Section title={td.mechanism}>
            <p className="text-[16px] leading-[1.8] text-[#35506f]">{bias.mechanism}</p>
          </Section>
          <Section title={td.whyHappens}>
            <p className="text-[16px] leading-[1.8] text-[#35506f]">{bias.whyHappens}</p>
          </Section>
          <div className="grid gap-6 sm:grid-cols-2">
            <Section title={td.triggers}>
              <ListBlock items={bias.triggers} marker="▸" />
            </Section>
            <Section title={td.symptoms}>
              <ListBlock items={bias.symptoms} marker="▸" />
            </Section>
          </div>
          <Section title={td.scenarios}>
            <ListBlock items={bias.scenarios} />
          </Section>
          <Section title={td.harm}>
            <p className="rounded-xl bg-[#fff1f1] p-4 text-[15px] leading-relaxed text-[#8a3030]">⚠ {bias.harm}</p>
          </Section>
        </div>

        <div className="space-y-6">
          <Section title={td.howToDetect}>
            <ListBlock items={bias.howToDetect} marker="🔍" />
          </Section>
          <Section title={td.defenses}>
            <div className="space-y-3">
              {bias.defenses.map((d, i) => (
                <StepRow key={i} no={i + 1} color={color}>
                  {d}
                </StepRow>
              ))}
            </div>
          </Section>
          <Section title={td.combos}>
            <RelatedBiases slugs={bias.combos} locale={locale} />
          </Section>
          <Section title={td.exercises}>
            <ListBlock items={bias.exercises} marker="✎" />
          </Section>
          <Section title={td.relatedModels}>
            <RelatedModels slugs={bias.relatedModels} locale={locale} />
          </Section>
          <Section title={td.relatedCases}>
            <RelatedCases slugs={bias.relatedCases} locale={locale} />
          </Section>
        </div>
      </div>
    </SiteLayout>
  );
}
