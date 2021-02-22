import profilePageReducer, {setPhotos, setProfile, setProfileEditStatus, setStatus} from "../../store/profilePageReducer";

const initialState = {
    postsData: [],
    postsInputText: 'Write your post',
    // profile: {id: 14402},
    profile: {},
    status: '',
    profileEditStatus: false
}

test('setProfile; profile should content test values', () => {
    //state
    let profile = {
        aboutMe: "test",
        contacts: {
            facebook: "test",
            website: "test",
            vk: "test",
            twitter: "test",
            instagram: "test",
            youtube: "test",
            github: "test",
            mainLink: "test"
        },
        lookingForAJob: true,
        lookingForAJobDescription: "test",
        fullName: "test",
        userId: 1,
        photos: {
            small: "test",
            large: "test"
        }
    }
    //action
    let action = setProfile(profile);
    let newState = profilePageReducer(initialState, action);

    //expect
    expect(newState.profile).toStrictEqual(profile);
});

test('setStatus; status should content test value', () => {
    //state
    let status = 'test';
    //action
    let action = setStatus(status);
    let newState = profilePageReducer(initialState, action);

    //expect
    expect(newState.status).toBe(status);
});

test('setPhotos; photos should content test photos url', () => {
    //state
    let photos = {
        small: 'test',
        large: 'test'
    };
    //action
    let action = setPhotos(photos);
    let newState = profilePageReducer(initialState, action);

    //expect
    expect(newState.profile.photos).toStrictEqual(photos);
});

test('setProfileEditStatus; ProfileEditStatus should be true', () => {
    //state

    //action
    let action = setProfileEditStatus(true);
    let newState = profilePageReducer(initialState, action);

    //expect
    expect(newState.profileEditStatus).toBe(true);
});