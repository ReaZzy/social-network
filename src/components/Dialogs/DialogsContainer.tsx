import {deleteMessage, getDialogsPage, getMessagesList, sendMessage} from "../../redux/dialogsReducer";
import Dialogs, {messagesType, dialogsType} from "./Dialogs";
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

type MapStateToPropsType = {
    messages: Array<messagesType>
    dialogs: Array<dialogsType>
    userId: number
    dialogsLoading: boolean
    messagesLoading: boolean
    currentUserId: number
}

type MapDispatchToPropsType = {
    sendMessage: (userId:number, message:string) => void
    getDialogsPage: () => void
    getMessagesList: (userId:number) => void
    deleteMessage: (id: string) => void
}

type OwnPropsType = {
    match: any
}

type dialogsContainerType = MapStateToPropsType&MapDispatchToPropsType&OwnPropsType

class DialogsContainer extends PureComponent<dialogsContainerType>{
    reGetDialogs = () =>{
        let userId = this.props.match.params.userId
        if (userId){
            this.props.getMessagesList(userId)
        }
        if (this.props.dialogs.length < 1) {
            this.props.getDialogsPage()
        }
    }

    componentDidMount() {
        this.reGetDialogs()
    }
    componentDidUpdate(prevProps:any, prevState:any, snapshot:any) {
        if(this.props.messages.length !== prevProps.messages.length ) {
            this.reGetDialogs()
        }
    }

    render() {
        return <Dialogs {...this.props} messages = {this.props.messages} dialogs = {this.props.dialogs} dialogsLoading ={this.props.dialogsLoading}
                        getMessagesList = {this.props.getMessagesList} messagesLoading={this.props.messagesLoading}
                        deleteMessage = {this.props.deleteMessage} currentUserId = {this.props.currentUserId}
        />
    }
}

let mapStateToProps = (state:any) => {
    return {
        messages: state.dialogsPage.messageData,
        dialogs: state.dialogsPage.dialogsData,
        dialogsLoading: state.dialogsPage.dialogsLoading,
        messagesLoading: state.dialogsPage.messagesLoading,
        currentUserId : state.auth.id,
    }
}

export default compose(
    connect(mapStateToProps,
        {sendMessage, getDialogsPage, getMessagesList, deleteMessage}),
    withRouter,
    withAuthRedirect,
)(DialogsContainer)