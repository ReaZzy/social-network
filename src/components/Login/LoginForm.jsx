import React from "react";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import s from "./Login.module.css"
import {required} from "../../addons/validators/validators";
import {InputLogin} from "../common/Textarea";

const LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <label>E-mail</label>
            <div>
                <Field id ="email" placeholder={"Email"} name = {"email"} component = {InputLogin} type={"email"} disabled={props.isAuth} className = {s.input} validate = {[required]}/>
            </div>
            <label>Password</label>
            <div>
                <Field id={"password"} placeholder={"Password"} className = {s.input} name = {"password"} component = {InputLogin} type={"password"} disabled={props.isAuth} data-validate ="passsword" validate = {[required]}/>
            </div>
            <div>
                <Field type= {"checkbox"} name = {"rememberMe"} component = {"input"} disabled={props.isAuth} className={s.rememberMe}/> remember me
            </div>
            {props.error &&
            <div className={s.fieldError}>
                <span>{props.error}</span>
            </div>
            }

            {props.needCaptcha &&<div><><img src={props.captchaUrl?props.captchaUrl:""} width={"200px"} alt=""/><Field placeholder={"captcha"} component={InputLogin} name={"captcha"} validate={[required]}/></></div>}


            <div>
                <button disabled={props.isAuth} className={s.button}>Login</button>
            </div>
        </form>

    )
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

const LoginReduxForm = compose(
    connect(mapStateToProps),
    reduxForm({form:"login"}),
)(LoginForm)
export default LoginReduxForm