import appReducer, {initialize} from "../../store/appReducer";

const initialState = {
    isInit: false
}

test('isInit should be true', () => {
    //state

    //action
    let action = initialize();
    let newState = appReducer(initialState,action);

    //expect
    expect(newState.isInit).toBe(true);
});