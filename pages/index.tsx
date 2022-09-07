import { Link } from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import { default as NextLink } from "next/link";
import path from "path";
import Layout from "../components/Layout";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";

export default function Index({ posts }) {
  return (
    <>
      <Layout>
        <ul>
          {posts.map((post) => (
            <li key={post.filePath}>
              <Link
                as={NextLink}
                href={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
              >
                <a>{post.data.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
