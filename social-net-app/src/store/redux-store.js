import {createStore, combineReducers} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";

let rootReducer = combineReducers({
    profilePage : profilePageReducer,
    messagesPage : messagesPageReducer
})

let store = createStore(rootReducer)

export default store