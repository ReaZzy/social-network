import {exitAPI, getCapthaAPI, getLogin, getLoginInfo, loginAPI} from "../dal/api";
import {reset, stopSubmit} from 'redux-form';
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA"
const SET_USER_INFO = "SET_USER_INFO"
const SET_LOADING = "SET_LOADING"
const NEED_CAPTCHA = "auth/NEED_CAPTCHA"
const SET_AUTH = "SET_AUTH"
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL"

let initialState={
    id: null as number|null,
    email: null as string|null,
    login: null as string|null,
    isAuth: false,
    info: null as any,
    loading: false,
    needCaptcha: false,
    captchaUrl: null as string|null,
}

type initialStateType = typeof initialState


const authReducer = (state = initialState, action:ActionsType): initialStateType => {
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
type ActionsType = setUserDataType|setUserInfoType|setLoadingType|setAuthType|needCaptchaType|setCaptchaUrlType

type setUserDataDataType = {
    id: number
    email: string
    login: string

}
type setUserDataType = {
    type: typeof SET_USER_DATA
    data: setUserDataDataType
}
type setUserInfoType = {
    type: typeof SET_USER_INFO
    info: any
}
type setLoadingType = {
    type: typeof SET_LOADING
    boolean: boolean
}
type setAuthType = {
    type: typeof SET_AUTH
    boolean: boolean
}
type needCaptchaType = {
    type: typeof NEED_CAPTCHA
}
type setCaptchaUrlType = {
    type: typeof SET_CAPTCHA_URL
    url: string
}


export const setUserData = (id:number, email:string, login:string):setUserDataType => ({type: SET_USER_DATA, data:{id, email, login }})
export const setUserInfo = (info:any):setUserInfoType => ({type: SET_USER_INFO, info})
const setLoading = (boolean:boolean): setLoadingType => ({type: SET_LOADING, boolean})
const setAuth = (boolean:boolean): setAuthType => ({type: SET_AUTH, boolean})
const needCaptcha = ():needCaptchaType => ({type:NEED_CAPTCHA})
const setCaptchaUrl = (url:string):setCaptchaUrlType => ({type:SET_CAPTCHA_URL, url})

export const setUser = (id:number):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    let data = await getLogin()
    if (data.resultCode === 0){
        let {id, email, login} = data.data
        dispatch(setUserData(id, email, login))

        let response = await getLoginInfo(id)
        dispatch(setUserInfo(response.data))
}}

export const setLogin = (email:string, password:string, rememberMe:boolean, captcha:boolean):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
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

export const exit = ():ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    let response = await exitAPI()
        if(response.data.resultCode === 0){
            dispatch(setAuth(false))
            window.location.reload()
        }
}

export const getCaptha = ():ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    dispatch(needCaptcha())
    let response = await getCapthaAPI()
    dispatch(setCaptchaUrl(response.data.url))
}
export default authReducer

