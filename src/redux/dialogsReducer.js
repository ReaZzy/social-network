const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE = "UPDATE-MESSAGE"

let initialState = {
    dialogsData : [
        {id: 1 , name : "Vanja", img : "https://semantic-ui.com/images/avatar/small/matt.jpg" },
        {id: 2 , name : "Бараьан", img : "https://semantic-ui.com/images/avatar/small/elliot.jpg"},
        {id: 3 , name : "Bro Bann", img : "https://semantic-ui.com/images/avatar/small/matt.jpg"},
        {id: 4 , name : "Зеленський", img : "https://semantic-ui.com/images/avatar/small/elliot.jpg"},
        {id: 5 , name : "Стас", img : "https://semantic-ui.com/images/avatar/small/matt.jpg"},
        {id: 6 , name : "Anonym", img : "https://semantic-ui.com/images/avatar/small/matt.jpg"},
        {id: 7 , name : "Хто я", img : "https://semantic-ui.com/images/avatar/small/stevie.jpg"},
        {id: 1 , name : "Vanja", img : "https://semantic-ui.com/images/avatar/small/matt.jpg" },
        {id: 2 , name : "Бараьан", img : "https://semantic-ui.com/images/avatar/small/elliot.jpg"},
        {id: 3 , name : "Bro Bann", img : "https://semantic-ui.com/images/avatar/small/matt.jpg"},
        {id: 4 , name : "Зеленський", img : "https://semantic-ui.com/images/avatar/small/elliot.jpg"},
        {id: 5 , name : "Стас", img : "https://semantic-ui.com/images/avatar/small/matt.jpg"},
        {id: 6 , name : "Anonym", img : "https://semantic-ui.com/images/avatar/small/matt.jpg"},
        {id: 7 , name : "Хто я", img : "https://semantic-ui.com/images/avatar/small/stevie.jpg"},
        {id: 1 , name : "Vanja", img : "https://semantic-ui.com/images/avatar/small/matt.jpg" },
        {id: 2 , name : "Бараьан", img : "https://semantic-ui.com/images/avatar/small/elliot.jpg"},
        {id: 3 , name : "Bro Bann", img : "https://semantic-ui.com/images/avatar/small/matt.jpg"},
        {id: 4 , name : "Зеленський", img : "https://semantic-ui.com/images/avatar/small/elliot.jpg"},
        {id: 5 , name : "Стас", img : "https://semantic-ui.com/images/avatar/small/matt.jpg"},
        {id: 6 , name : "Anonym", img : "https://semantic-ui.com/images/avatar/small/matt.jpg"},
        {id: 7 , name : "Хто я", img : "https://semantic-ui.com/images/avatar/small/stevie.jpg"},
        {id: 1 , name : "Vanja", img : "https://semantic-ui.com/images/avatar/small/matt.jpg" },
        {id: 2 , name : "Бараьан", img : "https://semantic-ui.com/images/avatar/small/elliot.jpg"},
        {id: 3 , name : "Bro Bann", img : "https://semantic-ui.com/images/avatar/small/matt.jpg"},
        {id: 4 , name : "Зеленський", img : "https://semantic-ui.com/images/avatar/small/elliot.jpg"},
        {id: 5 , name : "Стас", img : "https://semantic-ui.com/images/avatar/small/matt.jpg"},
        {id: 6 , name : "Anonym", img : "https://semantic-ui.com/images/avatar/small/matt.jpg"},
        {id: 7 , name : "Хто я", img : "https://semantic-ui.com/images/avatar/small/stevie.jpg"},


    ],
        messageData : [
        {id: 1 , message : "LOLOL", img : "https://semantic-ui.com/images/avatar/small/elliot.jpg", my: "yes"},
        {id: 2 , message : "WTAHELL WTAHELLWTAHELL WTAHELL WTAHELL WTAHELLWTAHELL WTAHELL WTAHELL ", img : "https://semantic-ui.com/images/avatar/small/matt.jpg", my: "no"},
        {id: 3 , message : "АУ", img : "https://semantic-ui.com/images/avatar/small/elliot.jpg", my: "yes"},
        {id: 4 , message : "АУАУауау", img : "https://semantic-ui.com/images/avatar/small/matt.jpg", my: "no"},
        {id: 5 , message : "АУау", img : "https://semantic-ui.com/images/avatar/small/matt.jpg", my: "no"},
        {id: 6 , message : "Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi Hi ", img : "https://semantic-ui.com/images/avatar/small/elliot.jpg", my: "yes"},
    ],
        newMessageText: "",
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 2 ,
                message : state.newMessageText,
                img : "https://semantic-ui.com/images/avatar/small/elliot.jpg",
                my: "yes",
            }
            let statecopy = {...state,
                messageData:[...state.messageData],
                newMessageText: ""}

            statecopy.messageData.splice(0, 0, newMessage)
            return statecopy

        case UPDATE_MESSAGE:
            return {...state, newMessageText:action.newMText}
        default:
            return state
    }
}

/*ACTION CREATORS FOR DIALOGS/MESSAGES*/
export const sendMessage =()=>({type: ADD_MESSAGE})
export const onMessageChange =(text)=>({type:UPDATE_MESSAGE, newMText: text})


export default dialogsReducer