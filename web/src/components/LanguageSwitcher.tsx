"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { locales, localeNames, LOCALE_COOKIE, type Locale } from "@/lib/i18n/config";
import { useLocale } from "./LocaleProvider";

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const current = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const choose = (l: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${l};path=/;max-age=31536000`;
    setOpen(false);
    router.refresh();
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 rounded-[10px] border px-3 py-2 text-sm font-bold transition-colors ${
          light
            ? "border-white/20 text-white hover:bg-white/10"
            : "border-line bg-white text-[#243854] hover:border-[#9db9df]"
        }`}
        aria-label="language"
      >
        <span aria-hidden>🌐</span>
        {localeNames[current]}
        <span className="text-xs">▾</span>
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-1 w-32 overflow-hidden rounded-[10px] border border-line bg-white shadow-soft">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => choose(l)}
              className={`block w-full px-4 py-2 text-left text-sm font-bold transition-colors hover:bg-[#edf5ff] ${
                l === current ? "text-brand" : "text-[#243854]"
              }`}
            >
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
