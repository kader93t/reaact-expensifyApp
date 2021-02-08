import { addExpense, editeExpense, removeExpense, startAddExpense } from "../../actions/expneses"
import moment from "moment";
import thunk from 'redux-thunk';
import configureStore from "redux-mock-store";
import { database } from "../../firebase/config";
const mockStore = configureStore([thunk]);

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

test('should add the expense with given value to the database', () => {
    const expense = {
        description: "test_description",
        note: "test_note",
        amount: 123,
        createAt: 1234,
    };
    const store = mockStore();
    return store.dispatch(startAddExpense(expense))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "ADD_EXPENSE",
                expenses: {
                   
                    id: expect.any(String),
                    ...expense
                }
                 
            });
            return database.ref(`expenses/${actions[0].expenses.id}`)
                .once("value")
                .then((snapshot) => {
                    expect({
                        ...snapshot.val(),
                        id: actions[0].expenses.id
                    })
                        .toEqual(actions[0].expenses);
                })
        });
});

test('should add the default value to the database ', () => {
    const expense = {
        description: "",
        note: "",
        amount: 0,
        createAt: 0
    };

    const store = mockStore();
    return store.dispatch(startAddExpense(expense))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "ADD_EXPENSE",
                expenses: {
                   
                    id: expect.any(String),
                    ...expense
                }
                 
            });
            return database.ref(`expenses/${actions[0].expenses.id}`)
                .once("value")
                .then((snapshot) => {
                    expect({
                        ...snapshot.val(),
                        id: actions[0].expenses.id
                    })
                        .toEqual(actions[0].expenses);
                })
        }); 
});



