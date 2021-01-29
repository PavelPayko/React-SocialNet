const SEND_MESSAGE = 'SEND_MESSAGE';
const MESSAGE_NEW_INPUT_VALUE = 'MESSAGE_NEW_INPUT_VALUE'

const initialState = {
        messageData: [
            {id: 1, name: 'Гарри Поттер', text: 'My name is Garry'},
            {id: 2, name: 'Рон Уизли', text: 'My name is Ron'},
            {id: 3, name: 'Гермиона Грейнджер', text: 'My name is Germiona'},
            {id: 4, name: 'Невилл Долгопупс', text: 'My name is Nevill'}
        ],
        dialogsData: [
            {id: 1, name: 'Гарри Поттер'},
            {id: 2, name: 'Рон Уизли'},
            {id: 3, name: 'Гермиона Грейнджер'},
            {id: 4, name: 'Невилл Долгопупс'}
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