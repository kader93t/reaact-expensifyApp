import 'react-dates/initialize';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from "./router/AppRouter";
import storeConfiguration from "./store/store";
import { startSetExpenses } from "./actions/expneses";
import { login, logout } from "./actions/auth";
import LoadingPage from "./components/LodingPage";
import "normalize.css/normalize.css";
import './style/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import "./firebase/config";
import { firebase } from "./firebase/config";

const store = storeConfiguration();
// const state = store.getState();

// console.log(getVisibleExpenses(state.expenses, state.filter));
const Jsx = () => (
    <Provider store= {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById("appRoot"));

let isRendered = false;
const renderThePage = () => {
    if (!isRendered) {
      ReactDOM.render(<Jsx />, document.getElementById("appRoot"))
      isRendered = true;        
    }
    console.log("innnnnn");
}

firebase.default.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("hhhhh")
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderThePage()
            if (history.location.pathname === "/") {
                history.push("/dashboard");
            }
        });
    } else {
        store.dispatch(logout())
        console.log("else");
        renderThePage();
        history.push("/");
    }
});
