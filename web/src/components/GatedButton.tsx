"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

// A button whose action requires login. If the user is not authenticated,
// it redirects to /login with a callbackUrl back to the current page; after
// login the user returns here and can click again.
export function GatedButton({
  label,
  savedLabel,
  className,
  action = "save",
}: {
  label: string;
  savedLabel?: string;
  className?: string;
  action?: "save" | "print";
}) {
  const { status } = useSession();
  const router = useRouter();
  const pathname = usePathname() || "/";
  const [done, setDone] = useState(false);

  const onClick = () => {
    if (status === "loading") return;
    if (status !== "authenticated") {
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
      return;
    }
    if (action === "print") {
      window.print();
      return;
    }
    setDone(true);
  };

  return (
    <button className={className} onClick={onClick}>
      {done && savedLabel ? `✓ ${savedLabel}` : label}
    </button>
  );
}
