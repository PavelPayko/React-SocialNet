import React from 'react'
import classes from './MessagesPage.module.css'
import Message from "./Message/Message";
import UserItem from "./UserItem/UserItem";
import ContainerNewMessage from "./NewMessage/ContainerNewMessage";
import ContentBlock from "../commonComponents/ContentBlock/ContentBlock";

const MessagesPage = (props) => {

    const messages = props.messageData.map(message => <Message name={message.name}
                                                               text={message.text}
                                                               id={message.id}
                                                               myId={props.myId}
    />)
    const dialogs = props.dialogsData.map(dialog => <UserItem id={dialog.id}
                                                              name={dialog.name}
    />)

    return (
        <div className={classes.wrapper}>
            <div className={classes.messages}>
                {messages}
                <ContainerNewMessage/>
            </div>
            <ContentBlock title='Diaogs'>
                <div className={classes.dialogs}>{dialogs}</div>
            </ContentBlock>
        </div>
    )
}
export default MessagesPage