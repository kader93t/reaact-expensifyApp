import { addExpense, editeExpense, removeExpense } from "../../actions/expneses"
import moment from "moment";
//Test Add Expense :
test('should add expense with provided value', () => {
    const result = addExpense({
        description: "hello",
        note: "yesterday",
        amount: 2.12,
        createAt: moment(123456789)
    })
    expect(result).toEqual({
        type: "ADD_EXPENSE",
        expenses: {
            description: "hello",
            note: "yesterday",
            amount: 2.12,
            createAt: moment(123456789),
            id: expect.any(String)
        }
    });
});

test("should add expense with default value", () => {
    expect(addExpense()).toEqual(
        {
            type: "ADD_EXPENSE",
            expenses: {
                description :"",
                note: "",
                amount: 0,
                createAt: 0,
                id: expect.any(String)
            }
            
        }
    )
});

//test Remove Expnese :

test('should remove expense', () => {
    const result = removeExpense(123);
    expect(result).toEqual({
        type: "REMOVE_EXPENSE",
        id: 123
    });
})

//test Edite Expnese : 

test('should Edite Expense', () => {
    const result = editeExpense(123, {
        description: "hoola",
        amount: 123,
        note: " it's a test ",
        createAt: moment(1234567890)
    });

    expect(result).toEqual({
        type: "UPDATE_EXPENSE",
        id: 123,
        updates: {    
            description: "hoola",
            amount: 123,
            note: " it's a test ",
            createAt: moment(1234567890)
    }
    });
});


