import Image from "next/image";
import Link from "next/link";

import { UnderConstructionWarn } from "~/components/UnderConstructionWarn";

async function getGithubProfile() {
  const response = await fetch("https://api.github.com/users/TiagoAraujoDev");
  const data = await response.json();

  return data;
}

async function AboutPage() {
  const data = await getGithubProfile();
  console.log(data);
  return (
    <div className="min-height flex flex-col items-center">
      <div className="relative my-3 h-64 w-64 rounded-full shadow-xl shadow-black dark:bg-gray-400">
        <Image
          src={data.avatar_url}
          fill
          className="rounded-full object-cover p-[2px]"
          alt=""
        />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {data.name}
      </h1>
      <Link
        href="https://github.com/TiagoAraujoDev"
        target="_blank"
        className="font-extralight leading-relaxed hover:underline hover:decoration-blue-400 hover:decoration-solid dark:text-gray-400"
      >
        @TiagoAraujo
      </Link>
      <UnderConstructionWarn />
    </div>
  );
}

export default AboutPage;
