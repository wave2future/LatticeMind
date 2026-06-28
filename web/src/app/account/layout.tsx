import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export const runtime = "edge";

// Server-side guard: the entire /account area requires login.
export default async function AccountSegmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect(`/login?callbackUrl=${encodeURIComponent("/account")}`);
  }
  return <>{children}</>;
}
