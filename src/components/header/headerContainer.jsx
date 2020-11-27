import React from "react";
import {connect} from "react-redux";
import {exit, setUser} from "../../redux/authReducer";
import Header from "./Header";
import {getProfile} from "../../redux/profileReducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.setUser(this.props.id)
    }


    render() {
        return <Header {...this.props} isAuth = {this.props.isAuth} login ={this.props.login} exit = {this.props.exit}
                       id = {this.props.id} img ={this.props.img} profileInfo ={this.props.info} getProfile = {this.props.getProfile}/>
    }
}

const mapStateToProps = (state) =>{return{
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
    info: state.auth.info,
}}


export default connect(mapStateToProps, {setUser, getProfile, exit})(HeaderContainer)