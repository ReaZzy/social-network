import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";


let store = {
    _state: {
        profilePage:{
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
            newPostText : "",
        },
        dialogsPage:{
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
        },
        navBar:{
            friendsData : [
                {id: 1 , name : "Vanja", img : "https://semantic-ui.com/images/avatar/small/matt.jpg" },
                {id: 2 , name : "Бараьан", img : "https://semantic-ui.com/images/avatar/small/elliot.jpg"},
                {id: 3 , name : "Bro Bann", img : "https://semantic-ui.com/images/avatar/small/stevie.jpg"},
            ]
        }
    },
    _rerender() {},
    getState(){
        return this._state
    },
    subscribe (observer){ this._rerender = observer},

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navbar = navbarReducer(this._state.navBar, action)
        this._rerender(this._state)
    },
}

export default store

