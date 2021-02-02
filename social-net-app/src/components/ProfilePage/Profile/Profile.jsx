import React from 'react'
import classes from './Profile.module.css'
import avatar from '../../../img/avatar.jpg'
import Status from "./Status/Status";

function Profile(props) {
    let imgSrc= avatar
    if(props.profile.photos && props.profile.photos.small){
    imgSrc = props.profile.photos.small
    }
    return (
        <div className={classes.profile}>
            <img src={imgSrc} alt="avatar" className={classes.profileAvatar}/>
            <div className={classes.profileName}>{props.profile.fullName}</div>
            <Status status={props.status} setStatus={props.setStatus}/>
        </div>
    )
}

export default Profile