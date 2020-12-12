import {followAPI, getUsers, unfollowAPI} from "../dal/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_PAGE_USERS = "SET_PAGE_USERS"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_LOADING = "SET_LOADING"
const SET_FOLLOW_LOADING = "SET_FOLLOW_LOADING"
const SET_CURRENT_TERM = "SET_CURRENT_TERM"
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE"

let initialState = {
    users: [] as any,
    count: 7,
    totalCount: null as number | null,
    currentPage: 1,
    isLoading: true,
    followLoading: [] as Array<number>,
    currentTerm: "" as string
}

export type initialStateType = typeof initialState


const usersReducer = (state = initialState, action:ActionsType):initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(// @ts-ignore
                    u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( // @ts-ignore
                u => {
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
        case SET_CURRENT_TERM:
            return {...state, currentTerm: action.currentTerm}
        default:
            return state

    }
}

type ActionsType = followType|unfollowType|setCurrentPageType|setUsersType|setPageUsersType|setTotalUsersCountType|setLoadingType|setFollowLoadingType|setCurrentTermType

type setCurrentTermType = {
    type: typeof SET_CURRENT_TERM
    currentTerm: string
}

type followType = {
    type: typeof FOLLOW
    userId: number
}
type unfollowType = {
    type: typeof UNFOLLOW
    userId: number
}
type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type setUsersType = {
    type: typeof SET_USERS
    users: any
}
type setPageUsersType = {
    type: typeof SET_PAGE_USERS
    currentPage: number
}
type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsers: number
}
type setLoadingType = {
    type: typeof SET_LOADING
    isLoading: boolean
}
type setFollowLoadingType = {
    type: typeof SET_FOLLOW_LOADING
    isFollowLoading: boolean
    id: number
}

const setCurrentTerm = (currentTerm:string):setCurrentTermType => ({type:SET_CURRENT_TERM, currentTerm})
const follow = (userId:number):followType => ({type: FOLLOW, userId})
const unfollow = (userId:number):unfollowType => ({type: UNFOLLOW, userId})
const setCurrentPage = (currentPage:number):setCurrentPageType=> ({type: SET_CURRENT_PAGE, currentPage})
export const setUsers = (users:any):setUsersType => ({type: SET_USERS, users})
export const setPageUsers = (currentPage:number):setPageUsersType => ({type: SET_PAGE_USERS, currentPage})
export const setTotalUsersCount = (totalUsers:number):setTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, totalUsers})
export const setLoading = (isLoading:boolean):setLoadingType => ({type: SET_LOADING, isLoading})
export const setFollowLoading = (isFollowLoading:boolean, id:number):setFollowLoadingType => ({type: SET_FOLLOW_LOADING, isFollowLoading, id})

export const setUsersPage = (length:number, count:number, currentPage:number, term:string=""):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    if (length === 0) {
        dispatch(setLoading(true))
        dispatch(setCurrentTerm(term))
        let data = await  getUsers(count, currentPage, term)
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setLoading(false))
        dispatch(setCurrentPage(currentPage))
        dispatch(setPageUsers(currentPage))
        dispatch(setUsers(data.items))
    }
}
export const setPageU = (count = 7, p:number, term:string=""):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    dispatch(setPageUsers(p))
    dispatch(setLoading(true))
    dispatch(setCurrentTerm(term))
    let data = await getUsers(count, p, term)
    dispatch(setLoading(false))
    dispatch(setUsers(data.items))
}

export const setFollow = (id:number):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    dispatch(setFollowLoading(true, id))
    let data = await unfollowAPI(id)
    if (data.resultCode === 0) {
        dispatch(setFollowLoading(false, id))
        dispatch(follow(id))
    }
}

export const setUnfollow = (id:number):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    dispatch(setFollowLoading(true, id))
    let data = await followAPI(id)
    if (data.resultCode === 0) {
        dispatch(setFollowLoading(false, id))
        dispatch(unfollow(id))
    }
}
export default usersReducer