import { MDXProvider } from "@mdx-js/react";
import React from "react";

import Image from "next/image";
import { Heading1 } from "./Heading1";

const components = {
  img: Image,
  h1: Heading1,
};

export interface PostProps {
  children: React.ReactNode;
}

const PostWithMdx = (props: PostProps) => {
  return (
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  );
};

export default PostWithMdx;
