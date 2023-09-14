import { useSelector } from "react-redux"
import { selectAllPosts } from "./postSlice"
import React from 'react'
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import ReactionsButtion from "./ReactionsButtion"


const PostList = () => {
    const posts = useSelector( selectAllPosts);
    const orderPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

    const renderPosts= orderPost.map(post=>
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className="postCredit">
                <PostAuthor userID={post.userId}/> 
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionsButtion post={post}/>
        </article>
    )
  return (
   <section>
    <h2>Posts</h2>
    {renderPosts}
   </section>
  )
}

export default PostList;