import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumb, IconBadge, Pill } from "@/components/ui";
import { RelatedBiases } from "@/components/RelatedLinks";
import { fallacies, fallacyMap } from "@/lib/data";
import { localizeFallacy } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export function generateStaticParams() {
  return fallacies.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const f = fallacyMap[params.slug];
  return { title: f ? localizeFallacy(f, getLocale()).title : "Fallacy" };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="panel">
      <h2 className="mb-3 text-[22px] font-extrabold text-ink">{title}</h2>
      {children}
    </div>
  );
}

export default function FallacyDetailPage({ params }: { params: { slug: string } }) {
  const raw = fallacyMap[params.slug];
  if (!raw) notFound();
  const locale = getLocale();
  const t = getDict(locale);
  const f = localizeFallacy(raw, locale);

  return (
    <SiteLayout>
      <Breadcrumb
        items={[
          { label: t.nav.home, href: "/" },
          { label: t.nav.fallacies, href: "/fallacies" },
          { label: f.title },
        ]}
      />
      <section className="panel !p-8">
        <div className="mb-4 flex items-center gap-4">
          <IconBadge icon="!" color="#f58a2a" size={56} />
          <div>
            <h1 className="text-[34px] font-black text-ink">{f.title}</h1>
            <Pill>{f.category}</Pill>
          </div>
        </div>
        <p className="lead">{f.summary}</p>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Section title={t.fallacies.example}>
          <p className="rounded-xl bg-[#fff6ec] p-4 text-[16px] italic leading-relaxed text-[#7a4a12]">“{f.example}”</p>
        </Section>
        <Section title={t.fallacies.whyWrong}>
          <p className="text-[16px] leading-[1.8] text-[#35506f]">{f.whyWrong}</p>
        </Section>
        <Section title={t.fallacies.howToRespond}>
          <p className="text-[16px] leading-[1.8] text-[#35506f]">{f.howToRespond}</p>
        </Section>
        <Section title={t.fallacies.relatedBiases}>
          <RelatedBiases slugs={f.relatedBiases} locale={locale} />
        </Section>
      </div>
    </SiteLayout>
  );
}
