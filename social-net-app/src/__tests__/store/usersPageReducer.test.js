import usersPageReducer, {
    follow,
    getUsers,
    setCurrentPage,
    setFetching, setFollowFetching,
    setPageList,
    unfollow, unsetFollowFetching
} from "../../store/usersPageReducer";


let initialState = {
    usersData: [
        {id: 0, content: 'test'},
        {id: 1, content: 'test'},
        {id: 2, content: 'test'},
        {id: 3, content: 'test'},
        {id: 4, content: 'test'}
    ],
    subscriptionsList: [],
    count: 0,
    currentPage: 1,
    pageList: [1, 2, 3, 4, 5],
    isFetching: false,
    isFollowFetching: false,
    followFetchState: [1,11,21]
}

test('getUsers; state should content userData and count', () => {
    //state
    let data = {
        items: [
            {id: 0, content: 'test'},
            {id: 1, content: 'test'},
            {id: 2, content: 'test'},
            {id: 3, content: 'test'},
            {id: 4, content: 'test'}
        ],
        totalCount: 5
    }
    let expexted = {
        usersData: [
            {id: 0, content: 'test'},
            {id: 1, content: 'test'},
            {id: 2, content: 'test'},
            {id: 3, content: 'test'},
            {id: 4, content: 'test'}
        ],
        count: 5
    }
    //action
    let action = getUsers(data);
    let newState = usersPageReducer(initialState, action);

    //expect
    expect(newState).toEqual(
        expect.objectContaining(expexted),
    );
});

test('follow; usersData item should content followed: true', () => {
    //state
    let userId = 1

    //action
    let action = follow(userId);
    let newState = usersPageReducer(initialState, action);

    //expect
    expect(newState.usersData).toEqual(
        expect.arrayContaining([{id: 1, followed: true, content: 'test'}]),
    );
});

test('unfollow; usersData item should content followed: false', () => {
    //state
    let userId = 1

    //action
    let action = unfollow(userId);
    let newState = usersPageReducer(initialState, action);

    //expect
    expect(newState.usersData).toEqual(
        expect.arrayContaining([{id: 1, content: 'test', followed: false}]),
    );
});

test('setCurrentPage; state should content userData, currentPage, pageList and isFetching: false', () => {
    //state
    let page = 1
    let users = [
        {id: 10, content: 'test'},
        {id: 11, content: 'test'},
        {id: 12, content: 'test'},
        {id: 13, content: 'test'},
        {id: 14, content: 'test'}
    ]
    let pageList= [1,2,3,4,5]
    let expexted = {
        usersData: users,
        currentPage: page,
        pageList: pageList,
        isFetching: false
    }
    //action
    let action = setCurrentPage(page, users, pageList);
    let newState = usersPageReducer(initialState, action);

    //expect
    expect(newState).toEqual(
        expect.objectContaining(expexted),
    );
});

test('setPageList; state should content userData, currentPage, pageList and isFetching: false', () => {
    //state

    let pageList= [1,2,3,4,5]

    let expexted = {
        pageList: pageList
    }
    //action
    let action = setPageList(pageList);
    let newState = usersPageReducer(initialState, action);

    //expect
    expect(newState).toEqual(
        expect.objectContaining(expexted),
    );
});

test('setFetching; state should content isFetching: false or true', () => {
    //state

    //action
    let action = setFetching(true);
    let newState = usersPageReducer(initialState, action);

    //expect
    expect(newState.isFetching).toBe(true);
});

test('setFollowFetching; setFollowFetching should content old values + new values', () => {
    //state

    //action
    let action = setFollowFetching(2);
    let newState = usersPageReducer(initialState, action);

    //expect
    expect(newState.followFetchState).toEqual([1, 11,21,2]);
});

test('unsetFollowFetching; setFollowFetching should content values without passed id', () => {
    //state

    //action
    let action = unsetFollowFetching(1);
    let newState = usersPageReducer(initialState, action);

    //expect
    expect(newState.followFetchState).toEqual([11,21]);
});
