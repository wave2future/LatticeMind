import { notFound } from "next/navigation";
import { BiasDetail } from "@/components/BiasDetail";
import { biases, biasMap } from "@/lib/data";
import { localizeBias } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";

export function generateStaticParams() {
  return biases.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const b = biasMap[params.slug];
  return { title: b ? localizeBias(b, getLocale()).title : "Bias" };
}

export default function BiasDetailPage({ params }: { params: { slug: string } }) {
  const b = biasMap[params.slug];
  if (!b) notFound();
  return <BiasDetail bias={b} kind="bias" locale={getLocale()} />;
}
