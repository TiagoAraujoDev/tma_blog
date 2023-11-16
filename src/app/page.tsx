import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import React from "react";

import { PostCard } from "~/components/PostCard";

function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <React.Fragment>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </React.Fragment>
  );
}

export default Home;
