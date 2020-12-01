import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./posts/PostsContainer";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo  savePhoto = {props.savePhoto} photoLoading =  {props.photoLoading}
                isOwner = {props.isOwner} profileInfo = {props.profileInfo} status ={props.status} updateStatus = {props.updateStatus} isAuth = {props.isAuth}/>
            <PostsContainer/>

        </div>
    );
};

export default Profile;
