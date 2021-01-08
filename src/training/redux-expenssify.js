import {createStore, combineReducers} from "redux" 
import {v4 as uuid} from "uuid"
const demoState = {
    expenses: [{
        id: 'poin',
        description: "janury Rent",
        note: "this was the final payment for that adress",
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined,
    }
};


//Actions 
// Add Expense Action 
const addExpense = ({description="", note = "", amount=0,createAt= 0 }= {}) => {
    return {
        type: "ADD_EXPENSE",
        expenses: {
            description,
            note,
            amount,
            createAt,
            id:uuid()
        }
    }
}
// Remove Expense Action
const removeExpense = (id) => {
    {return {
        type: "REMOVE_EXPENSE",
        id:id
    }
    }
};

// Edite Expense Action
const editeExpense = (id, updates) => {
    return {
        type: "UPDATE_EXPENSE",
        id,
        updates
    }
}

// setFilter Action 

const setTextFilter = (text = "") => {
    return {
        type: "SET_TEXT",
        text
    }
}

const setSortByDate = () => {
    return {
        type: "SORT_BY",
        sortBy: { sortBy: "date" }
    }
}

const setSortByAmount = () => {
    return {
        type: "SORT_BY",
        sortBy: { sortBy: "amount" }
    }
}

const setStartDate = (startDate) => {
    return {
        type: "SET_START_DATE", 
        startDate
    }
}

const setEndDate = (endDate) => {
    return {
        type: "SET_END_DATE",
        endDate
    }
}

const getVisibleExpense = (expenses, { startDate, endDate, text, sortBy }) => {
    const visibleExpenses = expenses.filter((expense) => {
        const matchStartDate = typeof startDate !== "number" || startDate <= expense.createAt;
        const matchEndDate = typeof endDate !== "number" || endDate >= expense.createAt;
        const matchText = expense.description.toLowerCase().includes(text.toLowerCase());
        return matchEndDate && matchStartDate && matchText;
    });
    return visibleExpenses.sort((a, b) => {
        if (sortBy === "date")
            return a.createAt < b.createAt ? 1 : -1;
        else return a.amount < b.amount ? 1 : -1;
    })
}

// Expenses Reducer
const expenseDefaultState = [];
const expenseReducer = (state = expenseDefaultState, action) => {
    
    switch (action.type) {
        case "ADD_EXPENSE":
            return [       
                ...state, action.expenses
            ]
        case "REMOVE_EXPENSE":
            return state.filter((expense) => {
                return expense.id !== action.id;
            })
        case "UPDATE_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
            ;
        default:
            return state;
    }
}

// Filter Reducer
const filterDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT":
            return {
                ...state,
                text:action.text
            }
        case "SORT_BY":
            return {
                ...state,
                ...action.sortBy
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

const store = createStore(combineReducers(
    {
        expenses: expenseReducer,
        filter: filterReducer
    }
))

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpense(state.expenses, state.filter);
    console.log(visibleExpenses);
});

 const expense1 = store.dispatch(addExpense({ description: "this is my first redux", amount: 130, createAt:127}));
const expense2 = store.dispatch(addExpense({ description: "this is my seconde redux", amount: 127, createAt: 130 }));
 
// store.dispatch(removeExpense(expense1.expenses.id));
// store.dispatch(editeExpense(expense2.expenses.id, { amount: 190 }));
// store.dispatch(setTextFilter())
// store.dispatch(setTextFilter("seconde"))
// store.dispatch(setSortByAmount());
// store.dispatch(setSortByDate());
//console.log(typeof 12 === "number")
store.dispatch(setStartDate(125));
store.dispatch(setEndDate(138));
store.dispatch(setSortByDate());
store.dispatch(setSortByAmount());
