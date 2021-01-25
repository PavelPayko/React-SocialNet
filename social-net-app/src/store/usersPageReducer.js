const GET_USERS = 'GET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_SUBSCRIPTIONS = 'GET_SUBSCRIPTIONS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_PAGE_LIST = 'SET_PAGE_LIST'

let initialState = {
    usersData: [],
    subscriptionsList: [],
    count: 0,
    currentPage: 1,
    pageList: [1,2,3,4,5]
}
let usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return ({
                ...state,
                usersData: action.users,
                count: action.count
            })
        case FOLLOW:
            let user = {...state.usersData.find(user => user.id === action.userId)}
            return ({
                ...state,
                subscriptionsList: [...state.subscriptionsList, user]
            })
        case UNFOLLOW:
            let newState = {
                ...state,
                subscriptionsList: [...state.subscriptionsList]
            }
            newState.subscriptionsList.splice(action.index, 1)
            return newState
        case GET_SUBSCRIPTIONS:
            return ({
                ...state,
                subscriptions: [action.subscriptions]
            })
        case SET_CURRENT_PAGE:
            return ({
                ...state,
                usersData: action.users,
                currentPage: action.currentPage,
                pageList: action.pageList
            })
        case SET_PAGE_LIST:
            return ({
                ...state,
                pageList: action.pageList
            })
        default:
            return state

    }

}
export const getUsersActionCreator = (data) => ({
    type: GET_USERS,
    users: data.items,
    count: data.totalCount
})
export const followActionCreator = (userId) => ({
    type: FOLLOW,
    userId
})
export const unfollowActionCreator = (index) => ({
    type: UNFOLLOW,
    index
})
export const getSubscriptionsActionCreator = (subscriptions) => ({
    type: GET_SUBSCRIPTIONS,
    subscriptions
})
export const setCurrentPageActionCreator = (page, users, pageList) => ({
    type: SET_CURRENT_PAGE,
    currentPage: page,
    users,
    pageList
})
export const setPageListActionCreator = (pageList) => ({
    type: SET_PAGE_LIST,
    pageList
})

export default usersPageReducer