import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { Hero } from "~/components/Hero";
import { PostCard } from "~/components/PostCard";

function Home() {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <div className="mx-8">
      <Hero />
      {/* <div className="mb-16 h-[1px] w-full bg-gray-400" /> */}
      <div className="">
        <h2 className="mb-8 text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          Latest posts
        </h2>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
