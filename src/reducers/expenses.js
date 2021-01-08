// Expenses Reducer

const expenseDefaultState = [];
export default (state = expenseDefaultState, action) => {
    
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


