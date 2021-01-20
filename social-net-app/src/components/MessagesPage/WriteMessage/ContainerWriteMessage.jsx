import React from 'react'
import {messageInputValueActionCreator, sendMessageActionCreator} from "../../../store/messagesPageReducer";
import WriteMessage from "./WriteMessage";

function ContainerWriteMessage(props) {

    let inputEl = React.createRef();

    let messageSend = () => props.dispatch(sendMessageActionCreator())
    let newMessageValue = () => props.dispatch(messageInputValueActionCreator(inputEl.current.value))
    return (
        <WriteMessage
            inputEl = {inputEl}
            messageInputText={props.state.messageInputText}
            messageSend = {messageSend}
            newMessageValue = {newMessageValue}
        />
    )
}
export default ContainerWriteMessage