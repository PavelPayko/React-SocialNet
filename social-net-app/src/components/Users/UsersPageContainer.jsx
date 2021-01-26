import React from 'react'
import {connect} from "react-redux";
import UsersPage from "./UsersPage";
import {
    follow,
    getSubscriptions,
    getUsers, setCurrentPage, setPageList,
    unfollow
} from "../../store/usersPageReducer";
import axios from "axios";

class UsersPageContainer extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                this.props.getUsers(response.data)
            })
    }

    followHandler = (userId) => {
        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}/`)
        //     .then((response) => {
        //         console.log(response)
        //     })
        // put userid
        // .then get subscriptions
        // .then this.props.getSubscriptions(response)
        this.props.follow(userId)
    }
    unfollowHandler = (userId) => {
        // delete userid
        // .then get subscriptions
        // .then this.props.getSubscriptions(response)
        let index = this.props.subscriptionsList.findIndex(item => item.id === userId)
        this.props.unfollow(index)
    }

    getPage = (page) => {
        let pageList = [];
        let i;
        let iMax;
        (page <= 3)? i = 1 : i = page-2;
        (page <= 3)? iMax = 5 : iMax = page+2;
        for(i;i <= iMax; i++){
            pageList.push(i)
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
            .then((response) => {
                this.props.setCurrentPage(page, response.data.items, pageList)
            })
    }

    render() {
        return ( < UsersPage
            usersData={this.props.usersData}
            subscriptionsList={this.props.subscriptionsList}
            pageList={this.props.pageList}
            currentPage={this.props.currentPage}
            unfollowHandler={this.unfollowHandler}
            followHandler={this.followHandler}
            getPage={this.getPage}

        />)
    }
}

const mapStateToProps = (state) => {
    return{
        usersData: state.usersPage.usersData,
        subscriptionsList: state.usersPage.subscriptionsList,
        count: state.usersPage.count,
        currentPage: state.usersPage.currentPage,
        pageList: state.usersPage.pageList
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

export default connect(mapStateToProps, {
        getUsers,follow,unfollow,getSubscriptions,
        setCurrentPage,setPageList
    })(UsersPageContainer)
