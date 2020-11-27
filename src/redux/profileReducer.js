import {getProfileInfo, getStatusAPI, updateStatusAPI} from "../dal/api";
import {reset} from "redux-form";

const ADD_POST = "ADD-POST"
const SET_PROFILE = "SET_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
        postData : [
            {
                id: "5",
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
        status: "",
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
        default: {
            return state
        }
    }
}


/*ACTION CREATORS FOR PROFILE/POSTS*/
export const addPost1 =(postText)=> ({type: ADD_POST, postText})
export const setProfile = (profileInfo) => ({type: SET_PROFILE, profileInfo})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getStatus = (userId) => (dispatch) =>{
    getStatusAPI(userId).then(response =>{
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch) =>{
    updateStatusAPI(status).then(response =>{
        if(response.data.resultCode === 0){
            dispatch(setStatus(status))
        }
    })
}


export const getProfile = (userId) => (dispatch) =>{
    getProfileInfo(userId).then(response =>{
        dispatch(setProfile(response.data))
    })
}

export const addPost = (postText) => (dispatch) =>{
    dispatch(addPost1(postText))
    dispatch(reset('postForm'))
}

export default profileReducer