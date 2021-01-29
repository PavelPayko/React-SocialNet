import {followAPI, usersAPI} from "../API/API";

const GET_USERS = 'GET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_SUBSCRIPTIONS = 'GET_SUBSCRIPTIONS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_PAGE_LIST = 'SET_PAGE_LIST'
const SET_FETCHING = 'SET_FETHING'
const SET_FOLLOW_FETCHING = 'SET_FOLLOW_FETCHING'
const UNSET_FOLLOW_FETCHING = 'UNSET_FOLLOW_FETCHING'

let initialState = {
    usersData: [],
    subscriptionsList: [],
    count: 0,
    currentPage: 1,
    pageList: [1, 2, 3, 4, 5],
    isFetching: false,
    isFollowFetching: false,
    followFetchState: []
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
            return {
                ...state,
                usersData: state.usersData.map(item => {
                    if (item.id === action.userId) {
                        return {...item, followed: true}
                    }
                    return item;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(item => {
                    if (item.id === action.userId) {
                        return {...item, followed: false}
                    }
                    return item;
                })
            }
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
                pageList: action.pageList,
                isFetching: false
            })
        case SET_PAGE_LIST:
            return ({
                ...state,
                pageList: action.pageList
            })
        case SET_FETCHING:
            return ({
                ...state,
                isFetching: action.fetchingState
            })
        case SET_FOLLOW_FETCHING:
            return ({
                ...state,
                followFetchState: [...state.followFetchState, action.userId]
            })
        case UNSET_FOLLOW_FETCHING:
            let unsetFollowIndex = state.followFetchState.findIndex(item => item.id === action.userId)
            let newFollowFetchState = [...state.subscriptionsList]
            newFollowFetchState.splice(unsetFollowIndex, 1)
            return {
                ...state,
                followFetchState: newFollowFetchState
            }
        default:
            return state

    }

}

//actionCreators
export const getUsers = (data) => ({
    type: GET_USERS,
    users: data.items,
    count: data.totalCount
})
export const follow = (userId) => ({
    type: FOLLOW,
    userId
})
export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
})
export const getSubscriptions = (subscriptions) => ({
    type: GET_SUBSCRIPTIONS,
    subscriptions
})
export const setCurrentPage = (page, users, pageList) => ({
    type: SET_CURRENT_PAGE,
    currentPage: page,
    users,
    pageList
})
export const setPageList = (pageList) => ({
    type: SET_PAGE_LIST,
    pageList
})
export const setFetching = (fetchingState) => ({
    type: SET_FETCHING,
    fetchingState
})
export const setFollowFetching = (userId) => ({
    type: SET_FOLLOW_FETCHING,
    userId
})
export const unsetFollowFetching = (userId) => ({
    type: UNSET_FOLLOW_FETCHING,
    userId
})

//thunkCreators

export const getPageTC = (page = 1) => {
    return (dispatch) => {
        let pageList = [];
        let i = (page <= 3) ? 1 : page - 2;
        let iMax = (page <= 3) ? 5 : page + 2;
        for (i; i <= iMax; i++) {
            pageList.push(i)
        }
        dispatch(setFetching(true))
        usersAPI.getPage(page)
            .then(data => dispatch(setCurrentPage(page, data.items, pageList)))
            .then(() => dispatch(setFetching(false)))
    }
}
export const unfollowTC = (userId) => {
    return (dispatch) => {
        dispatch(setFollowFetching(userId))
        followAPI.unfollow(userId)
            .then(() => dispatch(unsetFollowFetching(userId)))
            .then(() => dispatch(unfollow(userId)))

    }
}


export const followTC = (userId) => {
    return (dispatch) => {
        dispatch(setFollowFetching(userId))
        followAPI.follow(userId)
            .then(() => dispatch(unsetFollowFetching(userId)))
            .then(() => dispatch(follow(userId)))
    }
}

export default usersPageReducer