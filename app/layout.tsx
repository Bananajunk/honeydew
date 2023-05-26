import "./globals.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Honeydew",
  description: "The todo list for the whole family",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} font-oswald text-base`}>
      <body className="relative">
        <nav className={`absolute top-0 w-screen p-5 z-10 shadow-lg`}>
          Header
        </nav>
        <section>{children}</section>
      </body>
    </html>
  );
}
