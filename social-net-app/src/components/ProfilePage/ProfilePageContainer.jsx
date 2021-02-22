import React from 'react'
import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import {
    editProfileTC,
    getPosts,
    getStatusTC,
    setProfile, setProfileEditStatus,
    setProfileTC,
    setStatusTC,
    uploadAvatarTC
} from "../../store/profilePageReducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import withAuthRedirect from "../HOC/withRedirect";

class ProfilePageContainer extends React.Component {
    componentDidMount() {
        let userId = (!this.props.match.params.userId)
            ? this.props.myId
            : this.props.match.params.userId
        this.props.setProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    render() {
        return <ProfilePage  {...this.props}/>
    }
}


const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    myId: state.auth.id

})

const mapDispatchToProps = {getPosts, setProfile,setProfileEditStatus, setProfileTC, setStatusTC, getStatusTC, uploadAvatarTC, editProfileTC}
export default compose( withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(ProfilePageContainer)