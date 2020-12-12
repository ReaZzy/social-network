import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialogs/Dialog";
import Message from "./Messages/Message";
import SendMessageForm from "./sendMessageForm";
import Preloader from "../common/Preloader/Preloader";

export type messagesType ={
    viewed: boolean
    senderId: number
    body: string
    id: string
}

export type dialogsType = {
    id: number
    userName: string
    photos:{
        small:string
        large:string
    }
}

type PropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    deleteMessage: (id: string) => void
    currentUserId: number
    sendMessage: (userId:number, message:string) => void
    getMessagesList: (userId:number) => void
    onSubmit?: (message:string) => void
    dialogsLoading: boolean
    messagesLoading: boolean
    match:any
}

const Dialogs:React.FC<PropsType> = ({dialogs, messages ,deleteMessage,currentUserId,sendMessage,getMessagesList,dialogsLoading,messagesLoading, ...props}) => {
    let userId = props.match.params.userId
    let dialogsElements = dialogs.map(dialog => <Dialog id = {dialog.id} userName ={dialog.userName} photos = {dialog.photos.small} key = {dialog.id}
        // @ts-ignore
                                                        getMessagesList ={getMessagesList} messages = {messages}/>)
    let messagesElements = messages.map(message => <Message getMessagesList ={getMessagesList} deleteMessage={deleteMessage}
                                                            userId = {userId} viewed = {message.viewed}
                                                            senderId = {message.senderId} currentUserId = {currentUserId}
        // @ts-ignore
                                                            message= {message.body} key = {message.id} id={message.id} />)

    const onSubmit = (formData:any) =>{
        sendMessage(userId, formData.message)
        getMessagesList(userId)
        getMessagesList(userId)
    }

    return (
        <div className={s.content }>
            <div className={s.dialogs + "unselectable"}>
                <div className={s.title }>Dialogs</div>
                <div className={s.span}>{ dialogsLoading ? <Preloader/> : dialogsElements }</div>
            </div>

            <div className={s.messages}>
                <div className={s.messag}>
                { messagesLoading? <Preloader/> : messagesElements }</div>
                <div className={s.but}>
                    <SendMessageForm onSubmit ={onSubmit}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;