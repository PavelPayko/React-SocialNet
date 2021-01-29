import React from 'react'
import {messageInputValue, sendMessage} from "../../../store/messagesPageReducer";
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
        messageSend: () => dispatch(sendMessage()),
        newMessageValue: (text) => dispatch(messageInputValue(text))
    }
}
const ContainerWriteMessage = connect(mapStateToProps, mapDispatchToProps)(WriteMessage)

export default ContainerWriteMessage