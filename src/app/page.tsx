import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { Hero } from "~/components/Hero";
import { LinkButton } from "~/components/LinkButton";
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
      <section>
        <h2 className="mb-8 text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          Latest posts
        </h2>
        {latestBlogposts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
        <LinkButton text="See all posts" to="/blog" />
      </section>
    </div>
  );
}

export default Home;
