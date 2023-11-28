import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { CarouselContainer } from "./CarouselContainer";

const Hero = () => {
  return (
    <section className="mx-6 flex flex-col items-center justify-around py-16 lg:flex-row">
      <div className="flex flex-col gap-3">
        <span className="flex items-center gap-2 text-center text-sm font-light uppercase text-gray-400 sm:text-right">
          <span className="block h-[1px] w-4 bg-blue-400" />
          I&apos;m here to talk about tech
        </span>
        <h1 className="text-center text-3xl font-extrabold text-gray-100 sm:text-left">
          Hi, my name is<span className="text-blue-400">Tiago Araujo!</span>
        </h1>
        <p className="text-xl font-medium text-gray-100">
          I&apos;m a IT student interested in web development, cybersecurity,
          open-source, command line tools and music. So get ready and let&apos;s
          get start!
        </p>
        <div className="flex items-center justify-start gap-2">
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
      <CarouselContainer />
    </section>
  );
};

export { Hero };
