import React from "react";
import s from "./users.module.css";
import Paginator from "../../addons/Paginator";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";

const Users = ({totalCount, count, currentPage, setPageUsers, users,startDialog, ...props}) => {
    if (!totalCount){
        return <Preloader/>
    }
    return (
        <div className={s.all}>
            <div className={s.title}>USERS</div>
            <div className={s.title}>USERS</div>

            <div className={s.usersss}>
                {users.map(u => <User key = {u.id} idUser={u.id} name={u.name} followLoading={props.followLoading} setFollow={props.setFollow} setUnfollow={props.setUnfollow}
                                         followed={u.followed} status={u.status} photos={u.photos} startDialog ={startDialog}
                /> )}
            </div>

            <Paginator totalCount = {totalCount} count={count} currentPage={currentPage} setPageUsers = {setPageUsers}/>
        </div>
    )

}

export default Users