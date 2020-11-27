import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";


export const withAuthRedirect = (Component) =>{
    class AuthRedirect extends React.Component{
        render() {
            if (!this.props.isAuth){return <Redirect to="/login"/>}
            return <Component {...this.props}/>
        }
    }
    let AuthConnectedRedirect = connect(mapStateToProps)(AuthRedirect)
    return AuthConnectedRedirect
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})