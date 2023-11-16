import "~/app/style/prism.css";

import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { MDXComponent } from "~/components/MDXComponent";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  return (
    <div className="mx-9 flex w-full max-w-[1600px]">
      <article className="prose dark:prose-invert">
        <div className="mx-7 my-9 w-full max-w-[1900px]">
          <MDXComponent post={post} />
        </div>
      </article>
    </div>
  );
}

export default BlogPostPage;
