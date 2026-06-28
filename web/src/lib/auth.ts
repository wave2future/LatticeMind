import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const googleId = process.env.GOOGLE_CLIENT_ID;
const googleSecret = process.env.GOOGLE_CLIENT_SECRET;

export const isGoogleConfigured = Boolean(googleId && googleSecret);

export const authOptions: NextAuthOptions = {
  providers: isGoogleConfigured
    ? [
        GoogleProvider({
          clientId: googleId as string,
          clientSecret: googleSecret as string,
        }),
      ]
    : [],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, profile }) {
      // Persist the Google profile picture on first sign-in.
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
};
