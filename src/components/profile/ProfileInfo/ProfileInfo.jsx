import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import DefaultUserImg from "./../../../media/images/user.png"

const ProfileInfo = (props) => {
    if (!props.profileInfo){
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
            <div className={s.text}>
                <h2>{props.profileInfo.fullName !==null ? props.profileInfo.fullName : "‎"}</h2>
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