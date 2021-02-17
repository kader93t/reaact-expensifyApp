import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  githubAuthProvider
} from "../firebase/config";

export const login = (id) => {
  return {
    type: "LOGIN",
    id,
  };
};
export const startLogin = (provider) => {
  return () => {
    switch (provider) {
      case "google":
        return firebase.default.auth().signInWithPopup(googleAuthProvider);
      case "facebook":
        return firebase.default.auth().signInWithPopup(facebookAuthProvider);
      case "github":
        return firebase.default.auth().signInWithPopup(githubAuthProvider);
      default:
        return undefined;
    }
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const startLogOut = () => {
  return () => {
    return firebase.default.auth().signOut();
  };
};
