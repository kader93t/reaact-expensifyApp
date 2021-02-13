import { firebase, googleAuthProvider } from "../firebase/config";

export const login = (id) => {
    return {
        type: "LOGIN",
        id
    }
}
export const startLogin = () => {
    return () => {
        return firebase.default.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}

export const startLogOut = () => {
    return () => {
        return firebase.default.auth().signOut();
    }
}