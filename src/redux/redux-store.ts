import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import navbarReducer from "./navbarReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        navBar: navbarReducer,
        users: usersReducer,
        auth: authReducer,
        form: formReducer,
    }
)

type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


// @ts-ignore
export default store