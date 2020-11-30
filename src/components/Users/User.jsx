import React from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import DefaultUserImg from "../../media/images/user.png";

function User({idUser, name, followLoading, setFollow, setUnfollow, followed, status, photos}) {
    return <div >
        <div className={s.user}>
            <NavLink to={"/profile/" + idUser}> <img src={photos.small !== null
                ? photos.small
                : DefaultUserImg} alt={idUser}
                                                   className={s.img}/> </NavLink>
            <NavLink to={"/profile/" + idUser}>
                <div className={s.name}>{name}</div>
            </NavLink>
            <div className={s.description}>
                <p>{status !== "" ? status : "‎"}</p>
            </div>
                <NavLink to = {`messages/` + idUser} className={s.button + " " + s.chatButton}>Chat</NavLink>
            {followed
                ? <button className={s.button + " " + s.unfollow} disabled={followLoading.some(id => idUser === id)} onClick={() => {setUnfollow(idUser)}}>Unfollow</button>
                : <button className={s.button} disabled={followLoading.some(id => idUser === id)} onClick={() => {setFollow(idUser)}}>Follow</button>}
        </div>
    </div>
}

export default User