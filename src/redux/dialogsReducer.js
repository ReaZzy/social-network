import {getDialogsAPI, getMessagesAPI, sendMessageAPI, startDialogAPI} from "../dal/api";
import {reset} from "redux-form"

const DIALOGS_LOADING = "DIALOGS_LOADING"
const GET_DIALOGS = "GET_DIALOGS"
const GET_MESSAGES = "GET_MESSAGES"
const CLEAR_MESSAGES = "CLEAR_MESSAGES"

let initialState = {
    dialogsData : [],
    messageData : [],
    dialogsLoading: true,
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DIALOGS:
            return {...state, dialogsData: action.dialogs}
        case DIALOGS_LOADING:
            return {...state, dialogsLoading: action.boolean}
        case GET_MESSAGES:
            return {...state, messageData: action.messageList.reverse()}
        case CLEAR_MESSAGES:
            return {...state, messageData: []}
        default:
            return state
    }
}

/*ACTION CREATORS FOR DIALOGS/MESSAGES*/

export const getDialogs = (dialogs) => ({type: GET_DIALOGS, dialogs})
export const dialogsLoading = (boolean) =>({type:DIALOGS_LOADING, boolean})
export const getMessages = (messageList) => ({type:GET_MESSAGES , messageList})
const clearMessages = () => ({type:CLEAR_MESSAGES})

export const getDialogsPage = () => (dispatch) => {
    dispatch(dialogsLoading(true))
    getDialogsAPI().then(response => {
        dispatch(getDialogs(response.data))
        dispatch(dialogsLoading(false))

    })
}

export const startDialog = (userId) => (dispatch) => {
    startDialogAPI(userId).then(response =>{
    })
}

export const getMessagesList = (userId) => (dispatch) =>{
    getMessagesAPI(userId).then(response =>{
        dispatch(clearMessages())
        dispatch(getMessages(response.data.items))
    })
}
export const sendMessage = (userId, body) => (dispatch) =>{
    sendMessageAPI(userId, body).then(response =>{
        dispatch(reset("sendMessage"))
    })
}

export default dialogsReducer