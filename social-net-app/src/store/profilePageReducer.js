const ADD_POST = 'ADD_POST';
const POST_NEW_INPUT_VALUE = 'INPUT_VALUE'
const GET_POSTS = 'GET_POSTS'

const initialState = {
        postsData: [
        ],
        postsInputText: 'Write your post'
    }

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            return ({
            ...state,
            postsData : [
                ...state.postsData,
                {
                    id: state.postsData.length,
                    name: 'Мой пост',
                    body: state.postsInputText
                }
            ],
            postsInputText : ''
            })
        }
        case POST_NEW_INPUT_VALUE : {
            let newState = {...state}
            newState.postsInputText = action.value
            return newState
        }
        case GET_POSTS : {
            let newState = {...state}
            newState.postsData = [...state.postsData, ...action.posts]
            return newState
        }

        default :
            return state
    }
}

export const addPostActionCreator = () => (
    {type: ADD_POST})
export const postInputValueActionCreator = (text) => (
    {type: POST_NEW_INPUT_VALUE, value: text})
export const getPostsActionCreator = (posts) => (
    {type: GET_POSTS, posts}
)


export default profilePageReducer