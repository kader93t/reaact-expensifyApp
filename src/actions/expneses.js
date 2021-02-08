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
    return (dispatch) => {
        return database.ref("expenses").push(expense)
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
    {return {
        type: "REMOVE_EXPENSE",
        id:id
    }
    }
};

// Edite Expense Action
export const editeExpense = (id, updates) => {
    return {
        type: "UPDATE_EXPENSE",
        id,
        updates
    }
}
