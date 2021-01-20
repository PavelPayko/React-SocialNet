import React from 'react'
import Post from './Post/Post'
import Profile from './Profile/Profile'
import classes from './ProfilePage.module.css'
import ContainerCreatePost from "./NewPost/ContainerCreatePost";
import StoreContext from "../../StoreContext";

function ProfilePage() {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let posts = store.getState().profilePage.postsData.map(
                        post => <Post name={post.name} text={post.text}/>
                    )
                    return (
                        <section className={classes.content}>
                            <div className={classes.posts}>
                                <ContainerCreatePost />
                                { posts }
                            </div>
                            <Profile/>
                        </section>
                    )
                }
            }
        </StoreContext.Consumer>

    )
}

export default ProfilePage