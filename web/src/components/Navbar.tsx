"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { Brand } from "./Brand";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLocale } from "./LocaleProvider";
import { getDict } from "@/lib/i18n";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Navbar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const t = getDict(locale);
  const { data: session } = useSession();
  const user = session?.user;

  const nav = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.models, href: "/models" },
    { label: t.nav.misjudgment, href: "/misjudgment" },
    { label: t.nav.biases, href: "/biases" },
    { label: t.nav.systems, href: "/systems" },
    { label: t.nav.decision, href: "/decision" },
    { label: t.nav.cases, href: "/cases" },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b border-line"
      style={{
        background: "rgba(255,255,255,.88)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 6px 22px rgba(35, 55, 90, .07)",
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-6">
        <Brand />
        <nav className="hidden items-center gap-6 text-[15px] font-bold text-[#243854] xl:flex">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors hover:text-brand ${
                  active ? "text-brand" : ""
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-[26px] left-0 right-0 h-[3px] rounded bg-brand" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher />
          {user ? (
            <>
              <Link href="/account" className="flex items-center gap-2">
                {user.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={user.image} alt={user.name ?? "user"} className="h-8 w-8 rounded-full" />
                ) : (
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-sm font-black text-white">
                    {(user.name ?? "U").slice(0, 1)}
                  </span>
                )}
                <span className="max-w-[120px] truncate text-[15px] font-bold text-[#243854]">
                  {user.name ?? user.email}
                </span>
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-[15px] font-bold text-muted hover:text-brand"
              >
                {t.auth.signOut}
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-[15px] font-bold text-[#243854] hover:text-brand">
                {t.common.login}
              </Link>
              <Link href="/register" className="btn-primary">
                {t.common.start}
              </Link>
            </>
          )}
        </div>
        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <button
            className="filter-chip"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.common.menu}
          >
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-line bg-white px-6 py-3 xl:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-3 font-bold ${
                isActive(pathname, item.href) ? "bg-[#edf5ff] text-brand" : "text-[#243854]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {user ? (
            <>
              <Link href="/account" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-bold text-[#243854]">
                {user.name ?? user.email}
              </Link>
              <button
                onClick={() => {
                  setOpen(false);
                  signOut({ callbackUrl: "/" });
                }}
                className="block w-full rounded-lg px-3 py-3 text-left font-bold text-muted"
              >
                {t.auth.signOut}
              </button>
            </>
          ) : (
            <Link href="/register" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              {t.common.start}
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
