import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialogs/Dialog";
import Message from "./Messages/Message";
import SendMessageForm from "./sendMessageForm";
import Preloader from "../common/Preloader/Preloader";

const Dialogs = (props) => {
    let userId = props.match.params.userId

    if (props.dialogsLoading){
        return <Preloader/>
    }
    if (props.messageLoading){

        return <Preloader/>
    }
    let dialogsElements = props.dialogs.map(dialog => <Dialog id = {dialog.id} userName ={dialog.userName} getMessagesList ={props.getMessagesList} messages = {props.messages}/>)
    let messagesElements = props.messages.map(message => <Message message = {message.body} key = {message.id}/>)

    const onSubmit = (formData) =>{
        props.sendMessage(userId, formData.message)
        props.getMessagesList(userId)
    }


    return (
        <div className={s.content}>
            <div className={s.dialogs}>
                <div className={s.title}>Dialogs</div>
                <div className={s.span}>{ dialogsElements }</div>
            </div>

            <div className={s.messages}>
                <div className={s.messag}>
                { messagesElements }</div>
                <div className={s.but}>

                    <SendMessageForm onSubmit ={onSubmit}/>

                </div>
            </div>
        </div>
    );
}

export default Dialogs;