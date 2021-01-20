import React from 'react'
import Post from './Post/Post'
import Profile from './Profile/Profile'
import classes from './ProfilePage.module.css'
import ContainerCreatePost from "./NewPost/ContainerCreatePost";

function ProfilePage(props) {
    let posts = props.profilePage.postsData.map(
        post => <Post name={post.name} text={post.text}/>
        )

    return (
        <section className={classes.content}>
            <div className={classes.posts}>
                <ContainerCreatePost
                    state = {props.profilePage}
                    dispatch = {props.dispatch}
                />
                {posts}
            </div>
            <Profile/>
        </section>
    )
}

export default ProfilePage