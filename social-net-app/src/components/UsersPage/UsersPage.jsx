import React from 'react'
import classes from './UsersPage.module.css'
import avatar from '../../img/avatar.jpg'
import {NavLink} from "react-router-dom";
import Loader from "../commonComponents/Loader/Loader";

const UsersPage = (props) => {

    let usersList = props.usersData.map((user) => (
            <div className={classes.user} key={user.id}>
                <img src={(user.photos.small === null) ? avatar : user.photos.small} alt="avatar"
                     className={classes.avatar}/>
                <NavLink to={'/profile/' + user.id}>
                    <div className={classes.userInfo}>
                        <h5 className={classes.userName}>{user.name}</h5>
                        <p className={classes.userDescription}>
                            <span>Status: </span>
                            {user.status}
                        </p>
                    </div>

                </NavLink>
                {/*{(user.followed)*/
                    // (props.subscriptionsList.findIndex(item => item.id === user.id) !== -1)
                    user.followed
                        ? <button disabled={props.followFetchState.some((id) => id === user.id)}  className={classes.followButton}
                                  onClick={() => props.unfollowHandler(user.id)}
                        >Unfollow</button>
                        : <button disabled={props.followFetchState.some((id) => id === user.id)} className={classes.followButton}
                                  onClick={() => props.followHandler(user.id)}
                        >Follow</button>
                }

            </div>
        )
    )

    let subscriptionsList = props.usersData.map(user => {
            if (user.followed) {
                return (<div className={classes.user}>
                    <img src={(user.photos.small === null) ? avatar : user.photos.small} alt="avatar"
                         className={classes.avatar}/>
                    <div className={classes.userInfo}>
                        <h5 className={classes.userName}>{user.name}</h5>
                        <p className={classes.userDescription}>
                            <span>Status: </span>
                            {user.status}
                        </p>
                    </div>
                    <button disabled={props.followFetchState.some((id) => id === user.id)} className={classes.followButton}
                            onClick={() => props.unfollowHandler(user.id)}
                    >Unfollow
                    </button>
                </div>)

            }
        }
    )

    let Pagination = props => (props.pageList.map(page => (<span
            className={(props.currentPage === page)
                ? `${classes.paginationItem} ${classes.active}`
                : classes.paginationItem }
            onClick={() => props.getPage(page)}>{page}</span>)
    ))

    return (
        <div className={classes.page}>
            <div className={classes.userList}>
                <div className={classes.pagination}>
                    {<Pagination pageList={props.pageList} currentPage={props.currentPage} />}
                </div>
                {props.isFetching ? <Loader /> : usersList}
                <div className={classes.pagination}>
                    {pagination}
                </div>
            </div>
            <div className={classes.subscriptions}>
                <h5 className={classes.subscriptionsTitle}>Subscriptions</h5>
                {subscriptionsList}
            </div>
        </div>
    )
}



export default UsersPage