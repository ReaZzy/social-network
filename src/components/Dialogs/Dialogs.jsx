import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialogs/Dialog";
import Message from "./Messages/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <Dialog name = {dialog.name} id = {dialog.id} img = {dialog.img}/>)
    let messagesElements = props.messages.map(message => <Message message = {message.message} img={message.img} my = {message.my}/>)

    let sendMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.onMessageChange(text)
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
                    <textarea rows="3" cols = "50" className={s.textarea} onChange={onMessageChange} value = {props.newMText}/>
                    <span className={s.butt}><button className={s.button} onClick={ sendMessage }>Send</button></span>

                </div>
            </div>
        </div>
    );
}

export default Dialogs;