import React from 'react'
import classes from './MessagesPage.module.css'
import Message from "./Message/Message";
import UserItem from "./UserItem/UserItem";
import ContainerWriteMessage from "./WriteMessage/ContainerWriteMessage";
import StoreContext from "../../StoreContext";

const MessagesPage = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    const messages = store.getState().messagesPage.messageData.map(message => <Message name={message.name} text={message.text}/> )
                    const dialogs = store.getState().messagesPage.dialogsData.map(dialog => <UserItem id={dialog.id} name={dialog.name}/>)

                    return (
                        <div className={classes.wrapper}>
                            <div className ={classes.messages}>
                                { messages }
                                <ContainerWriteMessage />
                            </div>
                            <div className={classes.dialogs}>
                                <h3>Диалоги</h3>
                                { dialogs }
                            </div>
                        </div>
                    )
                }
            }
        </StoreContext.Consumer>

    )
}
export default MessagesPage