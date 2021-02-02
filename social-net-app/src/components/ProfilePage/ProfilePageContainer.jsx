import React from 'react'
import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import {getPosts, getStatusTC, setProfile, setProfileTC, setStatusTC} from "../../store/profilePageReducer";
import {withRouter} from "react-router";
import withAuthRedirect from "../HOC/withRedirect";

class ProfilePageContainer extends React.Component {
    componentDidMount() {
        let userId = (!this.props.match.params.userId)
            ? this.props.profilePage.profile.id
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

})

const mapDispatchToProps = {getPosts, setProfile, setProfileTC, setStatusTC, getStatusTC}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(ProfilePageContainer)))