import filterReducer from "./../../reducers/filter"
import moment from "moment"

const filterState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
    focusedInput: undefined
}

test("should set the text filter ", () => {
    const result = filterReducer(filterState,{ type: "SET_TEXT", text: "amount" });
    expect(result).toEqual({
            ...filterState,
            text: "amount"
        });
});

test("should set sortBy amount", () => {
    const state = filterReducer(undefined,{
        type: "SORT_BY",
        sortBy: { sortBy: "amount"}
    });

    expect(state).toEqual({
        ...filterState,
        sortBy:  "amount" 
    });
})

test("should set start date", () => {
    
    const state = filterReducer(undefined, {
        type: "SET_START_DATE",
        startDate: moment(0)
    });

    expect(state).toEqual({
        ...filterState,
        startDate: moment(0)
    });
})

test("should set end date ", () => {
    const state = filterReducer(undefined, {
        type: "SET_END_DATE",
        endDate: moment(2)
    });
    expect(state).toEqual({
        ...filterState,
        endDate: moment(2)
    });
});

