"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

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
          <li className="cursor-pointer border-b border-transparent font-semibold text-white hover:border-b hover:border-blue-500">
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
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <MdMenu className="h-6 w-6 text-blue-400" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content className="fixed right-0 top-0 z-40 h-screen w-screen bg-gray-900">
              <div className="flex flex-col items-center">
                {/* Menu header */}
                <div className="flex w-full items-center justify-between px-10 py-6">
                  <div className="flex items-center justify-center">
                    <span className="mr-2 text-xl font-extrabold text-white">
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

                {/* divider */}
                {/* <div className="mb-16 h-[1px] w-full bg-gray-500 mx-3" /> */}

                <ul className="flex w-full flex-col items-center justify-center px-10">
                  <li className="w-full cursor-pointer border-y border-gray-600 py-6 text-center font-semibold text-white">
                    <Link href="/" title="Home">
                      Home
                    </Link>
                  </li>
                  <li className="w-full cursor-pointer border-b border-gray-600 py-6 text-center font-semibold text-white">
                    <Link href="/blog" title="Blog">
                      Blog
                    </Link>
                  </li>
                  <li className="w-full cursor-pointer border-b border-gray-600 py-6 text-center font-semibold text-white">
                    <Link href="/projects" title="Projects">
                      Projects
                    </Link>
                  </li>
                  <li className="w-full cursor-pointer border-b border-gray-600 py-6 text-center font-semibold text-white">
                    <Link href="/about" title="About">
                      About
                    </Link>
                  </li>
                </ul>
                {/* social */}
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
