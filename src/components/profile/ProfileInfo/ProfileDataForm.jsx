import React from 'react'
import {Field, reduxForm} from "redux-form";
import {InputProfileData, TextareaProfile} from "../../common/Textarea";
import {maxLengthValidator, minLengthValidator} from "../../../addons/validators/validators";
import s from "./ProfileDataForm.module.css"

let minLength1 = minLengthValidator(1)
let maxLength60 = maxLengthValidator(60)
let maxLength150 = maxLengthValidator(150)

const ProfileDataForm1 = ({handleSubmit, error}) =>{
    return(
        <form onSubmit={handleSubmit} className={s.form}>
            <label>Full name</label>
            <Field placeholder={"Full name"} component={InputProfileData} name={"fullName"}validate={[minLength1, maxLength60]}></Field>
            <label>Instagram</label>
            <Field placeholder={"Instagram"} component={InputProfileData} name={"contacts.instagram"}></Field>
            <label>lookingForAJob </label>
            <Field placeholder={"lookingForAJob"} type={"checkbox"} component={"input"} name={"lookingForAJob"}></Field>
            <br/><br/>
            <label>Description</label>
            <Field placeholder={"Description"} component={TextareaProfile} name={"lookingForAJobDescription"} validate={[minLength1, maxLength150]}></Field>

            <label>About me </label>
            <Field placeholder={"About me"} component={InputProfileData} name={"aboutMe"} validate={[minLength1, maxLength150]}></Field>
            <button className={s.save}>Save</button>
            {error &&<div>{error}</div>}
        </form>
    )
}
let ProfileDataForm = reduxForm({form:"profileData"})(ProfileDataForm1)

export default ProfileDataForm