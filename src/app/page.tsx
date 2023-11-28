import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { Hero } from "~/components/Hero";
import { PostCard } from "~/components/PostCard";

function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <>
      <Hero />
      <div className="mx-6 md:mx-16">
        <h2 className="mb-3 text-center text-2xl font-extrabold text-gray-100">
          Posts
        </h2>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </>
  );
}

export default Home;
