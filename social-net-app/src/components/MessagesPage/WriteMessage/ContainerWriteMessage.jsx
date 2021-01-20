import React from 'react'
import {messageInputValueActionCreator, sendMessageActionCreator} from "../../../store/messagesPageReducer";
import WriteMessage from "./WriteMessage";
import StoreContext from "../../../StoreContext";

function ContainerWriteMessage() {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let inputEl = React.createRef();

                    let messageSend = () => store.dispatch(sendMessageActionCreator())
                    let newMessageValue = () => store.dispatch(messageInputValueActionCreator(inputEl.current.value))

                    return ( <WriteMessage
                            inputEl = {inputEl}
                            messageInputText={store.getState().messagesPage.messageInputText}
                            messageSend = {messageSend}
                            newMessageValue = {newMessageValue}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}
export default ContainerWriteMessage