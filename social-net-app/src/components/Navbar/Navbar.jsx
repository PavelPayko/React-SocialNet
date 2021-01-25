import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
            <nav className={classes.navbar}>
                <div className={classes.navbarList}>
                    <NavLink to="/profile" className={classes.navbarLink} activeClassName={classes.active}>Profile</NavLink>
                    <NavLink to="/messages" className={classes.navbarLink} activeClassName={classes.active}>Messages</NavLink>
                    <NavLink to="/users" className={classes.navbarLink} activeClassName={classes.active}>Users</NavLink>
                    <NavLink to="/news" className={classes.navbarLink} activeClassName={classes.active}>News</NavLink>
                    <NavLink to="/music" className={classes.navbarLink} activeClassName={classes.active}>Music</NavLink>
                    <NavLink to="/settings" className={classes.navbarLink} activeClassName={classes.active}>Settings</NavLink>
                </div>
            </nav>
    )
}

export default Navbar
