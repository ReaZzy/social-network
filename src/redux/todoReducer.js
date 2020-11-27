const ADD_TODO = "ADD_TODO"
const SET_COMPLETED = "SET_COMPLETED"

let initialState = {todoItems: []}

const todoReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TODO:
            let newTodo = {
                text: action.text,
                completed: action.completed,
                id: action.id,
            }
            return {
                ...state,
                todoItems: [...state.todoItems, newTodo]
            }
        case SET_COMPLETED:
            debugger
            if(state.todoItems.length>0){
                return {
                    ...state,
                    todoItems: state.todoItems.map(item =>{
                        if(item.id ===action.id) return {...item, completed: true}
                        return item
                    })
                }
            }
            return state
        default:
            return state
    }
}

export const addTodo = (text, completed, id) => ({type:ADD_TODO, text, completed, id})
export const setCompleted = (id) => ({type:SET_COMPLETED, id} )

export default todoReducer