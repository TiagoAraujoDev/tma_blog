import { allBlogs } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
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
    <section className="mx-10">
      <div className="flex flex-col items-center pt-8">
        <time
          dateTime={post?.publishedAt}
          className="text-xs text-gray-600 dark:text-gray-400"
        >
          {format(parseISO(post!.publishedAt), "LLLL d, yyyy")}
        </time>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-950 dark:text-gray-50">
          {post?.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300">{post?.description}</p>
      </div>

      <div className="my-4 h-[1px] w-full bg-gray-400" />
      <div className="my-6 grid grid-cols-layout">
        <aside className="">
          <div className="flex items-center gap-2">
            <img
              src="https://avatars.githubusercontent.com/TiagoAraujoDev"
              className="h-12 w-12 rounded-full border border-gray-800"
              alt=""
            />
            <div className="flex flex-col items-start">
              <h2 className="text-gray-900 dark:text-white">{post?.author}</h2>
              <Link
                href="https://twitter.com/TiagoOtrovador"
                className="text-sm font-extralight text-blue-400"
              >
                @TiagoOtrovador
              </Link>
            </div>
          </div>
          <div className="my-4 h-[1px] w-full bg-gray-400" />
          <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            TAGS:{" "}
          </h2>
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
      </div>
    </section>
  );
}

export default PostLayout;
