import React from 'react'
import classes from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Redirect} from "react-router";
import {email, required} from "../commonComponents/Form/formValidate";
import {renderField} from "../commonComponents/Form/renderField/renderField";
import Button from "../commonComponents/Button/Button";


const Login = (props) => {

    console.log('login')
    let LoginForm = (props) => {
        return <div className={classes.formWrapper}>
            <form onSubmit={props.handleSubmit}>
                <div className={classes.input}>
                    <Field component={renderField}
                           type="email"
                           name='email'
                           validate={[required, email]}
                           label='Login'
                           placeholder='Введите логин'
                    />
                </div>
                <div className={classes.input}>
                    <Field component={renderField}
                           type="password"
                           name='password'
                           validate={required}
                           label='Password'
                           placeholder='введите пароль'
                    />
                </div>
                <div className={classes.checkbox}>
                    <Field component={renderField} type="checkbox" name='rememberMe' label='Запомнить меня'/>
                </div>
                {props.error && <div className={classes.commonError}>{props.error}</div>}
                {props.captchaUrl && <div className={classes.captcha}>
                    <img src={props.captchaUrl} alt="captcha"/>
                    <Field component={renderField}
                           type="text"
                           name='captcha'
                           validate={required}
                           label='captcha'
                           placeholder='captcha'
                    />
                </div>}
                <div>
                    <Button type='primary' title={'login'} size={'big'}/>
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
            : <LoginForm onSubmit={submit} captchaUrl={props.captchaUrl}/>
        }

    </div>
}
export default Login
