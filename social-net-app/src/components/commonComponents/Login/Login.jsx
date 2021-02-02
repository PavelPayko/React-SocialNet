import React from 'react'
import classes from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router";
import {email, required} from "../../Form/formValidate";
import {renderField} from "../../Form/renderField/renderField";



const Login = (props) => {


    let LoginForm = (props) => {
        console.log(props)
        return <div className={classes.formWrapper}>
            <form onSubmit={props.handleSubmit}>
                <Field component={renderField}
                       type="email"
                       name='email'
                       validate={[required, email]}
                       label='Login'
                />
                <Field component={renderField}
                       type="password"
                       name='password'
                       validate={required}
                       label='Password'
                />
                <div>
                    <Field component={'input'} type="checkbox" name='rememberMe'/>
                    <span>Remember me</span>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    }

    LoginForm = reduxForm({form: 'login'})(LoginForm)

    let submit = values => {
        console.log(values)
        props.login(values)
    }

    return <div className={classes.loginPage}>
        {props.isAuth
            ? <Redirect to={'/'}/>
            : <LoginForm onSubmit={submit}/>
        }

    </div>
}
export default Login
