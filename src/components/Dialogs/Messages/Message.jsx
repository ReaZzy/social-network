import React from "react";
import s from "./Message.module.css"
import deletePng from "./../../../media/images/delete.png"

const Message = (props) => {
    const deleteMessage =(userId) =>{
        props.deleteMessage(userId)
        props.getMessagesList(props.userId)
        props.getMessagesList(props.userId)
    }

    return(
        <>
        <div className={s.yes}>

        <div className={s.messages}>
            <img className={s.img} src ={props.img} alt='' />
            <span onClick={()=>{deleteMessage(props.id)}} ><img className={s.dots} src={deletePng} alt = ""/></span>
            {!props.viewed && <span className={s.viewed}>.</span>}
            <span className={s.mes }>{props.message}</span>

        </div>

        </div>
            </>
    )
}

export default Message;