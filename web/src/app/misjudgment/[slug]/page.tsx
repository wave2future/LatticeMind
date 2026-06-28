import { notFound } from "next/navigation";
import { BiasDetail } from "@/components/BiasDetail";
import { misjudgments, misjudgmentMap } from "@/lib/data";
import { localizeMisjudgment } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";

export function generateStaticParams() {
  return misjudgments.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const b = misjudgmentMap[params.slug];
  return { title: b ? localizeMisjudgment(b, getLocale()).title : "Misjudgment" };
}

export default function MisjudgmentDetailPage({ params }: { params: { slug: string } }) {
  const b = misjudgmentMap[params.slug];
  if (!b) notFound();
  return <BiasDetail bias={b} kind="misjudgment" locale={getLocale()} />;
}
