import Link from "next/link";
import { AccountLayout } from "@/components/AccountLayout";
import { Progress, SectionTitle } from "@/components/ui";
import { paths } from "@/lib/data";
import { localizePaths } from "@/lib/data/localize";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";

export default function AccountPage() {
  const locale = getLocale();
  const t = getDict(locale);
  const list = localizePaths(paths, locale);

  const stats = [
    { label: t.account.statModels, value: "38", pct: 68 },
    { label: t.account.statFav, value: "24", pct: 48 },
    { label: t.account.statRecords, value: "12", pct: 40 },
    { label: t.account.statStreak, value: t.account.days(7), pct: 70 },
  ];

  return (
    <AccountLayout title={t.account.navHome}>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="panel">
            <p className="text-sm text-muted">{s.label}</p>
            <div className="my-2 text-[34px] font-black text-ink">{s.value}</div>
            <Progress value={s.pct} />
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="panel">
          <SectionTitle title={t.account.ongoingPaths} link="/account/progress" linkLabel={t.common.viewAll} />
          <div className="space-y-4">
            {list.slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/paths/${p.slug}`} className="block">
                <div className="flex items-center justify-between text-[15px]">
                  <span className="font-bold text-ink">{p.title}</span>
                  <span className="font-bold text-brand">{p.progress}%</span>
                </div>
                <Progress value={p.progress ?? 0} />
              </Link>
            ))}
          </div>
        </div>
        <div className="panel">
          <SectionTitle title={t.account.todaySuggest} />
          <ul className="space-y-3 text-[15px] text-[#35506f]">
            <li>• {t.account.ts1}</li>
            <li>• {t.account.ts2}</li>
            <li>• {t.account.ts3}</li>
          </ul>
          <Link href="/decision/bias-check" className="btn-primary mt-5 w-full">{t.account.startTraining}</Link>
        </div>
      </div>
    </AccountLayout>
  );
}
