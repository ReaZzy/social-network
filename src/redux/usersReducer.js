const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_PAGE_USERS = "SET_PAGE_USERS"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_LOADING = "SET_LOADING"
const SET_FOLLOW_LOADING = "SET_FOLLOW_LOADING"

let initialState = {
    users : [],
    count : 7,
    totalCount: 0,
    currentPage : 1,
    isLoading: true,
    followLoading: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed:false}
                    }
                    return u

                })
            }

        case SET_USERS:
            return{
                ...state, users: action.users
            }
        case SET_PAGE_USERS:
            return{
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return{
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

        default:
            return state

    }
}

export const follow = (userId) => ({type:FOLLOW, userId})
export const unfollow = (userId) => ({type:UNFOLLOW, userId})
export const setUsers = (users) =>({type:SET_USERS, users})
export const setPageUsers = (currentPage) =>({type:SET_PAGE_USERS, currentPage})
export const setTotalUsersCount = (totalUsers) =>({type:SET_TOTAL_USERS_COUNT, totalUsers})
export const setLoading = (isLoading) =>({type:SET_LOADING, isLoading})
export const setFollowLoading = (isFollowLoading, id) => ({type:SET_FOLLOW_LOADING, isFollowLoading, id})

export default usersReducer