import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

import { Hero } from "~/components/Hero";
import { PostCard } from "~/components/PostCard";

const LATEST_POSTS_QUANTITY = 5;

function Home() {
  const latestBlogposts = allBlogs
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
    )
    .slice(0, LATEST_POSTS_QUANTITY);

  return (
    <div className="mx-8">
      <Hero />
      <div className="">
        <h2 className="mb-8 text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          Latest posts
        </h2>
        {latestBlogposts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
        <Link
          href="/blog"
          className="h-6 rounded bg-blue-400 p-2 font-bold text-gray-800"
        >
          See all posts
        </Link>
      </div>
    </div>
  );
}

export default Home;
