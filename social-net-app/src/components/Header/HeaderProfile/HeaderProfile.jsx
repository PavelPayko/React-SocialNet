import React from 'react'
import classes from './HeaderProfile.module.css'
import avatar from '../../../img/avatar.jpg'
import {NavLink} from "react-router-dom";
import Button from "../../commonComponents/Button/Button";

const HeaderProfile = (props) => {

    return (
        <div className={classes.profileName}>
            {props.userName
                ? <div>
                    <span className={classes.name}>{props.userName}</span>
                    {props.isAuth
                        ? <Button onClick={props.logout} size='small' title='log out' />
                        : <Button onClick={props.login} size='small' title='log in' />
                    }
                </div>
                : <NavLink to='/login'>login</NavLink>
            }
            {props.profile.photos
                ? <NavLink to='/profile'><img src={props.profile.photos.small} alt="avatar" className={classes.avatar}/></NavLink>
                : <img src={avatar} alt="avatar" className={classes.avatar}/>
            }
        </div>
    )
}

export default HeaderProfile