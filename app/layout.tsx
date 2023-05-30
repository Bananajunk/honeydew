import SignIn from "@/components/SignIn";
import { Oswald } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";

import "./globals.css";

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Honeydew",
  description: "The todo list for the whole family",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en" className={`${oswald.variable} font-oswald text-base`}>
        <body className="relative bg-background">
          <nav className={`absolute top-0 w-screen p-5 z-10 shadow-lg`}>
            <section className="flex justify-end gap-4">
              <SignIn />
            </section>
          </nav>
          <section>{children}</section>
        </body>
      </html>
    </AuthProvider>
  );
}
