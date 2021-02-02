import {authAPI} from "../API/API";

const AUTH_ME = 'AUTH_ME'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const initialState = {
    isAuth: false,
    email: '',
    id: 0,
    login: ''
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ME:
            console.log(action.data)
            return {
                ...state,
                isAuth: true,
                email: action.data.email,
                id: action.data.id,
                login: action.data.login
            }
        case LOGIN:
            console.log(action.userId)
            return {
                ...state,
                isAuth: true,
                id: action.userId,
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
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
export const login = (userId) => ({
    type: LOGIN,
    userId
})
export const logout = () => ({
    type: LOGOUT
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
            dispatch(login(responseData.data.userId))
        })
        // .then(() => authAPI.authMe())
        // .then(data => dispatch(authMe(data.data)))

}
export const logoutTC = () => dispatch => {
    authAPI.logout()
        .then(responseData => {
            console.log(responseData)
            dispatch(logout())
        })

}


export default authReducer