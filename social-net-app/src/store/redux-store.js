import {createStore, combineReducers, applyMiddleware} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import ReduxThunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let rootReducer = combineReducers({
    profilePage : profilePageReducer,
    messagesPage : messagesPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(rootReducer, applyMiddleware(ReduxThunk))

window.store = store

export default store