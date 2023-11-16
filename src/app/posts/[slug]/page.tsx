import "~/app/style/prism.css";

import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { MDXComponent } from "~/components/MDXComponent";

async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === `posts/${params.slug}`);

  if (!post) notFound();

  return (

      <article className="prose dark:prose-invert">
        <div className="mx-7 my-9 w-full max-w-[1900px]">
          <MDXComponent post={post} />
        </div>
      </article>

  );
}

export default BlogPostPage;
