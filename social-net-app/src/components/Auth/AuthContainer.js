import React from 'react'
import Auth from "./Auth";
import axios from "axios";
import {connect} from "react-redux";
import {auth} from "../../store/authReducer";

class AuthContainer extends React.Component {
    componentDidMount() {
        // this.login()
    }
    login = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then((response) => {
            if(response.data.resultCode === 0){
                this.props.auth(response.data.data)
            }else if(response.data.resultCode === 1){
                console.log(response.data.messages)
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