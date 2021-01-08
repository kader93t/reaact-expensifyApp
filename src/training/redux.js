import { createStore } from "redux";

const increamentByAction = ({ increamentBy = 1 } = {}) => {
    return {
        type: 'INCREAMENT',
        increamentBy
    }
}
const decreamentByAction = ({ decreamentBy = 1 } = {}) => {
    return {
        type: "DECREAMENT",
        decreamentBy
    }
}


const setAction = (({ set = 0}={}) => {
    return {
        type: "SET",
        set
    }
});

const resetAction = (() => { 
    return {
        type : "RESET",
        
    }
});

const countReducer = (state = { "count": 0 }, action) => {
    switch (action.type) {
        case "INCREAMENT":
            return {
                count: state.count + action.increamentBy
            };
        case "DECREAMENT":
            return {
                count: state.count - action.decreamentBy
            }
        case "RESET":
            return {
                count: 0
            }
        case "SET":
            {
                return {
                    count: action.set
                }
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);


const unsubscibe = store.subscribe(() => {
    console.log(store.getState())
});
store.dispatch(increamentByAction());
store.dispatch(increamentByAction());

store.dispatch(decreamentByAction());

store.dispatch(decreamentByAction({decreamentBy:3}));


store.dispatch(decreamentByAction());

store.dispatch(setAction({ set: 13 }));

store.dispatch(resetAction());
