import React from 'react'
import classes from './MessagesPage.module.css'
import Message from "./Message/Message";
import UserItem from "./UserItem/UserItem";
import ContainerWriteMessage from "./WriteMessage/ContainerWriteMessage";

const MessagesPage = (props) => {

    const messages = props.messagesPage.messageData.map( message => <Message name={message.name} text={message.text}/> )
    const dialogs = props.messagesPage.dialogsData.map(dialog => <UserItem id={dialog.id} name={dialog.name}/>)

    return (
        <div className={classes.wrapper}>
            <div className ={classes.messages}>
                { messages }
                <ContainerWriteMessage
                    state={props.messagesPage}
                    dispatch = {props.dispatch}

                />
            </div>
            <div className={classes.dialogs}>
                <h3>Диалоги</h3>
                { dialogs }
            </div>
        </div>
    )
}
export default MessagesPage