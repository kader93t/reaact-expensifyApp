import 'react-dates/initialize';
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider , connect} from 'react-redux'
import AppRouter from "./router/AppRouter"
import storeConfiguration from "./store/store"
import { startSetExpenses } from "./actions/expneses"
import "normalize.css/normalize.css"
import './style/style.scss'
import 'react-dates/lib/css/_datepicker.css';
import "./firebase/config"
const store = storeConfiguration();
// const state = store.getState();

// console.log(getVisibleExpenses(state.expenses, state.filter));
const Jsx = () => (
    <Provider store= {store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(<h3> Loading ...</h3>, document.getElementById("appRoot"));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(<Jsx />, document.getElementById("appRoot"))
});
