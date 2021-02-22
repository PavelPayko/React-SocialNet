import React from 'react'
import classes from './Textarea.module.css'

const Textarea = props => {
    return (
        <div className={classes.textareaWrapper}>
            <label className={classes.label}>{props.label}</label>
            <textarea {...props.input} cols="30" rows="5"
                      className={classes.textarea +  (props.errors ? ` ${classes.errorLabel}`: '')}
                      placeholder={props.placeholder}
                      name={props.name} value={props.value}
                      onChange={props.setValue} onBlur={props.onBlur}

            />
            {props.noValidation
                ? null
                : <span className={classes.error}>
                {props.errors && props.touched ? <div>{props.errors}</div> : null}
            </span>}
        </div>
    )
}

export default Textarea