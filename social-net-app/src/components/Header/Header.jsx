import React from 'react'
import classes from './Header.module.css'
import logo from '../../img/logo.svg'
import AuthContainer from "./HeaderProfile/HeaderProfileContainer";

function Header () {
    return (
        <header className={classes.header}>
        <img src={logo} className={classes.headerLogo} alt="logo" />
        <div className={classes.headerLogoText}>
          <p>React</p>
          <p>SocialNet</p>
        </div>
            <AuthContainer />
      </header>
    )
}
export default Header