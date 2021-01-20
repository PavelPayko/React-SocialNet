import React from 'react'
import {addPostActionCreator, postInputValueActionCreator} from "../../../store/profilePageReducer";
import CreatePost from "./CreatePost";


function ContainerCreatePost(props) {

    let addNewPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let newPostValue = (inputValue) => {
        props.dispatch(postInputValueActionCreator(inputValue))
        console.log(inputValue)
    }
    let inputEl = React.createRef();
  return (
    <CreatePost  addNewPost={addNewPost}
                 newPostValue={newPostValue}
                 postsInputText = {props.state.postsInputText}
                 inputEl ={inputEl}
    />
  )
}
export default ContainerCreatePost