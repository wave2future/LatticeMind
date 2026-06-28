import { AdminLayout } from "@/components/AdminLayout";
import { AdminTable } from "@/components/AdminTable";
import { misjudgments, biases } from "@/lib/data";
import { localizeMisjudgment, localizeBias } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict, term } from "@/lib/i18n";

export default function AdminBiasesPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const rows = [
    ...misjudgments.map((b) => ({
      title: localizeMisjudgment(b, locale).title,
      type: t.admin.tMisjudgment,
      category: localizeMisjudgment(b, locale).category,
      status: t.admin.published,
    })),
    ...biases.map((b) => ({
      title: localizeBias(b, locale).title,
      type: t.admin.tBias,
      category: term(b.stage, locale),
      status: t.admin.published,
    })),
  ];
  return (
    <AdminLayout title={locale === "en" ? "Biases" : "偏差管理"} action={t.admin.newBias}>
      <AdminTable rows={rows} filters={[t.admin.statusFilter, t.admin.typeFilter, t.admin.stageFilter]} locale={locale} />
    </AdminLayout>
  );
}
