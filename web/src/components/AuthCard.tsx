"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Navbar } from "./Navbar";
import { Logo, GoogleIcon } from "./Brand";
import { useLocale } from "./LocaleProvider";
import { getDict } from "@/lib/i18n";

export function AuthCard({
  mode,
  googleEnabled = true,
}: {
  mode: "login" | "register";
  googleEnabled?: boolean;
}) {
  const t = getDict(useLocale());
  const a = t.auth;
  const isLogin = mode === "login";
  const [loading, setLoading] = useState(false);

  const onGoogle = () => {
    if (!googleEnabled) return;
    setLoading(true);
    const params = new URLSearchParams(window.location.search);
    const callbackUrl = params.get("callbackUrl") || "/account";
    signIn("google", { callbackUrl });
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-[460px] panel !p-9">
          <div className="mb-6 flex items-center gap-3">
            <Logo />
            <span className="text-[20px] font-black text-ink">{isLogin ? a.loginTitle : a.registerTitle}</span>
          </div>
          <h1 className="mb-2 text-[28px] font-black text-ink">{isLogin ? a.loginHead : a.registerHead}</h1>
          <p className="mb-6 text-[15px] text-muted">{isLogin ? a.loginSub : a.registerSub}</p>

          <div className="space-y-3">
            {!isLogin && (
              <div>
                <label className="mb-1 block text-sm font-bold text-ink">{a.nickname}</label>
                <input className="field" placeholder={a.nicknamePh} />
              </div>
            )}
            <div>
              <label className="mb-1 block text-sm font-bold text-ink">{a.email}</label>
              <input className="field" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold text-ink">{a.password}</label>
              <input className="field" type="password" placeholder="••••••••" />
            </div>
          </div>

          <button className="btn-primary mt-6 w-full">{isLogin ? a.loginBtn : a.createBtn}</button>

          <div className="my-5 flex items-center gap-3 text-sm text-muted">
            <span className="h-px flex-1 bg-line" />
            {a.or}
            <span className="h-px flex-1 bg-line" />
          </div>
          <button
            type="button"
            onClick={onGoogle}
            disabled={loading || !googleEnabled}
            className="btn-ghost w-full disabled:cursor-not-allowed disabled:opacity-60"
          >
            <GoogleIcon />
            {loading ? "…" : a.wechat}
          </button>
          {!googleEnabled && (
            <p className="mt-2 text-center text-xs text-muted">{a.googleSetup}</p>
          )}

          <p className="mt-6 text-center text-sm text-muted">
            {isLogin ? (
              <>
                {a.noAccount}{" "}
                <Link href="/register" className="font-bold text-brand">{a.goRegister}</Link>
              </>
            ) : (
              <>
                {a.hasAccount}{" "}
                <Link href="/login" className="font-bold text-brand">{a.goLogin}</Link>
              </>
            )}
          </p>
        </div>
      </main>
    </div>
  );
}
