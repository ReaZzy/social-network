import {getProfileInfo, getStatusAPI, savePhotoAPI, saveProfileAPI, updateStatusAPI} from "../dal/api";
import {reset, stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST"
const SET_PROFILE = "SET_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO_DONE = "profile/SAVE_PHOTO_DONE"
const SET_PHOTO_LOADING = "profile/SET_PHOTO_LOADING"

let initialState = {
        postData : [
            {
                id: "6",
                author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
                author: "Stevie Folls",
                text: "ddd DAS",
                date: "1 month ago",
                like_count: "6"
            },
            {
                id: "5",
                author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
                author: "Stevie Folls",
                text: "HAHA NUBB",
                date: "1 month ago",
                like_count: "5"
            },
            {
                id: "4",
                author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
                author: "Stevie Folls",
                text: "Stupid monkey...",
                date: "1 month ago",
                like_count: "11"
            },
            {
                id: "3",
                author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
                author: "Stevie Folls",
                text: "BLABLBLALBL",
                date: "1 month ago",
                like_count: "11"
            },
            {
                id: "2",
                author_image: "https://semantic-ui.com/images/avatar/small/elliot.jpg",
                author: "Stas Jordan",
                text: ":)",
                date: "1 day ago",
                like_count: "32"
            },
            {
                id: "1",
                author_image: "https://semantic-ui.com/images/avatar/small/matt.jpg",
                author: "Vanja Hodynchuk",
                text: "Very cool bro",
                date: "now",
                like_count: "1"
            },
        ],
        profileInfo : null,
        profileInfoLoading: false,
        status: "",
        photoLoading: false,
    }

const profileReducer = (state=initialState, action) => {
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


/*ACTION CREATORS FOR PROFILE/POSTS*/
export const addPost1 =(postText)=> ({type: ADD_POST, postText})
export const setProfile = (profileInfo) => ({type: SET_PROFILE, profileInfo})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoDone = (file) => ({type: SAVE_PHOTO_DONE, file})
export const deletePost = (id) => ({type: DELETE_POST, id})
const setPhotoLoading = (boolean) => ({type:SET_PHOTO_LOADING, boolean})
export const getStatus = (userId) => (dispatch) =>{
    getStatusAPI(userId).then(response =>{
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) =>  async (dispatch) =>{
    let response = await  updateStatusAPI(status)
    if(response.data.resultCode === 0){
        dispatch(setStatus(status))
    }
}


export const getProfile = (userId) => async (dispatch) =>{
    let response = await getProfileInfo(userId)
    dispatch(setProfile(response.data))
}

export const addPost = (postText) =>  (dispatch) =>{
    dispatch(addPost1(postText))
    dispatch(reset('postForm'))
}

export const saveProfile = (profile,userId) =>  async (dispatch) =>{
    let response = await saveProfileAPI(profile)
    if(response.data.resultCode === 0){
        dispatch(getProfile(userId))
        dispatch(reset('profileData'))
    }else{
        dispatch(stopSubmit("profileData", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }

}

export const savePhoto = (file) => async (dispatch) =>{
    dispatch(setPhotoLoading(true))
    let response = await savePhotoAPI(file)
    if(response.data.resultCode === 0){
        dispatch(savePhotoDone(response.data.data.photos))
        dispatch(setPhotoLoading(false))
    }
}

export default profileReducer