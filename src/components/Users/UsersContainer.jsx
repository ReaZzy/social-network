import {connect} from "react-redux";
import {
    setPageUsers,
    setUsers,
    setTotalUsersCount,
    setLoading, setFollowLoading, setUsersPage, setPageU, setFollow, setUnfollow
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCount,
    getCurrentPage,
    getFollowLoading,
    getSsLoading,
    getTotalCount,
    getUsersState
} from "../../redux/usersSelector";
import {startDialog} from "../../redux/dialogsReducer";

class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.setUsersPage(this.props.users.length, this.props.count, this.props.currentPage)
    }

    render() {
        return (<>
                {this.props.isLoading
                    ? <Preloader/>
                    : <Users totalCount={this.props.totalCount}
                             count={this.props.count} users={this.props.users} currentPage={this.props.currentPage}
                             setPageUsers={this.props.setPageU}
                             isLoading={this.props.isLoading}
                             setFollow={this.props.setFollow} followLoading={this.props.followLoading}
                             setFollowLoading={this.props.setFollowLoading}
                             setUnfollow={this.props.setUnfollow}
                             startDialog ={this.props.startDialog}
                    />}

            </>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        followLoading: getFollowLoading(state),
        users: getUsersState(state),
        totalCount: getTotalCount(state),
        count: getCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getSsLoading(state),
    }
}

const UsersContainer = connect(mapStateToProps, {
    setFollow, setUsers, setPageUsers, setTotalUsersCount, setLoading, setFollowLoading, setUsersPage, setPageU, setUnfollow,
    startDialog,

})(UsersAPI)

export default UsersContainer