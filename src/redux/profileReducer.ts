import {getProfileInfo, getStatusAPI, savePhotoAPI, saveProfileAPI, updateStatusAPI} from "../dal/api";
import {reset, stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const ADD_POST = "ADD-POST"
const SET_PROFILE = "SET_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO_DONE = "profile/SAVE_PHOTO_DONE"
const SET_PHOTO_LOADING = "profile/SET_PHOTO_LOADING"



type profileInfoType = {
    id: number
    email: string
    login: string
}

export type initialStateType = {
    postData: Array<postDataType>
    profileInfo: null | Array<profileInfoType>
    profileInfoLoading: null | boolean
    status: string
    photoLoading: boolean

}

type postDataType = {
    id: null | number
    author_image: null | string
    author: null | string
    text: null | string
    date: null | string
    like_count: null | number
}

let initialState: initialStateType = {
        postData : [
            {
                id: 6,
                author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
                author: "Stevie Folls",
                text: "ddd DAS",
                date: "1 month ago",
                like_count: 6
            },
            {
                id: 5,
                author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
                author: "Stevie Folls",
                text: "HAHA NUBB",
                date: "1 month ago",
                like_count: 5
            },
            {
                id: 4,
                author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
                author: "Stevie Folls",
                text: "Stupid monkey...",
                date: "1 month ago",
                like_count: 11
            },
            {
                id: 3,
                author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
                author: "Stevie Folls",
                text: "BLABLBLALBL",
                date: "1 month ago",
                like_count: 11
            },
            {
                id: 2,
                author_image: "https://semantic-ui.com/images/avatar/small/elliot.jpg",
                author: "Stas Jordan",
                text: ":)",
                date: "1 day ago",
                like_count: 32
            },
            {
                id: 1,
                author_image: "https://semantic-ui.com/images/avatar/small/matt.jpg",
                author: "Vanja Hodynchuk",
                text: "Very cool bro",
                date: "now",
                like_count: 1
            },
        ],
        profileInfo : null,
        profileInfoLoading: false,
        status: "",
        photoLoading: false,
    }

const profileReducer = (state=initialState, action:ActionsType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                author: "Unknown user",
                author_image: "https://image.flaticon.com/icons/png/512/37/37943.png",
                text: action.postText,
                date: "now",
                like_cout: 0,
            }
            return {...state, postData:[...state.postData, newPost]}
        }
        case SET_PROFILE: {
            return {...state, profileInfo: action.profileInfo}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            // eslint-disable-next-line
            return {...state, postData: state.postData.filter(id=> id.id != action.id)}
        }
        case SAVE_PHOTO_DONE: {
            return {...state, profileInfo: {...state.profileInfo, photos: action.file}}
        }
        case SET_PHOTO_LOADING:{
            return {...state, photoLoading: action.boolean}
        }
        default: {
            return state
        }
    }
}


type ActionsType = addPost1Type|setProfileType|setStatusType|savePhotoDoneType|deletePostType|setPhotoLoadingType

type addPost1Type = {
    type: typeof ADD_POST
    postText: string
}

type setProfileType = {
    type: typeof SET_PROFILE
    profileInfo: Array<profileInfoType>
}
type setStatusType = {
    type: typeof SET_STATUS
    status: string | null
}
type savePhotoDoneType = {
    type: typeof SAVE_PHOTO_DONE
    file: File
}
type deletePostType = {
    type: typeof DELETE_POST
    id: number
}
type setPhotoLoadingType = {
    type: typeof SET_PHOTO_LOADING
    boolean: boolean
}

/*ACTION CREATORS FOR PROFILE/POSTS*/
export const addPost1 = (postText:string):addPost1Type => ({type: ADD_POST, postText})
export const setProfile = (profileInfo: Array<profileInfoType>):setProfileType => ({type: SET_PROFILE, profileInfo})
export const setStatus = (status: string | null):setStatusType => ({type:SET_STATUS, status})
export const savePhotoDone = (file: File):savePhotoDoneType => ({type:SAVE_PHOTO_DONE, file})
export const deletePost = (id: number): deletePostType => ({type:DELETE_POST, id})
const setPhotoLoading = (boolean: boolean):setPhotoLoadingType  => ({type:SET_PHOTO_LOADING, boolean})


export const getStatus = (userId: number):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    let response = await getStatusAPI(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    let response = await  updateStatusAPI(status)
    if(response.data.resultCode === 0){
        dispatch(setStatus(status))
    }
}


export const getProfile = (userId:number):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    let response = await getProfileInfo(userId)
    dispatch(setProfile(response.data))
}

export const addPost = (postText:string):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    dispatch(addPost1(postText))
    // @ts-ignore
    dispatch(reset('postForm'))
}

export const saveProfile = (profile:any,userId:number):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    let response = await saveProfileAPI(profile)
    if(response.data.resultCode === 0){
        dispatch(getProfile(userId))
        // @ts-ignore
        dispatch(reset('profileData'))
    }else{
        // @ts-ignore
        dispatch(stopSubmit("profileData", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }

}

export const savePhoto = (file:any):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    dispatch(setPhotoLoading(true))
    let response = await savePhotoAPI(file)
    if(response.data.resultCode === 0){
        dispatch(savePhotoDone(response.data.data.photos))
        dispatch(setPhotoLoading(false))
    }
}

export default profileReducer