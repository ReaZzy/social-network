import React from "react";
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";
import defaultUserImg from "./../../../media/images/user.png"


type DialogType= {
    id: number
    getMessagesList: (id:number) => void
    photos:string
    userName: string
}

const Dialog:React.FC<DialogType> = ({id, getMessagesList, photos, userName}) => {
    let getMessagesListProps =()=>{
            getMessagesList(id)
    }
    return (
        <div>
            <NavLink to={"/messages/" + id} className={s.dialog} activeClassName={s.active} onClick = {getMessagesListProps}>
                <img src = {photos || defaultUserImg} alt = '' className={s.f_img}/>
                {userName}
            </NavLink>
            <br/>
            <br/>
        </div>
    );
}


export default Dialog;
