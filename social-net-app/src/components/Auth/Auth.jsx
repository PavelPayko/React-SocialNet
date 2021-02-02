import React from 'react'
import classes from './Auth.module.css'
import avatar from '../../img/avatar.jpg'
import {NavLink} from "react-router-dom";

const Auth = (props) => {
    return (
        <div className={classes.profileName}>
            {props.isAuth
                ? <div>
                    <span>{props.userName}</span>
                    <button onClick={props.logout}>log out</button>
                </div>
                : <div>
                    <NavLink to='/login'>login</NavLink>
                </div>
            }
            <img src={avatar} alt="avatar" className={classes.avatar}/>
        </div>
    )
}

export default Auth