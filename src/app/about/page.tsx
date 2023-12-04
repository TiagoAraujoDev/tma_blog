import Image from "next/image";
import Link from "next/link";

import { Profile, Repository } from "~/@types/github";
import { LinkButton } from "~/components/LinkButton";
import { RepositoryCard } from "~/components/RepositoryCard";
import { UnderConstructionWarn } from "~/components/UnderConstructionWarn";

async function getGithubProfile(): Promise<Profile> {
  const response = await fetch("https://api.github.com/users/TiagoAraujoDev", {
    cache: "no-cache",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  });
  const profile = await response.json();

  return profile;
}

async function getPinnedRepos(url: string): Promise<Repository[]> {
  const response = await fetch(url, {
    cache: "no-cache",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  });
  const repos: Repository[] = await response.json();

  return repos.filter((repo) => {
    return repo.topics.some((topic) => topic === "pinned");
  });
}

async function AboutPage() {
  const userProfile = await getGithubProfile();
  const pinnedRepositories = await getPinnedRepos(userProfile.repos_url);

  return (
    <div className="min-height mx-auto flex max-w-5xl flex-col items-center">
      <div className="relative my-3 h-64 w-64 rounded-full shadow-xl shadow-black dark:bg-gray-400">
        <Image
          src={userProfile.avatar_url}
          fill
          className="rounded-full object-cover p-[2px]"
          alt=""
        />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {userProfile.name}
      </h1>
      <Link
        href="https://github.com/TiagoAraujoDev"
        target="_blank"
        className="font-extralight leading-relaxed hover:underline hover:decoration-blue-400 hover:decoration-solid dark:text-gray-400"
      >
        @TiagoAraujo
      </Link>
      <div className="mx-4 my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {pinnedRepositories.map((repo) => {
          return <RepositoryCard key={repo.id} repo={repo} />;
        })}
      </div>
      <LinkButton text="See projects with details" to="/projects" />
      <UnderConstructionWarn />
    </div>
  );
}

export default AboutPage;
