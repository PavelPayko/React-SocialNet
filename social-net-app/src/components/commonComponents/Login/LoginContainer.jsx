import React from 'react'
import Login from "./Login";
import {connect} from "react-redux";
import {loginTC} from "../../../store/authReducer";

const LoginContainer = (props) => {

    let login = (data) => {
        props.loginTC(data)
    }

    return <Login login={login} isAuth={props.isAuth}/>
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})
const mapDispatchToProps = {loginTC}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
