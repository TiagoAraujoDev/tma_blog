import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

import { Hero } from "~/components/Hero";
import { PostCard } from "~/components/PostCard";

function Home() {
  const posts = allBlogs
    .sort((a, b) =>
      compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
    )
    .slice(0, 5);

  return (
    <div className="mx-8">
      <Hero />
      <div className="">
        <h2 className="mb-8 text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          Latest posts
        </h2>
        {posts.map((post, idx) => (
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
