import { AdminLayout } from "@/components/AdminLayout";
import { AdminTable } from "@/components/AdminTable";
import { paths } from "@/lib/data";
import { localizePath } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export default function AdminPathsPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const rows = paths.map((p) => ({
    title: localizePath(p, locale).title,
    type: t.admin.tPath,
    category: t.common.lessonsCount(p.lessons.length),
    status: t.admin.published,
  }));
  return (
    <AdminLayout title={locale === "en" ? "Paths" : "路径管理"} action={t.admin.newPath}>
      <AdminTable rows={rows} filters={[t.admin.statusFilter, t.admin.diffFilter]} locale={locale} />
    </AdminLayout>
  );
}
