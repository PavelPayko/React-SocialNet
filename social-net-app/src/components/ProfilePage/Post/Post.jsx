import React from 'react'
import classes from './Post.module.css'
import avatar from '../../../img/avatar.jpg'

function Post(props) {
    return (
        <article className={classes.post}>
            <div className={classes.author}>
                <img src={avatar} alt="avatar"/>
                <div className={classes.authorName}>
                    <p>{props.name}</p>
                    {/*<p>{props.description}</p>*/}
                </div>

            </div>
            <div className={classes.text}>
                <h5>{props.title}</h5>
                <p>{props.text}</p>
            </div>
            <div className={classes.likes}>
                <span>likes</span>
                <span>comments</span>
            </div>
            <div className={classes.buttons}>
                <button>like</button>
                <button>comment</button>
                <button>share</button>
            </div>
            <div className={classes.comments}>
                <div className={classes.commentsAuthor}>
                    <img src={avatar} alt="avatar"/>
                    <span>Name Surname</span>
                </div>
                <span className={classes.commentText}>comment text</span>
            </div>
            <div className={classes.newComment}>
                <img src={avatar} alt='avatar'/>
                <input type="text" name="newCommentText"/>
            </div>
        </article>
    )
}

export default Post