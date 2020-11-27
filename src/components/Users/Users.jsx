import React from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import DefaultUserImg from "../../media/images/user.png";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.count)
    let page = []
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }

    return (
        <div className={s.all}>
            <div className={s.title}>USERS</div>
            <div className={s.title}>USERS</div>

            <div className={s.usersss}>
                {
                    props.users.map(u =>  <div key = {u.id}>
                        <div className={s.user}>
                            <NavLink to={"/profile/" + u.id}> <img src={u.photos.small !== null
                                ? u.photos.small
                                : DefaultUserImg} alt={u.id}
                                                                   className={s.img}/> </NavLink>
                            <NavLink to={"/profile/" + u.id}>
                                <div className={s.name}>{u.name}</div>
                            </NavLink>
                            <div className={s.description}>
                                <p>{u.status !== "" ? u.status : "‎"}</p>
                            </div>
                            <div>
                                <NavLink to = {`messages/` + u.id} className={s.button + " " + s.chatButton}>Chat</NavLink>
                            </div>
                            {u.followed
                                ? <button className={s.button + " " + s.unfollow} disabled={props.followLoading.some(id => id === u.id)} onClick={() => {props.setUnfollow(u.id)}}>Unfollow</button>
                                : <button className={s.button} disabled={props.followLoading.some(id => id === u.id)} onClick={() => {props.setFollow(u.id)}}>Follow</button>}
                        </div>
                     </div> )
                }
            </div>

            <span className={s.listPage} onClick={() => {
                props.leftArrow(props.currentPage)
            }}> ← </span>
            <div className={s.listPage}>
                {
                    page.slice(0, 15).map(p => {
                        return <span key = {p} className={props.currentPage === p && s.currentPage}
                                     onClick={() => {
                                         props.setPageUsers(7, p)
                                     }}
                        >{p}</span>
                    })
                }
            </div>
            <span className={s.listPage} onClick={() => {
                props.rightArrow(props.currentPage, pagesCount)
            }}> → </span>
        </div>
    )

}

export default Users