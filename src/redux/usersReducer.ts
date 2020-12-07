import {followAPI, getUsers, unfollowAPI} from "../dal/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_PAGE_USERS = "SET_PAGE_USERS"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_LOADING = "SET_LOADING"
const SET_FOLLOW_LOADING = "SET_FOLLOW_LOADING"
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE"

let initialState = {
    users: [],
    count: 7,
    totalCount: null,
    currentPage: 1,
    isLoading: true,
    followLoading: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u

                })
            }

        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_PAGE_USERS:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalCount: action.totalUsers
            }

        case SET_LOADING:
            return {...state, isLoading: action.isLoading}
        case SET_FOLLOW_LOADING:
            return {
                ...state,
                followLoading: action.isFollowLoading
                    ? [...state.followLoading, action.id]
                    : state.followLoading.filter(id => id !== action.id)
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        default:
            return state

    }
}

const follow = (userId) => ({type: FOLLOW, userId})
const unfollow = (userId) => ({type: UNFOLLOW, userId})
const setCurrentPage = (currentPage)=> ({type: SET_CURRENT_PAGE, currentPage})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setPageUsers = (currentPage) => ({type: SET_PAGE_USERS, currentPage})
export const setTotalUsersCount = (totalUsers) => ({type: SET_TOTAL_USERS_COUNT, totalUsers})
export const setLoading = (isLoading) => ({type: SET_LOADING, isLoading})
export const setFollowLoading = (isFollowLoading, id) => ({type: SET_FOLLOW_LOADING, isFollowLoading, id})

export const setUsersPage = (length, count, currentPage) => async (dispatch) => {
    if (length === 0) {
        dispatch(setLoading(true))
        let data = await  getUsers(count, currentPage)
        dispatch(setLoading(false))
        dispatch(setCurrentPage(currentPage))
        dispatch(setPageUsers(currentPage))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}
export const setPageU = (count = 7, p) => async (dispatch) => {
    dispatch(setPageUsers(p))
    dispatch(setLoading(true))
    let data = await getUsers(count, p)
    dispatch(setLoading(false))
    dispatch(setUsers(data.items))

}

export const setFollow = (id) => async (dispatch) =>{
    dispatch(setFollowLoading(true, id))
    let data = await unfollowAPI(id)
    if (data.resultCode === 0) {
        dispatch(setFollowLoading(false, id))
        dispatch(follow(id))
    }
}

export const setUnfollow = (id) => async (dispatch) =>{
    dispatch(setFollowLoading(true, id))
    let data = await followAPI(id)
    if (data.resultCode === 0) {
        dispatch(setFollowLoading(false, id))
        dispatch(unfollow(id))
    }
}
export default usersReducer