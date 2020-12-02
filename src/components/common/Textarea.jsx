import React from "react";
import s from "./textarea.module.css"

export const TextareaDialogs = ({input, meta, ...props}) =>{
    return (
        <div >
            <textarea {...input} className={s.textareaDialogs + " " + (meta.touched && meta.error ? s.error : "")}/>
            {meta.touched && meta.error
                && <div className={s.alert}>
                {meta.error}
                </div>}

        </div>
    )
}

export const TextareaProfile = ({input, meta, ...props}) =>{
    return (
        <div >
            <textarea {...input} {...props} className={s.TextareaProfile + " " + (meta.touched && meta.error ? s.error : "")}/>
            {meta.touched && meta.error
            && <div className={s.alertProfile}>
                {meta.error}
            </div>}

        </div>
    )
}

export const InputLogin = ({input, meta, ...props}) =>{
    return (
        <div >
            <input {...input} {...props} className={s.input + " " + (meta.touched && meta.error ? s.error : "")}/>
            {meta.touched && meta.error
            && <div className={s.alertLogin}>
                {meta.error}
            </div>}

        </div>
    )
}

export const TextareaTodo = ({input, meta, ...props}) =>{
    return (
        <div >
            <textarea {...input} {...props} className={s.textareaTodo + " " + (meta.touched && meta.error ? s.error : "")}/>
            {meta.touched && meta.error
            && <div className={s.alertTodo}>
                {meta.error}
            </div>}

        </div>
    )
}

export const InputProfileData = ({input, meta, ...props}) =>{
    return (
        <div >
            <input {...input} {...props} className={(meta.touched && meta.error ? s.error : "")}/>
            {meta.touched && meta.error
            && <div className={s.alertLogin}>
                {meta.error}
            </div>}

        </div>
    )
}