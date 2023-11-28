"use client";

import Link from "next/link";
import { MdMenu } from "react-icons/md";

import { useWindowSize } from "~/hooks/useWindowSize";

const NavBar = () => {
  const [width] = useWindowSize();

  return (
    <nav className="block">
      {width >= 1024 ? (
        <ul className="flex items-center justify-center gap-4">
          <li className="cursor-pointer border-b border-transparent font-semibold text-white transition hover:border-b hover:border-blue-500">
            <Link href="/" title="Home">
              Home
            </Link>
          </li>
          <li className="ktransition cursor-pointer border-b border-transparent font-semibold text-white hover:border-b hover:border-blue-500">
            <Link href="/blog" title="Blog">
              Blog
            </Link>
          </li>
          <li className="cursor-pointer border-b border-transparent font-semibold text-white transition hover:border-b hover:border-blue-500">
            <Link href="/projects" title="Projects">
              Projects
            </Link>
          </li>
          <li className="cursor-pointer border-b border-transparent font-semibold text-white transition hover:border-b hover:border-blue-500">
            <Link href="/about" title="About">
              About
            </Link>
          </li>
        </ul>
      ) : (
        <MdMenu className="h-6 w-6 text-blue-400" />
      )}
    </nav>
  );
};

export { NavBar };
