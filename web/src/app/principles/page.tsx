import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { ContentHero } from "@/components/ContentHero";
import { SectionTitle, IconBadge, Pill } from "@/components/ui";
import { disciplines, models } from "@/lib/data";
import { localizeDisciplines } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

const coreByLocale = {
  zh: [
    { name: "稀缺", desc: "资源有限，选择必然意味着交换和放弃。", color: "#155eef" },
    { name: "因果", desc: "区分相关、触发、必要条件与充分条件。", color: "#0f9f96" },
    { name: "反馈", desc: "输出会改变输入，系统因此稳定或放大。", color: "#f58a2a" },
    { name: "熵增", desc: "系统自发走向混乱，秩序需要持续投入。", color: "#6257d9" },
    { name: "进化", desc: "环境筛选适应者，竞争与复制决定长期结果。", color: "#3fa66b" },
    { name: "激励", desc: "奖励什么就得到什么，行为朝激励方向流动。", color: "#7b61d1" },
    { name: "概率", desc: "未来是分布而非单点，用概率而非确定看世界。", color: "#155eef" },
    { name: "复利", desc: "增量作用于存量，时间放大微小优势。", color: "#3fa66b" },
  ],
  en: [
    { name: "Scarcity", desc: "Resources are limited; choice necessarily means trade-off and sacrifice.", color: "#155eef" },
    { name: "Causality", desc: "Distinguish correlation, trigger, necessary and sufficient conditions.", color: "#0f9f96" },
    { name: "Feedback", desc: "Output changes input, so systems stabilize or amplify.", color: "#f58a2a" },
    { name: "Entropy", desc: "Systems drift toward disorder; order needs continuous input.", color: "#6257d9" },
    { name: "Evolution", desc: "The environment selects the fit; competition and replication set the long run.", color: "#3fa66b" },
    { name: "Incentives", desc: "You get what you reward; behavior flows toward incentives.", color: "#7b61d1" },
    { name: "Probability", desc: "The future is a distribution, not a point; see the world in odds.", color: "#155eef" },
    { name: "Compounding", desc: "Increments build on the stock; time magnifies small edges.", color: "#3fa66b" },
  ],
};

export default function PrinciplesPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const corePrinciples = coreByLocale[locale];
  const ds = localizeDisciplines(disciplines, locale);

  return (
    <SiteLayout>
      <ContentHero
        eyebrow={t.principles.eyebrow}
        title={t.principles.title}
        description={t.principles.desc}
        primary={{ label: t.principles.learnPath, href: "/paths/multidisciplinary-principles" }}
        secondary={{ label: t.common.browseModels, href: "/models" }}
      />

      <section className="mt-8">
        <SectionTitle title={t.principles.coreTitle} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {corePrinciples.map((p) => (
            <div key={p.name} className="card">
              <IconBadge icon={p.name.slice(0, 1)} color={p.color} />
              <h3 className="my-2 text-[19px] font-extrabold text-ink">{p.name}</h3>
              <p className="text-[14px] leading-relaxed text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <SectionTitle title={t.principles.byDiscipline} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {ds.map((d) => {
            const count = models.filter((m) => m.discipline === d.slug).length;
            return (
              <Link key={d.slug} href={`/models?d=${d.slug}`} className="card flex items-start gap-3">
                <IconBadge icon={d.icon} color={d.color} />
                <div>
                  <h3 className="text-[17px] font-extrabold text-ink">{d.name}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">{d.summary}</p>
                  <Pill className="mt-2">{t.principles.modelsCount(count)}</Pill>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
