import React from 'react'
import {addPostActionCreator, postInputValueActionCreator} from "../../../store/profilePageReducer";
import CreatePost from "./CreatePost";
import StoreContext from "../../../StoreContext";


function ContainerCreatePost() {
    return (
        <StoreContext.Consumer>
            {
                store => {
                let addNewPost = () => {
                    store.dispatch(addPostActionCreator())
                    console.log('add')
                }
                let newPostValue = (inputValue) => {
                    store.dispatch(postInputValueActionCreator(inputValue))
                    console.log(inputValue)
                }
                let inputEl = React.createRef();
                return (<CreatePost addNewPost={addNewPost}
                                    newPostValue={newPostValue}
                                    postsInputText={store.getState().profilePage.postsInputText}
                                    inputEl={inputEl}
                    />
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default ContainerCreatePost