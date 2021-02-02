import React from 'react'
import {connect} from "react-redux";
import {Redirect} from "react-router";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
const withAuthRedirect = (Component) => {
    class WithAuthRedirectContainer extends React.Component {
        componentDidUpdate(prevProps, prevState, snapshot) {
            // debugger
        }

        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/login'}/>
            }
            return <Component {...this.props} />
        }
    }

    return connect(mapStateToProps, {})(WithAuthRedirectContainer)
}

export default withAuthRedirect