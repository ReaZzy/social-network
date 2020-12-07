import {exitAPI, getCapthaAPI, getLogin, getLoginInfo, loginAPI} from "../dal/api";
import {reset, stopSubmit} from 'redux-form';

const SET_USER_DATA = "SET_USER_DATA"
const SET_USER_INFO = "SET_USER_INFO"
const SET_LOADING = "SET_LOADING"
const NEED_CAPTCHA = "auth/NEED_CAPTCHA"
const SET_AUTH = "SET_AUTH"
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    info: null,
    loading: false,
    needCaptcha: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case SET_USER_INFO :
            return {...state, info: action.info}
        case SET_LOADING:
            return {...state, loading: action.boolean}
        case SET_AUTH:
            return {...state, isAuth: action.boolean}
        case NEED_CAPTCHA:
            return {...state, needCaptcha: true}
        case SET_CAPTCHA_URL:
            return {...state, captchaUrl: action.url}
        default:
            return state

    }
}

export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data:{id, email, login }})
export const setUserInfo = (info) => ({type: SET_USER_INFO, info})
const setLoading = (boolean) => ({type: SET_LOADING, boolean})
const setAuth = (boolean) => ({type: SET_AUTH, boolean})
const needCaptcha = () => ({type:NEED_CAPTCHA})
const setCaptchaUrl = (url) => ({type:SET_CAPTCHA_URL, url})

export const setUser = (id = 1225) => async (dispatch) => {
    let data = await getLogin()
    if (data.resultCode === 0){
        let {id, email, login} = data.data
        dispatch(setUserData(id, email, login))

        let response = await getLoginInfo(id)
        dispatch(setUserInfo(response.data))
}}

export const setLogin = (email, password, rememberMe, captcha) => async (dispatch) => {
    dispatch(setLoading(true))
    let response = await  loginAPI(email, password, rememberMe, captcha)
         if(response.data.resultCode === 0){
             dispatch(setLoading(false))
             dispatch(setAuth(true))
             window.location.reload()
         }
        else{
            if (response.data.resultCode === 10){
                dispatch(getCaptha())
            }
             dispatch(reset("login"))
             let message = response.data.messages.length > 0 ? response.data.messages[0]: "Server problem"
             dispatch(stopSubmit("login", {_error:message}))
        }
}

export const exit = () => async (dispatch) =>{
    let response = await exitAPI()
        if(response.data.resultCode === 0){
            dispatch(setAuth(false))
            window.location.reload()
        }
}

export const getCaptha = () => async (dispatch) =>{
    dispatch(needCaptcha())
    let response = await getCapthaAPI()
    dispatch(setCaptchaUrl(response.data.url))
}
export default authReducer

