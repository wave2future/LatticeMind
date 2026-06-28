import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumb, IconBadge, Progress } from "@/components/ui";
import { paths, pathMap } from "@/lib/data";
import { localizePath } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export function generateStaticParams() {
  return paths.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = pathMap[params.slug];
  return { title: p ? localizePath(p, getLocale()).title : "Path" };
}

export default function PathDetailPage({ params }: { params: { slug: string } }) {
  const raw = pathMap[params.slug];
  if (!raw) notFound();
  const locale = getLocale();
  const t = getDict(locale);
  const p = localizePath(raw, locale);

  return (
    <SiteLayout>
      <Breadcrumb
        items={[
          { label: t.nav.home, href: "/" },
          { label: t.nav.paths, href: "/paths" },
          { label: p.title },
        ]}
      />

      <section className="panel !p-8">
        <div className="flex flex-wrap items-center gap-4">
          <IconBadge icon={p.icon} color={p.color} size={56} />
          <div className="flex-1">
            <h1 className="text-[32px] font-black text-ink">{p.title}</h1>
            <p className="text-[15px] text-muted">{p.subtitle}</p>
          </div>
          <div className="w-full sm:w-56">
            <div className="mb-1 flex justify-between text-[13px] font-bold text-muted">
              <span>{t.paths.progress}</span>
              <span className="text-brand">{p.progress}%</span>
            </div>
            <Progress value={p.progress ?? 0} />
          </div>
        </div>
        <p className="lead mt-4">{p.description}</p>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="panel">
          <h2 className="mb-4 text-[22px] font-extrabold text-ink">{t.paths.lessonOrder}</h2>
          <div className="space-y-4">
            {p.lessons.map((l, i) => {
              const done = i / p.lessons.length < (p.progress ?? 0) / 100;
              return (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full text-sm font-black text-white"
                    style={{ background: done ? p.color : "#cbd9ee" }}
                  >
                    {done ? "✓" : i + 1}
                  </span>
                  <div className="flex-1 border-b border-line pb-4">
                    <h3 className="text-[16px] font-extrabold text-ink">{l.title}</h3>
                    <p className="text-[14px] text-muted">{l.summary}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel">
            <h2 className="mb-3 text-[20px] font-extrabold text-ink">{t.paths.outcome}</h2>
            <p className="text-[15px] leading-relaxed text-muted">{p.outcome}</p>
            <button className="btn-primary mt-5 w-full">{t.paths.continue}</button>
          </div>
          <div className="panel" style={{ background: "linear-gradient(135deg,#eef4ff,#fff)" }}>
            <h3 className="mb-2 text-[16px] font-extrabold text-ink">{t.paths.pathData}</h3>
            <div className="flex justify-between text-[14px] text-muted">
              <span>{t.paths.lessonNum}</span>
              <span className="font-bold text-ink">{t.common.lessonsCount(p.lessons.length)}</span>
            </div>
            <div className="mt-2 flex justify-between text-[14px] text-muted">
              <span>{t.paths.learnerNum}</span>
              <span className="font-bold text-ink">{p.learners}</span>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
