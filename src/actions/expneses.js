import { v4 as uuid } from "uuid"
import { database } from "../firebase/config";
// Add Expense Action
export const addExpense = ({id ="", description = "", note = "", amount = 0, createAt = 0 } = {}) => {
    return {
        type: "ADD_EXPENSE",
        expenses: {
            description,
            note,
            amount,
            createAt,
            id: id || uuid()
        }
    }
}

export const startAddExpense = (expense = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }))
            })
    }
};

// Remove Expense Action
export const removeExpense = (id) => {
    return {
        type: "REMOVE_EXPENSE",
        id:id
    }
    }
;

export const startRemoveExpense = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`)
            .remove()
            .then(() => {
                dispatch(removeExpense(id));
            });       
    };
}

// Edite Expense Action
export const editeExpense = (id, updates) => {
    return {
        type: "UPDATE_EXPENSE",
        id,
        updates
    }
}

export const startEditeExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`)
            .update(updates)
            .then(() => {
                dispatch(editeExpense(id, updates));
        })
    }
}

// get the expenses from database to the store
export const setExpenses = (expenses) => {
    return {
        type: "SET_EXPENSES",
        expenses: expenses
    };
};

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once("value", (snapshot) => {
            const expenseData = [];
            snapshot.forEach(expense => {
                expenseData.push({
                    ...expense.val(),
                    id: expense.key
                })
            });
            dispatch(setExpenses(expenseData));
        });
    }; 
};