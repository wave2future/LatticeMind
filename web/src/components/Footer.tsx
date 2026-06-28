"use client";

import Link from "next/link";
import { Brand } from "./Brand";
import { useLocale } from "./LocaleProvider";
import { getDict } from "@/lib/i18n";

export function Footer() {
  const locale = useLocale();
  const t = getDict(locale);

  const columns = [
    {
      title: t.footer.learn,
      links: [
        { label: t.nav.models, href: "/models" },
        { label: t.nav.principles, href: "/principles" },
        { label: t.nav.paths, href: "/paths" },
        { label: t.nav.cases, href: "/cases" },
      ],
    },
    {
      title: t.footer.cognition,
      links: [
        { label: t.nav.misjudgment, href: "/misjudgment" },
        { label: t.nav.biases, href: "/biases" },
        { label: t.nav.fallacies, href: "/fallacies" },
        { label: t.nav.systems, href: "/systems" },
      ],
    },
    {
      title: t.footer.tools,
      links: [
        { label: t.nav.decision, href: "/decision" },
        { label: t.decision.t1, href: "/decision/model-scan" },
        { label: t.decision.t2, href: "/decision/bias-check" },
        { label: t.decision.t3, href: "/decision/system-map" },
      ],
    },
    {
      title: t.footer.platform,
      links: [
        { label: t.nav.about, href: "/about" },
        { label: t.nav.method, href: "/method" },
        { label: t.nav.pricing, href: "/pricing" },
        { label: t.nav.admin, href: "/admin" },
      ],
    },
  ];

  return (
    <footer className="mt-16 border-t border-line bg-white/70">
      <div className="mx-auto max-w-[1320px] px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Brand />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{t.footer.tagline}</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-sm font-extrabold text-ink">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm font-medium text-muted hover:text-brand">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-sm font-medium text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} {t.brand.name} · {t.footer.rights}</span>
          <span>{t.footer.slogan}</span>
        </div>
      </div>
    </footer>
  );
}
