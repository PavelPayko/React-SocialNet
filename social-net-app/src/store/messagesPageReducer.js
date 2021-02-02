const SEND_MESSAGE = 'SEND_MESSAGE';
const MESSAGE_NEW_INPUT_VALUE = 'MESSAGE_NEW_INPUT_VALUE'

const initialState = {
        messageData: [
            {id: 1, name: 'User Name', text: 'message text'},
            {id: 14402, name: 'My Name', text: 'message text'},
        ],
        dialogsData: [
            {id: 1, name: 'User Name'},{id: 1, name: 'User Name'},{id: 1, name: 'User Name'},
        ],
        messageInputText: ''
    }

const messagesPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE : {
            let newState = {...state}
            newState.messageData = [...state.messageData]
            newState.messageData.push({
                id: newState.messageData.length,
                name: 'User Name',
                text: newState.messageInputText
            })
            newState.messageInputText = ''
            return newState
        }
        case MESSAGE_NEW_INPUT_VALUE : {
            let newState = {...state}
            newState.messageInputText = action.value
            return newState
        }
        default :
            return state
    }

}

export const sendMessage = () => (
    {type: SEND_MESSAGE})
export const messageInputValue = (text) => (
    {type: MESSAGE_NEW_INPUT_VALUE, value: text})

export default messagesPageReducer