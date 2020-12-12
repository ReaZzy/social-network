import {Field, reduxForm} from "redux-form";
import React from "react";
import {TextareaTodo} from "../common/Textarea";
import {maxLengthValidator, minLengthValidator, required} from "../../addons/validators/validators";
import s from "./todo.module.css"

let minLength1 = minLengthValidator(1)
let maxLength300 = maxLengthValidator(300)

type PropsTypes = {
    handleSubmit: any
}

const Todoform:React.FC<PropsTypes> = ({handleSubmit}) =>{
    return(
        <form onSubmit={handleSubmit}>
            <Field component={TextareaTodo} name = "todoItem" validate = {[required, minLength1, maxLength300]} />
            <div>
                <button className={s.button}>Save</button>
            </div>
        </form>
    )
}
const TodoForm =reduxForm({form: "todo"})(Todoform)
export default TodoForm


