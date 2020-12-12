import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import DefaultUserImg from "./../../../media/images/user.png"
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";

export type ProfileInfoType = {
    lookingForAJobDescription: string
    userId:number
    aboutMe:string
    lookingForAJob:boolean
    fullName:string
    contacts: {
        instagram: string
    }
    photos:{
        large:string
        small:string
    }
}

type PropsType = {
    profileInfo: ProfileInfoType
    photoLoading: boolean
    userId:number
    updateStatus: (status:string) =>void
    isAuth:boolean
    isOwner:boolean
    saveProfile: (formData:any, userId:number) => Promise<void>
    savePhoto: (file:File) => void
    status: string
}

const ProfileInfo:React.FC<PropsType> = ({profileInfo,status, savePhoto, saveProfile, isOwner, isAuth, updateStatus, userId, photoLoading}) => {
    let [editMode, setEditMode] = useState(false)

    if (!profileInfo){
        return <Preloader/>
    }
    const onSetPhoto = (e: any) =>{
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData:any) =>{
        saveProfile(formData, profileInfo.userId).then(
            () =>{
                setEditMode(false)
            }
        )
    }
    if(photoLoading){
        return <Preloader/>
    }

    return (
        <div>
            <img
                className={s.pic}
                src={profileInfo.photos.large !==null ? profileInfo.photos.large:DefaultUserImg}
                width="160px"
                alt=""
            />

            {isOwner && <>
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
                ?<ProfileDataForm onSubmit = {onSubmit} initialValues={profileInfo}/>
                :<div className={s.text}>
                    <h2>{profileInfo.fullName !==null ? profileInfo.fullName : "‎"}</h2>
                    <ProfileStatus statusProps = {status} updateStatus = {updateStatus} />
                    <br/>
                    <b>Instagram</b> : {profileInfo.contacts.instagram !==null ? profileInfo.contacts.instagram: "‎"}
                    <br/>
                    <b>Looking for a job</b> : {profileInfo.lookingForAJob ? <span>&#9745;</span> : <span>&#9746;</span>}
                    <br/>
                    <b>Description</b> : {profileInfo.lookingForAJobDescription !==null ? <span>{profileInfo.lookingForAJobDescription}</span> : " "}
                    <br/>
                    <b>About me</b>: {profileInfo.aboutMe !== null? profileInfo.aboutMe: "‎"}
                    <br/>
                </div>}
        </div>
    )
}

export default ProfileInfo;