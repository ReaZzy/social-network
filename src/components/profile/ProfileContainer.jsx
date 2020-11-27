import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
class ProfileContainer extends React.Component{



    componentDidMount() {
        let userId = this.props.match.params.userId
        if (this.props.isAuth && !userId) {
            userId = this.props.userId
        }

        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <>
                <Profile {...this.props}  userId = {this.userId}
                         profileInfo={this.props.profileInfo} status = {this.props.status} updateStatus = {this.props.updateStatus}/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
    status: state.profilePage.status,
    isAuth:state.auth.isAuth,
    userId: state.auth.id
})
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
