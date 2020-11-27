import React from "react";
import LoginReduxForm from "./LoginForm"
import {connect} from "react-redux";
import {setLogin} from "../../redux/authReducer";
import s from "./Login.module.css"
import {Redirect} from "react-router-dom";
const Login = (props) => {
    const onSubmit = (formData) =>{
        props.setLogin(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to = "profile"/>
    }

    return (
        <div className={s.form}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit = {onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {setLogin})(Login)