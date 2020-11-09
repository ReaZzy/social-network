import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import DefaultUserImg from "./../../media/images/user.png"

const Header = (props) => {
    if (!props.profileInfo) {
        return <Preloader/>
    }
    return (
        <header className={s.header}>
            <img
                src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg"
                alt="logo"
                height="34px"
            />
            {props.isAuth === false
                ? <NavLink to="/login" className={s.Login}>
                    <div className={s.loginButton}>Login</div>
                </NavLink>
                : <NavLink to={`/profile/${props.id}`}>
                        <div className={s.info}>
                            <img src={props.profileInfo.photos.small !== null ? props.profileInfo.photos.small : DefaultUserImg}
                             alt="" className={s.avatar}/>
                            <div className={s.login}>{props.login}</div>
                        </div>
                </NavLink>}
        </header>
    );
};

export default Header;
