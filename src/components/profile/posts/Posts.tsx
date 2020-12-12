import React from "react";
import s from "./Posts.module.css";
import Post, {PostType} from "./post/Post";
import PostFormRedux from "./PostForm";


type PropsType = {
    data: Array<PostType>
    addPost: (postMessage:string) => void
}

const Posts:React.FC<PropsType> = React.memo(({data, addPost}) => {

    let postsElemets = [...data].reverse().map(post => {
        return (
            <Post
                id = {post.id}
                key = {post.id}
                author_image={post.author_image}
                author={post.author}
                text={post.text}
                date={post.date}
                like_count={post.like_count}
            />
        )
    })
    let onSubmit = (formData:any) => {
        addPost(formData.postMessage)
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
