import React from 'react'
import {messageInputValueActionCreator, sendMessageActionCreator} from "../../../store/messagesPageReducer";
import WriteMessage from "./WriteMessage";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        inputEl: React.createRef(),
        messageInputText: state.messagesPage.messageInputText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        messageSend: () => dispatch(sendMessageActionCreator()),
        newMessageValue: (text) => dispatch(messageInputValueActionCreator(text))
    }
}
const ContainerWriteMessage = connect(mapStateToProps, mapDispatchToProps)(WriteMessage)

export default ContainerWriteMessage