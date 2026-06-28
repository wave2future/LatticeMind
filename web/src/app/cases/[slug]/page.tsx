import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumb, Pill, StepRow, DifficultyDots } from "@/components/ui";
import { RelatedModels, RelatedBiases } from "@/components/RelatedLinks";
import { cases, caseMap } from "@/lib/data";
import { localizeCase } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = caseMap[params.slug];
  return { title: c ? localizeCase(c, getLocale()).title : "Case" };
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

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const raw = caseMap[params.slug];
  if (!raw) notFound();
  const locale = getLocale();
  const t = getDict(locale);
  const td = t.caseDetail;
  const c = localizeCase(raw, locale);

  return (
    <SiteLayout>
      <Breadcrumb
        items={[
          { label: t.nav.home, href: "/" },
          { label: t.nav.cases, href: "/cases" },
          { label: c.title },
        ]}
      />

      <section className="panel !p-8">
        <div className="mb-4 flex items-center gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#edf5ff] text-3xl">{c.logo}</span>
          <div>
            <h1 className="text-[30px] font-black leading-tight text-ink">{c.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Pill>{c.scenario}</Pill>
              {c.tags.map((tag) => (
                <Pill key={tag}>{tag}</Pill>
              ))}
              <DifficultyDots level={raw.difficulty} />
            </div>
          </div>
        </div>
        <p className="lead">{c.background}</p>
        <p className="mt-3 rounded-xl bg-[#f7fbff] p-4 text-[15px] font-bold text-ink">
          {td.keyProblem}: {c.problem}
        </p>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <Section title={td.analysis}>
            <table className="data-table">
              <tbody>
                {c.analysis.map((a) => (
                  <tr key={a.dimension}>
                    <th className="w-28 align-top">{a.dimension}</th>
                    <td>{a.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>
          <Section title={td.systemStructure}>
            <ListBlock items={c.systemStructure} marker="↻" />
          </Section>
          <Section title={td.misjudgments}>
            <ListBlock items={c.possibleMisjudgments} marker="⚠" />
          </Section>
          <Section title={td.checklist}>
            <div className="space-y-3">
              {c.checklist.map((q, i) => (
                <StepRow key={i} no={i + 1}>
                  {q}
                </StepRow>
              ))}
            </div>
          </Section>
          <Section title={td.conclusion}>
            <p className="text-[16px] leading-[1.8] text-[#35506f]">{c.conclusion}</p>
            <p className="mt-4 rounded-xl bg-[#eefcf3] p-4 text-[15px] font-bold text-[#1d6b3e]">💡 {td.lesson}: {c.lesson}</p>
          </Section>
        </div>

        <div className="space-y-6">
          <Section title={td.keyVariables}>
            <div className="flex flex-wrap gap-2">
              {c.keyVariables.map((v) => (
                <span key={v} className="pill">{v}</span>
              ))}
            </div>
          </Section>
          <Section title={td.relatedModels}>
            <RelatedModels slugs={c.models} locale={locale} />
          </Section>
          <Section title={td.relatedBiases}>
            <RelatedBiases slugs={c.biases} locale={locale} />
          </Section>
          <Section title={td.reviewQuestions}>
            <ListBlock items={c.reviewQuestions} marker="?" />
          </Section>
        </div>
      </div>
    </SiteLayout>
  );
}
