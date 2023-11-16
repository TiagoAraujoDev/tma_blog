import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const PostCard: React.FC<Post> = (post) => {
  return (
    <div className="mb-8 border border-blue-500 p-4 rounded">
      <Image src={post.imageUrl} width={200} height={200} alt="" />
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.publishedAt} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
      </time>
    </div>
  );
};

export { PostCard };
