import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { FaCodeBranch } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";

import { Repository } from "~/@types/github";

interface RepositoryCardProps {
  repo: Repository;
  cardType: "simple" | "complete";
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repo, cardType }) => {
  return (
    <div
      className="
        relative flex w-full flex-col justify-between rounded border
        border-gray-400 p-4 shadow-md shadow-gray-900
        dark:shadow-none
      "
    >
      <h1 className="truncate text-xl font-bold text-gray-900 dark:text-gray-100">
        {repo.name}
      </h1>
      <p className="text-gray-600 dark:text-gray-400">{repo.description}</p>
      <div className="flex items-center gap-2 divide-x-2 divide-gray-500">
        <Link
          href={repo.html_url}
          target="_blank"
          className="flex items-center justify-start gap-2 text-blue-400 hover:text-blue-500"
        >
          <FaCodeBranch />
          <span>See source code</span>
        </Link>
        {!!repo.homepage && (
          <Link
            href={repo.homepage}
            target="_blank"
            className="flex items-center justify-start gap-2 pl-2 text-blue-400 hover:text-blue-500"
          >
            <GrDeploy />
            <span>Deploy</span>
          </Link>
        )}
      </div>
      {cardType === "complete" && (
        <div>
          <div>
            <h2 className="mr-2 inline-block text-sm text-gray-700 dark:text-gray-300">
              Language:
            </h2>
            <span>{repo.language}</span>
          </div>
          <div className="space-x-2">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Create at:
            </span>
            <time
              dateTime={repo.created_at}
              className="text-xs text-gray-600 dark:text-gray-400"
            >
              {format(parseISO(repo!.created_at), "LLLL d, yyyy")}
            </time>
          </div>
          <div className="space-x-2">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Last modified at:
            </span>
            <time
              dateTime={repo.pushed_at}
              className="text-xs text-gray-600 dark:text-gray-400"
            >
              {format(parseISO(repo!.pushed_at), "LLLL d, yyyy")}
            </time>
          </div>
        </div>
      )}
      <div
        className="
          absolute right-2 top-2 rounded border border-gray-400 p-1
          text-xs uppercase text-gray-400 dark:border-gray-600 dark:text-gray-600
        "
      >
        <span>{repo.visibility}</span>
      </div>
    </div>
  );
};

export { RepositoryCard };
