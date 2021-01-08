import expenseReducer from "./../../reducers/expenses"
const expense = {
    id: 1,
    description: "expense",
    amount: 222,
    createAt: 231,
    note: "note"
};

test("should Add expneses ", () => {
    const state = expenseReducer(undefined, {
        type: "ADD_EXPENSE",
        expenses: expense
    });
    expect(state).toEqual([expense]);
});

test("should Remove expenses ", () => {
    const state = expenseReducer([expense], {
        type: "REMOVE_EXPENSE",
        id:1
    })
    expect(state).toEqual([]);
})

test("should not Remove expenses ", () => {
    const state = expenseReducer([expense], {
        type: "REMOVE_EXPENSE",
        id:2
    })
    expect(state).toEqual([expense]);
})


test("should edit expense ", () => {
    const updates = {
        description: "holla",
        amount: 99,
        note: "here"
    };

    const state = expenseReducer([expense], {
        type: "UPDATE_EXPENSE",
        id: 1,
        updates: updates
    });

    expect(state).toEqual([{
        ...expense,
        ...updates
    }]);

});

test("should edit do nothing ", () => {
    const updates = {
        description: "holla",
        amount: 99,
        note: "here"
    };

    const state = expenseReducer([expense], {
        type: "UPDATE_EXPENSE",
        id: 2,
        updates: updates
    });
    expect(state).toEqual([expense]);
});