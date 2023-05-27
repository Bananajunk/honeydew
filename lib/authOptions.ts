import type { NextAuthOptions } from "next-auth";

import { prisma } from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
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

export default authOptions;
