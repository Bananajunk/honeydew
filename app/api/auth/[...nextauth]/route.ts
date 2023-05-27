import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  theme: {
    colorScheme: "light",
    brandColor: "#61864b",
    buttonText: "#060704",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
