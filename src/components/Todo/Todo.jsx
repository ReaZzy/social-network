import * as React from "react";
import TodoForm from "./Todoform";
import s from "./todo.module.css"
import {useEffect, useState} from "react";

const Todo = (props) => {
    let [todos, setTodos] = useState([])

    const setCompleted = (id) =>{
        setTodos(todos.map(todo=>{
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        }))
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => setTodos(todos))
    }, [])

    const removeTodo = (id) =>{
        setTodos( todos.filter(todo => todo.id !== id) )
    }

    let onSubmit = (formData) => {
        setTodos(todos.concat([{id: todos.length + 1, completed: false, title : formData.todoItem, }]))
        formData.todoItem = ""
        console.log(todos)
    }
    return (
        <div>
            <h1>TODO LIST</h1>
            <div>
                <TodoForm {...props} onSubmit = {onSubmit}/>
                <ul className={s.ul}>
                {
                    todos.map((item, index) => <li className={item.completed? s.done : ""}>
                        <div className={s.todoItem}>
                            <span >
                            <input type={"checkbox"} checked={item.completed} onChange={() => {setCompleted(item.id)}} />
                                &nbsp;
                            <strong className={s.id}>{index+1}</strong>
                            {item.title}
                            </span>
                            <button className={s.butCancel} onClick={() => removeTodo(item.id)}>&times;</button>
                        </div>
                        </li>
                    )
                }
                </ul>
            </div>

        </div>
    )
}


export default Todo