import {exitAPI, getLogin, getLoginInfo, loginAPI} from "../dal/api";
import {reset, stopSubmit} from 'redux-form';

const SET_USER_DATA = "SET_USER_DATA"
const SET_USER_INFO = "SET_USER_INFO"
const SET_LOADING = "SET_LOADING"
const SET_AUTH = "SET_AUTH"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    info: null,
    loading: false,
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
        default:
            return state

    }
}

export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data:{id, email, login }})
export const setUserInfo = (info) => ({type: SET_USER_INFO, info})
const setLoading = (boolean) => ({type: SET_LOADING, boolean})
const setAuth = (boolean) => ({type: SET_AUTH, boolean})

export const setUser = (id = 1225) => (dispatch) => {
    getLogin().then(data =>{
        if (data.resultCode === 0){
            let {id, email, login} = data.data
            dispatch(setUserData(id, email, login))

            getLoginInfo(id).then(response =>{
                dispatch(setUserInfo(response.data))
            })
        }
    })
}

export const setLogin = (email, password, rememberMe) => (dispatch) => {
    dispatch(setLoading(true))
    loginAPI(email, password, rememberMe).then(response=>{
         if(response.data.resultCode === 0){
             dispatch(setLoading(false))
             dispatch(setAuth(true))
             window.location.reload()
         }
        else{
             dispatch(reset("login"))
             let message = response.data.messages.length > 0 ? response.data.messages[0]: "Server problem"
             dispatch(stopSubmit("login", {_error:message}))

        }
    })
}

export const exit = () => (dispatch) =>{
    exitAPI().then(response=>{
        if(response.data.resultCode === 0){
            dispatch(setAuth(false))
            window.location.reload()
        }
    })
}
export default authReducer

