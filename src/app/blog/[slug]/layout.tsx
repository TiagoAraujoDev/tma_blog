import { allBlogs } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

import { LinkButton } from "~/components/LinkButton";

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
    <section className="min-height mx-4 sm:mx-8 md:mx-10">
      <div className="flex flex-col items-center pt-8">
        <time
          dateTime={post?.publishedAt}
          className="text-xs text-gray-600 dark:text-gray-400"
        >
          {format(parseISO(post!.publishedAt), "LLLL d, yyyy")}
        </time>
        <h1 className="mb-4 text-center text-3xl font-extrabold text-gray-950 dark:text-gray-50">
          {post?.title}
        </h1>
        <p className="max-w-md text-center text-gray-700 dark:text-gray-300">
          {post?.description}
        </p>
        <div className="flex items-center gap-2 py-3 lg:hidden">
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
      </div>

      <div className="my-4 h-[2px] w-full bg-gray-500 dark:bg-gray-700" />
      <div className="my-6 grid grid-cols-1 grid-rows-[1fr_auto] lg:grid-cols-layout">
        <aside className="row-start-2 mb-8 divide-y-2 divide-gray-500 dark:divide-gray-700 lg:row-auto">
          <div className="hidden items-center gap-2 py-3 lg:flex">
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
          <div className="py-3">
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
          </div>
          <div className="h-6 w-auto pt-6">
            <LinkButton text="Back to blog" to="/blog" />
          </div>
        </aside>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default PostLayout;
