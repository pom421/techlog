import Head from "next/head"
import Link from "next/link"
import React from "react"

import PostsList from "../components/PostsList"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pom's techlog, journey in adventureland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>

        <p>
          <Link href="/post-page">
            <a>Go to post page</a>
          </Link>
        </p>

        <PostsList />
      </main>

      <footer>
        <p>
          Made with&nbsp;
          <span role="img" aria-label="heart">
            ❤️
          </span>
          &nbsp;in 2021
        </p>
      </footer>
    </div>
  )
}
