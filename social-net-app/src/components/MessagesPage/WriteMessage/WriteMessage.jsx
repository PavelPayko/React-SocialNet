import React from 'react'
import classes from './WriteMessage.module.css'

function WriteMessage(props) {

    return (
        <div className={classes.wrapper}>
            <input type="text"
                   value={props.messageInputText}
                   onChange={props.newMessageValue}
                   ref={props.inputEl}
                   className={classes.text}
            />
            <div className={classes.controls}>
                <span>write new message</span>
                <button onClick={props.messageSend}>send</button>
            </div>
        </div>
    )
}
export default WriteMessage