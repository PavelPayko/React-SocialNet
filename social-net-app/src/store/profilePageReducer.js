import {profileAPI} from "../API/API";

const ADD_POST = 'ADD_POST';
const POST_NEW_INPUT_VALUE = 'INPUT_VALUE'
const GET_POSTS = 'GET_POSTS'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTOS = 'SET_PHOTOS'

const initialState = {
    postsData: [],
    postsInputText: 'Write your post',
    profile: {id: 14402},
    status: '',
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            return {
                ...state,
                postsData: [
                    ...state.postsData,
                    {
                        id: state.postsData.length,
                        name: 'Мой пост',
                        body: state.postsInputText
                    }
                ],
                postsInputText: ''
            }
        }
        case POST_NEW_INPUT_VALUE :
            return {
                ...state,
                postsInputText: action.value
            }
        case GET_POSTS : {
            return {
                ...state,
                postsData: [...state.postsData, ...action.posts]
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
        default :
            return state
    }
}

// ActionCreators
export const addPost = () => (
    {type: ADD_POST})
export const postInputValue = (text) => (
    {type: POST_NEW_INPUT_VALUE, value: text})
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


export default profilePageReducer