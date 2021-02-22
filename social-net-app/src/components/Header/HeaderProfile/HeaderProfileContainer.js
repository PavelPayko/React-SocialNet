import React from 'react'
import HeaderProfile from "./HeaderProfile";
import {connect} from "react-redux";
import {authMeTC, logoutTC} from "../../../store/authReducer";

const HeaderProfileContainer = props => {

    const logout = () => props.logoutTC()
    const login = () => props.authMeTC()


    return (
        <HeaderProfile {...props} login={login} logout={logout} profilePhoto={props.profile}/>
    )
}
const mapStateToProps = (state) => {
    return({
        isAuth: state.auth.isAuth,
        userName: state.auth.login,
        profile: state.profilePage.profile
    })
}


export default connect(mapStateToProps, {logoutTC, authMeTC})(HeaderProfileContainer)