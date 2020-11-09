import React from "react";
import s from "./Posts.module.css";
import Post from "./post/Post";


const Posts = (props) => {

    let postsElemets = props.data.map(post => {
        return (
            <Post
                author_image={post.author_image}
                author={post.author}
                text={post.text}
                date={post.date}
                like_count={post.like_count}
            />
        )
    })

    let discard = () => {
        props.discard()
    }
    let addPost = () => {
        props.addPost()
    }
    let onPostChange = (e) => {
        let text = e.target.value
        props.onPostChange(text)
    }

    return (
        <div className={s.content}>
            <h3 className={s.text}>Leave your comment here</h3>
            <textarea className={s.textarea} rows="3" cols="110" value={props.newPostText} onChange={ onPostChange } />
            <p className={s.cominput}>
                <button className="ui tiny primary button" onClick={ addPost } >Save</button>
                <button className="ui tiny button" onClick={discard}>Discard</button>
            </p>

            <div className="ui comments">
                {postsElemets}
            </div>
        </div>
    );
};

export default Posts;
