import React from "react";
import {NavLink} from "react-router-dom";

export type PostType = {
  author_image: string
  id: number| null
  author:string
  date: string
  text:string
  like_count:number
}

const Post:React.FC<PostType> = ({author_image, author, date, text, like_count}) => {
  return (
    <div className="comment">
      <NavLink className="avatar" to="/#">
        <img src={author_image} alt="" />
      </NavLink>
      <div className="content">
        <NavLink className="author" to="/#">
          {author}
        </NavLink>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{text}</div>
        <div className="actions">
          <NavLink className="reply" to="/#">
            Reply
          </NavLink>
          <NavLink className="reply" to="/#">
            {like_count} Likes
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Post;
