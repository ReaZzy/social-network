import React from "react";
import s from "./Message.module.css"
import deletePng from "./../../../media/images/delete.png"
import {messagesType} from "./../Dialogs"

type PropsTypes = {
    deleteMessage: (id: string) => void
    senderId: number
    currentUserId: number
    getMessagesList: (userId: number) => void
    img?: string
    userId: number
    id: string
    viewed: boolean
    isYou?: boolean
    message: Array<messagesType>
}

const Message:React.FC<PropsTypes> = ({deleteMessage, senderId, currentUserId, getMessagesList, img, viewed, message, userId, id}) => {
    let isYou = senderId === currentUserId
    const deleteMessageOwn =(id:string, userId:number) =>{
        deleteMessage(id)
        getMessagesList(userId)
        getMessagesList(userId)
    }
    return(
        <>
        <div className={isYou
                ? s.yes
                : s.no
        }>
        <div className={s.messages}>
            <img className={s.img} src ={img} alt='' />
            <span onClick={()=>{deleteMessageOwn(id, userId)}} ><img className={s.dots} src={deletePng} alt = ""/></span>
            {!viewed && <span className={s.viewed}>.</span>}
            <span className={s.mes }>{message}</span>

        </div>
        </div>
            </>
    )
}

export default Message;