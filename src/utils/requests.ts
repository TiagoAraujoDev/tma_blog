import { Profile, Repository } from "~/@types/github";

async function getGithubProfile(): Promise<Profile> {
  const response = await fetch("https://api.github.com/users/TiagoAraujoDev", {
    cache: "no-cache",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
  const profile = await response.json();

  return profile;
}

async function getPinnedRepos(url: string): Promise<Repository[]> {
  const response = await fetch(url, {
    cache: "no-cache",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
  const repos: Repository[] = await response.json();

  return repos.filter((repo) => {
    return repo.topics.some((topic) => topic === "pinned");
  });
}

export { getGithubProfile, getPinnedRepos };
