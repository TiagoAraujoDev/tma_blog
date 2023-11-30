import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { PostCard } from "~/components/PostCard";

function BlogPage() {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <div className="mx-8">
      <div className="pt-4">
        <h2 className="mb-8 text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          Blog posts
        </h2>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
