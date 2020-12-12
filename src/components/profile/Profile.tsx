import React from "react";
import s from "./Profile.module.css";
import ProfileInfo, { ProfileInfoType } from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./posts/PostsContainer";


type PropsType = {
    profileInfo: ProfileInfoType
    photoLoading: boolean
    updateStatus: (status:string) =>void
    isAuth:boolean
    isOwner:boolean
    saveProfile: (formData:any, userId:number) => Promise<void>
    savePhoto: (file:File) => void
    status: string
    userId:number
}


const Profile:React.FC<PropsType> = ({savePhoto, photoLoading, saveProfile, isOwner, profileInfo, status, updateStatus, isAuth, userId}) => {
    return (
        <div className={s.content}>
            <ProfileInfo  savePhoto = {savePhoto} photoLoading =  {photoLoading} saveProfile = {saveProfile}
                          isOwner = {isOwner} profileInfo = {profileInfo} userId = { userId}
                          status ={status} updateStatus = {updateStatus} isAuth = {isAuth}/>
            <PostsContainer/>

        </div>
    );
};

export default Profile;
