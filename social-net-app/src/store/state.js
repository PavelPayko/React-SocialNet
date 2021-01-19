import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";



let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, name: 'Гарри Поттер', text: 'My name is Garry'},
                {id: 2, name: 'Рон Уизли', text: 'My name is Ron'},
                {id: 3, name: 'Гермиона Грейнджер', text: 'My name is Germiona'},
                {id: 4, name: 'Невилл Долгопупс', text: 'My name is Nevill'}
            ],
            postsInputText: 'Write your post'
        },
        messagesPage: {
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
    },

    stateRender() {
    },

    subscribe(observer) {
        this.stateRender = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action)
        this.stateRender()


    }

}

export default store