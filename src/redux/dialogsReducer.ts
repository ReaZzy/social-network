import {
    deleteMessageAPI,
    getDialogsAPI,
    getMessagesAPI,
    sendMessageAPI,
    startDialogAPI
} from "../dal/api";
import {reset} from "redux-form"
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const DIALOGS_LOADING = "DIALOGS_LOADING"
const GET_DIALOGS = "GET_DIALOGS"
const GET_MESSAGES = "GET_MESSAGES"
const SET_MESSAGES_LOADING = "dialogs/SET_MESSAGES_LOADING"

let initialState = {
    dialogsData : [] as any,
    messageData : [] as any,
    dialogsLoading: true,
    messagesLoading: false,
}

export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action:ActionsType):initialStateType => {
    switch (action.type) {
        case GET_DIALOGS:
            return {...state, dialogsData: action.dialogs}
        case DIALOGS_LOADING:
            return {...state, dialogsLoading: action.boolean}
        case GET_MESSAGES:
            return {...state, messageData: action.messageList.reverse()}
        case SET_MESSAGES_LOADING:
            return {...state, messagesLoading: action.boolean}
        default:
            return state
    }
}

/*ACTION CREATORS FOR DIALOGS/MESSAGES*/

type ActionsType = getDialogsType|dialogsLoadingType|messagesLoadingType|getMessagesType

type getDialogsType = {
    type: typeof GET_DIALOGS
    dialogs: any
}
type dialogsLoadingType = {
    type: typeof DIALOGS_LOADING
    boolean: boolean
}
type messagesLoadingType = {
    type: typeof SET_MESSAGES_LOADING
    boolean: boolean
}
type getMessagesType = {
    type: typeof GET_MESSAGES
    messageList:any
}


export const getDialogs = (dialogs:any):getDialogsType => ({type: GET_DIALOGS, dialogs})
export const dialogsLoading = (boolean:boolean):dialogsLoadingType =>({type:DIALOGS_LOADING, boolean})
export const messagesLoading = (boolean:boolean):messagesLoadingType =>({type:SET_MESSAGES_LOADING, boolean})
export const getMessages = (messageList:any):getMessagesType => ({type:GET_MESSAGES , messageList})

export const getDialogsPage = ():ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    dispatch(dialogsLoading(true))
    let response = await getDialogsAPI()
    dispatch(getDialogs(response.data))
    dispatch(dialogsLoading(false))
}

export const startDialog = (userId:number):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    await startDialogAPI(userId)
}

export const getMessagesList = (userId:number):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    dispatch(messagesLoading(true))
    let response = await  getMessagesAPI(userId)
    dispatch(getMessages(response.data.items))
    dispatch(messagesLoading(false))
}
export const sendMessage = (userId:number, body:string):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    await sendMessageAPI(userId, body)
    // @ts-ignore
    dispatch(reset("sendMessage"))
}

export const deleteMessage = (messageId:string):ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) =>{
    await deleteMessageAPI(messageId)
}


export default dialogsReducer