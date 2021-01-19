import React from 'react'
import classes from './Profile.module.css'
import avatar from '../../../img/avatar.jpg'
function Profile() {
  return (
      <div className={classes.profile}>
        <img src={avatar} alt="avatar" className={classes.profileAvatar} />
        <div className={classes.profileName}>User Name</div>
      </div>
  )
}
export default Profile