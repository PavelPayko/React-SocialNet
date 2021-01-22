import React from 'react'
import {addPostActionCreator, postInputValueActionCreator} from "../../../store/profilePageReducer";
import CreatePost from "./CreatePost";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        postsInputText: state.profilePage.postsInputText,
        inputEl: React.createRef()
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addPostActionCreator())
        },
        newPostValue: (inputValue) => {
            dispatch(postInputValueActionCreator(inputValue))
        },
        getPosts: (posts) => {
            dispatch(getPostsActionCreator(posts))
        }
    }
}
const ContainerCreatePost = connect(mapStateToProps, mapDispatchToProps)(CreatePost)

export default ContainerCreatePost