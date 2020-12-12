import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import DefaultUserImg from "./../../media/images/user.png"


type PropsType = {
    isAuth:boolean
    id:number | null
    getProfile: (id:number|any) => void
    exit:() => void
    login:string | null
    profileInfo: {
        photos: {
            small:string
            large:string
        }
    }
}

const Header:React.FC<PropsType> = ({isAuth, profileInfo, id, getProfile, exit, login}) => {
    if(isAuth){
        if (!profileInfo) {
            return <Preloader/>
        }
    }

    return (
        <header className={s.header}>
            <img
                src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg"
                alt="logo"
                height="34px"
            />
            {!isAuth
                ? <NavLink to="/login" className={s.Login}>
                    <button className={s.loginButton}>Login</button>
                </NavLink>
                :<>
                    <NavLink to={`/profile/${id}`} onClick = {()=>{getProfile(id)}}>
                        <button className={s.exit} onClick={exit}>exit</button>
                        <div className={s.info}>
                            <img src={profileInfo.photos.small !== null ? profileInfo.photos.small : DefaultUserImg}
                             alt="" className={s.avatar}/>
                            <div className={s.login}>{login}</div>
                        </div>
                </NavLink>
                </>}
        </header>
    );
};

export default Header;
