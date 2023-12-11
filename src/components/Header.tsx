import Link from "next/link";

import { NavBar } from "./NavBar";
import { ThemeSwitch } from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="fixed z-20 w-screen bg-gray-200/30 px-10 py-6 backdrop-blur-sm dark:bg-stone-700/30">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between">
        <div className="flex items-center justify-center">
          <span className="mr-2 text-base font-extrabold text-gray-900 dark:text-white sm:text-xl">
            <Link href="/">
              <span className="text-blue-400">~</span>/tma_blog $
            </Link>
          </span>
          <span className="cursor-block" />
        </div>
        <div className="flex items-center justify-center gap-3">
          <ThemeSwitch />
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export { Header };
