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
        <header className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <span className="mr-2 text-2xl font-extrabold text-white">
              &lt;tma_blog /&gt;
            </span>
            <span className="cursor-block" />
          </div>
          <nav>
            <ul>
              <li>home</li>
              <li>blog</li>
              <li>projects</li>
              <li>about</li>
            </ul>
          </nav>
        </header>
        {children}
        {/* <Script src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js' /> */}
        {/* <Script src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js' /> */}
      </body>
    </html>
  );
}

export default RootLayout;
