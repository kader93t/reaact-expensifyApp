import selectExpenses from "./../../selectors/expenses";
import moment from "moment";
const expenses = [
    {
        description: "water bill",
        note: "from react",
        amount: 300,
        createAt: moment(0).subtract(3, "day")
    },
    {
        description: "gas bill",
        note: "from js",
        amount: 120,
        createAt: moment(0).add(3, "day")
    },
    {
        description: "water",
        note: "from reactjs",
        amount: 240,
        createAt: moment(0)
    }
]

test('should get the object with text = "bill', () => {
    const result = selectExpenses(expenses, { text: "bill" });
    expect(result).toEqual([expenses[0],expenses[1]]);
});

test("should get objects after or equal moment(0) ", () => {
    const result = selectExpenses(expenses, { startDate: moment(0) });
    expect(result).toEqual([expenses[1],expenses[2]]);
});

test("should get objects befor or equal moment(0) ", () => {
    const result = selectExpenses(expenses,{endDate:moment(0)});
    expect(result).toEqual([expenses[0],expenses[2]]);
})

test("should sort by amount ", () => {
    const result = selectExpenses(expenses, { sortBy: "amount" });
    expect(result).toEqual([expenses[0],expenses[2],expenses[1]]);
})

test("should sort by date ", () => {
    const result = selectExpenses(expenses, { sortBy: "date" });
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
})