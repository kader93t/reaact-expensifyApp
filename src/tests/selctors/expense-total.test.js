import { expenseSummary } from "./../../selectors/expense-total";
import { expenses } from "./../fixture/expenses";

test('should summarize correctly multiple expenses ', () => {
    const [numberOfExpense, total] = expenseSummary(expenses);
    expect(numberOfExpense).toBe(3);
    expect(total).toBe(3 * 2.12);
});
test('should return 0 ', () => {
    const [numberOfExpense, total] = expenseSummary([]);
    expect(numberOfExpense).toBe(0);
    expect(total).toBe(0);
});

test('should summarize single expense', () => {
    const [numberOfExpense, total] = expenseSummary([expenses[0]]);
    expect(numberOfExpense).toBe(1);
    expect(total).toBe(2.12);
});
