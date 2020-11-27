import React from "react";
import s from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthValidator, minLengthValidator, required} from "../../addons/validators/validators";
import {TextareaDialogs} from "../common/Textarea";

let minLength1 = minLengthValidator(1)
let maxLength300 = maxLengthValidator(300)

const SendMessageFo = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field rows="3" cols = "50" someArbitraryOtherProp={"s.textarea1"}
                   name ="message" component={TextareaDialogs}
                   placeholder={"Type your message..."} validate = {[required, minLength1, maxLength300]}/>
            <span className={s.butt}><button className={s.button}>Send</button></span>
        </form>
    )
}

const SendMessageForm = reduxForm({form: "sendMessage"})(SendMessageFo)
export default SendMessageForm