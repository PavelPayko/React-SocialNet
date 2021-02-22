import {profileAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const POST_NEW_INPUT_VALUE = 'INPUT_VALUE'
const GET_POSTS = 'GET_POSTS'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTOS = 'SET_PHOTOS'
const SET_PROFILE_EDIT_STATUS = 'SET_PROFILE_EDIT_STATUS'

const initialState = {
    postsData: [],
    profile: {},
    status: '',
    profileEditStatus: false
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            return {
                ...state,
            }
        }
        case POST_NEW_INPUT_VALUE :
            return {
                ...state
            }
        case GET_POSTS : {
            return {
                ...state
            }
        }
        case SET_PROFILE :
            return {
                ...state,
                profile: {...action.profile}
            }
        case SET_STATUS :
            return {
                ...state,
                status: action.newValue
            }
        case SET_PHOTOS :
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case SET_PROFILE_EDIT_STATUS :
            return {
                ...state,
                profileEditStatus: action.status
            }
        default :
            return state
    }
}

// ActionCreators
export const addPost = () => (
    {type: ADD_POST}
)
export const getPosts = (posts) => (
    {type: GET_POSTS, posts}
)

export const setProfile = (profile) => (
    {type: SET_PROFILE, profile}
)
export const setStatus = (status) => (
    {type: SET_STATUS, newValue: status}
)
export const setPhotos = (photos) => (
    {type: SET_PHOTOS, photos}
)
export const setProfileEditStatus = (status) => (
    {type: SET_PROFILE_EDIT_STATUS, status}
)

// thunkCreators

export const setProfileTC = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then((data) => {
                dispatch(setProfile(data))
            })
    }
}
export const getStatusTC = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then((data) => {
                dispatch(setStatus(data))
            })
    }
}
export const setStatusTC = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status)
            .then((data) => {
                console.log('setStatus', data)
                dispatch(setStatus(status))
            })
    }
}
export const uploadAvatarTC = (image) => {
    return (dispatch) => {
        profileAPI.uploadAvatar(image)
            .then((data) => {
                console.log('avatar', data)
                dispatch(setPhotos(data.data.photos))
            })
    }
}
export const editProfileTC = (profile) => {
    return (dispatch, getState) => {
        profileAPI.editProfile(profile)
            .then((data) => {
                if (data.resultCode === 0) {
                    const id = getState().auth.id
                    dispatch(setProfileTC(id))
                    dispatch(setProfileEditStatus(false))
                } else if (data.resultCode === 1) {
                    console.error(data.messages[0])
                    const error = data.messages[0]
                    const contactsError = error.search('Contacts->')
                    if (contactsError !== -1) {
                        const indexStart = contactsError + 10
                        const indexEnd = error.indexOf(')')
                        const errorElement = error.slice(indexStart, indexEnd).toLowerCase()
                        const errorMessage = error.slice(0, contactsError - 2)
                        const errorObject = {errorElement: errorMessage}
                        errorObject[errorElement] = errorMessage
                        dispatch(stopSubmit('profileEdit', {'contacts': errorObject}))
                    } else {
                        dispatch(stopSubmit('profileEdit', {_error: error}))
                    }
                }
            })
    }
}


export default profilePageReducer