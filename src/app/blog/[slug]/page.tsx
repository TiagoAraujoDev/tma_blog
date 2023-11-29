import "~/app/style/prism.css";

import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { MDXComponent } from "~/components/MDXComponent";

async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = allBlogs.find(
    (post) => post._raw.flattenedPath === `blog/${params.slug}`,
  );

  if (!post) notFound();

  return (
    <article className="prose dark:prose-invert">
      <div className="mx-10">
        <MDXComponent post={post} />
      </div>
    </article>
  );
}

export default BlogPostPage;
