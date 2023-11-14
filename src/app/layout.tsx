import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./style/globals.css";
// import Script from 'next/script'

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
      <head>
        {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-funky.min.css" rel="stylesheet" /> */}
      </head>
      <body className={`${space_grotesk.variable} scroll-smooth bg-gray-950`}>
        {children}
        {/* <Script src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js' /> */}
        {/* <Script src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js' /> */}
      </body>
    </html>
  );
}

export default RootLayout;
