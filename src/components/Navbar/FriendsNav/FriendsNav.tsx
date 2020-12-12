import React from "react";
import s from "./FriendsNav.module.css"
import {NavLink} from "react-router-dom";
import defaultUserImg from "./../../../media/images/user.png"

type PropsType = {
    id:number
    img:string
}

const FriendsNav:React.FC<PropsType> = ({id, img}) =>{
    return(
        <div className={s.friends}>
            <NavLink to={"/friends/" + id} >
                <img src={img || defaultUserImg} alt='' className={s.img}/>
            </NavLink>
        </div>
    )
}

export default FriendsNav;