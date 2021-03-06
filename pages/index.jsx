import Head from "next/head"
import React from "react"
// import styles from '../styles/Home.module.css'

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

        <PostsList />
      </main>

      <footer>
        <p>Made with ❤️ in 2021</p>
      </footer>
    </div>
  )
}
