"use client";

import { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

interface MDXComponentProps {
  post: Post;
}

const MDXComponent = ({ post }: MDXComponentProps) => {
  const MDXContent = useMDXComponent(post.body.code);

  return <MDXContent />;
};

export { MDXComponent };
