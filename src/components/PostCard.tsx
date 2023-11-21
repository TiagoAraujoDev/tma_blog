import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const PostCard: React.FC<Post> = (post) => {
  return (
    <div className="mb-8 w-full flex items-center overflow-hidden rounded border border-gray-500 hover:border-blue-500">
      <Image src={post.imageUrl} width={300} height={400} alt="" />
      <div>
        <h2 className="px-4 text-xl">
          <Link
            href={post.url}
            className="font-bold text-gray-100 hover:text-blue-600 dark:text-gray-100"
          >
            {post.title}
          </Link>
        </h2>
        <p className="truncate px-4 text-gray-300">{post.description}</p>
        <time
          dateTime={post.publishedAt}
          className="mb-2 block px-4 text-xs text-gray-600"
        >
          {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
        </time>
      </div>
    </div>
  );
};

export { PostCard };
