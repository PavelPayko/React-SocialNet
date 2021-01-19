import React from 'react'
import classes from './CreatePost.module.css'
import {addPostActionCreator, postInputValueActionCreator} from "../../../store/profilePageReducer";


function CreatePost(props) {

    let inputEl = React.createRef();

    let addNewPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let newPostValue = () => {
        let inputValue = inputEl.current.value;
        props.dispatch(postInputValueActionCreator(inputValue))
        console.log(inputValue)
    }
  return (
    <div className={classes.createPost}>
      <input type="text" name="cretePost" id="createPostValue" value={props.postsInputText} onChange={newPostValue} ref={inputEl} className={classes.text} />
      <div className={classes.controls}>
        <span>write new post</span>
        <button onClick={addNewPost}>public</button>
      </div>
    </div>
  )
}
export default CreatePost