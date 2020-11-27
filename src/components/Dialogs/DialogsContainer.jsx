import {getDialogsPage, getMessagesList, sendMessage, startDialog} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import React from "react";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class DialogsContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (userId){
            this.props.startDialog(userId)
            this.props.getMessagesList()
        }
        if (this.props.dialogs.length < 1) {
            this.props.getDialogsPage()
        }

    }
    render() {
        return <Dialogs {...this.props} messages = {this.props.messages} dialogs = {this.props.dialogs} dialogsLoading ={this.props.dialogsLoading}
                        getMessagesList = {this.props.getMessagesList} userId = {this.props.userId}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messageData,
        dialogs: state.dialogsPage.dialogsData,
        dialogsLoading: state.dialogsPage.dialogsLoading,
        messagesLoading: state.dialogsPage.messagesLoading,
    }
}

export default compose(
    connect(mapStateToProps,{sendMessage, startDialog, getDialogsPage, getMessagesList}),
    withRouter,
    withAuthRedirect,
)(DialogsContainer)