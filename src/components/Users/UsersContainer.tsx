import {connect} from "react-redux";
import {
    setPageUsers,
    setUsersPage, setPageU, setFollow, setUnfollow
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCount,
    getCurrentPage,
    getCurrentTerm,
    getFollowLoading,
    getSsLoading,
    getTotalCount,
    getUsersState
} from "../../redux/usersSelector";
import {startDialog} from "../../redux/dialogsReducer";

type MapStateToPropsType= {
    followLoading: Array<number>
    count:number
    totalCount:number
    isLoading: boolean
    currentPage: number
    currentTerm:string
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
type DispatchType= {
    setPageU: (number:number, pageNumber:number) => void
    setUsersPage: (length:number, count:number, currentPage:number, term?:string) => void
    setFollow: (userId:number) => void
    setUnfollow: (userId:number) => void
    setPageUsers: (number:number, pageNumber:number) => void
    startDialog: (userId:number) => void
}
type OwnPropsType= {}

type PropsType = MapStateToPropsType & DispatchType & OwnPropsType

class UsersAPI extends React.Component<PropsType> {
    componentDidMount() {
        this.props.setUsersPage(this.props.users.length, this.props.count, this.props.currentPage, this.props.currentTerm)
    }

    render() {
        return (<>
                {this.props.isLoading
                    ? <Preloader/>
                    : <Users totalCount={this.props.totalCount}
                             currentTerm = {this.props.currentTerm}
                             setUsersPage={this.props.setUsersPage}
                             count={this.props.count} users={this.props.users} currentPage={this.props.currentPage}
                             setPageUsers={this.props.setPageU}
                             setFollow={this.props.setFollow} followLoading={this.props.followLoading}
                             setUnfollow={this.props.setUnfollow}
                             startDialog ={this.props.startDialog}
                    />}

            </>
        )

    }
}

let mapStateToProps = (state:any) => {
    return {
        followLoading: getFollowLoading(state),
        users: getUsersState(state),
        totalCount: getTotalCount(state),
        count: getCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getSsLoading(state),
        currentTerm: getCurrentTerm(state)
    }
}


const UsersContainer = connect<MapStateToPropsType, DispatchType, OwnPropsType>(mapStateToProps, {
    setFollow, setPageUsers, setUsersPage, setPageU, setUnfollow,
    startDialog,
// @ts-ignore
})(UsersAPI)

export default UsersContainer