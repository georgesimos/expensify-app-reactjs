import authReducers from '../../reducers/auth';

test('should set uid for Login', () => {
    const action = {
      type: 'LOGIN',
      uid: 'abc123'
    };
    const state = authReducers({}, action);
    expect(state.uid).toEqual(action.uid);
});

test('should clear uid for Logout', () => {
    const action = {
      type: 'LOGOUT'
    };
    const state = authReducers({ uid: 'anything'}, action);
    expect(state).toEqual({});
});