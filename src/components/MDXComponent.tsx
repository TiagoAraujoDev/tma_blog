"use client";

import { Blog } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

interface MDXComponentProps {
  post: Blog;
}

const MDXComponent = ({ post }: MDXComponentProps) => {
  const MDXContent = useMDXComponent(post.body.code);

  return <MDXContent />;
};

export { MDXComponent };
