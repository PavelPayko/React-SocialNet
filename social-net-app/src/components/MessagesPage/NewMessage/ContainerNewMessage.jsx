import React from 'react'
import {
    addPost,
    getPosts
} from "../../../store/profilePageReducer";
import {connect} from "react-redux";
import NewMessage from "./NewMessage";

const ContainerNewMessage = props => <NewMessage {...props}/>

const mapStateToProps = () =>({})
const mapDispatchToProps = { addPost, getPosts }


export default connect(mapStateToProps, mapDispatchToProps)(ContainerNewMessage)