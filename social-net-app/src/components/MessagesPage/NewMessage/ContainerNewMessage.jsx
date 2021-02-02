import React from 'react'
import {
    addPost,
    getPosts,
    postInputValue
} from "../../../store/profilePageReducer";
import {connect} from "react-redux";
import NewMessage from "./NewMessage";

const ContainerNewMessage = props => <NewMessage {...props}/>

const mapStateToProps = () =>({})
const mapDispatchToProps = { addPost, postInputValue, getPosts }


export default connect(mapStateToProps, mapDispatchToProps)(ContainerNewMessage)