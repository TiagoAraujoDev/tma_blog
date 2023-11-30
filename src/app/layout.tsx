import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import "./style/globals.css";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Tiago Araujo personal website",
  description: "Blog and profissional informatios",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${space_grotesk.className} dark:bg-grid overflow-x-hidden scroll-smooth bg-gray-50 dark:bg-gray-950`}
      >
        <Header />
        <main className="mx-auto w-full max-w-[1280px] pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
