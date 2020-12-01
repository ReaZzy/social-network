import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "./Posts.module.css";
import {maxLengthValidator, minLengthValidator, required} from "../../../addons/validators/validators";
import {TextareaProfile} from "../../common/Textarea";

let minLength1 = minLengthValidator(1)
let maxLength300 = maxLengthValidator(300)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={TextareaProfile} name={"postMessage"} className={s.textarea} rows="3" cols="110" validate = {[required, minLength1, maxLength300]}/>
            <p className={s.cominput}>
                <button className="ui tiny primary button unselectable" >Save</button>
            </p>

        </form>
    )
}

let PostFormRedux = reduxForm({form: "postForm"})(PostForm)
export default PostFormRedux