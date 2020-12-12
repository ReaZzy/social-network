import React from "react";
import LoginReduxForm from "./LoginForm"
import {connect} from "react-redux";
import {setLogin} from "../../redux/authReducer";
import s from "./Login.module.css"
import {Redirect} from "react-router-dom";


type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string
    needCaptcha: boolean
}

type MapDistatchPropsType = {
    setLogin: (email:string, password: string, rememberMe:boolean, captcha:boolean) => void
}
type LoginType = MapStateToPropsType&MapDistatchPropsType

const Login:React.FC<LoginType> = ({needCaptcha, captchaUrl, setLogin, isAuth}) => {
    const onSubmit = (formData:any) =>{
        setLogin(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (isAuth){
        return <Redirect to = "profile"/>
    }
    return (
        <div className={s.form}>
            <h1>Login</h1>
            {/*/@ts-ignore/*/}
            <LoginReduxForm onSubmit = {onSubmit} needCaptcha = {needCaptcha} captchaUrl={captchaUrl}/>

        </div>
    )
}

const mapStateToProps = (state:any) =>({
    isAuth: state.auth.isAuth,
    needCaptcha: state.auth.needCaptcha,
    captchaUrl: state.auth.captchaUrl,
})


export default connect(mapStateToProps, {setLogin})(Login)