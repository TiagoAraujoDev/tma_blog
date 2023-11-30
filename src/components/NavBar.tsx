"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

import { useWindowSize } from "~/hooks/useWindowSize";

const NavBar = () => {
  const [width] = useWindowSize();
  const [open, setOpen] = useState(false);

  return (
    <nav className="block">
      {width >= 1024 ? (
        <ul className="flex items-center justify-center gap-4">
          <li className="cursor-pointer border-b border-transparent font-semibold text-gray-800 transition hover:border-b hover:border-blue-500 dark:text-white">
            <Link href="/" title="Home">
              Home
            </Link>
          </li>
          <li className="cursor-pointer border-b border-transparent font-semibold text-gray-800 hover:border-b hover:border-blue-500 dark:text-white">
            <Link href="/blog" title="Blog">
              Blog
            </Link>
          </li>
          <li className="cursor-pointer border-b border-transparent font-semibold text-gray-800 transition hover:border-b hover:border-blue-500 dark:text-white">
            <Link href="/projects" title="Projects">
              Projects
            </Link>
          </li>
          <li className="cursor-pointer border-b border-transparent font-semibold text-gray-800 transition hover:border-b hover:border-blue-500 dark:text-white">
            <Link href="/about" title="About">
              About
            </Link>
          </li>
        </ul>
      ) : (
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="flex items-center justify-center">
              <MdMenu className="h-6 w-6 text-blue-400" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content className="fixed right-0 top-0 z-40 h-screen w-screen bg-gray-100/70 backdrop-blur-sm dark:bg-gray-900/70">
              <div className="flex flex-col items-center">
                <div className="flex w-full items-center justify-between px-10 py-6">
                  <div className="flex items-center justify-center">
                    <span className="mr-2 text-xl font-extrabold text-gray-900 dark:text-white">
                      <span className="text-blue-400">~</span>/tma_blog $
                    </span>
                    <span className="cursor-block" />
                  </div>
                  <Dialog.Close asChild>
                    <MdOutlineClose
                      className="h-6 w-6 text-blue-400"
                      aria-label="Close"
                    />
                  </Dialog.Close>
                </div>
                <ul className="flex w-full flex-col items-center justify-center px-10">
                  <li className="w-full cursor-pointer border-y border-gray-600 py-6 text-center font-semibold text-gray-900 dark:text-white">
                    <Link href="/" onClick={() => setOpen(false)} title="Home">
                      Home
                    </Link>
                  </li>
                  <li className="w-full cursor-pointer border-b border-gray-600 py-6 text-center font-semibold text-gray-900 dark:text-white">
                    <Link
                      href="/blog"
                      onClick={() => setOpen(false)}
                      title="Blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="w-full cursor-pointer border-b border-gray-600 py-6 text-center font-semibold text-gray-900 dark:text-white">
                    <Link
                      href="/projects"
                      onClick={() => setOpen(false)}
                      title="Projects"
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="w-full cursor-pointer border-b border-gray-600 py-6 text-center font-semibold text-gray-900 dark:text-white">
                    <Link
                      href="/about"
                      onClick={() => setOpen(false)}
                      title="About"
                    >
                      About
                    </Link>
                  </li>
                </ul>
                <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start">
                  <Link
                    href="https://github.com/TiagoAraujoDev"
                    target="_blank"
                  >
                    <FaGithub className="h-6 w-6 text-blue-400" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/tiago-muniz-de-araujo-2b5b8a89/"
                    target="_blank"
                  >
                    <FaLinkedin className="h-6 w-6 text-blue-400" />
                  </Link>
                  <Link
                    href="https://twitter.com/TiagoOtrovador"
                    target="_blank"
                  >
                    <FaXTwitter className="h-6 w-6 text-blue-400" />
                  </Link>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </nav>
  );
};

export { NavBar };
