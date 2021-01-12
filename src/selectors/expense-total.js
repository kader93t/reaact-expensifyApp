
export const expenseSummary = (expenses = []) => {
    const numberOfExpense = expenses.length;   
    
    const total = expenses.map(expense => expense.amount)
        .reduce((acc, value) => acc + value, 0);
    
    return [numberOfExpense, total];
}