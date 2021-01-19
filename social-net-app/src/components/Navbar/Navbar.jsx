import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
            <nav className={classes.navbar}>
                <ul className={classes.navbarList}>
                    <li className={classes.navbarListItem}><NavLink to="/profile" className={classes.navbarLink} activeClassName={classes.active}>Profile</NavLink></li>
                    <li className={classes.navbarListItem}><NavLink to="/messages" className={classes.navbarLink} activeClassName={classes.active}>Messages</NavLink></li>
                    <li className={classes.navbarListItem}><NavLink to="/news" className={classes.navbarLink} activeClassName={classes.active}>News</NavLink></li>
                    <li className={classes.navbarListItem}><NavLink to="/music" className={classes.navbarLink} activeClassName={classes.active}>Music</NavLink></li>
                    <li className={classes.navbarListItem}><NavLink to="/settings" className={classes.navbarLink} activeClassName={classes.active}>Settings</NavLink></li>
                </ul>
            </nav>
    )
}

export default Navbar
