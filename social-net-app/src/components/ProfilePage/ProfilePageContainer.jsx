import React from 'react'
import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import {getPostsActionCreator} from "../../store/profilePageReducer";


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: (posts)=> {
            dispatch(getPostsActionCreator(posts))
        }
    }
}
const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage)

export default ProfilePageContainer