import React from "react";
import s from "./users.module.css";
import Paginator from "../../addons/Paginator";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";
import SearchForm from "../../addons/searchForm";

type PropsType = {
    totalCount: number
    setFollow: (userId:number) => void
    setUnfollow: (userId:number) => void
    count: number
    currentPage: number
    currentTerm: any
    followLoading: Array<number>
    setPageUsers: (number:number, pageNumber:number, term?: string) => void
    setUsersPage: (length:number, count:number, currentPage:number, term?:string) => void
    startDialog: (userId:number) => void
    users: Array<{
        id:number
        name:string
        followed: boolean
        status:string
        photos: {
            small:string
            large:string
        }
    }>
}



const Users: React.FC<PropsType>  = ({currentTerm, setUsersPage, totalCount, count, currentPage, setPageUsers, users,startDialog, ...props}) => {

    const usersList = users.map(u => <User key = {u.id} idUser={u.id} name={u.name} followLoading={props.followLoading}
                                            setFollow={props.setFollow} setUnfollow={props.setUnfollow}
                                            followed={u.followed} status={u.status} photos={u.photos}
                                            startDialog ={startDialog}/> )

    const undefinedUser = <h2 className ={s.undefinedUser}>
                                    User "{currentTerm}" is undefined
                            </h2>
    const onSubmit = (formData:any) =>{
        setUsersPage(0,7,currentPage,formData.searchField)
    }
    if (totalCount === 1) {

    }
    const InitialValues = {
        searchField: currentTerm
    }
    return (
        <div className={s.all}>
            <div className={s.title}>USERS</div>
            <div className={s.title}>USERS</div>
            {/*/@ts-ignore/*/}
            <SearchForm onSubmit={onSubmit} initialValues={InitialValues}/>
            <div className={s.usersss}>
                {totalCount? usersList : undefinedUser}
            </div>
            <Paginator totalCount = {totalCount} count={count} currentPage={currentPage} setPageUsers = {setPageUsers} currentTerm={currentTerm}/>
        </div>
    )

}

export default Users