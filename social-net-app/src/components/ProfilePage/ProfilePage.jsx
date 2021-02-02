import React from 'react'
import Post from './Post/Post'
import Profile from './Profile/Profile'
import classes from './ProfilePage.module.css'
import ContainerCreatePost from "./NewPost/ContainerCreatePost";

function ProfilePage(props) {

    let posts = props.profilePage.postsData.map(
        post => <Post key={post.id} name={post.name} title={post.title} text={post.body}/>
    )
    return (
        <section className={classes.content}>
            <div className={classes.posts}>
                <ContainerCreatePost />
                <div className={classes.postsContent}>
                    {posts}
                </div>
            </div>
            <Profile profile={props.profilePage.profile}
                     status={props.profilePage.status}
                     getStatus={props.getStatusTC}
                     setStatus={props.setStatusTC}
            />
        </section>
    )
}

export default ProfilePage