import React from "react"
import Post from "./Post"

const name = "toto"
const obj = { toto: 1, ab: 2, za: 3 }

function PostsList(props) {
  return (
    <>
      <h1>Tous les articles sont "ici"</h1>
      <div>
        <Post />
      </div>
    </>
  )
}

export default PostsList
