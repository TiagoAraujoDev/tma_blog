import { Blog } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

const PostCard: React.FC<Blog> = (post) => {
  return (
    <div
      className="
      mb-8 flex w-full items-center overflow-hidden rounded border
      border-gray-500 bg-stone-300/30 shadow-lg shadow-gray-700 backdrop-blur-sm
      hover:border-blue-500 dark:bg-stone-700/30 dark:shadow-lg dark:shadow-black
      "
    >
      <div className="hidden h-auto w-60 flex-none md:block">
        <img className="object-contain" src={post.imageUrl} alt="" />
      </div>
      <div className="w-52 flex-1 px-4 py-2">
        <h2 className="truncate text-xl text-gray-900 hover:text-blue-600 dark:text-gray-100">
          <Link href={post.url} className="font-bold">
            {post.title}
          </Link>
        </h2>
        <div className="mb-2 flex flex-wrap items-center justify-start">
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="mr-2 text-xs font-bold uppercase text-blue-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mb-2 truncate text-gray-700 dark:text-gray-300">
          {post.description}
        </p>
        <time
          dateTime={post.publishedAt}
          className="text-xs text-gray-600 dark:text-gray-400"
        >
          {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
        </time>
      </div>
    </div>
  );
};

export { PostCard };
