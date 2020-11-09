import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profileInfo = {props.profileInfo}/>
            <PostsContainer/>
        </div>
    );
};

export default Profile;
