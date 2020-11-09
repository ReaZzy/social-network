import React from "react";
import s from "./FriendsNav.module.css"
import {NavLink} from "react-router-dom";

const FriendsNav = (props) =>{
    return(
        <div className={s.friends}>
            <NavLink to={"/friends/" + props.id}>
                <img src={props.img} alt='' className={s.img}/>
            </NavLink>
        </div>
    )
}

export default FriendsNav;