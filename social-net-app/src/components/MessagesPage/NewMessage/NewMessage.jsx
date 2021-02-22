import React from 'react'
import classes from './NewMessage.module.css'
import {Field, reduxForm} from "redux-form";
import {renderField} from "../../commonComponents/Form/renderField/renderField";
import Button from "../../commonComponents/Button/Button";


const NewMessage = () => {

    const createNewMessageForm = props => (
        <form onSubmit={props.handleSubmit} className={classes.newMessage}>
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
    const NewMessageForm = reduxForm({form: 'newMessage'})(createNewMessageForm)
    return <NewMessageForm onSubmit={submitHandler}/>
}

export default NewMessage