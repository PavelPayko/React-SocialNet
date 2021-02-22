import React from 'react'
import {
    addPost,
    getPosts
} from "../../../store/profilePageReducer";
import CreatePost from "./CreatePost";
import {connect} from "react-redux";

const ContainerCreatePost = props => <CreatePost {...props}/>

const mapStateToProps = (state) =>({
    updateProfileStatus: state.profilePage.profileEditStatus
})
const mapDispatchToProps = { addPost,getPosts }


export default connect(mapStateToProps, mapDispatchToProps)(ContainerCreatePost)