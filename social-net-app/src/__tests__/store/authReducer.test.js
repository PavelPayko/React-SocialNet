import authReducer, {authMe, login, logout, setCaptchaUrl} from "../../store/authReducer";

const initialState = {
    isAuth: false,
    email: '',
    id: 0,
    login: '',
    captchaUrl: null
}

test('authMe; isAuth should be true, state should content id, email and login', () => {
    //1 state
    let data = {
        email: 'test',
        id: 1,
        login: 'test',
    }
    //2 action
    let action = authMe(data);
    let newState = authReducer(initialState,action);

    //3 expect
    expect(newState).toStrictEqual({
        isAuth: true,
        email: 'test',
        id: 1,
        login: 'test',
        captchaUrl: null
    });
});

test('login; isAuth should be true', () => {
    //1 state

    //2 action
    let action = login();
    let newState = authReducer(initialState,action);

    //3 expect
    expect(newState.isAuth).toBe(true);
});

test('logout; isAuth should be false', () => {
    //1 state

    //2 action
    let action = logout();
    let newState = authReducer(initialState,action);

    //3 expect
    expect(newState.isAuth).toBe(false);
});

test('setCaptchaUrl; state.captchaUrl should content url string', () => {
    //1 data
    let url = 'test url string'

    //2 action
    let action = setCaptchaUrl(url);
    let newState = authReducer(initialState,action);

    //3 expect
    expect(newState.captchaUrl).toBe('test url string');
});