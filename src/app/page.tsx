import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { PostCard } from "~/components/PostCard";

function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <>
      <h2 className="mb-3 text-center text-2xl font-extrabold text-gray-100">
        Posts
      </h2>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </>
  );
}

export default Home;
