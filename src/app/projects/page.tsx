import { RepositoryCard } from "~/components/RepositoryCard";
import { getGithubProfile, getPinnedRepos } from "~/utils/requests";

async function ProjectsPage() {
  const userProfile = await getGithubProfile();
  const pinnedRepositories = await getPinnedRepos(userProfile.repos_url);

  return (
    <div className="min-height mx-auto flex max-w-[1280px] flex-col items-center">
      <h1
        className="
          px-10 py-8 text-center text-4xl font-extrabold text-gray-900 dark:text-gray-100 md:text-right
        "
      >
        What I&apos;m building or have built!
      </h1>
      <p className="px-10 pb-3 text-center text-gray-700 dark:text-gray-300">
        Here, you gonna find web development with Javascript, Typescript,
        React/Nextjs and Java. Some shells script plugins. Maybe in the future
        some game development just for fun.
      </p>
      <div className="grid grid-cols-1 gap-4 px-10 md:grid-cols-2">
        {pinnedRepositories.map((repo) => {
          return (
            <RepositoryCard key={repo.id} repo={repo} cardType="complete" />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsPage;
