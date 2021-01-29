import React from 'react'
import classes from './Profile.module.css'
import avatar from '../../../img/avatar.jpg'
function Profile(props) {
    let imgSrc = (props.profile.photos ? props.profile.photos.small : avatar)
    return (
      <div className={classes.profile}>
        <img src={imgSrc} alt="avatar" className={classes.profileAvatar} />
        <div className={classes.profileName}>{props.profile.fullName}</div>
      </div>
  )
}
export default Profile