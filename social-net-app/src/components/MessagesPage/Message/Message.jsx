import React from 'react'
import classes from './Message.module.css'
import avatar from '../../../img/avatar.jpg'

const Message = (props) => {
    return (
        <div className={classes.message + (props.id === props.myId ? ` ${classes.myMessage}` : '')}>
            <div className={classes.title}>
                <img src={avatar} alt="avatar" className={classes.avatar} />
                <span className={classes.name}>{props.name}</span>
            </div>
            <p className={classes.content}>
                {props.text}
            </p>
        </div>

    );
}
export default Message