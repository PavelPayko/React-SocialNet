import React from 'react'
import classes from './CreatePost.module.css'


function CreatePost(props) {


    // let inputValue = inputEl.current.value;

    // let inputEl = document.querySelector('#inputEl')
    // let inputValue = inputEl.value;

    let changeHandler = () =>  props.newPostValue(props.inputEl.current.value)

    let clickHandler = () => props.addNewPost()

  return (
    <div className={classes.createPost}>
      <input type="text"
             ref={props.inputEl}
             value={props.postsInputText}
             onChange={changeHandler}
             className={classes.text}
      />
      <div className={classes.controls}>
        <span>write new post</span>
        <button onClick={clickHandler}>public</button>
      </div>
    </div>
  )
}
export default CreatePost