import axios from "axios";

const samuraijsAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '94ff38ad-092c-45b8-b955-666ab07596f1'}
});

export const authAPI = {
    authMe() {
        return (samuraijsAPI.get('auth/me'))
            .then((response) => response.data)
    },
    login(data) {
        return (samuraijsAPI.post('auth/login', data))
            .then((response) => response.data)
    },
    logout() {
        return (samuraijsAPI.delete('auth/login'))
            .then((response) => response.data)
    },
    getCaptcha() {
        return (samuraijsAPI.get('/security/get-captcha-url'))
            .then((response) => response.data)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return (samuraijsAPI.get('profile/' + userId))
            .then((response) => response.data)
    },
    getStatus(userId) {
        return (samuraijsAPI.get('profile/status/' + userId))
            .then((response) => response.data)
    },
    setStatus(status) {
        return (samuraijsAPI.put('profile/status/',
            {status: status}))
            .then((response) => response.data)
    },
    uploadAvatar(image) {
        let formData = new FormData();
        formData.append("image", image);
        return samuraijsAPI.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => response.data)
    },
    editProfile(profile) {
        return samuraijsAPI.put('/profile', profile)
            .then(response => response.data)


    }
}
export const usersAPI = {
    getPage(page) {
        return (samuraijsAPI.get('users?page=' + page))
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
