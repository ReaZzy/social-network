const SET_USER_DATA = "SET_USER_DATA"
const SET_USER_INFO = "SET_USER_INFO"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    info: null
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
        default:
            return state

    }
}

export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data:{id, email, login }})
export const setUserInfo = (info) => ({type: SET_USER_INFO, info})

export default authReducer