import React from "react";
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div>
            <NavLink to={"/messages/" + props.id} className={s.dialog} activeClassName={s.active}>
                <img src = {props.img} alt = '' className={s.f_img}/>
                {props.name}
            </NavLink>
            <br/>
            <br/>
        </div>
    );
}

export default Dialog;