import { SiteLayout } from "@/components/SiteLayout";
import { ContentHero } from "@/components/ContentHero";
import { SectionTitle, IconBadge } from "@/components/ui";
import { SystemToolCard } from "@/components/cards";
import { systemTools, archetypes } from "@/lib/data";
import { localizeSystemTools, localizeArchetypes } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export default function SystemsPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const tools = localizeSystemTools(systemTools, locale);
  const arch = localizeArchetypes(archetypes, locale);

  return (
    <SiteLayout wide>
      <ContentHero
        eyebrow={t.nav.systems}
        title={t.systems.title}
        description={t.systems.desc}
        primary={{ label: t.systems.useMap, href: "/decision/system-map" }}
        secondary={{ label: t.systems.learnPath, href: "/paths/systems-thinking" }}
      />

      <section className="mt-8">
        <SectionTitle title={t.systems.coreTools} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {tools.map((tl) => (
            <SystemToolCard key={tl.slug} tool={tl} />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <SectionTitle title={t.systems.archetypes} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {arch.map((a) => (
            <div key={a.slug} className="card">
              <div className="mb-2 flex items-center gap-2">
                <IconBadge icon="↻" color="#f58a2a" size={38} />
                <h3 className="text-[18px] font-extrabold text-ink">{a.name}</h3>
              </div>
              <p className="mb-3 text-[14px] leading-relaxed text-muted">{a.explanation}</p>
              <div className="mb-2 text-[13px] text-[#46627f]">
                <span className="font-bold">{t.systems.commonScenes}</span>：{a.scenarios}
              </div>
              <p className="rounded-lg bg-[#f7fbff] p-2 text-[13px] text-[#35506f]">💡 {a.leverage}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
