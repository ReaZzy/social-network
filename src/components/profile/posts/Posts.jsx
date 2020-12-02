import React from "react";
import s from "./Posts.module.css";
import Post from "./post/Post";
import PostFormRedux from "./PostForm";


const Posts = React.memo(props => {

    let postsElemets = [...props.data].reverse().map(post => {
        return (
            <Post
                key = {post.id}
                author_image={post.author_image}
                author={post.author}
                text={post.text}
                date={post.date}
                like_count={post.like_count}
            />
        )
    })
    let onSubmit = (formData) => {
        props.addPost(formData.postMessage)
        formData.postMessage = ""
    }
    return (
        <div className={s.content}>
            <h3 className={s.text}>Leave your comment here</h3>
            <PostFormRedux onSubmit={onSubmit}/>
            <div className="ui comments">
                {postsElemets}
            </div>
        </div>
    );
})

export default Posts;
