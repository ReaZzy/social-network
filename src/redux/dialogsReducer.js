import {getDialogsAPI, getMessagesAPI, sendMessageAPI, startDialogAPI} from "../dal/api";
import {reset} from "redux-form"

const DIALOGS_LOADING = "DIALOGS_LOADING"
const GET_DIALOGS = "GET_DIALOGS"
const GET_MESSAGES = "GET_MESSAGES"

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
        default:
            return state
    }
}

/*ACTION CREATORS FOR DIALOGS/MESSAGES*/

export const getDialogs = (dialogs) => ({type: GET_DIALOGS, dialogs})
export const dialogsLoading = (boolean) =>({type:DIALOGS_LOADING, boolean})
export const getMessages = (messageList) => ({type:GET_MESSAGES , messageList})

export const getDialogsPage = () => async (dispatch) => {
    dispatch(dialogsLoading(true))
    let response = await getDialogsAPI()
    dispatch(getDialogs(response.data))
    dispatch(dialogsLoading(false))
}

export const startDialog = (userId) => async (dispatch) => {
    await startDialogAPI(userId)
}

export const getMessagesList = (userId) => async (dispatch) =>{
    let response = await  getMessagesAPI(userId)
    dispatch(getMessages(response.data.items))
}
export const sendMessage = (userId, body) => async (dispatch) =>{
    await sendMessageAPI(userId, body)
    dispatch(reset("sendMessage"))
}

export default dialogsReducer