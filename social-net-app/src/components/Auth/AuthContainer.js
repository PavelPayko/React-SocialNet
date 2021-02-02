import React from 'react'
import Auth from "./Auth";
import {connect} from "react-redux";
import {authMeTC, logoutTC} from "../../store/authReducer";

class AuthContainer extends React.Component {

    logout = () => this.props.logoutTC()
    login = () => this.props.authMeTC()

    render (){
        console.log(this.props)
        return (
            <Auth {...this.props}  login={this.login} logout={this.logout}/>
        )
    }
}
const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    userName: state.auth.login
})


export default connect(mapStateToProps,{logoutTC, authMeTC})(AuthContainer)