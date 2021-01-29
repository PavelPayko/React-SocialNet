import {profileAPI} from "../API/API";

const ADD_POST = 'ADD_POST';
const POST_NEW_INPUT_VALUE = 'INPUT_VALUE'
const GET_POSTS = 'GET_POSTS'
const SET_PROFILE = 'SET_PROFILE'

const initialState = {
    postsData: [],
    postsInputText: 'Write your post',
    profile: {id: 14402}
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

// thunkCreators

export const setProfileTC = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then((data) => {
                dispatch(setProfile(data))
            })
    }

}

export default profilePageReducer