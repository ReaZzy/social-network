import * as React from "react";
import TodoForm from "./Todoform";
import {addTodo, setCompleted} from "../../redux/todoReducer";
import {connect} from "react-redux";
import {getTodoItems} from "../../redux/todoselecctor";
import s from "./todo.module.css"

const setCompletedTodo = (id) => {
    setCompleted(id)
}

const styles = {
    input: {
        marginRight: "0px",
    },
    id: {
        marginRight: "10px",
    },
}

const Todo = (props) => {
    let onSubmit = (formData) => {
        props.addTodo(formData.todoItem, false, props.todoItems.length + 1)
        formData.todoItem = ""
    }

    return (
        <div>
            <h1>TODO LIST</h1>
            <div>
                <TodoForm {...props} onSubmit = {onSubmit}/>
                {
                    [...props.todoItems].reverse().map(item => <>
                        <div className={s.todoItem}>
                            <span>
                            <input type={"checkbox"} style = {styles.input} onChange={()=>console.log(item.id)}/>
                            <button onClick={setCompletedTodo(item.id)}>123</button>
                            &nbsp;
                            <strong style={styles.id}>{item.id}</strong>
                            {item.text}
                            </span>
                            <button>&times;</button>
                        </div>

                        </>
                    )
                }
            </div>

        </div>
    )
}

let mapStateToProps = (state) => ({
    todoItems: getTodoItems(state),
})
export default connect(mapStateToProps, {addTodo})(Todo)