import {
    login,
    logout,
    startLogin,
    startLogOut
} from "../../actions/auth";


test('should run the login action', () => {
    const action = login(3);
    expect(action).toEqual({
        type: "LOGIN",
        id: 3
    });
});

test('should run the logout action', () => {
    const action = logout();
    expect(action).toEqual({
        type: "LOGOUT"
    });
});

