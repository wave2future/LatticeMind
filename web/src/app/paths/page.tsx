import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { ContentHero } from "@/components/ContentHero";
import { SectionTitle, IconBadge, Progress } from "@/components/ui";
import { paths } from "@/lib/data";
import { localizePaths } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export default function PathsPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const list = localizePaths(paths, locale);

  return (
    <SiteLayout>
      <ContentHero
        eyebrow={t.nav.paths}
        title={t.paths.title}
        description={t.paths.desc}
        primary={{ label: t.paths.startFoundation, href: "/paths/decision-foundation" }}
        secondary={{ label: t.about.viewMethod, href: "/method" }}
      />

      <section className="mt-8">
        <SectionTitle title={t.paths.listTitle} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {list.map((p) => (
            <Link key={p.slug} href={`/paths/${p.slug}`} className="card flex flex-col">
              <div className="mb-3 flex items-center gap-3">
                <IconBadge icon={p.icon} color={p.color} size={48} />
                <div>
                  <h3 className="text-[19px] font-extrabold text-ink">{p.title}</h3>
                  <p className="text-[13px] text-muted">{p.subtitle}</p>
                </div>
              </div>
              <p className="mb-3 flex-1 text-[14px] leading-relaxed text-muted">{p.description}</p>
              <div className="mb-2 flex items-center justify-between text-[13px] text-muted">
                <span>{t.common.lessonsCount(p.lessons.length)} · {t.common.learners(p.learners)}</span>
                <span className="font-bold text-brand">{p.progress}%</span>
              </div>
              <Progress value={p.progress ?? 0} />
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
