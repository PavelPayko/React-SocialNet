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
        case SEND_MESSAGE :
            state.messageData.push({
                id: state.messageData.length,
                name: 'User Name',
                text: state.messageInputText
            })
            state.messageInputText = ''
            return state
        case MESSAGE_NEW_INPUT_VALUE :
            state.messageInputText = action.value
            return state
        default :
            return state
    }

}

export const sendMessageActionCreator = () => (
    {type: SEND_MESSAGE})
export const messageInputValueActionCreator = (text) => (
    {type: MESSAGE_NEW_INPUT_VALUE, value: text})

export default messagesPageReducer