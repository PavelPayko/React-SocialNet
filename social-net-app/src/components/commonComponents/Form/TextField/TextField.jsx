import React from 'react'
import classes from './TextField.module.css'

const TextField = props => {
    return (
        <div className={classes.textField}>
            <label htmlFor={props.name} className={classes.label}>{props.title}</label>
            <input type={props.type}
                   name={props.name}
                   className={classes.input + (props.errors ? ` ${classes.errorLabel}`: '')}
                   placeholder={props.placeholder}
                   value={props.value}
                   onChange={props.setValue}
                   onBlur={props.onBlur}
            />
            {props.noValidation
                ? null
                : <span className={classes.error}>
                {props.errors && props.touched ? <div>{props.errors}</div> : null}
            </span>}
        </div>
    )
}

export default TextField