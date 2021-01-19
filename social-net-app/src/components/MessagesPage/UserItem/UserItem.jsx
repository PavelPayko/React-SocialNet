import React from 'react'
import classes from './UserItem.module.css'
import avatar from '../../../img/avatar.jpg'
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    return (
        <div className={classes.wrapper}>
            <NavLink to={`/messages/${props.id}`}>
                <img src={avatar} alt="avatar" className={classes.avatar}/>
                <div className={classes.name}>
                    <p>{props.name}</p>
                    <p>Some description</p>
                </div>
            </NavLink>
        </div>
    )}
export default UserItem