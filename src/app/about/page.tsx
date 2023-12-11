import Image from "next/image";
import Link from "next/link";

import { LinkButton } from "~/components/LinkButton";
import { RepositoryCard } from "~/components/RepositoryCard";
import { SocialLinks } from "~/components/SocialLinks";
import { getGithubProfile, getPinnedRepos } from "~/utils/requests";

async function AboutPage() {
  const userProfile = await getGithubProfile();
  const pinnedRepositories = await getPinnedRepos(userProfile.repos_url);

  return (
    <div className="min-height mx-auto my-8 grid max-w-[1280px] grid-rows-[auto_1fr] gap-4 px-6 lg:grid-cols-[240px_1fr] lg:grid-rows-[min-content] lg:px-10">
      <div className="flex flex-col items-center">
        <div className="relative mx-auto mb-6 h-52 w-52 rounded-full shadow-xl shadow-black dark:bg-gray-400">
          <Image
            src={userProfile.avatar_url}
            fill
            className="rounded-full object-cover p-[2px]"
            alt=""
          />
        </div>
        <h1 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-100">
          {userProfile.name}
        </h1>
        <Link
          href={`mailto:${userProfile.email}`}
          target="_blank"
          className="
          font-extralight leading-relaxed hover:underline hover:decoration-blue-400
          hover:decoration-solid dark:text-gray-400
        "
        >
          @TiagoAraujo
        </Link>
        <SocialLinks />
      </div>
      <section>
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-200">
          About me
        </h2>
        <div className="my-8">
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Welcome to tmablog! This blog serves as a playground for me to
            experiment with ideas and share some of my findings. For more
            information, check out my LinkedIn profile.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            I very much enjoy discorvering new things and try another way to do
            things. If you find one of my projects interessting, feel free to
            contribute, just fork and add something! 😁
          </p>
        </div>
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-200">
          Personal projects
        </h2>
        <div className="mx-0 my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pinnedRepositories.map((repo) => {
            return (
              <RepositoryCard key={repo.id} cardType="simple" repo={repo} />
            );
          })}
        </div>
        <LinkButton text="See projects with details" to="/projects" />
      </section>
    </div>
  );
}

export default AboutPage;
