import React from 'react'
import classes from './WriteMessage.module.css'
import {messageInputValueActionCreator, sendMessageActionCreator} from "../../../store/messagesPageReducer";

function WriteMessage(props) {

    let inputEl = React.createRef();

    let messageSend = () => {

        props.dispatch(sendMessageActionCreator())
    }
    let newMessageValue = () => {
        let message = inputEl.current.value
        props.dispatch(messageInputValueActionCreator(message))

    }
    return (
        <div className={classes.wrapper}>
            <input type="text" value={props.messageInputText} onChange={newMessageValue} ref={inputEl} className={classes.text} />
            <div className={classes.controls}>
                <span>write new message</span>
                <button onClick={messageSend}>send</button>
            </div>
        </div>
    )
}
export default WriteMessage