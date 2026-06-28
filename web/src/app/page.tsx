import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { KnowledgeGraph } from "@/components/KnowledgeGraph";
import { SectionTitle, Eyebrow, IconBadge, Progress } from "@/components/ui";
import { cases, paths, platformStats } from "@/lib/data";
import { localizeCases, localizePaths } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export default function HomePage() {
  const locale = getLocale();
  const t = getDict(locale);
  const localizedCases = localizeCases(cases, locale);
  const localizedPaths = localizePaths(paths, locale);

  const capabilities = [
    { icon: "📖", color: "#155eef", title: t.home.capLearnT, desc: t.home.capLearnD },
    { icon: "🛡", color: "#0f9f96", title: t.home.capBiasT, desc: t.home.capBiasD },
    { icon: "❖", color: "#6257d9", title: t.home.capSysT, desc: t.home.capSysD },
    { icon: "✔", color: "#f58a2a", title: t.home.capDecideT, desc: t.home.capDecideD },
  ];

  const contentMap = [
    { label: t.home.cmModels, sub: platformStats.models, href: "/models", color: "#155eef" },
    { label: t.home.cmCases, sub: platformStats.cases, href: "/cases", color: "#3fa66b" },
    { label: t.home.cmMis, sub: platformStats.tendencies, href: "/misjudgment", color: "#0f9f96" },
    { label: t.home.cmChecklist, sub: platformStats.templates, href: "/decision", color: "#f58a2a" },
    { label: t.home.cmBiases, sub: platformStats.biases, href: "/biases", color: "#7b61d1" },
    { label: t.home.cmSystems, sub: platformStats.systems, href: "/systems", color: "#2781ca" },
  ];

  return (
    <SiteLayout>
      <section className="grid items-center gap-10 py-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <div>
          <Eyebrow>{t.home.eyebrow}</Eyebrow>
          <h1 className="my-5 text-[40px] font-black leading-[1.16] text-ink sm:text-[50px]">
            {t.home.title1}
            <br />
            {t.home.title2}
          </h1>
          <p className="lead max-w-xl text-[20px]">{t.home.lead}</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/biases" className="btn-primary">
              {t.home.ctaGraph}
            </Link>
            <Link href="/decision/bias-check" className="btn-ghost">
              {t.home.ctaBias}
            </Link>
            <Link href="/decision" className="btn-ghost">
              {t.home.ctaTool}
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-8 text-[13px] text-muted">
            <div><strong className="block text-[20px] text-ink">{platformStats.models}</strong>{t.home.statModels}</div>
            <div><strong className="block text-[20px] text-ink">{platformStats.biases}</strong>{t.home.statBiases}</div>
            <div><strong className="block text-[20px] text-ink">{platformStats.tendencies}</strong>{t.home.statTendencies}</div>
            <div><strong className="block text-[20px] text-ink">{platformStats.paths}</strong>{t.home.statPaths}</div>
          </div>
        </div>
        <KnowledgeGraph />
      </section>

      <section className="mt-10">
        <div className="panel">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((c) => (
              <div key={c.title} className="flex gap-4">
                <IconBadge icon={c.icon} color={c.color} size={52} />
                <div>
                  <h3 className="mb-1 text-[19px] font-extrabold text-ink">{c.title}</h3>
                  <p className="text-[14px] leading-relaxed text-muted">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-4">
        <div className="panel">
          <SectionTitle title={t.home.contentMap} link="/models" linkLabel={t.common.viewAll} />
          <div className="grid grid-cols-2 gap-3">
            {contentMap.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="rounded-xl border border-line p-3 transition-all hover:-translate-y-0.5 hover:border-[#bcd3f6]"
              >
                <span className="mb-2 block h-2 w-8 rounded-full" style={{ background: c.color }} />
                <div className="text-[15px] font-extrabold text-ink">{c.label}</div>
                <div className="text-[12px] text-muted">{c.sub}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="panel">
          <SectionTitle title={t.home.todayPractice} link="/decision/new" linkLabel={t.home.swap} />
          <span className="pill" style={{ color: "#f58a2a" }}>{t.home.practiceTag}</span>
          <h3 className="my-3 text-[20px] font-extrabold text-ink">{t.home.practiceQ}</h3>
          <p className="mb-4 text-[14px] leading-relaxed text-muted">{t.home.practiceDesc}</p>
          <div className="mb-4 flex gap-6 text-[13px] text-muted">
            <div><div className="font-bold text-ink">{t.home.estTime}</div>{t.home.estTimeVal}</div>
            <div><div className="font-bold text-ink">{t.home.estDiff}</div>{t.home.estDiffVal}</div>
          </div>
          <Link href="/cases/ai-app" className="btn-primary w-full">{t.home.startPractice}</Link>
        </div>

        <div className="panel">
          <SectionTitle title={t.home.pathsRec} link="/paths" linkLabel={t.common.viewAll} />
          <div className="space-y-4">
            {localizedPaths.slice(0, 4).map((p) => (
              <Link key={p.slug} href={`/paths/${p.slug}`} className="block">
                <div className="flex items-center gap-3">
                  <IconBadge icon={p.icon} color={p.color} size={40} />
                  <div className="flex-1">
                    <div className="text-[15px] font-extrabold text-ink">{p.title}</div>
                    <div className="text-[12px] text-muted">{p.subtitle}</div>
                  </div>
                  <span className="text-[13px] font-bold text-brand">{p.progress}%</span>
                </div>
                <Progress value={p.progress ?? 0} />
              </Link>
            ))}
          </div>
        </div>

        <div className="panel">
          <SectionTitle title={t.home.featuredCases} link="/cases" linkLabel={t.common.viewAll} />
          <div className="space-y-3">
            {localizedCases.slice(5, 9).map((c) => (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="flex items-center gap-3 rounded-xl border border-line p-3 transition-all hover:border-[#bcd3f6]"
              >
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-[#edf5ff] text-xl">
                  {c.logo}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[14px] font-extrabold text-ink">{c.title}</div>
                  <div className="mt-1 flex gap-1">
                    {c.tags.map((tag) => (
                      <span key={tag} className="text-[11px] text-muted">{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="text-muted">›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div
          className="panel flex flex-col items-center justify-between gap-4 !p-8 text-center sm:flex-row sm:text-left"
          style={{ background: "linear-gradient(135deg, #155eef, #327cff)" }}
        >
          <div>
            <h2 className="text-[26px] font-black text-white">{t.home.ctaBandT}</h2>
            <p className="mt-1 text-white/80">{t.home.ctaBandD}</p>
          </div>
          <Link href="/register" className="rounded-[10px] bg-white px-7 py-3 font-extrabold text-brand shadow-soft">
            {t.home.ctaBandBtn}
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
