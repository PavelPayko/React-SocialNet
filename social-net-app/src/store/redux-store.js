import {createStore, combineReducers} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";
import usersPageReducer from "./usersPageReducer";

let rootReducer = combineReducers({
    profilePage : profilePageReducer,
    messagesPage : messagesPageReducer,
    usersPage: usersPageReducer
})

let store = createStore(rootReducer)

export default store