import React from 'react'
import classes from './ContentBlock.module.css'

const ContentBlock = (props) => {
    return (
        <div>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

export default ContentBlock