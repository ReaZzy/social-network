import React from "react";
import s from "./Message.module.css"

const Message = (props) => {
    return(
        <div className={s.yes}>
        <div className={s.messages}>

            <img className={s.img} src ={props.img} alt='' />
            <span className={s.mes }>{props.message}</span>

        </div>
        </div>
    )
}

export default Message;