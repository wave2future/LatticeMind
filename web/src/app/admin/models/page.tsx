import { AdminLayout } from "@/components/AdminLayout";
import { AdminTable } from "@/components/AdminTable";
import { models } from "@/lib/data";
import { localizeModel } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict, term } from "@/lib/i18n";

export default function AdminModelsPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const rows = models.map((m) => ({
    title: localizeModel(m, locale).title,
    type: t.admin.tModel,
    category: term(m.category, locale),
    status: t.admin.published,
  }));
  return (
    <AdminLayout title={locale === "en" ? "Models" : "模型管理"} action={t.admin.newModel}>
      <AdminTable rows={rows} filters={[t.admin.statusFilter, t.admin.catFilter, t.admin.diffFilter]} locale={locale} />
    </AdminLayout>
  );
}
