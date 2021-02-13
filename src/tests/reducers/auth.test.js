import authReducer from "../../reducers/auth";

test('should return the login state', () => {
    const state = authReducer({},{
        type: "LOGIN",
        id: 3
    });
    expect(state).toEqual({
        uid: 3
    });
});

test('should return the logout state', () => {
    const state = authReducer({uid:33},{
        type: "LOGOUT"
    });
    expect(state).toEqual({});
});

test('should return the default state', () => {
    const state = authReducer({uid: 3}, {type: ""});
    expect(state).toEqual({uid: 3});
});