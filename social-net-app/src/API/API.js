import axios from "axios";

const samuraijsAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '94ff38ad-092c-45b8-b955-666ab07596f1'}
});

export const authAPI = {
    auth() {
        return (samuraijsAPI.get('auth/me'))
            .then((response) => response.data)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return (samuraijsAPI.get('profile/' + userId))
            .then((response) => response.data)
    }
}
export const usersAPI = {
    getPage(page) {
        return (samuraijsAPI.get('users?page='+page))
            .then((response) => response.data)
    }
}
export const followAPI = {
    follow(userId) {
        return (samuraijsAPI.post('follow/' + userId))
            .then((response) => response.data)
    },
    unfollow(userId) {
        return (samuraijsAPI.delete('follow/' + userId))
            .then((response) => response.data)
    }
}