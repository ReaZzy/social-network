import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{



    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 12337
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response =>{
            this.props.setProfile(response.data)
        })
    }

    render() {
        return (
            <>
                <Profile {...this.props} profileInfo={this.props.profileInfo}/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
})

let ProfileContainerWithUrl = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfile})(ProfileContainerWithUrl)
