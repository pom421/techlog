import Head from 'next/head'
import styles from '../styles/Home.module.css'

import PostsList from "../components/PostsList"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pom's techlog, journey in adventureland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <PostsList />

      </main>

      <footer className={styles.footer}>
       <p>Made with ❤️  in 2021</p>
      </footer>
    </div>
  )
}
