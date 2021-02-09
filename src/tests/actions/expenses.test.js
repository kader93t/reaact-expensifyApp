import { addExpense, editeExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense} from "../../actions/expneses"
import moment from "moment";
import thunk from 'redux-thunk';
import configureStore from "redux-mock-store";
import { database } from "../../firebase/config";
import { expenses } from "../fixture/expenses";

const mockStore = configureStore([thunk]);
let expensesData = {};
beforeEach((done) => {
    expenses.forEach(({ id, description, note, amount, createAt }) => {
        expensesData[id] = { description, note, amount, createAt };
    });
    database.ref("expenses").set(expensesData).then(() => {
        done();
    });
});

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

// Set expenses 

test('should set expenses ', () => {
    const action = setExpenses(expenses[1]);
    const expectedAction = {
        type: "SET_EXPENSES",
        expenses: expenses[1]
    };
    expect(action).toEqual(expectedAction);
}
);

test('should add the expenses from the database ', () => {
    
    const store = mockStore();

    return store.dispatch(startSetExpenses()).then(() => {
        
        return database.ref("expenses").once("value", (snapshot) => {
            let expenses = [];
            snapshot.forEach(expense => {
                expenses.push({
                    ...expense.val(),
                    id: expense.key
                });
            });
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "SET_EXPENSES",
                expenses
            });
        })
    });
});

test('should Remove the document with the given id', () => {
    const store = mockStore();
    const id = expenses[0].id;
    return store.dispatch(startRemoveExpense(id))
        .then(() => {
            return database.ref(`expenses`).once("value", (snapshot) => {
                const result = snapshot.val().filter(expense => {
                    return expense.id === id;
                });
                expect(store.getActions()[0]).toEqual({
                    type: "REMOVE_EXPENSE",
                    id:id
                });
                expect(result).toEqual([]);
            });
        });
    
});

test('should do nothing with the given id that doesnt exist', () => {
    const store = mockStore();
    const id = "15wddf";
    return database.ref("expenses").once("value", (beforRemove) => {
        return store.dispatch(startRemoveExpense(id))
            .then(() => {
                return database.ref("expenses").once("value", (afterRemove) => {
                    expect(store.getActions()[0]).toEqual({
                        type: "REMOVE_EXPENSE",
                        id: id
                    });
                    expect(beforRemove.val()).toEqual(afterRemove.val());
                })
            });
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



