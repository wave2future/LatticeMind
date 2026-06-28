"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { SiteLayout } from "./SiteLayout";
import { useLocale } from "./LocaleProvider";
import { getDict } from "@/lib/i18n";

export function AccountLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";
  const t = getDict(useLocale());
  const { data: session } = useSession();
  const user = session?.user;
  const displayName = user?.name ?? user?.email ?? "";

  const accountNav = [
    { label: t.account.navHome, href: "/account", icon: "◎" },
    { label: t.account.navFav, href: "/account/favorites", icon: "★" },
    { label: t.account.navProgress, href: "/account/progress", icon: "▤" },
    { label: t.account.navDecisions, href: "/account/decisions", icon: "▦" },
  ];

  return (
    <SiteLayout wide>
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="panel h-fit">
          <div className="mb-4 flex items-center gap-3 border-b border-line pb-4">
            {user?.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={user.image} alt={displayName} className="h-12 w-12 rounded-full" />
            ) : (
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand to-[#6aa6ff] text-lg font-black text-white">
                {displayName.slice(0, 1).toUpperCase()}
              </span>
            )}
            <div className="min-w-0">
              <div className="truncate text-[15px] font-extrabold text-ink">{displayName}</div>
              <div className="text-xs text-muted">{t.account.member}</div>
            </div>
          </div>
          {accountNav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link key={n.href} href={n.href} className={`side-item flex items-center gap-2 ${active ? "active" : ""}`}>
                <span>{n.icon}</span>
                {n.label}
              </Link>
            );
          })}
        </aside>
        <div>
          <h1 className="mb-6 text-[30px] font-black text-ink">{title}</h1>
          {children}
        </div>
      </div>
    </SiteLayout>
  );
}
