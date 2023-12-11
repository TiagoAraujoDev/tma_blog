import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 lg:justify-start">
      <Link href="https://github.com/TiagoAraujoDev" target="_blank">
        <FaGithub className="h-6 w-6 text-blue-400 hover:text-blue-500" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/tiago-muniz-de-araujo-2b5b8a89/"
        target="_blank"
      >
        <FaLinkedin className="h-6 w-6 text-blue-400 hover:text-blue-500" />
      </Link>
      <Link href="https://twitter.com/TiagoOtrovador" target="_blank">
        <FaXTwitter className="h-6 w-6 text-blue-400 hover:text-blue-500" />
      </Link>
    </div>
  );
};

export { SocialLinks };
