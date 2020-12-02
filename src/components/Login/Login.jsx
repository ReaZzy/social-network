import React from "react";
import LoginReduxForm from "./LoginForm"
import {connect} from "react-redux";
import {getCaptha, setLogin} from "../../redux/authReducer";
import s from "./Login.module.css"
import {Redirect} from "react-router-dom";
const Login = (props) => {
    const onSubmit = (formData) =>{
        props.setLogin(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth){
        return <Redirect to = "profile"/>
    }
    return (
        <div className={s.form}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit = {onSubmit} needCaptcha = {props.needCaptcha} captchaUrl={props.captchaUrl}/>

        </div>
    )
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    needCaptcha: state.auth.needCaptcha,
    captchaUrl: state.auth.captchaUrl,
})


export default connect(mapStateToProps, {setLogin, getCaptha})(Login)