import React from 'react'
import classes from './Auth.module.css'
import avatar from '../../img/avatar.jpg'

const Auth = (props) => {
    console.log(props)
    return (
        <div>
                {props.isAuth
                    ? <span>{props.userName}</span>
                    : <span onClick={props.login}>login</span>
                }
            <img src={avatar} alt="avatar" className={classes.avatar}/>
        </div>
    )
}

export default Auth