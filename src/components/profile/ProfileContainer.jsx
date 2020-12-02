import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
class ProfileContainer extends React.Component{

    reGetProfile = () =>{
        let userId = this.props.match.params.userId
        if (this.props.isAuth && !userId) {
            userId = this.props.userId
        }

        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.reGetProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.reGetProfile()
        }
    }

    render() {
        return (
            <>
                {/*eslint-disable-next-line*/}
                <Profile {...this.props}  userId = {this.userId} isOwner = {!this.props.match.params.userId || this.props.userId == this.props.match.params.userId} savePhoto = {this.props.savePhoto}
                         profileInfo={this.props.profileInfo} status = {this.props.status} updateStatus = {this.props.updateStatus}
                         photoLoading = {this.props.photoLoading} saveProfile = {this.props.saveProfile} profileInfoLoading ={this.props.profileInfoLoading}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
    status: state.profilePage.status,
    isAuth:state.auth.isAuth,
    userId: state.auth.id,
    photoLoading: state.profilePage.photoLoading,
    profileInfoLoading: state.profilePage.profileInfoLoading,
})
export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
