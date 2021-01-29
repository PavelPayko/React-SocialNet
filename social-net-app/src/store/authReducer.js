const LOGIN = 'LOGIN'

const initialState = {
    isAuth: false,
    email: '',
    id: 0,
    login: ''
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log(action.data)
            return {
                ...state,
                isAuth: true,
                email: action.data.email,
                id: action.data.id,
                login: action.data.login
            }
        default:
            return state
    }
}

export const auth = (data) => ({
    type: LOGIN,
    data
})

export default authReducer