import {connect} from "react-redux";
import {
    follow,
    setPageUsers,
    setUsers,
    unfollow,
    setTotalUsersCount,
    setLoading, setFollowLoading
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../dal/api";

class UsersAPI extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.setLoading(true)

            getUsers(this.props.count, this.props.currentPage).then(data => {
                this.props.setLoading(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
        }
    }

    setPageUsers = (p) => {
        this.props.setPageUsers(p)
        this.props.setLoading(true)
        getUsers(this.props.count, p).then(data => {
            this.props.setLoading(false)
            this.props.setUsers(data.items)
        })
    }
    leftArrow = (p) => {
        if (p > 1) {
            this.setPageUsers(p - 1)
        }
    }
    rightArrow = (p, pc) => {
        if (p < pc) {
            this.setPageUsers(p + 1)
        }
    }


    render() {
        return (<>
                {this.props.isLoading
                    ?<Preloader/>
                    :<Users leftArrow={this.leftArrow} rightArrow={this.rightArrow} totalCount={this.props.totalCount}
                                count={this.props.count} users={this.props.users} currentPage={this.props.currentPage}
                                setPageUsers={this.setPageUsers } unfollow={this.props.unfollow} isLoading = {this.props.isLoading}
                                follow={this.props.follow} followLoading = {this.props.followLoading} setFollowLoading = {this.props.setFollowLoading}
                />}

            </>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        followLoading: state.users.followLoading,
        users: state.users.users,
        totalCount: state.users.totalCount,
        count: state.users.count,
        currentPage: state.users.currentPage,
        isLoading: state.users.isLoading,
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setPageUsers, setTotalUsersCount, setLoading, setFollowLoading,

})(UsersAPI)

export default UsersContainer