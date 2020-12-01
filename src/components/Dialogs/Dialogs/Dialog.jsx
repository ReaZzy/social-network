import React from "react";
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";
import defaultUserImg from "./../../../media/images/user.png"


const Dialog = (props) => {
    let getMessagesList =()=>{
            props.getMessagesList(props.id)
    }

    return (
        <div>
            <NavLink to={"/messages/" + props.id} className={s.dialog} activeClassName={s.active} onClick = {getMessagesList}>

                <img src = {props.photos || defaultUserImg} alt = '' className={s.f_img}/>
                {props.userName}
            </NavLink>
            <br/>
            <br/>
        </div>
    );
}

export default Dialog;