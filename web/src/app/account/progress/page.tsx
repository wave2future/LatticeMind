import Link from "next/link";
import { AccountLayout } from "@/components/AccountLayout";
import { IconBadge, Progress } from "@/components/ui";
import { paths } from "@/lib/data";
import { localizePaths } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export default function ProgressPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const list = localizePaths(paths, locale);

  return (
    <AccountLayout title={t.account.navProgress}>
      <div className="grid gap-5">
        {list.map((p) => {
          const doneLessons = Math.round(((p.progress ?? 0) / 100) * p.lessons.length);
          return (
            <div key={p.slug} className="panel">
              <div className="flex flex-wrap items-center gap-4">
                <IconBadge icon={p.icon} color={p.color} size={48} />
                <div className="flex-1">
                  <Link href={`/paths/${p.slug}`} className="text-[19px] font-extrabold text-ink hover:text-brand">
                    {p.title}
                  </Link>
                  <p className="text-[13px] text-muted">{t.account.lessonsDone(doneLessons, p.lessons.length)}</p>
                </div>
                <span className="text-[18px] font-black text-brand">{p.progress}%</span>
              </div>
              <Progress value={p.progress ?? 0} />
              <div className="mt-3 text-[13px] text-muted">
                {t.paths.nextLesson}: {p.lessons[Math.min(doneLessons, p.lessons.length - 1)].title}
              </div>
            </div>
          );
        })}
      </div>

      <div className="panel mt-6" style={{ background: "linear-gradient(135deg,#eef4ff,#fff)" }}>
        <h2 className="mb-2 text-[20px] font-extrabold text-ink">{t.account.reviewReminder}</h2>
        <p className="text-[15px] text-muted">{t.account.reviewReminderBody}</p>
      </div>
    </AccountLayout>
  );
}
