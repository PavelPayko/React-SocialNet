const ADD_POST = 'ADD_POST';
const POST_NEW_INPUT_VALUE = 'INPUT_VALUE'

const initialState = {
        postsData: [
            {id: 1, name: 'Гарри Поттер', text: 'My name is Garry'},
            {id: 2, name: 'Рон Уизли', text: 'My name is Ron'},
            {id: 3, name: 'Гермиона Грейнджер', text: 'My name is Germiona'},
            {id: 4, name: 'Невилл Долгопупс', text: 'My name is Nevill'}
        ],
        postsInputText: 'Write your post'
    }

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            // let val = this._state.postsInputText
            state.postsData.push({
                id: state.postsData.length,
                name: 'Мой пост',
                text: state.postsInputText
            })
            state.postsInputText = ''
            return state
        case POST_NEW_INPUT_VALUE :
            state.postsInputText = action.value
            return state

        default :
            return state
    }
}

export const addPostActionCreator = () => (
    {type: ADD_POST})
export const postInputValueActionCreator = (text) => (
    {type: POST_NEW_INPUT_VALUE, value: text})


export default profilePageReducer