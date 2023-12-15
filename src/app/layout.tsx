import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ThemeProviders } from "~/providers/ThemeProvider";

import "~/style/globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${space_grotesk.className} overflow-x-hidden scroll-smooth bg-gray-50 dark:bg-gray-950`}
      >
        <ThemeProviders>
          <Header />
          <main className="mx-auto w-full max-w-[1280px] pt-[72px]">
            {children}
          </main>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}

export default RootLayout;
