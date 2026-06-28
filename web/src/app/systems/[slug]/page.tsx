import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumb, IconBadge, Pill, StepRow } from "@/components/ui";
import { RelatedModels } from "@/components/RelatedLinks";
import { PlainBox } from "@/components/PlainBox";
import { systemTools, systemToolMap } from "@/lib/data";
import { getSystemExtra } from "@/lib/data/extras";
import { localizeSystemTool } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export function generateStaticParams() {
  return systemTools.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tool = systemToolMap[params.slug];
  return { title: tool ? localizeSystemTool(tool, getLocale()).title : "System tool" };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="panel">
      <h2 className="mb-3 text-[22px] font-extrabold text-ink">{title}</h2>
      {children}
    </div>
  );
}

export default function SystemDetailPage({ params }: { params: { slug: string } }) {
  const raw = systemToolMap[params.slug];
  if (!raw) notFound();
  const locale = getLocale();
  const t = getDict(locale);
  const tool = localizeSystemTool(raw, locale);

  return (
    <SiteLayout>
      <Breadcrumb
        items={[
          { label: t.nav.home, href: "/" },
          { label: t.nav.systems, href: "/systems" },
          { label: tool.title },
        ]}
      />
      <section className="panel !p-8">
        <div className="mb-4 flex items-center gap-4">
          <IconBadge icon="↻" color="#f58a2a" size={56} />
          <div>
            <h1 className="text-[34px] font-black text-ink">{tool.title}</h1>
            <Pill>{tool.toolType}</Pill>
          </div>
        </div>
        <p className="lead">{tool.summary}</p>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <PlainBox extra={getSystemExtra(raw.slug, locale)} locale={locale} />
          <Section title={t.systems.howToUse}>
            <p className="text-[16px] leading-[1.8] text-[#35506f]">{tool.howToUse}</p>
          </Section>
          {tool.layers && (
            <Section title={t.systems.layers}>
              <div className="space-y-3">
                {tool.layers.map((l, i) => (
                  <StepRow key={i} no={i + 1} color="#f58a2a">
                    {l}
                  </StepRow>
                ))}
              </div>
            </Section>
          )}
          <Section title={t.systems.example}>
            <p className="rounded-xl bg-[#f7fbff] p-4 text-[15px] leading-relaxed text-[#35506f]">{tool.example}</p>
          </Section>
        </div>
        <div className="space-y-6">
          <Section title={t.systems.relatedModels}>
            <RelatedModels slugs={tool.relatedModels} locale={locale} />
          </Section>
          <div className="panel" style={{ background: "linear-gradient(135deg,#fff6ec,#fff)" }}>
            <h3 className="mb-2 text-[16px] font-extrabold text-ink">{t.systems.practiceTitle}</h3>
            <p className="mb-3 text-[14px] leading-relaxed text-muted">{t.systems.practiceDesc}</p>
            <a href="/decision/system-map" className="btn-primary w-full">{t.systems.openMap}</a>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
