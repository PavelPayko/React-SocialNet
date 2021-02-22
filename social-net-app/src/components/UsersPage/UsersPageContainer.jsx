import React from 'react'
import {connect} from "react-redux";
import UsersPage from "./UsersPage";
import {
    follow, followTC, getPageTC,
    getUsers, setCurrentPage, setFetching, setFollowFetching, setPageList,
    unfollow, unfollowTC
} from "../../store/usersPageReducer";
import withAuthRedirect from "../HOC/withRedirect";
import {compose} from "redux";

class UsersPageContainer extends React.Component {
    componentDidMount() {
        this.getPage()
    }

    followHandler = (userId) => {
        this.props.followTC(userId)
    }
    unfollowHandler = (userId) => {
        this.props.unfollowTC(userId)
    }

    getPage = (page) => {
        this.props.getPageTC(page)
    }

    render() {
        return (< UsersPage
            usersData={this.props.usersData}
            subscriptionsList={this.props.subscriptionsList}
            pageList={this.props.pageList}
            currentPage={this.props.currentPage}
            unfollowHandler={this.unfollowHandler}
            followHandler={this.followHandler}
            getPage={this.getPage}
            isFetching={this.props.isFetching}
            isFollowFetching={this.props.isFollowFetching}
            followFetchState={this.props.followFetchState}
        />)
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        subscriptionsList: state.usersPage.subscriptionsList,
        count: state.usersPage.count,
        currentPage: state.usersPage.currentPage,
        pageList: state.usersPage.pageList,
        isFetching: state.usersPage.isFetching,
        isFollowFetching: state.usersPage.isFollowFetching,
        followFetchState: state.usersPage.followFetchState,
        isAuth: state.auth.isAuth
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return{
//         getUsers: (users) => {
//             dispatch(getUsersActionCreator(users))
//         },
//         follow: (userId) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow: (index) => {
//             dispatch(unfollowActionCreator(index))
//         },
//         getSubscriptions: (subscriptions) => {
//             dispatch(getSubscriptionsActionCreator(subscriptions))
//         },
//         setCurrentPage: (page, users, pageList) => {
//             dispatch(setCurrentPageActionCreator(page, users, pageList))
//         },
//         setPageList: (pageList) => {
//             dispatch(setPageListActionCreator(pageList))
//         }
//     }
// }

const mapDispatchToProps = {
    getUsers, follow, unfollow,
    setCurrentPage, setPageList, setFetching, setFollowFetching,
    getPageTC, followTC, unfollowTC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(UsersPageContainer)
