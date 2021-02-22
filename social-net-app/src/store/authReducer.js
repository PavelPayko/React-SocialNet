import {authAPI} from "../API/API";
import {stopSubmit} from "redux-form";
import {setProfileTC} from "./profilePageReducer";

const AUTH_ME = 'AUTH_ME'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

const initialState = {
    isAuth: false,
    email: '',
    id: 0,
    login: '',
    captchaUrl: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ME:
            return {
                ...state,
                isAuth: true,
                email: action.data.email,
                id: action.data.id,
                login: action.data.login
            }
        case LOGIN:
            return {
                ...state,
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.url,
            }
        default:
            return state
    }
}
// action creators
export const authMe = (data) => ({
    type: AUTH_ME,
    data
})
export const login = () => ({
    type: LOGIN
})
export const logout = () => ({
    type: LOGOUT
})
export const setCaptchaUrl = (url) => ({
    type: SET_CAPTCHA_URL,
    url
})

//thunk creators
export const authMeTC = () => dispatch => {
    return authAPI.authMe()
        .then(data => {
            if (data.resultCode === 1) {
                console.error(data.messages[0])
                return data.resultCode
            } else if (data.resultCode === 0) {
                dispatch(authMe(data.data))
            }
        })

}
export const loginTC = data => dispatch => {
    authAPI.login(data)
        .then(responseData => {
            console.log(responseData)
            if (responseData.resultCode === 0) {
                dispatch(authMeTC())
                dispatch(setProfileTC(responseData.data.userId))
            } else {
                if (responseData.resultCode === 10) {
                    dispatch(getCaptchaTC())
                }
                dispatch(stopSubmit('login', {_error: responseData.messages[0]}))
            }
        })

}
export const logoutTC = () => dispatch => {
    authAPI.logout()
        .then(responseData => {
            console.log(responseData)
            dispatch(logout())
        })

}
export const getCaptchaTC = () => dispatch => {
    authAPI.getCaptcha()
        .then(responseData => {
            console.log(responseData)
            dispatch(setCaptchaUrl(responseData.url))
        })

}


export default authReducer