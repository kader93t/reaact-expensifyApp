import 'react-dates/initialize';
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from "./router/AppRouter"
import storeConfiguration from "./store/store"
import { addExpense } from "./actions/expneses"
import "normalize.css/normalize.css"
import './style/style.scss'
import 'react-dates/lib/css/_datepicker.css';
import "./firebase/config"
const store = storeConfiguration();
store.dispatch(addExpense({ description: "water bill", note: "from react", amount: 300, createAt: 1025 }));
store.dispatch(addExpense({ description: "gas bill", note: "from react", amount: 150, createAt: 120 }));
store.dispatch(addExpense({ description: "gas bill", note: "from react", amount: 104, createAt: 135 }));
store.dispatch(addExpense({ description: "gas bill", note: "from react", amount: 104, createAt: 150 }));

// const state = store.getState();

// console.log(getVisibleExpenses(state.expenses, state.filter));
const Jsx = () => (
    <Provider store= {store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(<Jsx />, document.getElementById("appRoot")); 