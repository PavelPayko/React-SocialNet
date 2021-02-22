import React from 'react'
import classes from './CreatePost.module.css'
import Button from "../../commonComponents/Button/Button";
import {Field, reduxForm} from "redux-form";
import {renderField} from "../../commonComponents/Form/renderField/renderField";


const CreatePost = () => {
    const createPostForm = (props) => (
        <form onSubmit={props.handleSubmit} className={classes.createPost}>
            <div className={classes.title}>
                <Field component={renderField}
                       type="text"
                       name='title'
                       label={null}
                />
            </div>
            <div className={classes.wrapper}>
                <div className={classes.body}>
                    <Field component={renderField}
                           type="textarea"
                           name='body'
                           label={null}
                           noValidation={true}
                    />
                </div>
                <Button type='primary' title='public'/>
            </div>
        </form>
    )
    let submitHandler = values => {
        console.log(values)
    }
    const PostForm = reduxForm({form: 'createPost'})(createPostForm)
    return <PostForm onSubmit={submitHandler}/>
}

export default CreatePost