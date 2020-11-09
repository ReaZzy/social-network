import {sendMessage, onMessageChange} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMText: state.dialogsPage.newMessageText,
        messages: state.dialogsPage.messageData,
        dialogs: state.dialogsPage.dialogsData,
    }
}

const DialogsContainer = connect(mapStateToProps,{
    sendMessage, onMessageChange,
    })(Dialogs)

export default DialogsContainer;