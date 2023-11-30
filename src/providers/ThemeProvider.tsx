"use client";

import { ThemeProvider } from "next-themes";

interface ThemeProvidersProps {
  children: React.ReactNode;
}

function ThemeProviders({ children }: ThemeProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
    </ThemeProvider>
  );
}

export { ThemeProviders };
