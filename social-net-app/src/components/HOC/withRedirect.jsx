import React from 'react'
import Login from "../commonComponents/Login/Login";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
const withAuthRedirect = (Component) => {
    class WithAuthRedirectContainer extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Login/>
            }
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps, {})(WithAuthRedirectContainer)
}

export default withAuthRedirect