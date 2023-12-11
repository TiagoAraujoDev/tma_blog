import { Profile, Repository } from "~/@types/github";

async function getGithubProfile(): Promise<Profile> {
  const response = await fetch("https://api.github.com/users/TiagoAraujoDev", {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  const profile = await response.json();

  return profile;
}

async function getPinnedRepos(url: string): Promise<Repository[]> {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  });
  const repos: Repository[] = await response.json();

  return repos.filter((repo) => {
    return repo.topics.some((topic) => topic === "pinned");
  });
}

export { getGithubProfile, getPinnedRepos };
