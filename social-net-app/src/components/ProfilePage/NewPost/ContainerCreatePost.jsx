import React from 'react'
import {
    addPost,
    getPosts,
    postInputValue
} from "../../../store/profilePageReducer";
import CreatePost from "./CreatePost";
import {connect} from "react-redux";


const mapStateToProps = () =>({})
const mapDispatchToProps = { addPost, postInputValue, getPosts }

const ContainerCreatePost = props => <CreatePost {...props}/>

export default connect(mapStateToProps, mapDispatchToProps)(ContainerCreatePost)