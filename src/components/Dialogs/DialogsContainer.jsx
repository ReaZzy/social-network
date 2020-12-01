import {getDialogsPage, getMessagesList, sendMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class DialogsContainer extends PureComponent{
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
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.messages.values !== prevProps.messages.values ) {
            this.reGetDialogs()
        }
    }

    render() {
        return <Dialogs {...this.props} messages = {this.props.messages} dialogs = {this.props.dialogs} dialogsLoading ={this.props.dialogsLoading}
                        getMessagesList = {this.props.getMessagesList} userId = {this.props.userId} messageLoading={this.props.messageLoading}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messageData,
        dialogs: state.dialogsPage.dialogsData,
        dialogsLoading: state.dialogsPage.dialogsLoading,
        messageLoading: state.dialogsPage.messageLoading,
    }
}

export default compose(
    connect(mapStateToProps,{sendMessage, getDialogsPage, getMessagesList}),
    withRouter,
    withAuthRedirect,
)(DialogsContainer)