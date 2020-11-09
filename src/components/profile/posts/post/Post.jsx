import React from "react";
import {NavLink} from "react-router-dom";

const Post = (props) => {
  return (
    <div className="comment">
      <NavLink className="avatar" to="/#">
        <img src={props.author_image} alt="" />
      </NavLink>
      <div className="content">
        <NavLink className="author" to="/#">
          {props.author}
        </NavLink>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.text}</div>
        <div className="actions">
          <NavLink className="reply" to="/#">
            Reply
          </NavLink>
          <NavLink className="reply" to="/#">
            {props.like_count} Likes
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Post;
