import React from 'react'
import Post from './Post/Post'
import Profile from './Profile/Profile'
import classes from './ProfilePage.module.css'
import ContainerCreatePost from "./NewPost/ContainerCreatePost";
import axios from "axios";

function ProfilePage(props) {
    if (props.postsData.length === 0) {
        axios.get("http://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                props.getPosts(response.data)
                console.log(response)
            })
    }

    let posts = props.postsData.map(
        post => <Post key={post.id} name={post.name} title={post.title} text={post.body}/>
    )
    return (
        <section className={classes.content}>
            <div className={classes.posts}>
                <ContainerCreatePost/>
                <div className={classes.postsContent}>
                    {posts}
                </div>
            </div>
            <Profile/>
        </section>
    )
}

export default ProfilePage