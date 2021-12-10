import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import { Box, Heading, StackDivider, Text, VStack } from "@chakra-ui/react";

import CustomLink from '../../components/CustomLink'
import Layout from '../../components/Layout'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    a: CustomLink,
    Head,
}

export default function PostPage({ source, frontMatter }) {
    return (
        <>
            <header>
                <nav>
                    <Link href="/">
                        <a>👈 Go back home</a>
                    </Link>
                </nav>
            </header>

            <Layout>
                <VStack
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={4}
                    align="stretch"
                >
                    <Box bg="tomato" p={5} shadow="md" borderWidth="1px">
                        <Heading fontSize="xl">{frontMatter.title}</Heading>

                        {frontMatter.description && (
                            <p className="description">{frontMatter.description}</p>
                        )}

                        <Text mt={4}>
                            <MDXRemote {...source} components={components} />
                        </Text>
                    </Box>
                </VStack>
            </Layout>


            <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
        </>
    )
}

export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    }
}

export const getStaticPaths = async () => {
    const paths = postFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}
