import React from 'react'
import CreatePost from './NewPost/CreatePost'
import Post from './Post/Post'
import Profile from './Profile/Profile'
import classes from './ProfilePage.module.css'

function ProfilePage(props) {
    let posts = props.profilePage.postsData.map( post => <Post name={post.name} text={post.text}/>)

    return (
        <section className={classes.content}>
            <div className={classes.posts}>
                <CreatePost
                    postsInputText = {props.profilePage.postsInputText}
                    dispatch = {props.dispatch}
                />
                {posts}
            </div>
            <Profile/>
        </section>
    )
}

export default ProfilePage