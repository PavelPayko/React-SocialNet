import React from 'react'
import Auth from "./Auth";
import {connect} from "react-redux";
import {auth} from "../../store/authReducer";
import {authAPI} from "../../API/API";

class AuthContainer extends React.Component {
    componentDidMount() {
        this.login()
    }
    login = () => {
        authAPI.auth().then((data) => {
            if(data.resultCode === 0){
                this.props.auth(data.data)
            }else if(data.resultCode === 1){
                console.log(data.messages)
            }else{
                console.error('Auth error!')
            }
        })
    }
    render (){
        return (
            <Auth {...this.props} login={this.login}/>
        )
    }
}
const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    userName: state.auth.login
})


export default connect(mapStateToProps,{auth})(AuthContainer)