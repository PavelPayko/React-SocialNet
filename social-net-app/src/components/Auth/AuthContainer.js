import React from 'react'
import Auth from "./Auth";
import {connect} from "react-redux";
import {logoutTC} from "../../store/authReducer";

class AuthContainer extends React.Component {
    componentDidMount() {
    }
    logout = () => this.props.logoutTC()
    render (){
        return (
            <Auth {...this.props} login={this.login} logout={this.logout}/>
        )
    }
}
const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    userName: state.auth.login
})


export default connect(mapStateToProps,{logoutTC})(AuthContainer)