import { AuthCard } from "@/components/AuthCard";
import { getLocale } from "@/lib/i18n/locale";
import { getDict } from "@/lib/i18n";
import { isGoogleConfigured } from "@/lib/auth";

export function generateMetadata() {
  return { title: getDict(getLocale()).auth.registerTitle };
}

export default function RegisterPage() {
  return <AuthCard mode="register" googleEnabled={isGoogleConfigured} />;
}
