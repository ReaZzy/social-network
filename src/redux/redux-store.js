import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import navbarReducer from "./navbarReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import appReducer from "./appReducer";
import todoReducer from "./todoReducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        navBar: navbarReducer,
        users: usersReducer,
        auth: authReducer,
        app: appReducer,
        todo: todoReducer,
        form: formReducer,
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store