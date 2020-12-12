import React from "react";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import s from "./Login.module.css"
import {required} from "../../addons/validators/validators";
import {InputLogin} from "../common/Textarea";

type PropsType = {
    handleSubmit:any
    isAuth: boolean
    captchaUrl:string
    error:any
    needCaptcha:boolean
}

const LoginForm:React.FC<PropsType> = ({handleSubmit,isAuth,captchaUrl,error,needCaptcha}) =>{
    return(
        <form onSubmit={handleSubmit}>
            <label>E-mail</label>
            <div>
                <Field id ="email" placeholder={"Email"} name = {"email"} component = {InputLogin} type={"email"} disabled={isAuth} className = {s.input} validate = {[required]}/>
            </div>
            <label>Password</label>
            <div>
                <Field id={"password"} placeholder={"Password"} className = {s.input} name = {"password"} component = {InputLogin} type={"password"} disabled={isAuth} data-validate ="passsword" validate = {[required]}/>
            </div>
            <div>
                <Field type= {"checkbox"} name = {"rememberMe"} component = {"input"} disabled={isAuth} className={s.rememberMe}/> remember me
            </div>
            {error &&
            <div className={s.fieldError}>
                <span>{error}</span>
            </div>
            }
            {needCaptcha &&<div>
                <><img src={captchaUrl?captchaUrl:""} width={"200px"} alt=""/>
                <Field placeholder={"captcha"} component={InputLogin} name={"captcha"} validate={[required]}/></>
            </div>}
            <div>
                <button disabled={isAuth} className={s.button}>Login</button>
            </div>
        </form>

    )
}

const mapStateToProps = (state:any) =>({
    isAuth: state.auth.isAuth
})

const LoginReduxForm = compose(
    connect(mapStateToProps,{}),
    reduxForm<PropsType>({form:"login"}),
)(LoginForm)
export default LoginReduxForm