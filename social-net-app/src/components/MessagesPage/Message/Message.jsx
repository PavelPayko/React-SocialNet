import React from 'react'
import classes from './Message.module.css'
import avatar from '../../../img/avatar.jpg'

const Message = (props) => {
    const isMyMessage = name => name === 'Гарри Поттер'
    return (
        <div className={classes.wrapper + ' ' + ( isMyMessage(props.name) ? classes.left : '')}>
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