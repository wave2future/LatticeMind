import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumb, IconBadge, Pill, DifficultyDots, StepRow } from "@/components/ui";
import { RelatedModels, RelatedBiases, RelatedSystems } from "@/components/RelatedLinks";
import { GatedButton } from "@/components/GatedButton";
import { models, modelMap, disciplineMap } from "@/lib/data";
import { localizeModel, localizeDiscipline } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export function generateStaticParams() {
  return models.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const m = modelMap[params.slug];
  return { title: m ? localizeModel(m, getLocale()).title : "Model" };
}

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

export default function ModelDetailPage({ params }: { params: { slug: string } }) {
  const raw = modelMap[params.slug];
  if (!raw) notFound();
  const locale = getLocale();
  const t = getDict(locale);
  const td = t.modelDetail;
  const m = localizeModel(raw, locale);
  const discipline = disciplineMap[raw.discipline]
    ? localizeDiscipline(disciplineMap[raw.discipline], locale)
    : undefined;

  return (
    <SiteLayout>
      <Breadcrumb
        items={[
          { label: t.nav.home, href: "/" },
          { label: t.nav.models, href: "/models" },
          { label: m.title },
        ]}
      />

      <section className="grid items-stretch gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="panel !p-8">
          <div className="mb-4 flex items-center gap-4">
            <IconBadge icon={m.icon} color={m.color} size={56} />
            <div>
              <h1 className="text-[34px] font-black text-ink">{m.title}</h1>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <Pill>{m.category}</Pill>
                {discipline && <Pill>{discipline.name}</Pill>}
                <DifficultyDots level={raw.difficulty} />
              </div>
            </div>
          </div>
          <p className="lead">{m.summary}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <GatedButton label={td.saveModel} savedLabel={td.saved} className="btn-primary" />
            <GatedButton label={td.addChecklist} savedLabel={td.added} className="btn-ghost" />
          </div>
        </div>
        <div className="panel !p-8">
          <h3 className="mb-3 text-[16px] font-extrabold text-ink">{td.coreQuestion}</h3>
          <p className="mb-4 text-[18px] font-bold text-brand">「{m.coreQuestion}」</p>
          <h3 className="mb-2 text-[16px] font-extrabold text-ink">{td.firstPrinciple}</h3>
          <p className="text-[15px] leading-relaxed text-muted">{m.firstPrinciple}</p>
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <Section title={td.mechanism}>
            <p className="text-[16px] leading-[1.8] text-[#35506f]">{m.mechanism}</p>
          </Section>

          {m.formula && (
            <Section title={td.formulaTitle}>
              <div
                className="rounded-xl border border-line bg-[#f7fbff] px-5 py-4 text-center text-[20px] font-bold tracking-wide text-ink"
                style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
              >
                {m.formula.expression}
              </div>
              <h3 className="mb-2 mt-5 text-[15px] font-extrabold text-ink">{td.paramMeaning}</h3>
              <ul className="space-y-2">
                {m.formula.params.map((p) => (
                  <li key={p.symbol} className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                    <code className="w-fit rounded bg-[#edf5ff] px-2 py-0.5 text-[14px] font-bold text-brand">
                      {p.symbol}
                    </code>
                    <span className="text-[15px] leading-relaxed text-[#35506f]">{p.meaning}</span>
                  </li>
                ))}
              </ul>
              {m.formula.note && (
                <p className="mt-4 rounded-xl bg-[#fff6ec] p-3 text-[14px] leading-relaxed text-[#7a4a12]">
                  💡 {m.formula.note}
                </p>
              )}
            </Section>
          )}

          {m.workedExample && (
            <Section title={td.workedTitle}>
              <h3 className="mb-3 text-[16px] font-extrabold text-ink">{m.workedExample.title}</h3>
              <ul className="mb-4 space-y-2">
                {m.workedExample.setup.map((s, i) => (
                  <li key={i} className="flex gap-2 text-[15px] leading-relaxed text-[#35506f]">
                    <span className="mt-1 text-brand">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                {m.workedExample.steps.map((st, i) => (
                  <div key={i} className="rounded-xl border border-line p-3">
                    <div className="mb-1 text-[14px] font-extrabold text-ink">{st.label}</div>
                    <code
                      className="block text-[14px] text-[#1d324d]"
                      style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
                    >
                      {st.calc}
                    </code>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-xl bg-[#eefcf3] p-4 text-[15px] leading-relaxed text-[#1d6b3e]">
                ✓ {m.workedExample.conclusion}
              </p>
            </Section>
          )}

          <Section title={td.example}>
            <p className="rounded-xl bg-[#f7fbff] p-4 text-[15px] leading-relaxed text-[#35506f]">{m.example}</p>
          </Section>
          <div className="grid gap-6 sm:grid-cols-2">
            <Section title={td.useCases}>
              <ListBlock items={m.useCases} marker="✓" />
            </Section>
            <Section title={td.notApplicable}>
              <ListBlock items={m.notApplicable} marker="✕" />
            </Section>
          </div>
          <Section title={td.misuse}>
            <ListBlock items={m.misuse} marker="⚠" />
          </Section>
          <Section title={td.inDecision}>
            <p className="text-[16px] leading-[1.8] text-[#35506f]">{m.inDecision}</p>
          </Section>
          <Section title={td.inversion}>
            <p className="rounded-xl bg-[#fff6ec] p-4 text-[15px] leading-relaxed text-[#7a4a12]">↺ {m.inversion}</p>
          </Section>
        </div>

        <div className="space-y-6">
          <Section title={td.selfTests}>
            <div className="space-y-4">
              {m.selfTests.map((q, i) => (
                <StepRow key={i} no={i + 1} color={m.color}>
                  {q}
                </StepRow>
              ))}
            </div>
          </Section>
          <Section title={td.relatedBiases}>
            <RelatedBiases slugs={m.relatedBiases} locale={locale} />
          </Section>
          <Section title={td.relatedSystems}>
            <RelatedSystems slugs={m.relatedSystems} locale={locale} />
          </Section>
          <Section title={td.relatedModels}>
            <RelatedModels slugs={m.relatedModels} locale={locale} />
          </Section>
        </div>
      </div>
    </SiteLayout>
  );
}
