"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Brand";
import { useLocale } from "./LocaleProvider";
import { getDict } from "@/lib/i18n";

const navLabels = {
  zh: { home: "后台首页", models: "模型管理", biases: "偏差管理", cases: "案例管理", graph: "图谱管理", paths: "路径管理" },
  en: { home: "Dashboard", models: "Models", biases: "Biases", cases: "Cases", graph: "Graph", paths: "Paths" },
};

export function AdminLayout({
  title,
  action,
  children,
}: {
  title: string;
  action?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";
  const locale = useLocale();
  const t = getDict(locale);
  const labels = navLabels[locale];

  const nav = [
    { label: labels.home, href: "/admin" },
    { label: labels.models, href: "/admin/models" },
    { label: labels.biases, href: "/admin/biases" },
    { label: labels.cases, href: "/admin/cases" },
    { label: labels.graph, href: "/admin/graph" },
    { label: labels.paths, href: "/admin/paths" },
  ];

  return (
    <div className="grid min-h-screen lg:grid-cols-[232px_1fr]">
      <aside className="bg-[#102033] px-5 py-7 text-[#c8d8ea]">
        <div className="mb-8 flex items-center gap-3">
          <Logo />
          <span className="text-[18px] font-black text-white">{t.admin.cms}</span>
        </div>
        <nav>
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`mb-2 block rounded-[10px] px-3 py-3 text-[15px] font-bold transition-colors ${
                  active ? "bg-white/15 text-white" : "hover:bg-white/10"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-8 border-t border-white/10 pt-5">
          <Link href="/" className="text-sm text-[#9fb6d2] hover:text-white">{t.admin.backFront}</Link>
        </div>
      </aside>
      <main className="bg-[#f5f8fc] p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-[28px] font-black text-ink">{title}</h1>
          {action && <button className="btn-primary">{action}</button>}
        </div>
        {children}
      </main>
    </div>
  );
}
