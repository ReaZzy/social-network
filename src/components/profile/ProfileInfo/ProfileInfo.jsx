import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import DefaultUserImg from "./../../../media/images/user.png"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profileInfo){
        return <Preloader/>
    }
    const onSetPhoto = (e) =>{
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }
    if(props.photoLoading){
        return <Preloader/>
    }

    return (
        <div>
            <img
                className={s.pic}
                src={props.profileInfo.photos.large !==null ? props.profileInfo.photos.large:DefaultUserImg}
                width="160px"
                alt=""
            />

            {props.isOwner && <details className={s.upload}>
                <summary className={s.unselectable + " " + s.summary}>Upload avatar</summary>
                <input type={"file"} onChange={onSetPhoto} className={s.inputPhoto}/>
            </details>
            }

            <div className={s.text}>

                <h2>{props.profileInfo.fullName !==null ? props.profileInfo.fullName : "‎"}</h2>
                <ProfileStatus isAuth = {props.isAuth} status = {props.status} updateStatus = {props.updateStatus} userId = {props.userId}/>
                <br/>
                <b>Instagram</b> : {props.profileInfo.contacts.instagram !==null ? props.profileInfo.contacts.instagram: "‎"}
                <br/>
                <b>Facebook</b> : {props.profileInfo.contacts.facebook !==null ? props.profileInfo.contacts.facebook: "‎"}
                <br/>
                <b>Twitter</b> : {props.profileInfo.contacts.twitter !==null ? props.profileInfo.contacts.twitter:"‎"}
                <br/>
                <b>About me</b>: {props.profileInfo.aboutMe !== null? props.profileInfo.aboutMe: "‎"}
                <br/>
            </div>
        </div>
    )
}

export default ProfileInfo;