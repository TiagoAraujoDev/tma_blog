import { allBlogs } from "contentlayer/generated";
import Link from "next/link";

interface PostLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

async function PostLayout({ children, params }: PostLayoutProps) {
  const post = allBlogs.find(
    (post) => post._raw.flattenedPath === `blog/${params.slug}`,
  );

  return (
    <section className="mx-10 my-6 grid grid-cols-layout">
      <aside className="">
        <div className="flex items-center gap-2">
          <img
            src="https://avatars.githubusercontent.com/TiagoAraujoDev"
            className="h-8 w-8 rounded-full"
            alt=""
          />
          <div className="flex flex-col items-start">
            <h2 className="text-white">{post?.author}</h2>
            <Link
              href="https://twitter.com/TiagoOtrovador"
              className="text-sm font-extralight text-blue-400"
            >
              @TiagoOtrovador
            </Link>
          </div>
        </div>
        <div className="my-4 h-[1px] w-full bg-gray-400" />
        <h2 className="text-sm font-semibold text-gray-200">TAGS: </h2>
        <div className="flex flex-wrap">
          {post?.tags.map((tag, idx) => {
            return (
              <span
                key={idx}
                className="mr-2 text-sm font-light uppercase text-blue-400"
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div className="my-4 h-[1px] w-full bg-gray-400" />
        <Link href="/blog" className="h-6 rounded bg-blue-400 p-2">
          Back to blogs
        </Link>
      </aside>
      <div>{children}</div>
    </section>
  );
}

export default PostLayout;
