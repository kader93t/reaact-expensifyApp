
export default (expenses, { startDate, endDate, text, sortBy }) => {
    const visibleExpenses = expenses.filter((expense) => {
        const matchStartDate = !startDate || startDate.isSameOrBefore(expense.createAt, "day");
        const matchEndDate = !endDate || endDate.isSameOrAfter(expense.createAt, "day");
        const matchText = !text || expense.description.toLowerCase().includes(text.toLowerCase());
        return matchEndDate && matchStartDate && matchText;
    });
    return visibleExpenses.sort((a, b) => {
        if (sortBy === "date")
            return a.createAt < b.createAt ? 1 : -1;
        else if (sortBy === "amount")
            return a.amount < b.amount ? 1 : -1;
    });
};
