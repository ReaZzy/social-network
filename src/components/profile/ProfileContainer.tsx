import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfileInfoType} from "./ProfileInfo/ProfileInfo";
type MapStateToPropsType = {
    match: any
    isAuth: boolean
    getProfile: (userId:number) => void
    userId:number
    getStatus: (userId:number) => void
    profileInfo: ProfileInfoType
    status: string
    saveProfile: (formData:any, userId:number) => Promise<void>
    photoLoading: boolean
    updateStatus: (status:string) =>void
    savePhoto: (file:File) => void
}


class ProfileContainer  extends React.Component<MapStateToPropsType>{

    reGetProfile = () =>{
        let userId= this.props.match.params.userId
        if (this.props.isAuth && !userId) {
            userId = this.props.userId
        }

        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.reGetProfile()
    }
    componentDidUpdate(prevProps:any, prevState:any, snapshot:any) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.reGetProfile()
        }
    }

    render() {
        return (
            <>
                {/*eslint-disable-next-line*/}
                <Profile {...this.props} isOwner = {!this.props.match.params.userId || this.props.userId == this.props.match.params.userId} savePhoto = {this.props.savePhoto}
                         profileInfo={this.props.profileInfo} status = {this.props.status} updateStatus = {this.props.updateStatus}
                         photoLoading = {this.props.photoLoading} saveProfile = {this.props.saveProfile}
                />
            </>
        );
    }
}

const mapStateToProps = (state:any) => ({
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
