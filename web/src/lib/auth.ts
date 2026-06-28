import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const googleId = process.env.GOOGLE_CLIENT_ID ?? process.env.AUTH_GOOGLE_ID;
const googleSecret = process.env.GOOGLE_CLIENT_SECRET ?? process.env.AUTH_GOOGLE_SECRET;

export const isGoogleConfigured = Boolean(googleId && googleSecret);

// Auth.js v5 requires a secret. Use a dev-only fallback so `npm run dev` works
// without a .env.local; production MUST set AUTH_SECRET.
const secret =
  process.env.AUTH_SECRET ??
  process.env.NEXTAUTH_SECRET ??
  (process.env.NODE_ENV !== "production"
    ? "dev-only-insecure-secret-change-me-in-production"
    : undefined);

// Auth.js v5 — edge-native, so it runs on Cloudflare Pages (Edge runtime).
export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  secret,
  providers: isGoogleConfigured
    ? [Google({ clientId: googleId, clientSecret: googleSecret })]
    : [],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  callbacks: {
    async jwt({ token, profile }) {
      if (profile && (profile as { picture?: string }).picture) {
        token.picture = (profile as { picture?: string }).picture;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.image = (token.picture as string) ?? session.user.image;
      }
      return session;
    },
  },
});
