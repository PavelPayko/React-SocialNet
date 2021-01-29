import React from 'react'
import {
    addPost,
    getPosts,
    postInputValue
} from "../../../store/profilePageReducer";
import CreatePost from "./CreatePost";
import {connect} from "react-redux";


const mapStateToProps = state =>({
        postsInputText: state.profilePage.postsInputText,
        inputEl: React.createRef()
    })
const mapDispatchToProps = { addPost, postInputValue, getPosts }

const ContainerCreatePost = connect(mapStateToProps, mapDispatchToProps)(CreatePost)

export default ContainerCreatePost