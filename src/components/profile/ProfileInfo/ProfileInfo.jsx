import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import DefaultUserImg from "./../../../media/images/user.png"
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profileInfo){
        return <Preloader/>
    }
    const onSetPhoto = (e) =>{
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) =>{
        props.saveProfile(formData, props.profileInfo.userId).then(
            () =>{
                setEditMode(false)
            }
        )
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

            {props.isOwner && <>
            <details className={s.upload}>
                <summary className={s.unselectable + " " + s.summary}>Edit</summary>

                <button className={s.button} onClick={()=>{setEditMode(!editMode)}}>{!editMode
                    ? <span>Edit profile</span>
                    : <span>Cancel</span>}
                </button>

                {editMode &&<input type={"file"} onChange={onSetPhoto} className={s.inputPhoto}/>}
            </details>
            </>
            }

            {editMode
                ?<ProfileDataForm onSubmit = {onSubmit} initialValues={props.profileInfo}/>
                :<div className={s.text}>
                    <h2>{props.profileInfo.fullName !==null ? props.profileInfo.fullName : "‎"}</h2>
                    <ProfileStatus isAuth = {props.isAuth} status = {props.status} updateStatus = {props.updateStatus} userId = {props.userId}/>
                    <br/>
                    <b>Instagram</b> : {props.profileInfo.contacts.instagram !==null ? props.profileInfo.contacts.instagram: "‎"}
                    <br/>
                    <b>Looking for a job</b> : {props.profileInfo.lookingForAJob ? <span>&#9745;</span> : <span>&#9746;</span>}
                    <br/>
                    <b>Description</b> : {props.profileInfo.lookingForAJobDescription !==null ? <span>{props.profileInfo.lookingForAJobDescription}</span> : " "}
                    <br/>
                    <b>About me</b>: {props.profileInfo.aboutMe !== null? props.profileInfo.aboutMe: "‎"}
                    <br/>
                </div>}
        </div>
    )
}

export default ProfileInfo;