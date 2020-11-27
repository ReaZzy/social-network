// import {setUser} from "./authReducer";
//
// const INITIALIZE = "INITIALIZE"
// let initialState = {
//     initialized: false,
// }
// const appReducer = (state=initialState, action) =>{
//     switch (action.type) {
//         case INITIALIZE:
//
//             return {...state, initialized: true}
//         default:
//             return state
//     }
// }
//
// export const initialize = () => ({type:INITIALIZE})
//
// export const get_initialize = () => (dispatch) =>{
//     let promise = setUser()
//     Promise.all([promise]).then( () => {
//         debugger
//             dispatch(initialize())
//     })
// }
//
// export default appReducer
