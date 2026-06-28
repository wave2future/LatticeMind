import { AuthCard } from "@/components/AuthCard";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";
import { isGoogleConfigured } from "@/lib/auth";

export function generateMetadata() {
  return { title: getDict(getLocale()).auth.loginTitle };
}

export default function LoginPage() {
  return <AuthCard mode="login" googleEnabled={isGoogleConfigured} />;
}
