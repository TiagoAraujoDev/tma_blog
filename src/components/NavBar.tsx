"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
            <MdMenu className="h-6 w-6 text-blue-400" />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content className="fixed top-0 right-0 w-screen h-screen bg-gray-900 z-40">
            <div className="flex flex-col items-center">
              {/* Menu header */}
              <div className="flex w-full justify-between items-center px-10 py-6">
                <div className="flex items-center justify-center">
                  <span className="mr-2 text-xl font-extrabold text-white">
                    <span className="text-blue-400">~</span>/tma_blog $
                  </span>
                  <span className="cursor-block" />
                </div>
                <Dialog.Close asChild>
                  <MdOutlineClose className="h-6 w-6 text-blue-400" aria-label="Close" />
                </Dialog.Close>
              </div>

              {/* divider */}
              {/* <div className="mb-16 h-[1px] w-full bg-gray-500 mx-3" /> */}

              <ul className="flex w-full px-10 flex-col items-center justify-center">
                <li className="w-full text-center cursor-pointer border-y py-6 border-gray-600 font-semibold text-white">
                  <Link href="/" title="Home">
                    Home
                  </Link>
                </li>
                <li className="w-full text-center cursor-pointer border-b py-6 border-gray-600 font-semibold text-white">
                  <Link href="/blog" title="Blog">
                    Blog
                  </Link>
                </li>
                <li className="w-full text-center cursor-pointer border-b py-6 border-gray-600 font-semibold text-white">
                  <Link href="/projects" title="Projects">
                    Projects
                  </Link>
                </li>
                <li className="w-full text-center cursor-pointer border-b py-6 border-gray-600 font-semibold text-white">
                  <Link href="/about" title="About">
                    About
                  </Link>
                </li>
              </ul>
              {/* social */}
              <div className="flex items-center justify-center gap-2 lg:justify-start mt-8">
                <Link href="https://github.com/TiagoAraujoDev" target="_blank">
                  <FaGithub className="h-6 w-6 text-blue-400" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/tiago-muniz-de-araujo-2b5b8a89/"
                  target="_blank"
                >
                  <FaLinkedin className="h-6 w-6 text-blue-400" />
                </Link>
                <Link href="https://twitter.com/TiagoOtrovador" target="_blank">
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
