import React from 'react'
import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import {
    getPosts,
    getStatusTC,
    setProfile,
    setProfileTC,
    setStatusTC,
    uploadAvatarTC
} from "../../store/profilePageReducer";
import {withRouter} from "react-router";

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
    myId: state.auth.id

})

const mapDispatchToProps = {getPosts, setProfile, setProfileTC, setStatusTC, getStatusTC, uploadAvatarTC}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer))
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(ProfilePageContainer)))