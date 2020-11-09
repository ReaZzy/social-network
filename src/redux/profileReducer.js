const ADD_POST = "ADD-POST"
const DISCARD = "DISCARD"
const UPDATE_NEW_POST = "UPDATE-NEW-POST"
const SET_PROFILE = "SET_PROFILE"

let initialState = {
        postData : [
            {
                id: "1",
                author_image: "https://semantic-ui.com/images/avatar/small/matt.jpg",
                author: "Vanja Hodynchuk",
                text: "Very cool bro",
                date: "now",
                like_count: "1"
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
                id: "3",
                author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
                author: "Stevie Folls",
                text: "BLABLBLALBL",
                date: "1 month ago",
                like_count: "11"
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
                id: "5",
                author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
                author: "Stevie Folls",
                text: "HAHA NUBB",
                date: "1 month ago",
                like_count: "5"
            },
            {
                id: "5",
                author_image: "https://semantic-ui.com/images/avatar/small/stevie.jpg",
                author: "Stevie Folls",
                text: "ddd DAS",
                date: "1 month ago",
                like_count: "6"
            },
        ],
        profileInfo : null,
        newPostText : "",
    }

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                author: "Unknown user",
                author_image: "https://image.flaticon.com/icons/png/512/37/37943.png",
                text: state.newPostText,
                date: "now",
                like_cout: 0,
            }
            let statecopy = {...state, postData:[...state.postData], newPostText: ""}
            statecopy.postData.splice(0, 0, newPost)
            return statecopy
        }
        case DISCARD: {
            return {...state, newPostText: ""}
        }
        case UPDATE_NEW_POST: {
            return {...state, newPostText:action.newText}
        }
        case SET_PROFILE: {
            return {...state, profileInfo: action.profileInfo}
        }
        default: {
            return state
        }
    }
}


/*ACTION CREATORS FOR PROFILE/POSTS*/
export const addPost =()=> ({type: ADD_POST})
export const discard =()=> ({type: DISCARD})
export const onPostChange =(text)=> ({type: UPDATE_NEW_POST, newText: text})
export const setProfile = (profileInfo) => ({type: SET_PROFILE, profileInfo})

export default profileReducer