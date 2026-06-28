import { SiteLayout } from "@/components/SiteLayout";
import { ContentHero } from "@/components/ContentHero";
import { SectionTitle, IconBadge } from "@/components/ui";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export default function AboutPage() {
  const t = getDict(getLocale());
  const problems = [
    { title: t.about.p1t, desc: t.about.p1d },
    { title: t.about.p2t, desc: t.about.p2d },
    { title: t.about.p3t, desc: t.about.p3d },
    { title: t.about.p4t, desc: t.about.p4d },
  ];
  const principles = [
    { icon: "◇", color: "#155eef", title: t.about.pr1t, desc: t.about.pr1d },
    { icon: "⚖", color: "#0f9f96", title: t.about.pr2t, desc: t.about.pr2d },
    { icon: "↻", color: "#f58a2a", title: t.about.pr3t, desc: t.about.pr3d },
  ];

  return (
    <SiteLayout>
      <ContentHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.desc}
        primary={{ label: t.about.viewMethod, href: "/method" }}
        secondary={{ label: t.common.browseModels, href: "/models" }}
      />

      <section className="mt-8">
        <SectionTitle title={t.about.problemsTitle} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {problems.map((p, i) => (
            <div key={p.title} className="card">
              <IconBadge icon={i + 1} color="#155eef" />
              <h3 className="my-2 text-[18px] font-extrabold text-ink">{p.title}</h3>
              <p className="text-[14px] leading-relaxed text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <SectionTitle title={t.about.principlesTitle} />
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="panel">
              <IconBadge icon={p.icon} color={p.color} size={52} />
              <h3 className="my-3 text-[20px] font-extrabold text-ink">{p.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="panel">
          <SectionTitle title={t.about.sourceTitle} />
          <p className="lead">{t.about.sourceBody}</p>
        </div>
      </section>
    </SiteLayout>
  );
}
