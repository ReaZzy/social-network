import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialogs/Dialog";
import Message from "./Messages/Message";
import SendMessageForm from "./sendMessageForm";
import Preloader from "../common/Preloader/Preloader";

const Dialogs = (props) => {
    let userId = props.match.params.userId
    let dialogsElements = props.dialogs.map(dialog => <Dialog id = {dialog.id} userName ={dialog.userName} photos = {dialog.photos.small}
                                                              getMessagesList ={props.getMessagesList} messages = {props.messages}/>)
    let messagesElements = props.messages.map(message => <Message getMessagesList ={props.getMessagesList} deleteMessage={props.deleteMessage}
                                                                  userId = {userId} viewed = {message.viewed}
        message = {message.body} key = {message.id} id={message.id} />)

    const onSubmit = (formData) =>{
        props.sendMessage(userId, formData.message)
        props.getMessagesList(userId)
        props.getMessagesList(userId)
    }


    return (
        <div className={s.content }>
            <div className={s.dialogs + "unselectable"}>
                <div className={s.title }>Dialogs</div>
                <div className={s.span}>{ props.dialogsLoading ? <Preloader/> : dialogsElements }</div>
            </div>

            <div className={s.messages}>
                <div className={s.messag}>
                { props.messagesLoading? <Preloader/> : messagesElements }</div>
                <div className={s.but}>

                    <SendMessageForm onSubmit ={onSubmit}/>

                </div>
            </div>
        </div>
    );
}

export default Dialogs;