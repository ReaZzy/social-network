import React from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import DefaultUserImg from "../../media/images/user.png";
import {follow, unfollow} from "../../dal/api";

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
                    props.users.map(u => <div>
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
                            {u.followed
                                ? <button className={s.button} disabled={props.followLoading.some(id => id === u.id)}  onClick={() => {
                                    props.setFollowLoading(true, u.id)
                                    follow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.setFollowLoading(false, u.id)
                                            props.unfollow(u.id)
                                        }
                                    })
                                }}>Unfollow</button>
                                : <button className={s.button} disabled={props.followLoading.some(id => id === u.id)} onClick={() => {
                                    props.setFollowLoading(true, u.id)
                                    unfollow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.setFollowLoading(false, u.id)
                                            props.follow(u.id)
                                        }
                                    })
                                }}>Follow</button>}
                        </div>
                    </div>)
                }
            </div>

            <span className={s.listPage} onClick={() => {
                props.leftArrow(props.currentPage)
            }}> ← </span>
            <div className={s.listPage}>
                {
                    page.slice(0, 15).map(p => {
                        return <span className={props.currentPage === p && s.currentPage}
                                     onClick={() => {
                                         props.setPageUsers(p)
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