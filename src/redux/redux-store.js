import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import navbarReducer from "./navbarReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        navBar: navbarReducer,
        users: usersReducer,
        auth: authReducer,
    }
)

let store = createStore(reducers)
window.store = store

export default store