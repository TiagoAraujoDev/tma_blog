"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleToggleTheme = useCallback(() => {
    setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark");
  }, [theme]);

  // Just render the UI when mounted on client
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button aria-label="Toggle Dark Mode" onClick={handleToggleTheme}>
      {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
        <MdLightMode className="h-6 w-6 text-yellow-300" />
      ) : (
        <MdDarkMode className="text-white-300 h-6 w-6" />
      )}
    </button>
  );
};

export { ThemeSwitch };
