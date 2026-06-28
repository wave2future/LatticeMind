"use client";

import Link from "next/link";
import { useLocale } from "./LocaleProvider";

export function Logo({ size = 38, light = false }: { size?: number; light?: boolean }) {
  const inset1 = Math.round(size * 0.21);
  const inset2 = Math.round(size * 0.32);
  return (
    <span
      className="relative inline-block flex-shrink-0"
      style={{
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.29),
        background: "linear-gradient(135deg, #155eef, #6aa6ff)",
        boxShadow: "0 10px 22px rgba(21,94,239,.25)",
      }}
      aria-hidden
    >
      <span
        className="absolute"
        style={{
          inset: inset1,
          border: "3px solid #fff",
          borderRadius: 9,
          transform: "rotate(30deg)",
        }}
      />
      <span
        className="absolute"
        style={{
          inset: inset2,
          border: "3px solid #fff",
          borderRadius: 9,
          opacity: 0.55,
          transform: "rotate(30deg)",
        }}
      />
    </span>
  );
}

export function GoogleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden className="inline-block">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001 6.19 5.238 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

export function Brand({ light = false }: { light?: boolean }) {
  const locale = useLocale();
  return (
    <Link href="/" className="flex items-center gap-[14px]">
      <Logo />
      <span className={`text-[22px] font-black ${light ? "text-white" : "text-ink"}`}>
        {locale === "zh" ? (
          <>
            多元智慧{" "}
            <span className={`font-bold ${light ? "text-slate-300" : "text-[#6b7f99]"}`}>
              LatticeMind
            </span>
          </>
        ) : (
          "LatticeMind"
        )}
      </span>
    </Link>
  );
}
