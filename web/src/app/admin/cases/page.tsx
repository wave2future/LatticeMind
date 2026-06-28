import { AdminLayout } from "@/components/AdminLayout";
import { AdminTable } from "@/components/AdminTable";
import { cases } from "@/lib/data";
import { localizeCase } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict, term } from "@/lib/i18n";

export default function AdminCasesPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const rows = cases.map((c) => ({
    title: localizeCase(c, locale).title,
    type: t.admin.tCase,
    category: term(c.scenario, locale),
    status: t.admin.published,
  }));
  return (
    <AdminLayout title={locale === "en" ? "Cases" : "案例管理"} action={t.admin.newCase}>
      <AdminTable rows={rows} filters={[t.admin.statusFilter, t.admin.sceneFilter, t.admin.diffFilter]} locale={locale} />
    </AdminLayout>
  );
}
