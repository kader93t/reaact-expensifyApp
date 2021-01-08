import { v4 as uuid } from "uuid"

// Add Expense Action
export const addExpense = ({ description = "", note = "", amount = 0, createAt = 0 } = {}) => {
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
