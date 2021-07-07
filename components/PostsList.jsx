import React from "react"
import Post from "./Post"

const name = "toto"
const obj = { toto: 1, ab: 2, za: 3 }

function PostsList(props) {
  return (
    <>
      <h1>Tous les articles sont "ici"</h1>
      <div>
        <Post title="Comment installer Next.js sous Mac OS (the easy way) ?" />
        <Post title="Everything I Know About Style Guides, Design Systems, and Component Libraries" />
        <Post title="How Stripe Designs Beautiful Websites" />
      </div>
    </>
  )
}

export default PostsList
