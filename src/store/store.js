import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import expenseReducer from "./../reducers/expenses"
import filterReducer from "./../reducers/filter"
import authReducer from "./../reducers/auth"
import thunk from "redux-thunk";

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers(
        {
            expenses: expenseReducer,
            filter: filterReducer,
            auth: authReducer
        }
    ), composeEnhancers(
        applyMiddleware(thunk)
      ));
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}
