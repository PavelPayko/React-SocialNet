import {authMeTC} from "./authReducer";

const INITIALIZE = 'INITIALIZE'

const initialState = {
    isInit: false
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            console.log(action.data)
            return {
                ...state,
                isInit: true
            }
        default:
            return state
    }
}
// action creators
export const initialize = () => ({ type: INITIALIZE })

//thunk creators
export const initializeTC = () => dispatch => {
    dispatch(authMeTC())
        .then(() => { dispatch(initialize()) })

}

export default appReducer